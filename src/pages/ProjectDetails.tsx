import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <Badge className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                {project.fullDescription || project.description}
              </p>
              <div className="flex gap-4 mb-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {/* 
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
                */}
              </div>
            </div>

            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              {Array.isArray(project.features) ? (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-2 ml-5">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                Object.entries(project.features).map(([category, features]) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">{category}</h4>
                    <ul className="space-y-2 ml-5">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;