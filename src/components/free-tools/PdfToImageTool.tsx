import { useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileImage, Trash2, PackageOpen, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FileDropZone from './FileDropZone';
import { useFileConversion } from './useFileConversion';

// Use Vite's built-in worker handling
import PdfWorker from 'pdfjs-dist/build/pdf.worker.min.js?worker';
pdfjsLib.GlobalWorkerOptions.workerPort = new PdfWorker();

type OutputFormat = 'png' | 'jpeg';

interface PageImage {
  pageNum: number;
  dataUrl: string;
  blob: Blob;
}

const PdfToImageTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<OutputFormat>('png');
  const [scale, setScale] = useState<string>('2');
  const [pageImages, setPageImages] = useState<PageImage[]>([]);
  const { status, progress, setProgress, startProcessing, setDone, setError, reset } =
    useFileConversion();

  const handleFileSelected = useCallback((files: File[]) => {
    setFile(files[0]);
    setPageImages([]);
    reset();
  }, [reset]);

  const handleConvert = useCallback(async () => {
    if (!file) return;

    startProcessing();
    setPageImages([]);

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
      const images: PageImage[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: parseFloat(scale) });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d')!;

        await page.render({ canvasContext: ctx, viewport }).promise;

        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        const quality = format === 'jpeg' ? 0.92 : undefined;
        const dataUrl = canvas.toDataURL(mimeType, quality);

        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob(
            (b) => resolve(b!),
            mimeType,
            quality
          );
        });

        images.push({ pageNum: i, dataUrl, blob });
        setProgress(Math.round((i / totalPages) * 100));
      }

      setPageImages(images);
      setDone();
      toast.success(`Successfully converted ${totalPages} page${totalPages > 1 ? 's' : ''} to ${format.toUpperCase()}!`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('PDF to Image conversion error:', message, err);
      setError(`Failed to convert PDF: ${message}`);
      toast.error('Conversion failed', {
        description: message,
      });
    }
  }, [file, format, scale, startProcessing, setProgress, setDone, setError]);

  const handleDownloadSingle = useCallback((img: PageImage) => {
    const ext = format === 'png' ? 'png' : 'jpg';
    const baseName = file?.name.replace(/\.pdf$/i, '') || 'page';
    saveAs(img.blob, `${baseName}_page${img.pageNum}.${ext}`);
  }, [format, file]);

  const handleDownloadAll = useCallback(async () => {
    if (pageImages.length === 0) return;

    if (pageImages.length === 1) {
      handleDownloadSingle(pageImages[0]);
      return;
    }

    const zip = new JSZip();
    const ext = format === 'png' ? 'png' : 'jpg';
    const baseName = file?.name.replace(/\.pdf$/i, '') || 'pages';

    pageImages.forEach((img) => {
      zip.file(`${baseName}_page${img.pageNum}.${ext}`, img.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, `${baseName}_images.zip`);
    toast.success('ZIP downloaded successfully!');
  }, [pageImages, format, file, handleDownloadSingle]);

  const handleReset = useCallback(() => {
    setFile(null);
    setPageImages([]);
    reset();
  }, [reset]);

  return (
    <div className="space-y-6">
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
            {/* File info + controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-muted/50 dark:bg-muted/20 border border-border">
              <FileImage className="w-8 h-8 text-secondary shrink-0" />
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

            {/* Options */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium text-foreground">Output Format</label>
                <Select value={format} onValueChange={(v) => setFormat(v as OutputFormat)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">PNG (Lossless)</SelectItem>
                    <SelectItem value="jpeg">JPG (Smaller size)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium text-foreground">Quality / Scale</label>
                <Select value={scale} onValueChange={setScale}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1x (Fast, lower quality)</SelectItem>
                    <SelectItem value="2">2x (Recommended)</SelectItem>
                    <SelectItem value="3">3x (High quality, slower)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                    <ImageIcon className="w-5 h-5" />
                  </motion.div>
                  Converting...
                </>
              ) : (
                <>
                  <ImageIcon className="w-5 h-5" />
                  Convert to {format.toUpperCase()}
                </>
              )}
            </Button>

            {/* Progress */}
            {status === 'processing' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-2"
              >
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-center text-muted-foreground">
                  Converting... {progress}%
                </p>
              </motion.div>
            )}

            {/* Results */}
            {pageImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">
                    {pageImages.length} Page{pageImages.length > 1 ? 's' : ''} Converted
                  </p>
                  {pageImages.length > 1 ? (
                    <Button variant="outline" size="sm" onClick={handleDownloadAll}>
                      <PackageOpen className="w-4 h-4 mr-1" />
                      Download All (ZIP)
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => handleDownloadSingle(pageImages[0])}>
                      <Download className="w-4 h-4 mr-1" />
                      Download Image
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {pageImages.map((img) => (
                    <motion.div
                      key={img.pageNum}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: img.pageNum * 0.05 }}
                      className="group relative rounded-lg overflow-hidden border border-border bg-card"
                    >
                      <img
                        src={img.dataUrl}
                        alt={`Page ${img.pageNum}`}
                        className="w-full h-auto object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleDownloadSingle(img)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Page {img.pageNum}
                        </Button>
                      </div>
                      <div className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
                        P{img.pageNum}
                      </div>
                    </motion.div>
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

export default PdfToImageTool;
