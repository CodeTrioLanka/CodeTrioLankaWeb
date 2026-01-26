import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  {
    id: "tourism-website",
    title: "Tourism Website with Admin Dashboard & CMS",
    description: "Tourism Website with Admin Dashboard & CMS is a web platform that lets users explore destinations and tour packages. Admins can manage content like packages, blogs, gallery, and inquiries through a secure dashboard without coding.",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/ne_smpnzh.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    category: "Web Development",
    client: "Nature Escape Travels",
    year: "2026",
    liveUrl: "https://nature-escape-web.vercel.app/",
    // githubUrl: "#",
  },
  {
    id: "flippy-crypto",
    title: "Flippy: Penguin-Inspired Crypto Platform",
    description: "Flippy: Penguin-Inspired Crypto Platform (Frontend Only) is a visually engaging web application that introduces users to a fun, penguin-themed crypto experience. The platform showcases tokens, community features, and reward systems in an interactive and creative interface.",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/flippy_guc9x7.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    client: "Flippy Crypto",
    year: "2025",
    liveUrl: "https://flippy-t00082.onrender.com/",
    // githubUrl: "#",
  },
  {
    title: "SEKO: Rabbit-Inspired Crypto Platform",
    description: "SEKO: Rabbit-Inspired Crypto Platform (Frontend Only) is a fun and interactive web application that introduces users to a rabbit-themed crypto experience. The platform highlights tokens, rewards, and community features through an engaging and visually appealing interface.",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363252/seko_kiswei.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    client: "SEKO Crypto",
    year: "2025",
    liveUrl: "https://seko-t00202.onrender.com/",
    // githubUrl: "#",
  },
  {
    title: "Institute Management System",
    description: "Institute Management System is a web application developed to simplify and automate daily institute operations such as student registration, course management, class scheduling, attendance tracking, and fee/payment handling. The system provides an Admin Dashboard to manage student records, teacher details, courses, and reports easily. It improves accuracy, reduces paperwork, and helps the institute run smoothly with organized digital data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    category: "Web Application",
    client: "Vidura Institute",
    year: "2024",
    liveUrl: "#",
    // githubUrl: "#",
  },
  {
    title: "GYM Website with Admin Dashboard & CMS",
    description: "GYM Website with Admin Dashboard & CMS is a web-based platform developed to promote a gym and manage its online content efficiently. Visitors can explore gym packages, trainer profiles, gallery, blogs, and contact the gym easily.The system includes an Admin Dashboard with a Content Management System (CMS) that allows administrators to add, update, and remove website content such as packages, trainers, blog posts, images, and site settings without editing code. This project helps improve the gym’s online presence and makes content management simple and organized.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    category: "Web Development",
    client: "The Gym Fitness Center",
    year: "2024",
    liveUrl: "#",
    // githubUrl: "#",
  },
  {
    title: "Tea Collecting web Application",
    description: "Tea Collecting Web Application is a web-based system developed to digitalize and simplify tea leaf collection management. The application allows staff to record daily tea collections, manage supplier/farmer details, track weights, and calculate payments accurately.It reduces manual paperwork, improves data accuracy, and helps tea collection centers manage their operations smoothly through a structured and user-friendly dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    category: "Web Application",
    client: "Green Leaf Tea Center",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Vehicle Service Management System",
    description: "Vehicle Service Management System is a web-based application developed to streamline and organize vehicle service center operations. Customers can view available services and submit service requests, while staff can manage customer information, vehicle details, and service history through the system.This project helps reduce manual work, improves record accuracy, and ensures smooth service handling with faster customer support.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    category: "Web Development",
    client: "AutoCare Service Center",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sweetshop Management System | POS System",
    description: "Sweetshop Management System | Simple POS System is a lightweight point-of-sale desktop application designed for small sweet shops to handle daily sales efficiently. The system allows the cashier to select products, generate bills, calculate totals, and manage basic product records. It helps reduce manual billing errors, speeds up checkout, and keeps sales data organized for daily reporting.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["Java", "JavaSwing", "MySQL"],
    category: "Desktop Application",
    client: "Sweet Delights Shop",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Tea Collecting System Desktop Application",
    description: "The Tea Collecting Desktop Application is a centralized platform designed to replace traditional logbooks with a high-precision digital ecosystem. By bridging the gap between field collection and financial processing, the system ensures transparency for farmers and efficiency for collection centers.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["Java", "JavaSwing", "MySQL"],
    category: "Desktop Application",
    client: "Green Leaf Tea Center",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Institute Management System Desktop Application",
    description: "Institute Management System is a desktop application developed to simplify and automate daily institute operations such as student registration, course management, class scheduling, attendance tracking, and fee/payment handling. The system provides an Admin Dashboard to manage student records, teacher details, courses, and reports easily. It improves accuracy, reduces paperwork, and helps the institute run smoothly with organized digital data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    technologies: ["Java", "JavaSwing", "MySQL"],
    category: "Desktop Application",
    client: "Vidura Institute",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    // githubUrl: "#",
  },
  {
    title: "GYM Management System Desktop Application",
    description: "GYM Management System Desktop Application is a desktop application developed to manage gym operations efficiently. It allows administrators to manage member profiles, trainer schedules, class bookings, and billing information. The system provides an intuitive interface for managing gym resources and generating reports for better operational oversight.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Java", "JavaSwing", "MySQL"],
    category: "Desktop Application",
    client: "The Gym Fitness Center",
    year: "2024",
    liveUrl: "#",
    // githubUrl: "#",
  },
  {
    title: "Vehicle Service Management System Desktop Application",
    description: "Vehicle Service Management System Desktop Application is a desktop application developed to streamline and organize vehicle service center operations. Customers can view available services and submit service requests, while staff can manage customer information, vehicle details, and service history through the system.This project helps reduce manual work, improves record accuracy, and ensures smooth service handling with faster customer support.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["Java", "JavaSwing", "MySQL"],
    category: "Desktop Application",
    client: "AutoCare Service Center",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to delivering exceptional solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/project/${project.id}`}>
                <TiltCard className="h-full">
                  <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-300 h-full cursor-pointer backdrop-blur-sm bg-white/5 border-white/10">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                        {project.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {project.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.year}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
