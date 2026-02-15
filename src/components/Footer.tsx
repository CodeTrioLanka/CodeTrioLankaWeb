import logo from "@/assets/logo.png";
import { Facebook, Youtube, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { navLinks } from "./Navbar";
import { services } from "./Services";
import { NavigationLink } from "./NavigationLink";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-[#1f3047] text-primary-foreground py-16">
      <ScrollReveal className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <img src={logo} alt="CodeTrio Lanka Solutions" className="h-12 w-auto bg-white rounded-lg p-1" />
              <div>
                <span className="text-xl font-bold font-poppins">CodeTrio</span>
                <span className="text-xl font-semibold text-secondary dark:text-[#f2b53a] font-poppins">Lanka</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mx-auto md:mx-0 leading-relaxed mb-6">
              Transforming businesses through innovative software solutions.
              Your trusted technology partner in Sri Lanka.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586191610766", label: "Facebook" },
                { Icon: Youtube, href: "https://www.youtube.com/channel/UCrqV2yYSm91HXwQ10o34RZQ", label: "YouTube" },
                { Icon: WhatsAppIcon, href: "https://wa.me/94714257207", label: "WhatsApp" },
                { Icon: Mail, href: "mailto:codetriolankasolutions@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }, index) => (
                <NavigationLink
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </NavigationLink>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavigationLink
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-poppins">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 7).map((service) => (
                <li key={service.title}>
                  <NavigationLink
                    href="#services"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {service.title}
                  </NavigationLink>
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
