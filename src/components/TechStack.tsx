import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const techStack = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
];

const TechStack = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="tech-stack" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white mb-4 font-poppins">
            Our Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>
      </div>

      <div
        className="flex relative w-full mask-gradient"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex flex-shrink-0 gap-16 pr-16"
          animate={{ x: isPaused ? undefined : "-100%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center group flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.3, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-card rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:border-primary/50">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-sm text-foreground/70 font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity font-poppins absolute top-24 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-shrink-0 gap-16 pr-16"
          animate={{ x: isPaused ? undefined : "-100%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={`${tech.name}-duplicate`}
              className="flex flex-col items-center group flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.3, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-card rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:border-primary/50">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-sm text-foreground/70 font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity font-poppins absolute top-24 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;