import { useState, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import { Reorder } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, Trash2, Download, GripVertical, X, Plus } from 'lucide-react';
import { toast } from 'sonner';
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

type PageSize = 'a4' | 'letter' | 'fit';

interface ImageItem {
  id: string;
  file: File;
  previewUrl: string;
  width: number;
  height: number;
}

const ImageToPdfTool = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [pageSize, setPageSize] = useState<PageSize>('a4');
  const { status, progress, setProgress, startProcessing, setDone, setError, reset } =
    useFileConversion();

  const loadImageDimensions = useCallback(
    (file: File): Promise<ImageItem> =>
      new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new window.Image();
        img.onload = () => {
          resolve({
            id: `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            file,
            previewUrl: url,
            width: img.naturalWidth,
            height: img.naturalHeight,
          });
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error(`Failed to load image: ${file.name}`));
        };
        img.src = url;
      }),
    []
  );

  const handleFilesSelected = useCallback(
    async (files: File[]) => {
      try {
        const items = await Promise.all(files.map(loadImageDimensions));
        setImages((prev) => [...prev, ...items]);
        reset();
        toast.success(`${files.length} image${files.length > 1 ? 's' : ''} added!`);
      } catch (err) {
        console.error(err);
        toast.error('Could not load one or more images.');
      }
    },
    [loadImageDimensions, reset]
  );

  const handleRemoveImage = useCallback((id: string) => {
    setImages((prev) => {
      const removed = prev.find((img) => img.id === id);
      if (removed) URL.revokeObjectURL(removed.previewUrl);
      return prev.filter((img) => img.id !== id);
    });
  }, []);

  const handleClearAll = useCallback(() => {
    images.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    setImages([]);
    reset();
  }, [images, reset]);

  const handleConvert = useCallback(async () => {
    if (images.length === 0) return;

    startProcessing();

    try {
      // Determine page dimensions (in mm)
      const pageDims: Record<PageSize, { w: number; h: number } | null> = {
        a4: { w: 210, h: 297 },
        letter: { w: 215.9, h: 279.4 },
        fit: null,
      };

      let pdf: jsPDF | null = null;

      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const imgData = await readFileAsDataUrl(img.file);

        if (pageSize === 'fit') {
          // Page sized to image (convert px to mm at 96 DPI)
          const pxToMm = 25.4 / 96;
          const w = img.width * pxToMm;
          const h = img.height * pxToMm;

          if (i === 0) {
            pdf = new jsPDF({
              orientation: w > h ? 'landscape' : 'portrait',
              unit: 'mm',
              format: [w, h],
            });
          } else {
            pdf!.addPage([w, h], w > h ? 'landscape' : 'portrait');
          }
          pdf!.addImage(imgData, 'JPEG', 0, 0, w, h);
        } else {
          const dims = pageDims[pageSize]!;

          if (i === 0) {
            pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: pageSize });
          } else {
            pdf!.addPage(pageSize, 'portrait');
          }

          // Fit image within page with margins
          const margin = 10;
          const usableW = dims.w - margin * 2;
          const usableH = dims.h - margin * 2;
          const ratio = Math.min(usableW / img.width, usableH / img.height);
          const drawW = img.width * ratio;
          const drawH = img.height * ratio;
          const offsetX = margin + (usableW - drawW) / 2;
          const offsetY = margin + (usableH - drawH) / 2;

          pdf!.addImage(imgData, 'JPEG', offsetX, offsetY, drawW, drawH);
        }

        setProgress(Math.round(((i + 1) / images.length) * 90));
      }

      setProgress(95);

      const pdfBlob = pdf!.output('blob');
      saveAs(pdfBlob, 'images_combined.pdf');

      setDone();
      toast.success('PDF created and downloaded!');
    } catch (err) {
      console.error('Image to PDF conversion error:', err);
      setError('Failed to create PDF from images.');
      toast.error('Conversion failed');
    }
  }, [images, pageSize, startProcessing, setProgress, setDone, setError]);

  return (
    <div className="space-y-6">
      {images.length === 0 ? (
        <FileDropZone
          accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
          acceptLabel="JPG, PNG, WEBP"
          maxSizeMB={20}
          multiple
          onFilesSelected={handleFilesSelected}
          disabled={status === 'processing'}
        />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="images-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground font-poppins">
                {images.length} Image{images.length > 1 ? 's' : ''} — Drag to reorder
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => document.getElementById('add-more-images')?.click()}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add More
                </Button>
                <input
                  id="add-more-images"
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      handleFilesSelected(Array.from(e.target.files));
                    }
                    e.target.value = '';
                  }}
                />
                <Button variant="ghost" size="sm" onClick={handleClearAll}>
                  <Trash2 className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
              </div>
            </div>

            {/* Reorderable image list */}
            <Reorder.Group
              axis="y"
              values={images}
              onReorder={setImages}
              className="space-y-2"
            >
              {images.map((img) => (
                <Reorder.Item
                  key={img.id}
                  value={img}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border cursor-grab active:cursor-grabbing"
                >
                  <GripVertical className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                    <img
                      src={img.previewUrl}
                      alt={img.file.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{img.file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {img.width} × {img.height}px • {(img.file.size / 1024).toFixed(0)} KB
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                    onClick={() => handleRemoveImage(img.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            {/* Options */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Page Size</label>
              <Select value={pageSize} onValueChange={(v) => setPageSize(v as PageSize)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a4">A4 (210 × 297 mm)</SelectItem>
                  <SelectItem value="letter">Letter (8.5 × 11 in)</SelectItem>
                  <SelectItem value="fit">Fit to Image</SelectItem>
                </SelectContent>
              </Select>
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
                    <Images className="w-5 h-5" />
                  </motion.div>
                  Creating PDF...
                </>
              ) : status === 'done' ? (
                <>
                  <Download className="w-5 h-5" />
                  Download Again
                </>
              ) : (
                <>
                  <Images className="w-5 h-5" />
                  Merge into PDF
                </>
              )}
            </Button>

            {/* Progress */}
            {status === 'processing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-center text-muted-foreground">
                  Processing... {progress}%
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

// Helper: read File as data URL
function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default ImageToPdfTool;
