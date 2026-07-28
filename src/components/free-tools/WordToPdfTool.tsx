import { useState, useCallback, useRef } from 'react';
import mammoth from 'mammoth';
import { jsPDF } from 'jspdf';
import { motion, AnimatePresence } from 'framer-motion';
import { FileOutput, Trash2, Download, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { saveAs } from 'file-saver';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import FileDropZone from './FileDropZone';
import { useFileConversion } from './useFileConversion';

const WordToPdfTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const { status, progress, setProgress, startProcessing, setDone, setError, reset } =
    useFileConversion();

  const handleFileSelected = useCallback(
    (files: File[]) => {
      setFile(files[0]);
      setHtmlContent('');
      setShowPreview(false);
      reset();
    },
    [reset]
  );

  const handleConvert = useCallback(async () => {
    if (!file) return;

    startProcessing();
    setHtmlContent('');

    try {
      const arrayBuffer = await file.arrayBuffer();
      setProgress(20);

      // Convert docx to HTML using mammoth
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const html = result.value;
      setHtmlContent(html);
      setShowPreview(true);
      setProgress(50);

      if (result.messages.length > 0) {
        console.warn('Mammoth warnings:', result.messages);
      }

      // Extract plain text for PDF generation
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Build PDF using jspdf with text wrapping
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const usableWidth = pageWidth - margin * 2;
      const lineHeight = 7;
      let cursorY = margin;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);

      setProgress(60);

      // Walk through the DOM structure
      const elements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, blockquote, pre');
      const totalElements = elements.length;

      elements.forEach((el, idx) => {
        const tag = el.tagName.toLowerCase();
        const text = el.textContent?.trim() || '';
        if (!text) return;

        // Heading styles
        if (tag.startsWith('h')) {
          const level = parseInt(tag[1]);
          const sizes: Record<number, number> = { 1: 18, 2: 16, 3: 14, 4: 13, 5: 12, 6: 11 };
          pdf.setFontSize(sizes[level] || 11);
          pdf.setFont('helvetica', 'bold');
          cursorY += 4;
        } else if (tag === 'li') {
          pdf.setFontSize(11);
          pdf.setFont('helvetica', 'normal');
        } else {
          pdf.setFontSize(11);
          pdf.setFont('helvetica', 'normal');
        }

        const prefix = tag === 'li' ? '• ' : '';
        const lines = pdf.splitTextToSize(prefix + text, usableWidth);

        for (const line of lines) {
          if (cursorY + lineHeight > pageHeight - margin) {
            pdf.addPage();
            cursorY = margin;
          }
          pdf.text(line, margin, cursorY);
          cursorY += lineHeight;
        }

        // Extra spacing after headings and paragraphs
        cursorY += tag.startsWith('h') ? 3 : 1.5;

        setProgress(60 + Math.round(((idx + 1) / totalElements) * 30));
      });

      // If no structured elements found, fall back to raw text
      if (totalElements === 0) {
        const rawText = tempDiv.textContent || '';
        const lines = pdf.splitTextToSize(rawText, usableWidth);
        for (const line of lines) {
          if (cursorY + lineHeight > pageHeight - margin) {
            pdf.addPage();
            cursorY = margin;
          }
          pdf.text(line, margin, cursorY);
          cursorY += lineHeight;
        }
      }

      setProgress(95);

      const pdfBlob = pdf.output('blob');
      const baseName = file.name.replace(/\.docx?$/i, '');
      saveAs(pdfBlob, `${baseName}.pdf`);

      setDone();
      toast.success('PDF generated and downloaded!');
    } catch (err) {
      console.error('Word to PDF conversion error:', err);
      setError('Failed to convert Word document to PDF.');
      toast.error('Conversion failed', {
        description: 'Could not read the Word document.',
      });
    }
  }, [file, startProcessing, setProgress, setDone, setError]);

  const handleReset = useCallback(() => {
    setFile(null);
    setHtmlContent('');
    setShowPreview(false);
    reset();
  }, [reset]);

  return (
    <div className="space-y-6">
      {!file ? (
        <FileDropZone
          accept=".docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
          acceptLabel="Word (.docx, .doc)"
          maxSizeMB={50}
          onFilesSelected={handleFileSelected}
        />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="file-selected"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-5"
          >
            {/* File info */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 dark:bg-muted/20 border border-border">
              <FileOutput className="w-8 h-8 text-secondary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleReset}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Convert button */}
            <Button
              onClick={handleConvert}
              disabled={status === 'processing'}
              className="w-full bg-secondary hover:bg-teal-dark text-secondary-foreground font-semibold h-12 text-base"
            >
              {status === 'processing' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <FileOutput className="w-5 h-5" />
                  </motion.div>
                  Converting...
                </>
              ) : status === 'done' ? (
                <>
                  <Download className="w-5 h-5" />
                  Download Again
                </>
              ) : (
                <>
                  <FileOutput className="w-5 h-5" />
                  Convert to PDF
                </>
              )}
            </Button>

            {/* Progress */}
            {status === 'processing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-center text-muted-foreground">
                  Converting... {progress}%
                </p>
              </motion.div>
            )}

            {/* HTML Preview */}
            {htmlContent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>

                <AnimatePresence>
                  {showPreview && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        ref={previewRef}
                        className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar rounded-xl border border-border bg-white dark:bg-card p-6 prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default WordToPdfTool;
