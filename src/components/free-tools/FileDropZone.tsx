import { useState, useRef, useCallback, type DragEvent } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileWarning } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface FileDropZoneProps {
  accept: string;
  acceptLabel: string;
  maxSizeMB?: number;
  multiple?: boolean;
  onFilesSelected: (files: File[]) => void;
  disabled?: boolean;
  className?: string;
}

const FileDropZone = ({
  accept,
  acceptLabel,
  maxSizeMB = 50,
  multiple = false,
  onFilesSelected,
  disabled = false,
  className,
}: FileDropZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFiles = useCallback(
    (files: FileList | File[]): File[] => {
      const fileArray = Array.from(files);
      const acceptedTypes = accept
        .split(',')
        .map((t) => t.trim().toLowerCase());

      const valid: File[] = [];

      for (const file of fileArray) {
        // Check file extension
        const ext = '.' + file.name.split('.').pop()?.toLowerCase();
        const mimeMatch = acceptedTypes.some(
          (t) => t === file.type || t === ext || (t.endsWith('/*') && file.type.startsWith(t.replace('/*', '/')))
        );

        if (!mimeMatch) {
          toast.error(`"${file.name}" is not a supported file type.`, {
            description: `Accepted: ${acceptLabel}`,
          });
          continue;
        }

        // Check size
        const sizeMB = file.size / (1024 * 1024);
        if (sizeMB > maxSizeMB) {
          toast.error(`"${file.name}" is too large (${sizeMB.toFixed(1)} MB).`, {
            description: `Maximum file size is ${maxSizeMB} MB.`,
          });
          continue;
        }

        valid.push(file);
      }

      if (!multiple && valid.length > 1) {
        toast.warning('Only one file is allowed. Using the first file.');
        return [valid[0]];
      }

      return valid;
    },
    [accept, acceptLabel, maxSizeMB, multiple]
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      if (disabled) return;

      const files = validateFiles(e.dataTransfer.files);
      if (files.length > 0) {
        onFilesSelected(files);
      }
    },
    [disabled, validateFiles, onFilesSelected]
  );

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) setIsDragOver(true);
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleClick = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = validateFiles(e.target.files);
        if (files.length > 0) {
          onFilesSelected(files);
        }
      }
      // Reset input so the same file can be re-selected
      e.target.value = '';
    },
    [validateFiles, onFilesSelected]
  );

  return (
    <motion.div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      animate={{
        borderColor: isDragOver
          ? 'hsl(174, 55%, 42%)'
          : 'hsl(214, 32%, 88%)',
        scale: isDragOver ? 1.01 : 1,
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative flex flex-col items-center justify-center gap-4 p-10 rounded-2xl border-2 border-dashed cursor-pointer transition-colors',
        'bg-muted/30 hover:bg-muted/50 dark:bg-muted/10 dark:hover:bg-muted/20',
        isDragOver && 'bg-secondary/10 dark:bg-secondary/5',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
        className="hidden"
        aria-label="File upload"
      />

      <motion.div
        animate={{ y: isDragOver ? -4 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {isDragOver ? (
          <FileWarning className="w-12 h-12 text-secondary" />
        ) : (
          <UploadCloud className="w-12 h-12 text-muted-foreground" />
        )}
      </motion.div>

      <div className="text-center">
        <p className="text-base font-semibold text-foreground font-poppins">
          {isDragOver ? 'Drop your file here' : 'Drag & drop your file here'}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          or{' '}
          <span className="text-secondary font-medium underline underline-offset-2">
            browse from your device
          </span>
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          Supports: {acceptLabel} • Max {maxSizeMB} MB
          {multiple && ' • Multiple files allowed'}
        </p>
      </div>
    </motion.div>
  );
};

export default FileDropZone;
