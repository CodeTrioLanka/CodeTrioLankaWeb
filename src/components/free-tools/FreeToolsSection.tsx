import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileImage, FileText, FileOutput, Images, ArrowRight, Sparkles, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import PdfToImageTool from './PdfToImageTool';
import PdfToWordTool from './PdfToWordTool';
import WordToPdfTool from './WordToPdfTool';
import ImageToPdfTool from './ImageToPdfTool';

interface ToolInfo {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  component: React.ComponentType;
}

const tools: ToolInfo[] = [
  {
    id: 'pdf-to-image',
    icon: FileImage,
    title: 'PDF to Image',
    description: 'Convert PDF pages into high-quality JPG or PNG images. Perfect for sharing, presentations, or social media.',
    gradient: 'from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/5 dark:to-fuchsia-500/5',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
    component: PdfToImageTool,
  },
  {
    id: 'pdf-to-word',
    icon: FileText,
    title: 'PDF to Word',
    description: 'Extract text from PDF files and generate editable Word documents (.docx). Fast and private.',
    gradient: 'from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    component: PdfToWordTool,
  },
  {
    id: 'word-to-pdf',
    icon: FileOutput,
    title: 'Word to PDF',
    description: 'Convert your Word documents into professional PDF files. Preserves text formatting and structure.',
    gradient: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    component: WordToPdfTool,
  },
  {
    id: 'image-to-pdf',
    icon: Images,
    title: 'Image to PDF',
    description: 'Combine multiple images into a single PDF. Drag to reorder and choose your preferred page size.',
    gradient: 'from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    component: ImageToPdfTool,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FreeToolsSection = () => {
  const [activeTool, setActiveTool] = useState<ToolInfo | null>(null);

  return (
    <>
      <section id="free-tools" className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-secondary font-bold mb-4 tracking-wide uppercase text-sm font-poppins">
              <Sparkles className="w-4 h-4" />
              100% Free & Private
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-white mb-6 font-poppins">
              Free Online Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Convert documents and images instantly — right in your browser.
              No uploads to servers, no sign-ups. Your files never leave your device.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${tool.gradient} border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-elevated cursor-pointer`}
                onClick={() => setActiveTool(tool)}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${tool.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <tool.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 font-poppins">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {tool.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Use Tool
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/0 group-hover:bg-secondary/5 rounded-full blur-2xl transition-colors duration-500 -translate-y-1/2 translate-x-1/2" />
              </motion.div>
            ))}
          </motion.div>

          {/* Privacy badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 dark:bg-muted/20 border border-border text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All processing happens locally in your browser — your files are never uploaded
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tool Dialog */}
      <Dialog open={!!activeTool} onOpenChange={(open) => !open && setActiveTool(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          {activeTool && (
            <>
              <DialogHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${activeTool.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <activeTool.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-bold font-poppins">
                      {activeTool.title}
                    </DialogTitle>
                    <DialogDescription className="text-xs">
                      {activeTool.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="px-6 py-6">
                <activeTool.component />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FreeToolsSection;
