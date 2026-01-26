import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Facebook } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold mb-4 tracking-wide uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Let's Start a Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Contact us today and let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a target="_blank" href="mailto:codetriolankasolutions@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors text-[10px] md:text-[15px]">
                      codetriolankasolutions@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a target="_blank" href="tel:+94714257207" className="text-muted-foreground hover:text-secondary transition-colors">
                      +94 71 425 7207
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a target="_blank" href="https://wa.me/94714257207" className="text-muted-foreground hover:text-secondary transition-colors">
                      +94 71 425 7207
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Galle, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Official Page</p>
                    <p className="text-muted-foreground"><a target="_blank" href="https://www.facebook.com/profile.php?id=61586191610766">CodeTrio Lanka</a></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-teal-dark text-secondary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-glow"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
