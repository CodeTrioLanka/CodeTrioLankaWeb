import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Shield, Cpu, Computer, Network, Bot, Palette, Sparkles, GraduationCap, TrendingUp, Share2, FileSpreadsheet } from "lucide-react";

export const services = [
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
  const [isPaused, setIsPaused] = useState(false);

  const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <div className="group w-[320px] md:w-[400px] p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated flex-shrink-0 whitespace-normal text-left cursor-pointer">
      <div className="w-14 h-14 rounded-xl bg-secondary/10 dark:bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary dark:group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <service.icon className="w-7 h-7 text-secondary dark:text-primary group-hover:text-secondary-foreground dark:group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block text-primary font-bold mb-4 tracking-wide uppercase text-sm font-poppins">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-white mb-6 font-poppins">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive software solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

      </div>

      <div
        className="flex relative w-full mask-gradient"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex flex-shrink-0 gap-8 pr-8"
          animate={{ x: isPaused ? undefined : "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
        <motion.div
          className="flex flex-shrink-0 gap-8 pr-8"
          animate={{ x: isPaused ? undefined : "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {services.map((service) => (
            <ServiceCard key={`${service.title}-dup`} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
