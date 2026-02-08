import logo from "@/assets/logo.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { navLinks } from "./Navbar";
import { services } from "./Services";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <ScrollReveal className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <img src={logo} alt="CodeTrio Lanka Solutions" className="h-12 w-auto bg-white rounded-lg p-1" />
              <div>
                <span className="text-xl font-bold font-poppins">CodeTrio</span>
                <span className="text-xl font-semibold text-secondary font-poppins">Lanka</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mx-auto md:mx-0 leading-relaxed mb-6">
              Transforming businesses through innovative software solutions.
              Your trusted technology partner in Sri Lanka.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-poppins">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} CodeTrio Lanka Solutions. All rights reserved.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
