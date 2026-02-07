import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Shield, Cpu, Computer, Network, Bot, Palette, Sparkles, GraduationCap, TrendingUp, Share2, FileSpreadsheet } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
  },
  {
    icon: TrendingUp,
    title: "SEO Services",
    description: "Search engine optimization and digital marketing strategies to boost your online visibility and drive organic traffic.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Computer,
    title: "Desktop Applications",
    description: "High-performance desktop software tailored to your business needs.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database design, optimization, and management services.",
  },

  {
    icon: Network,
    title: "Network Solutions",
    description: "Secure and efficient network infrastructure setup and maintenance.",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    description: "Tailored software solutions designed for your specific business needs.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent workflow automation powered by AI to streamline operations and boost productivity.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual solutions including branding, UI/UX design, and marketing materials that captivate audiences.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual solutions including branding, UI/UX design, and marketing materials that captivate audiences.",
  },
  {
    icon: GraduationCap,
    title: "University Assignments",
    description: "Professional academic support for university projects, research papers, and technical assignments across various disciplines.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media planning, content creation, and community engagement to build your brand presence across platforms.",
  },
  {
    icon: FileSpreadsheet,
    title: "Data Entry",
    description: "Accurate and efficient data entry services with quality assurance for databases, spreadsheets, and document digitization.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-bold mb-4 tracking-wide uppercase text-sm font-poppins">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-poppins">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive software solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
