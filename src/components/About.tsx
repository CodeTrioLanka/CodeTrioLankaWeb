import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Award } from "lucide-react";

const features = [
  "Expert team of developers",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Transparent communication",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold mb-4 tracking-wide uppercase text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              CodeTrio Lanka Solutions is a leading software development company based in Sri Lanka.
              We specialize in creating innovative digital solutions that help businesses transform
              and grow in the modern digital landscape.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team of experienced developers, designers, and project managers work together
              to deliver exceptional results that exceed client expectations.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-navy-dark text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-elevated"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Users, value: "4+", label: "Team Members", color: "bg-secondary" },
              { icon: Target, value: "98%", label: "Success Rate", color: "bg-primary" },
              { icon: Award, value: "15+", label: "Awards Won", color: "bg-gold" },
              { icon: CheckCircle, value: "5+", label: "Happy Clients", color: "bg-teal-dark" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
