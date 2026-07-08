import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import TiltCard from "@/components/ui/TiltCard";
import { useRef, useState, useEffect, useCallback } from "react";

import { projects } from "@/data/projects";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setScrollProgress(progress);
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < maxScroll - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 340 + 24; // card width + gap
    el.scrollBy({ left: direction === "left" ? -cardWidth * 2 : cardWidth * 2, behavior: "smooth" });
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const clickPos = (e.clientX - rect.left) / rect.width;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: clickPos * maxScroll, behavior: "smooth" });
  };

  const handleThumbDrag = useCallback(
    (e: MouseEvent) => {
      const el = scrollRef.current;
      const track = trackRef.current;
      if (!el || !track) return;
      const rect = track.getBoundingClientRect();
      const pos = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollLeft = pos * maxScroll;
    },
    []
  );

  const stopDrag = useCallback(() => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleThumbDrag);
    document.removeEventListener("mouseup", stopDrag);
  }, [handleThumbDrag]);

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener("mousemove", handleThumbDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  // Thumb width as percentage (visible / total)
  const el = scrollRef.current;
  const thumbWidth = el ? Math.max((el.clientWidth / el.scrollWidth) * 100, 12) : 20;

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white mb-4 font-poppins">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to delivering exceptional solutions.
          </p>
        </motion.div>

        {/* Scrollable cards container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollLeft && isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/80 dark:bg-card/90 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 -ml-4"
            style={{ pointerEvents: canScrollLeft ? "auto" : "none" }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Right arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollRight && isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/80 dark:bg-card/90 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 -mr-4"
            style={{ pointerEvents: canScrollRight ? "auto" : "none" }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Edge fade gradients */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-muted/80 dark:from-[hsl(215,50%,8%)]/80 to-transparent" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-muted/80 dark:from-[hsl(215,50%,8%)]/80 to-transparent" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>{`#projects .flex.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="min-w-[340px] max-w-[340px] snap-start flex-shrink-0"
              >
                <Link to={`/project/${project.id}`}>
                  <TiltCard className="h-full">
                    <Card className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 h-full cursor-pointer backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                          {project.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-poppins">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {project.client}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {project.year}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-secondary/50 text-secondary-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modern custom scrollbar */}
        <div className="mt-6 flex items-center gap-3">
          {/* Track */}
          <div
            ref={trackRef}
            onClick={handleTrackClick}
            className="relative flex-1 h-[6px] rounded-full bg-border/40 dark:bg-white/10 cursor-pointer group overflow-hidden"
          >
            {/* Glow behind thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-4 rounded-full blur-md transition-all duration-150"
              style={{
                left: `${scrollProgress * (100 - thumbWidth)}%`,
                width: `${thumbWidth}%`,
                background: "linear-gradient(90deg, hsl(174 55% 42% / 0.5), hsl(40 85% 55% / 0.5))",
                opacity: isDragging || isHovered ? 1 : 0.4,
              }}
            />
            {/* Thumb */}
            <div
              onMouseDown={startDrag}
              className="absolute top-0 h-full rounded-full transition-shadow duration-300 cursor-grab active:cursor-grabbing"
              style={{
                left: `${scrollProgress * (100 - thumbWidth)}%`,
                width: `${thumbWidth}%`,
                background: "linear-gradient(90deg, hsl(174 55% 42%), hsl(40 85% 55%))",
                boxShadow: isDragging
                  ? "0 0 16px hsl(174 55% 42% / 0.6), 0 0 4px hsl(40 85% 55% / 0.4)"
                  : "0 0 8px hsl(174 55% 42% / 0.3)",
              }}
            />
          </div>

          {/* Counter */}
          <span className="text-xs font-medium text-muted-foreground tabular-nums whitespace-nowrap">
            {Math.round(scrollProgress * (projects.length - 1)) + 1} / {projects.length}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors font-poppins"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
