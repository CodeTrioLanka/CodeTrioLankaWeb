import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking for a leading retail brand.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    client: "Retail Corp",
    year: "2025",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare Mobile App",
    description: "A comprehensive mobile application for patient management, appointment scheduling, and telemedicine consultations for hospitals.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile Development",
    client: "MediCare Solutions",
    year: "2025",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cloud Infrastructure Dashboard",
    description: "An enterprise-grade monitoring and management dashboard for cloud resources with real-time analytics and automated scaling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "AWS", "Python", "Docker"],
    category: "Cloud Solutions",
    client: "TechStart Inc",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Analytics Tool",
    description: "Machine learning-based analytics platform that provides predictive insights and automated reporting for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    category: "AI/ML",
    client: "DataDriven Co",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Marketplace",
    description: "A property listing and management platform with virtual tours, mortgage calculators, and agent communication features.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    category: "Web Development",
    client: "PropFind Lanka",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Logistics Management System",
    description: "End-to-end supply chain management solution with GPS tracking, route optimization, and automated dispatch for fleet operations.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["Angular", "Java", "Spring Boot", "Redis"],
    category: "Enterprise Solutions",
    client: "TransLogix",
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
              <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
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
