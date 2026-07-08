import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/ScrollReveal";

const teamMembers = [
  {
    name: "Ravindu-Kandawela",
    role: "CEO & Founder | Full Stack Engineer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769453285/WhatsApp_Image_2026-01-25_at_21.37.29_1_e7i3gh.jpg",
    bio: "Passionate tech entrepreneur and experienced full stack developer",
    linkedin: "linkedin.com/in/ravindu-kandawela-9a64552a5",
    github: "https://github.com/Ravindu-Kandawela",
    email: "ravindukandawela@gmail.com"
  },
  {
    name: "Senuda Adihetty",
    role: "Lead Engineer | Full Stack Developer | Graphic Designer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1770053797/aa1_beuge3.jpg",
    bio: "Experienced full stack developer and creative graphic designer",
    linkedin: "https://linkedin.com/in/senuda-adihetty-72152820b",
    github: "https://github.com/Senuda-Adihetty",
    email: "senuadihetty429@gmail.com",
    portfolioUrl: "/team/senuda-adihetty"
  },
  {
    name: "Pahasara Liyanage",
    role: "UI/UX Engineer | Frontend Developer | Graphic Designer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1770049679/WhatsApp_Image_2026-01-27_at_21.01.53_gildmc.jpg",
    bio: "Creative UI/UX designer and skilled frontend developer",
    linkedin: "https://linkedin.com/in/rasheen-pahasara-liyanage-45590a350",
    github: "https://github.com/Pahasara-Liyanage",
    email: "rasheenpahasara2002@gmail.com"
  },

  {
    name: "Chalana Jayod",
    role: "System Administrator | Full Stack Developer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769452145/aa_ajblnu.jpg",
    bio: "Skilled system administrator with development expertise",
    linkedin: "https://linkedin.com/in/chalana-jayod-59238a2b0",
    github: "https://github.com/CJdevX",
    email: "chalanajayod@gmail.com"
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

const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal
          animation="fade-up"
          width="100%"
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-wider mb-3 font-poppins">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary dark:text-white mb-4 font-poppins">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our talented team of professionals is dedicated to delivering exceptional results for every project.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              {(() => {
                const cardContent = (
                  <div className={`bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ${(member as any).portfolioUrl ? 'cursor-pointer ring-0 hover:ring-2 hover:ring-primary/40' : ''}`}>
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {(member as any).portfolioUrl && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                          View Portfolio →
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-foreground mb-1 font-poppins">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3 font-poppins text-sm">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </div>
                );

                return (member as any).portfolioUrl ? (
                  <Link to={(member as any).portfolioUrl}>{cardContent}</Link>
                ) : (
                  cardContent
                );
              })()}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
