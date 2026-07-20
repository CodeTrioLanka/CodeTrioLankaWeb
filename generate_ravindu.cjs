const fs = require('fs');

const chalanaCode = fs.readFileSync('src/pages/ChalanaPortfolio.tsx', 'utf8');

let newCode = chalanaCode;

// 1. Replace Imports and Basic Info
newCode = newCode.replace(/Chalana Jayod/g, 'Ravindu Kandawela');
newCode = newCode.replace(/Chalana/g, 'Ravindu');
newCode = newCode.replace(/Jayod/g, 'Kandawela');
newCode = newCode.replace(/chalanajayod@gmail\.com/g, 'ravindukandawela@gmail.com');
newCode = newCode.replace(/077-8559197/g, '071-4257207');
newCode = newCode.replace(/94778559197/g, '94714257207');
newCode = newCode.replace(/Dikovita Yatalamatta, Galle/g, 'Galle, Sri Lanka');
newCode = newCode.replace(/https:\/\/www\.linkedin\.com\/in\/chalana-jayod-59238a2b0/g, 'https://linkedin.com/in/ravindu-kandawela-9a64552a5');
newCode = newCode.replace(/https:\/\/github\.com\/CJdevX/g, 'https://github.com/Ravindu-Kandawela');
newCode = newCode.replace(/CJdevX/g, 'Ravindu-Kandawela');
newCode = newCode.replace(/team\/chalana-jayod/g, 'team/ravindu-kandawela');
newCode = newCode.replace(/https:\/\/res\.cloudinary\.com\/dicyqfwrf\/image\/upload\/v1769452145\/aa_ajblnu\.jpg/g, 'https://res.cloudinary.com/dicyqfwrf/image/upload/v1769453285/WhatsApp_Image_2026-01-25_at_21.37.29_1_e7i3gh.jpg');

// Replace Hero text
newCode = newCode.replace(
  /Motivated ICT student pursuing an NVQ Level 5 Diploma.+?industry experience\./s,
  "Full-Stack Developer Intern with 6 months of professional experience at BotCalm, contributing to frontend and backend web development. Experienced in building responsive user interfaces using React, Next.js, and Tailwind CSS, and developing backend services and RESTful APIs with Express.js."
);

// Replace floating stats
newCode = newCode.replace(/<p className="text-2xl font-bold text-white">NVQ 5<\/p>/, '<p className="text-2xl font-bold text-white">Full Stack</p>');
newCode = newCode.replace(/<p className="text-xs text-white\/50">Qualified<\/p>/, '<p className="text-xs text-white/50">Developer</p>');
newCode = newCode.replace(/<p className="text-2xl font-bold text-\[hsl\(174,55%,50%\)\]">B\.Tech<\/p>/, '<p className="text-2xl font-bold text-[hsl(174,55%,50%)]">NVQ 5</p>');
newCode = newCode.replace(/<p className="text-xs text-white\/50">Undergraduate<\/p>/, '<p className="text-xs text-white/50">Qualified</p>');

// Replace skills array
const skillsData = `const skills = [
  {
    category: "Languages & Frameworks",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Java", "PHP", "JavaScript", "React", "Next.js", "Express.js", "Laravel", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "IT Support & Administration",
    icon: <Server className="w-5 h-5" />,
    items: ["Computer Network & Hardware", "Install & configure Operating Systems"],
  },
  {
    category: "Graphic Design",
    icon: <Palette className="w-5 h-5" />,
    items: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    category: "Tools & Other",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Git", "GitHub", "VS Code", "NetBeans", "Microsoft Office Package"],
  },
];`;
newCode = newCode.replace(/const skills = \[[\s\S]*?\];/m, skillsData);

// Replace experience array
const experienceData = `const experience: any[] = [
  {
    role: "Full Stack System Engineer (Intern)",
    company: "BotCalm (Pvt) Ltd",
    period: "6 months",
    description: "Contributed to frontend and backend web development.",
    highlights: [
      "Built and maintained full-stack web applications using Next.js, React, and Tailwind CSS.",
      "Developed backend services and RESTful APIs using Express.js and MongoDB."
    ]
  },
  {
    role: "ICT Support Trainee",
    company: "Ceylon Electricity Board – Sri Lanka",
    period: "6 months",
    description: "Job training in ICT support and administrative tasks.",
    highlights: [
      "Provided hardware and network troubleshooting.",
      "Assisted with administrative and IT support operations."
    ]
  }
];`;
newCode = newCode.replace(/const experience: any\[\] = \[\];/m, experienceData);

// Replace education array
const educationData = `const education = [
  {
    degree: "Information & Communication Technology Technician",
    institution: "Technical College Galle",
    year: "Completed",
    period: "NVQ Level 5",
    description: "Completed NVQ Level 5 Diploma. Coursework includes advanced networking, software development, and systems analysis, graphic design.",
    results: []
  },
  {
    degree: "Information & Communication Technology Technician",
    institution: "Vocational Training Authority (VTA)",
    year: "Completed",
    period: "NVQ Level 4",
    description: "Successfully completed the NVQ Level 4 Certificate. Focus on hardware, networking, software installation, and basic programming, Graphic design.",
    results: []
  }
];`;
newCode = newCode.replace(/const education = \[[\s\S]*?\];(?=\n\nconst extracurriculars)/m, educationData);

// Replace projects array
const projectsData = `const projects = [
  {
    title: "HR Management System (Web)",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "MongoDB"],
    description: "Built a full-stack HR system including employee, attendance, and leave management features.",
    link: "#",
  },
  {
    title: "Frontend Web Projects",
    tech: ["React", "Next.js", "Tailwind CSS"],
    description: "Developed responsive web interfaces focusing on clean UI and usability.",
    link: "#",
  },
  {
    title: "Tea Collecting Management System (Desktop)",
    tech: ["Java", "NetBeans", "MySQL"],
    description: "Created a Java desktop application to manage tea collection, supplier records, and payments.",
    link: "#",
  },
  {
    title: "Point of Sale (POS) System (Desktop)",
    tech: ["Java", "NetBeans", "MySQL"],
    description: "Developed a Java-based POS system supporting billing, inventory, and sales reporting.",
    link: "#",
  }
];`;
newCode = newCode.replace(/const projects = \[[\s\S]*?\];(?=\n\nconst references)/m, projectsData);

// Replace references array
const referencesData = `const references = [
  {
    name: "Mr. Dewaka De Silva",
    title: "Instructor",
    institution: "College Of Technology",
    phone: "070 701 7333",
  },
  {
    name: "Mrs. Shyami De Silva",
    title: "Instructor",
    institution: "College Of Technology",
    phone: "071 873 3984",
  }
];`;
newCode = newCode.replace(/const references = \[[\s\S]*?\];(?=\n\nconst ChalanaPortfolio)/m, referencesData);

// Replace Languages
const languagesData = `const languages = [
  { name: "Sinhala", level: "Native", percent: 100 },
  { name: "English", level: "Intermediate", percent: 60 },
];`;
newCode = newCode.replace(/const languages = \[[\s\S]*?\];/m, languagesData);

newCode = newCode.replace(/System Administrator \| Full Stack Developer/g, 'CEO & Founder | Full Stack Engineer');

// Finally rename the component export
newCode = newCode.replace(/ChalanaPortfolio/g, 'RavinduPortfolio');

fs.writeFileSync('src/pages/RavinduPortfolio.tsx', newCode);
console.log('Successfully created RavinduPortfolio.tsx');
