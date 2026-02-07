import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import TopBar from "./TopBar";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        initial={{ height: "auto", opacity: 1 }}
        animate={{
          height: isVisible ? "auto" : 0,
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -10
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="pointer-events-auto overflow-hidden"
      >
        <TopBar />
      </motion.div>

      <nav className={`container mx-auto px-4 pointer-events-auto transition-all duration-300 ${isVisible ? 'mt-4' : 'mt-2'}`}>
        <div className="max-w-6xl mx-auto bg-background/90 backdrop-blur-xl border border-border/50 rounded-full px-4 md:px-8 py-3 shadow-soft flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="bg-white rounded-full p-1 shadow-sm border border-border">
              <img src={logo} alt="CodeTrio Lanka Solutions" className="h-8 md:h-10 w-auto" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary font-poppins">CodeTrio</span>
              <span className="text-lg font-semibold text-secondary font-poppins">Lanka</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-secondary transition-colors duration-300 font-medium text-sm font-poppins"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-secondary hover:bg-teal-dark text-secondary-foreground px-6 py-2 rounded-full font-bold transition-all duration-300 hover:shadow-glow text-sm font-poppins"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="md:hidden mt-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-border shadow-elevated overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-secondary transition-colors py-2 font-semibold text-lg border-b border-border/50 last:border-0 font-poppins"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-secondary text-secondary-foreground px-6 py-4 rounded-xl font-bold text-center mt-2 shadow-glow font-poppins"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
