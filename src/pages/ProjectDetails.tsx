import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    id: "tourism-website",
    title: "Tourism Website with Admin Dashboard & CMS",
    description: "Tourism Website with Admin Dashboard & CMS is a web platform that lets users explore destinations and tour packages. Admins can manage content like packages, blogs, gallery, and inquiries through a secure dashboard without coding.",
    fullDescription: "This comprehensive tourism platform revolutionizes how travel businesses manage their online presence. The system features a beautiful, responsive frontend where visitors can browse destinations, explore tour packages, read travel blogs, and view stunning gallery images. The powerful admin dashboard allows complete content management without any technical knowledge. Administrators can easily add new tour packages with detailed itineraries, pricing, and availability. The blog management system enables regular content updates to engage visitors and improve SEO. The gallery management allows for organized photo uploads with categorization. Customer inquiry management streamlines communication with potential clients. The system also includes booking management, user authentication, and comprehensive reporting features.",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/ne_smpnzh.png",
    images: [
      "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/ne_smpnzh.png",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    category: "Web Development",
    client: "Nature Escape Travels",
    year: "2026",
    liveUrl: "https://nature-escape-web.vercel.app/",
    features: [
      "Responsive Design",
      "Admin Dashboard",
      "Content Management System",
      "Tour Package Management",
      "Blog Management",
      "Gallery Management",
      "Inquiry Management",
      "User Authentication"
    ]
  },
  {
    id: "flippy-crypto",
    title: "Flippy: Penguin-Inspired Crypto Platform",
    description: "Flippy: Penguin-Inspired Crypto Platform (Frontend Only) is a visually engaging web application that introduces users to a fun, penguin-themed crypto experience. The platform showcases tokens, community features, and reward systems in an interactive and creative interface.",
    fullDescription: "Flippy represents the next generation of crypto platforms with its unique penguin-themed approach. This frontend-focused project demonstrates advanced React development skills with stunning animations and interactive elements. The platform features a comprehensive token showcase with real-time data visualization, community engagement tools, and gamified reward systems. The design incorporates playful penguin characters throughout the user journey, making cryptocurrency accessible and fun for all users. Advanced animations using Framer Motion create smooth transitions and engaging micro-interactions. The responsive design ensures optimal viewing across all devices, while the modern UI/UX principles guide users through complex crypto concepts with ease.",
    image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/flippy_guc9x7.png",
    images: [
      "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363251/flippy_guc9x7.png",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    client: "Flippy Crypto",
    year: "2025",
    liveUrl: "https://flippy-t00082.onrender.com/",
    features: [
      "Interactive Animations",
      "Responsive Design",
      "Token Showcase",
      "Community Features",
      "Reward Systems",
      "Modern UI/UX"
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

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
                {project.fullDescription}
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
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
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
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