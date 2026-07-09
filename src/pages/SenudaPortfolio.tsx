import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Palette,
  Server,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  ChevronRight,
  Wifi,
  Languages,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    items: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    items: ["Node.js", "Express.js", "Java", "PHP", "Laravel", "REST APIs"],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Design",
    icon: <Palette className="w-5 h-5" />,
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "UI/UX Design", "Logo Design"],
  },
  {
    category: "Networking & Hardware",
    icon: <Wifi className="w-5 h-5" />,
    items: ["Computer Networking", "Hardware Solutions", "ICT Support", "Cloud Security"],
  },
  {
    category: "Tools & Other",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Vite", "npm"],
  },
];

const experience = [
  {
    role: "Freelance Web Developer & Graphic Designer",
    company: "Self-Employed",
    period: "2024 – Present",
    description:
      "Designing logos, social media posts, and photo frames for clients. Developing responsive websites using latest frameworks including React, Node.js, and Tailwind CSS.",
    highlights: [
      "Designed logos, social media posts, and photo frames",
      "Developed responsive websites using latest frameworks",
      "Led development of 10+ client projects at CodeTrio Lanka",
      "Architected scalable full-stack web applications",
    ],
  },
  {
    role: "Temporary Assistant – OBA Book Shop",
    company: "St. Aloysius' College, Galle",
    period: "2025 DEC – 2026 FEB",
    description:
      "Worked as a temporary assistant at the Old Boys' Association Book Shop, handling sales, inventory management, and customer service.",
    highlights: [
      "Managed book shop inventory and sales operations",
      "Provided customer assistance and service",
    ],
  },
  {
    role: "Trainee Associate",
    subInfo: "EMP NO: 720030 / Project: VDTT",
    company: "Orel IT - No 34, Old Road, Navinna, Maharagama",
    period: "2025 OCT – 2025 NOV",
    description: "One month data entry training program.",
    highlights: [
      "Completed intensive one-month data entry training",
      "Gained hands-on experience in data management and processing",
    ],
  },
  {
    role: "ICT Support & Administrative Trainee",
    company: "InfoTech Computer Systems, Galle",
    period: "2023 JUN – 2023 DEC",
    description:
      "Six months of on-the-job training in ICT support and administrative tasks, gaining hands-on experience in hardware troubleshooting, networking, and system maintenance.",
    highlights: [
      "Provided ICT support and troubleshooting",
      "Assisted with administrative and technical tasks",
      "Gained hands-on experience in hardware and networking",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) – Undergraduate",
    serialNumber: "Cert. Serial: pending / Back Serial: pending",
    institution: "University of Vocational Technology (UOVT), Ratmalana",
    year: "2026",
    period: "NVQ Level 6/7 – Current",
    description: "B.Tech in Computer Networks and Cloud Security. Currently pursuing undergraduate studies focusing on networking infrastructure and cloud-based security systems.",
    qualificationCode: "pending",
    results: [
      { type: "header", title: "Sem 1" },
      { code: "IT103012", subject: "Mathematics for ICT I", grade: "Exemption" },
      { code: "IT104022", subject: "Computer Programming", grade: "Exemption" },
      { code: "IT102030", subject: "Introduction to Information Systems", grade: "Exemption" },
      { code: "IT103042", subject: "Digital Electronics", grade: "Exemption" },
      { code: "IT104052", subject: "Data Communication and Networks", grade: "Exemption" },
      { code: "IT103062", subject: "Database Design", grade: "Exemption" },
      { code: "IT104072", subject: "Internet Technologies", grade: "Exemption" },
      { code: "LS103101", subject: "Communication Skills in English I", grade: "Exemption" },
      { type: "header", title: "Sem 2" },
      { code: "IT203012", subject: "Mathematics for ICT II", grade: "Exemption" },
      { code: "IT203022", subject: "Computer Architecture", grade: "Exemption" },
      { code: "IT204032", subject: "Data Structures and Algorithms", grade: "Exemption" },
      { code: "IT204040", subject: "Software Engineering Practices", grade: "Exemption" },
      { code: "IT204050", subject: "Object Oriented Programming", grade: "Exemption" },
      { code: "IT204062", subject: "Web Programming", grade: "Exemption" },
      { code: "IT203072", subject: "Computer Networks", grade: "Exemption" },
      { code: "LS203111", subject: "Communication Skills in English II", grade: "Exemption" },
      { code: "IT206080", subject: "Industrial Exposure", grade: "Exemption" },
      { type: "header", title: "Sem 3" },
      { code: "IT304012", subject: "Database Systems and Programming", grade: "Pending" },
      { code: "IT302022", subject: "Operating Systems", grade: "Pending" },
      { code: "IT304032", subject: "Web Technology and Applications", grade: "Pending" },
      { code: "IT304040", subject: "Python Programming", grade: "Pending" },
      { code: "IT303052", subject: "Software Architectures and Design", grade: "Pending" },
      { code: "IT303062", subject: "Software Deployment and Evolution", grade: "Pending" },
      { code: "IT304072", subject: "Software Testing and Reliability", grade: "Pending" },
      { code: "IT304082", subject: "Database Implementation", grade: "Pending" },
      { code: "IT302090", subject: "Psychology for IT", grade: "Pending" },
      { code: "IT302102", subject: "Soft Skills and Personal Development", grade: "Pending" },
      { type: "header", title: "Sem 4" },
      { code: "IT404011", subject: "Mobile Application Development", grade: "Pending" },
      { code: "IT402022", subject: "Entrepreneurship Development and Management", grade: "Pending" },
      { code: "IT403030", subject: "Cloud Computing", grade: "Pending" },
      { code: "IT404040", subject: "UI & UX Engineering", grade: "Pending" },
      { code: "IT404050", subject: "Full stack Development", grade: "Pending" },
      { code: "IT403062", subject: "Research Methodology", grade: "Pending" },
      { code: "IT404070", subject: "Fundamentals and Applications of AI", grade: "Pending" },
      { code: "IT404080", subject: "Business Intelligence", grade: "Pending" },
      { code: "IT402091", subject: "Meditation & Stress Management", grade: "Pending" },
      { code: "IT402100", subject: "Energy Management in IT Environment", grade: "Pending" },
      { type: "header", title: "Sem 5" },
      { code: "IT514012", subject: "Work-Based / Industrial Training/Business Incubation", grade: "Pending" },
      { code: "IT504020", subject: "Final Year Project Phase I", grade: "Pending" },
      { type: "header", title: "Sem 6" },
      { code: "IT604012", subject: "Professional Practices in IT", grade: "Pending" },
      { code: "IT603022", subject: "Digital Marketing", grade: "Pending" },
      { code: "IT604032", subject: "Enterprise Systems", grade: "Pending" },
      { code: "IT604042", subject: "Information Systems Security and Practices", grade: "Pending" },
      { code: "IT604052", subject: "Enterprise Application Development", grade: "Pending" },
      { code: "IT604062", subject: "Software Project Management", grade: "Pending" },
      { code: "IT604071", subject: "Intelligent Systems", grade: "Pending" },
      { code: "IT603080", subject: "Software Engineering for Dependable Systems", grade: "Pending" },
      { code: "IT604090", subject: "Artificial Cognitive Systems", grade: "Pending" },
      { code: "IT608100", subject: "Final Year Project Phase II", grade: "Pending" },
      { type: "header", title: "Sem 7" },
      { code: "IT703010", subject: "Financial & Human Resource Management", grade: "Pending" },
      { code: "IT704020", subject: "Gamification Practices", grade: "Pending" },
      { code: "IT703030", subject: "Data Classification and Machine Learning", grade: "Pending" },
      { code: "IT703040", subject: "Embedded System Programming", grade: "Pending" },
      { code: "IT704050", subject: "Agile Practices & Frameworks", grade: "Pending" },
      { code: "IT703060", subject: "Cloud Service Architecture", grade: "Pending" },
      { code: "IT703070", subject: "Deep Learning Applications", grade: "Pending" },
      { code: "IT706080", subject: "Research Project I", grade: "Pending" },
      { type: "header", title: "Sem 8" },
      { code: "IT804010", subject: "IT Governance", grade: "Pending" },
      { code: "IT803020", subject: "Emerging Technologies", grade: "Pending" },
      { code: "IT802030", subject: "IT Service Management", grade: "Pending" },
      { code: "IT804040", subject: "DevOps and SysOps", grade: "Pending" },
      { code: "IT804051", subject: "Game Development and Programming", grade: "Pending" },
      { code: "IT802060", subject: "Robotic Process Automation", grade: "Pending" },
      { code: "IT812070", subject: "Research Project II", grade: "Pending" }
    ]
  },
  {
    degree: "Certificate in spoken English",
    institution: "The Ceylon Kingdom English Academy - Elpitiya",
    year: "2026",
    period: "Successfully completed",
    description: "30-day residential camp",
  },
  {
    degree: "4-day bodybuilding Certificate Course – ONLINE COURSE",
    institution: "IIPCR institute",
    year: "2024",
    period: "Successfully Participated",
    description: "Completed a 4-day online certificate course on bodybuilding.",
  },
  {
    degree: "National Diploma in ICT",
    serialNumber: "Cert. Serial 101D016541 / Back Serial AN013679",
    institution: "College of Technology, Galle",
    year: "2024",
    period: "NVQ Level 5 – Completed",
    description: "National Diploma in Information & Communication Technology. Comprehensive training in software development, networking, and IT systems.",
    qualificationCode: "K72T001Q1L5",
    results: [
      { type: "header", title: "Core Units" },
      { code: "K72T001U01", subject: "Install and implement database management system, database and database application packages", grade: "P" },
      { code: "K72T001U02", subject: "Perform database maintenance and troubleshooting", grade: "P" },
      { code: "K72T001U03", subject: "Collect requirement, analyse and document the graphic design", grade: "P" },
      { code: "K72T001U04", subject: "Design the concept and framework for graphic design", grade: "P" },
      { code: "K72T001U05", subject: "Manage images, photographs, illustrations and colour", grade: "P" },
      { code: "K72T001U06", subject: "Print and finish process for graphic product", grade: "P" },
      { code: "K72T001U07", subject: "Code software programme unit", grade: "P" },
      { code: "K72T001U08", subject: "Test software programme unit", grade: "P" },
      { code: "K72T001U09", subject: "Identify user requirements for software solution", grade: "P" },
      { code: "K72T001U10", subject: "Analyse requirements and design functionality of software solution", grade: "P" },
      { code: "K72T001U11", subject: "Develop and host website", grade: "P" },
      { code: "K72T001U12", subject: "Install and configure local area network (LAN)", grade: "P" },
      { code: "EMPU01", subject: "Manage Workplace information", grade: "P" },
      { code: "EMPU03", subject: "Plan work to be performed in the worlplace", grade: "P" },
      { type: "header", title: "Elective Units" },
      { code: "K72T001U22", subject: "Career Skills 3", grade: "P" }
    ],
    legend: [
      { key: "P", label: "PASS" },
      { key: "F", label: "FAIL" }
    ]
  },
  {
    degree: "Certificate in English - ONLINE COURSE",
    institution: "SUN VISION English Academy",
    year: "2023",
    period: "Successfully completed",
    description: "Completed English language certificate focused on communication, grammar, and writing skills",
  },
  {
    degree: "National Certificate of ICT Technician",
    serialNumber: "Cert. Serial 103253363 / Back Serial A272352",
    institution: "Vocational Training Authority (VTA), Talbot Town, Galle",
    year: "2023",
    period: "NVQ Level 4 – Completed",
    description: "ICT Technician certification covering hardware, software, networking fundamentals, and technical support.",
    qualificationCode: "K72S004Q3L4",
    results: [
      { code: "K72S004U01", subject: "Use the computer and manage files within standard operating systems", grade: "P" },
      { code: "K72S004U02", subject: "Perform Word Processing", grade: "P" },
      { code: "K72S004U03", subject: "Prepare Spreadsheets", grade: "P" },
      { code: "K72S004U04", subject: "Prepare presentation resources", grade: "P" },
      { code: "K72S004U05", subject: "Manage databases", grade: "P" },
      { code: "K72S004U06", subject: "Perform Internet and Electronic mail operations", grade: "P" },
      { code: "K72S004U07", subject: "Install configure, operate and maintain operating systems and network services", grade: "P" },
      { code: "K72S004U08", subject: "Develop Graphics for web and print product", grade: "P" },
      { code: "K72S004U09", subject: "Analyze, design and develop information system", grade: "P" }
    ],
    legend: [
      { key: "P", label: "PASS" },
      { key: "F", label: "FAIL" }
    ]
  },
  {
    degree: "G.C.E. Advanced Level (Bio Stream)",
    institution: "St. Aloysius' College, Galle",
    year: "2021",
    period: "Attempted",
    description: "Sat for the G.C.E. Advanced Level examination in the Biological Science stream.",
    results: [
      { subject: "Biology" },
      { subject: "Physics" },
      { subject: "Chemistry" },
      { subject: "General English" },
      { subject: "Common General Test" },
    ]
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "St. Aloysius' College, Galle",
    year: "2018",
    period: "Completed",
    description: "Successfully completed G.C.E. Ordinary Level examination with 5A and 4B passes.",
    results: [
      { subject: "Mathematics", grade: "A" },
      { subject: "Science", grade: "A" },
      { subject: "History", grade: "A" },
      { subject: "Buddhist", grade: "A" },
      { subject: "Design & Construction Technology", grade: "A" },
      { subject: "English", grade: "B" },
      { subject: "Sinhala", grade: "B" },
      { subject: "Commerce", grade: "B" },
      { subject: "Art", grade: "B" },
    ]
  },
];

const extracurriculars = [
  "Southern Wrestling Champion (3rd Place)",
  "All-Island School Art Competition – Awarded Place",
  "School Prefect Board Member",
  "Inter-House Competitions Participant",
];

const languages = [
  { name: "Sinhala", level: "Fluent", percent: 100 },
  { name: "English", level: "Good Proficiency", percent: 75 },
];

const projects = [
  {
    title: "Tourism Website with Admin Dashboard & CMS",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    description: "Full-stack tourism platform with a custom CMS for managing destinations, tour packages, and bookings.",
    link: "https://www.codetriolanka.lk/project/tourism-website",
  },
  {
    title: "GYM Website with Admin Dashboard & CMS",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "Modern gym management web app with admin dashboard, membership tracking, and class scheduling.",
    link: "https://www.codetriolanka.lk/project/gym-website",
  },
];

const SenudaPortfolio = () => {
  const [expandedEdu, setExpandedEdu] = useState<string | null>(null);

  const handleEduClick = (e: React.MouseEvent, degree: string) => {
    e.preventDefault();
    e.stopPropagation();
    (e.currentTarget as HTMLElement).blur();
    
    const lenis = (window as any).lenis;
    if (lenis) lenis.stop();
    
    const currentScrollY = window.scrollY;
    setExpandedEdu(expandedEdu === degree ? null : degree);
    
    let start = performance.now();
    const lockScroll = (time: number) => {
      window.scrollTo(0, currentScrollY);
      if (time - start < 350) {
        requestAnimationFrame(lockScroll);
      } else {
        if (lenis) {
          lenis.start();
          lenis.scrollTo(currentScrollY, { immediate: true });
        }
      }
    };
    requestAnimationFrame(lockScroll);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Senuda Adihetty | Full Stack Developer & ICT Professional</title>
        <meta name="description" content="Official portfolio of Senuda Adihetty. ICT Professional, Full Stack Developer, and Graphic Designer based in Galle, Sri Lanka. Specializing in React, Node.js, and web development." />
        <meta name="keywords" content="Senuda Adihetty, Senuda, Adihetty, Full Stack Developer Sri Lanka, ICT Professional Galle, Web Developer Sri Lanka, Graphic Designer, CodeTrio Lanka" />
        <meta name="author" content="Senuda Adihetty" />
        <link rel="canonical" href="https://codetriolanka.com/team/senuda-adihetty" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://codetriolanka.com/team/senuda-adihetty" />
        <meta property="og:title" content="Senuda Adihetty | Full Stack Developer & ICT Professional" />
        <meta property="og:description" content="Official portfolio of Senuda Adihetty. ICT Professional, Full Stack Developer, and Graphic Designer based in Galle, Sri Lanka." />
        <meta property="og:image" content="https://codetriolanka.com/senuda_profile.jpg" />
        <meta property="og:site_name" content="Senuda Adihetty Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://codetriolanka.com/team/senuda-adihetty" />
        <meta name="twitter:title" content="Senuda Adihetty | Full Stack Developer & ICT Professional" />
        <meta name="twitter:description" content="Official portfolio of Senuda Adihetty. ICT Professional, Full Stack Developer, and Graphic Designer based in Galle, Sri Lanka." />
        <meta name="twitter:image" content="https://codetriolanka.com/senuda_profile.jpg" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Senuda Adihetty",
            "url": "https://codetriolanka.com/team/senuda-adihetty",
            "image": "https://codetriolanka.com/senuda_profile.jpg",
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "CodeTrio Lanka"
            },
            "alumniOf": "St. Aloysius' College, Galle",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Galle",
              "addressCountry": "LK"
            },
            "sameAs": [
              "https://www.linkedin.com/in/senuda-adihetty-72152820b",
              "https://github.com/Senuda-Adihetty",
              "https://www.facebook.com/senux.Adihetty"
            ],
            "knowsAbout": ["Full Stack Development", "React", "Node.js", "MongoDB", "Graphic Design", "ICT"]
          })}
        </script>
      </Helmet>
      {/* Hero / Header Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,70%,15%)] via-[hsl(215,50%,10%)] to-[hsl(174,40%,15%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174,55%,42%,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(40,85%,55%,0.1),transparent_50%)]" />

        <div className="relative container mx-auto px-6 pt-8 pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-[1fr_340px] gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <Badge className="mb-4 bg-[hsl(174,55%,42%)]/20 text-[hsl(174,55%,50%)] border border-[hsl(174,55%,42%)]/30 hover:bg-[hsl(174,55%,42%)]/30">
                Available for Hire
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 font-poppins leading-tight">
                Senuda{" "}
                <span className="bg-gradient-to-r from-[hsl(174,55%,50%)] to-[hsl(40,85%,55%)] bg-clip-text text-transparent">
                  Adihetty
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[hsl(174,55%,50%)] font-semibold mb-4 font-poppins">
                ICT Professional | Full Stack Developer | Graphic Designer
              </p>
              <p className="text-white/60 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                A passionate and results-oriented Information & Communication Technology professional with NVQ Level 4 & 5 qualifications. Skilled in graphic design, software development, computer networking, and hardware solutions — combining technical expertise and creative thinking to deliver effective digital solutions.
              </p>

              {/* Contact info pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <a
                  href="mailto:senuadihetty429@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Mail className="w-4 h-4 text-[hsl(174,55%,50%)]" />
                  senuadihetty429@gmail.com
                </a>
                <a
                  href="tel:+94768911228"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-[hsl(174,55%,50%)]" />
                  076 89 11228
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 text-[hsl(40,85%,55%)]" />
                  Hapugala, Galle, Sri Lanka
                </span>
              </div>

              {/* Social buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="https://www.linkedin.com/in/senuda-adihetty-72152820b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/senux.Adihetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Senuda-Adihetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#333] hover:text-white hover:border-[#333] transition-all duration-300 hover:shadow-[0_0_20px_rgba(51,51,51,0.4)]"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:senuadihetty429@gmail.com"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[hsl(174,55%,42%)] hover:text-white hover:border-[hsl(174,55%,42%)] transition-all duration-300 hover:shadow-[0_0_20px_hsl(174,55%,42%,0.4)]"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1nsUuRjS1YOFksdRwKKhPoM2bmzdHoDCe?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 h-11 px-6 rounded-xl bg-gradient-to-r from-[hsl(174,55%,42%)] to-[hsl(40,85%,55%)] border-none text-[#020817] transition-all duration-300 hover:shadow-[0_0_20px_hsl(174,55%,42%,0.4)] hover:-translate-y-0.5 ml-2 sm:ml-4"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span className="text-sm font-poppins font-bold tracking-wide">Download MY CV</span>
                </a>
              </div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(174,55%,42%)] to-[hsl(40,85%,55%)] rounded-2xl blur-lg opacity-40" />
                <img
                  src="/senuda_profile.jpg"
                  alt="Senuda Adihetty"
                  className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
                />
                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -right-4 top-8 bg-[hsl(215,45%,12%)]/95 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-xl"
                >
                  <p className="text-2xl font-bold text-white">NVQ 5</p>
                  <p className="text-xs text-white/50">Qualified</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-4 bottom-12 bg-[hsl(215,45%,12%)]/95 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-xl"
                >
                  <p className="text-2xl font-bold text-[hsl(174,55%,50%)]">B.Tech</p>
                  <p className="text-xs text-white/50">Undergraduate</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0,60 L0,20 Q720,0 1440,20 L1440,60 Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-poppins">
                Technical Skills
              </h2>
            </motion.div>
            <motion.p custom={1} variants={fadeUp} className="text-muted-foreground text-lg ml-[52px]">
              Technologies and tools I work with
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-poppins">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-poppins">
                Experience
              </h2>
            </motion.div>
            <motion.p custom={1} variants={fadeUp} className="text-muted-foreground text-lg ml-[52px]">
              Professional journey and career highlights
            </motion.p>
          </motion.div>

          <div className="space-y-8 max-w-4xl">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.role}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/60 transition-colors duration-300">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card rounded-2xl p-5 md:p-6 border border-border/50 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-poppins">{exp.role}</h3>
                        {(exp as any).subInfo && (
                          <p className="text-xs text-muted-foreground font-mono mt-0.5 opacity-80">{(exp as any).subInfo}</p>
                        )}
                        <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-poppins">
                Education
              </h2>
            </motion.div>
            <motion.p custom={1} variants={fadeUp} className="text-muted-foreground text-lg ml-[52px]">
              Academic background and qualifications
            </motion.p>
          </motion.div>

          <div className="space-y-8 max-w-4xl" style={{ overflowAnchor: 'none' }}>
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/60 transition-colors duration-300">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card rounded-2xl p-5 md:p-6 border border-border/50 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-poppins">{edu.degree}</h3>
                        {(edu as any).serialNumber && (
                          <p className="text-xs text-muted-foreground font-mono mt-0.5 opacity-80">{(edu as any).serialNumber}</p>
                        )}
                        <p className="text-primary font-semibold text-sm mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-end gap-2 ml-auto">
                        <Badge variant="secondary" className={`text-xs ${edu.period.includes("Current") ? "!bg-red-500 hover:!bg-red-600 !text-white border-transparent" : edu.period.includes("Successfully") ? "!bg-[hsl(174,55%,42%)] hover:!bg-[hsl(174,55%,38%)] !text-white border-transparent" : ""}`}>
                          {edu.period}
                        </Badge>
                        <Badge className="text-xs bg-[hsl(174,55%,42%)] hover:bg-[hsl(174,55%,38%)] text-white">
                          {edu.year}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                    {(edu as any).results && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          {(edu as any).qualificationCode ? (
                            <span className="text-xs text-muted-foreground font-medium">
                              Qualification Code: <span className="text-foreground tracking-wider ml-1">{(edu as any).qualificationCode}</span>
                            </span>
                          ) : <span />}
                          <button
                            type="button"
                            onClick={(e) => handleEduClick(e, edu.degree)}
                            className="flex items-center gap-2 text-primary hover:text-[hsl(174,55%,50%)] transition-colors text-sm font-semibold outline-none ml-auto"
                          >
                            {expandedEdu === edu.degree ? "View Less" : "View More"}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedEdu === edu.degree ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        <AnimatePresence>
                          {expandedEdu === edu.degree && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                {(edu as any).results.map((res: any, i: number) => (
                                  res.type === 'header' ? (
                                    <div key={i} className="col-span-1 md:col-span-2 mt-4 mb-1 flex items-center gap-3">
                                      <div className="h-[1px] flex-1 bg-border/60" />
                                      <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                        {res.title}
                                      </span>
                                      <div className="h-[1px] flex-1 bg-border/60" />
                                    </div>
                                  ) : (
                                    <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-card border border-border/40 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                                      <div className="flex flex-col pr-2 flex-1">
                                        {res.code && (
                                          <div className="flex items-center gap-2 mb-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                            <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">{res.code}</span>
                                          </div>
                                        )}
                                        <span className="text-sm sm:text-[15px] font-medium text-foreground leading-snug group-hover:text-primary transition-colors">{res.subject}</span>
                                      </div>
                                      {res.grade && (
                                        <div className="flex items-center sm:justify-end mt-1 sm:mt-0">
                                          <span className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap border ${res.grade === 'A' ? 'text-[hsl(174,55%,42%)] border-[hsl(174,55%,42%)]/30 bg-[hsl(174,55%,42%)]/10' : res.grade === 'B' ? 'text-[hsl(40,85%,55%)] border-[hsl(40,85%,55%)]/30 bg-[hsl(40,85%,55%)]/10' : res.grade === 'P' || res.grade === 'Exemption' ? 'text-[hsl(174,55%,42%)] border-[hsl(174,55%,42%)]/30 bg-[hsl(174,55%,42%)]/10' : res.grade === 'Pending' ? 'text-amber-500 border-amber-500/30 bg-amber-500/10' : res.grade === 'F' ? 'text-destructive border-destructive/30 bg-destructive/10' : 'text-foreground border-border/50 bg-muted/50'}`}>
                                            {res.grade}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  )
                                ))}
                              </div>
                              {(edu as any).legend && (
                                <div className="mt-3 flex gap-4 text-xs font-medium border-t border-border/30 pt-3 justify-center px-4 pb-2">
                                  {(edu as any).legend.map((l: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-1.5 text-muted-foreground bg-muted/40 px-2 py-1 rounded-md border border-border/50">
                                      <span className={`w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-bold ${l.key === 'P' ? 'bg-[hsl(174,55%,42%)]/20 text-[hsl(174,55%,42%)]' : 'bg-destructive/20 text-destructive'}`}>
                                        {l.key}
                                      </span>
                                      <span className="uppercase tracking-wider text-[10px]">{l.label}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-xl font-bold text-foreground font-poppins mb-6 flex items-center gap-2">
                <Languages className="w-5 h-5 text-primary" />
                Languages
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="bg-card rounded-2xl p-5 border border-border/50">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-foreground">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-border/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[hsl(174,55%,42%)] to-[hsl(40,85%,55%)] transition-all duration-700"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-poppins">
                Extracurricular Activities
              </h2>
            </motion.div>
            <motion.p custom={1} variants={fadeUp} className="text-muted-foreground text-lg ml-[52px]">
              Achievements and involvement outside of academics
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {extracurriculars.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="bg-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex items-center gap-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-poppins">
                Featured Projects
              </h2>
            </motion.div>
            <motion.p custom={1} variants={fadeUp} className="text-muted-foreground text-lg ml-[52px]">
              Some of my notable work at CodeTrio Lanka
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {(() => {
                  const cardContent = (
                    <div className="group h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300 cursor-pointer">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-poppins">
                        {proj.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{proj.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs bg-secondary/50">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        View Project <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  );
                  return proj.link.startsWith("http") ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {cardContent}
                    </a>
                  ) : (
                    <Link to={proj.link} className="block h-full">
                      {cardContent}
                    </Link>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-[hsl(215,70%,20%)] to-[hsl(174,40%,20%)] rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(174,55%,42%,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(40,85%,55%,0.1),transparent_60%)]" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-poppins">
                Let's Work Together
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
                Interested in collaborating or have a project in mind? Feel free to reach out — I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:senuadihetty429@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[hsl(174,55%,42%)] text-white rounded-full font-bold hover:bg-[hsl(174,55%,38%)] transition-colors shadow-lg hover:shadow-[0_0_30px_hsl(174,55%,42%,0.4)] font-poppins"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/senuda-adihetty-72152820b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors font-poppins"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center">
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} Senuda Adihetty.
          </p>
          <div className="flex justify-center opacity-80 hover:opacity-100 transition-opacity">
            <img 
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fcodetriolanka.com%2Fteam%2Fsenuda-adihetty&label=TOTAL%20VIEWS&countColor=%2330a69a&labelColor=%230f172a"
              alt="Total Views" 
              className="h-6 rounded shadow-sm"
            />
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94705851814"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default SenudaPortfolio;
