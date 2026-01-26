import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Ravindu-Kandawela",
    role: "CEO & Founder | Senior Full Stack Developer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363250/ravindu_znmll3.jpg",
    bio: "Passionate tech entrepreneur and experienced full stack developer",
    linkedin: "linkedin.com/in/ravindu-kandawela-9a64552a5",
    github: "https://github.com/Ravindu-Kandawela",
    email: "ravindukandawela@gmail.com"
  },
  {
    name: "Senuda Adihetty",
    role: "Lead Developer | Full Stack Developer | Graphic Designer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769364774/44026-01-25_at_21.37.29_1_b3jh6u.jpg",
    bio: "Experienced full stack developer and creative graphic designer",
    linkedin: "www.linkedin.com/in/senuda-adihetty-72152820b",
    github: "https://github.com/Senuda-Adihetty",
    email: "senuadihetty429@gmail.com"
  },
  {
    name: "Pahasara Liyanage",
    role: "UI/UX Designer | Frontend Developer | Graphic Designer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/tattaya_bffzme.jpg",
    bio: "Creative UI/UX designer and skilled frontend developer",
    linkedin: "linkedin.com/in/rasheen-pahasara-liyanage-45590a350",
    github: "https://github.com/Pahasara-Liyanage",
    email: "rasheenpahasara2002@gmail.com"
  },

   {
    name: "Chalana Jayod",
    role: "Network Engineer | System Administrator | Full Stack Developer",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769445936/490889873_646642438348326_3603621582785146022_n_psnlx2.jpg",
    bio: "Skilled network engineer and system administrator with development expertise",
    linkedin: "linkedin.com/in/chalana-jayod-59238a2b0",
    github: "https://github.com/CJdevX",
    email: "chalanajayod@gmail.com"
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our talented team of professionals is dedicated to delivering exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
