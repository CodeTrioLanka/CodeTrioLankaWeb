import { useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Document, Packer, Paragraph, TextRun, PageBreak } from 'docx';
import { saveAs } from 'file-saver';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Trash2, Download, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import FileDropZone from './FileDropZone';
import { useFileConversion } from './useFileConversion';

// Disable worker — runs on main thread (avoids Vite worker-loading issues)
pdfjsLib.GlobalWorkerOptions.workerSrc = '';

interface ExtractedPage {
  pageNum: number;
  text: string;
}

const PdfToWordTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<ExtractedPage[]>([]);
  const { status, progress, setProgress, startProcessing, setDone, setError, reset } =
    useFileConversion();

  const handleFileSelected = useCallback(
    (files: File[]) => {
      setFile(files[0]);
      setPages([]);
      reset();
    },
    [reset]
  );

  const handleConvert = useCallback(async () => {
    if (!file) return;

    startProcessing();
    setPages([]);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({
        data: arrayBuffer,
        useWorkerFetch: false,
        isEvalSupported: false,
        useSystemFonts: true,
      });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;
      const extracted: ExtractedPage[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const strings = textContent.items
          .filter((item): item is { str: string } & Record<string, unknown> => 'str' in item)
          .map((item) => item.str);
        const text = strings.join(' ').replace(/\s+/g, ' ').trim();
        extracted.push({ pageNum: i, text });
        setProgress(Math.round((i / totalPages) * 70));
      }

      setPages(extracted);
      setProgress(80);

      // Build .docx
      const children = extracted.flatMap((p, idx) => {
        const paragraphs: Paragraph[] = [];

        // Page header
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `— Page ${p.pageNum} —`,
                bold: true,
                size: 24,
                color: '2E8B8B',
              }),
            ],
            spacing: { after: 200 },
          })
        );

        // Page text – split into actual paragraphs on double-newlines or periods
        const textBlocks = p.text
          .split(/(?:\.\s+)/)
          .filter((s) => s.trim().length > 0);

        textBlocks.forEach((block) => {
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: block.trim() + (block.trim().endsWith('.') ? '' : '.'),
                  size: 22,
                  font: 'Calibri',
                }),
              ],
              spacing: { after: 120 },
            })
          );
        });

        // Page break between pages (except the last)
        if (idx < extracted.length - 1) {
          paragraphs.push(
            new Paragraph({
              children: [new PageBreak()],
            })
          );
        }

        return paragraphs;
      });

      const doc = new Document({
        sections: [
          {
            children,
          },
        ],
      });

      setProgress(90);

      const blob = await Packer.toBlob(doc);
      const baseName = file.name.replace(/\.pdf$/i, '');
      saveAs(blob, `${baseName}.docx`);

      setDone();
      toast.success('Word document downloaded successfully!');
    } catch (err) {
      console.error('PDF to Word conversion error:', err);
      setError('Failed to convert PDF to Word.');
      toast.error('Conversion failed', {
        description: 'Could not extract text from the PDF.',
      });
    }
  }, [file, startProcessing, setProgress, setDone, setError]);

  const handleReset = useCallback(() => {
    setFile(null);
    setPages([]);
    reset();
  }, [reset]);

  return (
    <div className="space-y-6">
      {/* Limitation notice */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30">
        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-700 dark:text-amber-300">
          <p className="font-semibold">Text-Only Extraction</p>
          <p className="text-xs mt-1 opacity-80">
            This tool extracts text content from your PDF and generates a Word document.
            Complex layouts, images, and tables may not be preserved.
          </p>
        </div>
      </div>

      {!file ? (
        <FileDropZone
          accept=".pdf,application/pdf"
          acceptLabel="PDF"
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
              <FileText className="w-8 h-8 text-secondary shrink-0" />
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
                    <FileText className="w-5 h-5" />
                  </motion.div>
                  Extracting Text...
                </>
              ) : status === 'done' ? (
                <>
                  <Download className="w-5 h-5" />
                  Download Again
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Convert to Word (.docx)
                </>
              )}
            </Button>

            {/* Progress */}
            {status === 'processing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-center text-muted-foreground">Processing... {progress}%</p>
              </motion.div>
            )}

            {/* Text preview */}
            {pages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <p className="text-sm font-semibold text-foreground">
                  Extracted {pages.length} page{pages.length > 1 ? 's' : ''}
                </p>
                <div className="max-h-[300px] overflow-y-auto rounded-xl border border-border bg-card p-4 space-y-4">
                  {pages.map((p) => (
                    <div key={p.pageNum}>
                      <p className="text-xs font-bold text-secondary mb-1">Page {p.pageNum}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                        {p.text || '(No text content found on this page)'}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default PdfToWordTool;
