import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import TopBar from "./TopBar";
import { NavigationLink } from "./NavigationLink";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Blogs", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setIsScrolled(latest > 50);
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
        <div className={`max-w-6xl mx-auto rounded-full px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 dark:bg-[#0a131f]/90 backdrop-blur-xl border border-black/5 dark:border-white/10 ${isScrolled ? 'shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'shadow-none'}`}>
          {/* Logo */}
          <NavigationLink href="#home" className="flex items-center gap-3 shrink-0">
            <div className="bg-white rounded-full p-1 shadow-sm border border-border">
              <img src={logo} alt="CodeTrio Lanka Solutions" className="h-8 md:h-10 w-auto" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-navy-dark dark:text-white font-poppins">CodeTrio</span>
              <span className="text-lg font-semibold text-secondary dark:text-[#f2b53a] font-poppins">Lanka</span>
            </div>
          </NavigationLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavigationLink
                key={link.label}
                href={link.href}
                className="text-navy-dark/80 dark:text-white/80 hover:text-[#f2b53a] dark:hover:text-[#f2b53a] transition-colors duration-300 font-medium text-sm font-poppins"
              >
                {link.label}
              </NavigationLink>
            ))}
            <NavigationLink
              href="#contact"
              className="bg-secondary hover:bg-teal-dark text-secondary-foreground px-6 py-2 rounded-full font-bold transition-all duration-300 hover:shadow-glow text-sm font-poppins"
            >
              Get Started
            </NavigationLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy-dark dark:text-white hover:text-[#f2b53a] transition-colors"
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
              className="md:hidden mt-2 bg-white/95 dark:bg-[#0a131f]/95 backdrop-blur-xl rounded-2xl border border-black/5 dark:border-white/10 shadow-elevated overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavigationLink
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-navy-dark/90 dark:text-white/90 hover:text-[#f2b53a] transition-colors py-2 font-semibold text-lg border-b border-black/5 dark:border-white/10 last:border-0 font-poppins"
                  >
                    {link.label}
                  </NavigationLink>
                ))}
                <NavigationLink
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-secondary text-secondary-foreground px-6 py-4 rounded-xl font-bold text-center mt-2 shadow-glow font-poppins"
                >
                  Get Started
                </NavigationLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
