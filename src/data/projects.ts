
export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    images: string[];
    technologies: string[];
    category: string;
    client: string;
    year: string;
    liveUrl: string;
    githubUrl?: string;
    features: { [key: string]: string[] } | string[];
}

export const projects: Project[] = [
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
    },
    {
        id: "seko-crypto",
        title: "SEKO: Rabbit-Inspired Crypto Platform",
        description: "SEKO: Rabbit-Inspired Crypto Platform (Frontend Only) is a fun and interactive web application that introduces users to a rabbit-themed crypto experience. The platform highlights tokens, rewards, and community features through an engaging and visually appealing interface.",
        fullDescription: "SEKO leverages the popularity of meme coins with a high-quality frontend implementation. The site features a clean, rabbit-themed interface that appeals to crypto enthusiasts. Key sections include a roadmap, tokenomics visualization, and a 'how to buy' guide. The project emphasizes performance and accessibility, ensuring a smooth experience across all devices and network conditions.",
        image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363252/seko_kiswei.png",
        images: [
            "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769363252/seko_kiswei.png"
        ],
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        category: "Web Development",
        client: "SEKO Crypto",
        year: "2025",
        liveUrl: "https://seko-t00202.onrender.com/",
        features: [
            "Rabbit-themed UI",
            "Tokenomics Display",
            "Roadmap Visualization",
            "Responsive Layout",
            "Interactive Elements"
        ]
    },
    {
        id: "institute-management-system",
        title: "Institute Management System",
        description: "Institute Management System is a web application developed to simplify and automate daily institute operations such as student registration, course management, class scheduling, attendance tracking, and fee/payment handling. The system provides an Admin Dashboard to manage student records, teacher details, courses, and reports easily. It improves accuracy, reduces paperwork, and helps the institute run smoothly with organized digital data.",
        fullDescription: "The Institute Management System is a robust solution for educational institutions. It streamlines administrative tasks by moving them to a digital platform. The system supports multiple user roles including admins, teachers, and staff. Key modules include student information management, course scheduling, attendance tracking, and fee collection. The reporting module provides insights into institute performance.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
        ],
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        category: "Web Application",
        client: "Vidura Institute",
        year: "2024",
        liveUrl: "#",
        features: [
            "Student Registration",
            "Course Management",
            "Attendance Tracking",
            "Fee Management",
            "Admin Dashboard"
        ]
    },
    {
        id: "gym-website",
        title: "GYM Website with Admin Dashboard & CMS",
        description: "GYM Website with Admin Dashboard & CMS is a web-based platform developed to promote a gym and manage its online content efficiently. Visitors can explore gym packages, trainer profiles, gallery, blogs, and contact the gym easily. The system includes an Admin Dashboard with a Content Management System (CMS) that allows administrators to add, update, and remove website content such as packages, trainers, blog posts, images, and site settings without editing code. This project helps improve the gym’s online presence and makes content management simple and organized.",
        fullDescription: "This project delivers a dual-purpose solution: a marketing website for the gym and a management tool for the administration. The public-facing site effectively communicates the gym's value proposition, showcasing facilities, trainers, and success stories. The CMS component empowers gym staff to keep content fresh without developer intervention.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        ],
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        category: "Web Development",
        client: "The Gym Fitness Center",
        year: "2024",
        liveUrl: "#",
        features: [
            "CMS for Content Updates",
            "Trainer Profiles",
            "Class Schedules",
            "Membership Packages",
            "Gallery"
        ]
    },
    {
        id: "tea-collecting-web",
        title: "Tea Collecting Web Application",
        description: "Tea Collecting Web Application is a web-based system developed to digitalize and simplify tea leaf collection management. The application allows staff to record daily tea collections, manage supplier/farmer details, track weights, and calculate payments accurately. It reduces manual paperwork, improves data accuracy, and helps tea collection centers manage their operations smoothly through a structured and user-friendly dashboard.",
        fullDescription: "Focused on the agricultural sector, this application addresses the specific needs of tea collection centers. It replaces manual logbooks with a digital system that ensures accuracy in weight recording and payment calculations. The system maintains a database of farmers, daily collection records, and payment history.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        ],
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        category: "Web Application",
        client: "Green Leaf Tea Center",
        year: "2024",
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Daily Collection Recording",
            "Farmer Management",
            "Payment Calculation",
            "Reporting",
            "Dashboard"
        ]
    },
    {
        id: "vehicle-management-system",
        title: "Vehicle Service Management System",
        description: "Vehicle Service Management System is a web & desktop application developed to streamline and organize vehicle service center operations. Customers can view available services and submit service requests, while staff can manage customer information, vehicle details, and service history through the system. This project helps reduce manual work, improves record accuracy, and ensures smooth service handling with faster customer support.",
        fullDescription: "This project consists of a desktop and a web application designed to handle different but connected tasks. The desktop application is installed on a PC and is used for internal operations such as adding, updating, deleting, and managing customers, services, stock, jobs, invoices, and viewing appointments created through the web application. The web application focuses on the customer-facing side, allowing users to interact with the system, create appointments, check their status, and view updated information through the CMS. Both applications implement role-based access control, with roles such as admin, cashier, and mechanic on the desktop application, and admin and user roles on the web application.",
        image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769796261/download_1_mb2peu.jpg",
        images: [
            "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769796261/download_1_mb2peu.jpg"
        ],
        technologies: ["Java", "Java Swing", "MySQL", "Laravel", "PHP", "Bootstrap"],
        category: "Web & Desktop Development",
        client: "AutoCare Service Center",
        year: "2024",
        liveUrl: "#",
        githubUrl: "#",
        features: {
            "Desktop Application Features": [
                "Secure login with role-based access (Admin, Cashier, Mechanic)",
                "Customer management (add, update, delete, view)",
                "Service management (create, update, remove services)",
                "Stock and inventory management",
                "Job management and assignment",
                "Invoice creation and management",
                "Appointment viewing (appointments created from the web application)",
                "Data validation and controlled access based on user role",
                "Installed locally for reliable internal operations"
            ],
            "Web Application Features": [
                "Secure login with role-based access (Admin, User)",
                "User registration and authentication",
                "Appointment creation and scheduling",
                "Appointment status tracking",
                "CMS-based frontend updates",
                "Customer-facing interface",
                "Real-time data synchronization with the desktop system",
                "Responsive design for different devices"
            ],
            "System-Wide Features": [
                "Role-based access control across both platforms",
                "Centralized data management",
                "Secure data handling",
                "Separation of internal operations and customer-facing functions"
            ]
        }
    },
    {
        id: "sweetshop-pos",
        title: "Sweetshop Management System | POS System",
        description: "Sweetshop Management System | Simple POS System is a lightweight point-of-sale desktop application designed for small sweet shops to handle daily sales efficiently. The system allows the cashier to select products, generate bills, calculate totals, and manage basic product records. It helps reduce manual billing errors, speeds up checkout, and keeps sales data organized for daily reporting.",
        fullDescription: "This POS system is tailored for the high-volume, fast-paced environment of a sweet shop. It simplifies the checkout process, allowing cashiers to quickly process orders. The system handles inventory deduction, bill generation, and daily sales summaries.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
        ],
        technologies: ["Java", "JavaSwing", "MySQL"],
        category: "Desktop Application",
        client: "Sweet Delights Shop",
        year: "2024",
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Quick Billing",
            "Product Management",
            "Sales Reporting",
            "Receipt Printing",
            "User Friendly Interface"
        ]
    },
    {
        id: "tea-collecting-desktop",
        title: "Tea Collecting System Desktop Application",
        description: "The Tea Collecting Desktop Application is a centralized platform designed to replace traditional logbooks with a high-precision digital ecosystem. By bridging the gap between field collection and financial processing, the system ensures transparency for farmers and efficiency for collection centers.",
        fullDescription: "This desktop counterpart to the web application offers offline capabilities and robust performance for the main office. It handles large datasets of collection records and performs complex calculations for farmer payments.",
        image: "https://res.cloudinary.com/dicyqfwrf/image/upload/v1769795188/WhatsApp_Image_2026-01-30_at_23.08.06_cjgkrd.jpg",
        images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
        ],
        technologies: ["Java", "JavaSwing", "MySQL"],
        category: "Desktop Application",
        client: "Green Leaf Tea Center",
        year: "2024",
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Offline Mode",
            "High Volume Data Processing",
            "Advanced Reporting",
            "Secure Data Storage"
        ]
    },
    {
        id: "institute-management-desktop",
        title: "Institute Management System Desktop Application",
        description: "Institute Management System is a desktop application developed to simplify and automate daily institute operations such as student registration, course management, class scheduling, attendance tracking, and fee/payment handling. The system provides an Admin Dashboard to manage student records, teacher details, courses, and reports easily. It improves accuracy, reduces paperwork, and helps the institute run smoothly with organized digital data.",
        fullDescription: "The desktop version of the Institute Management System provides a dedicated interface for administrative staff. It ensures data privacy and quick access to student records, fee status, and attendance logs.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
        ],
        technologies: ["Java", "JavaSwing", "MySQL"],
        category: "Desktop Application",
        client: "Vidura Institute",
        year: "2024",
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Secure Desktop Interface",
            "Student Records Management",
            "Fee Collection",
            "Report Generation"
        ]
    },
    {
        id: "gym-management-desktop",
        title: "GYM Management System Desktop Application",
        description: "GYM Management System Desktop Application is a desktop application developed to manage gym operations efficiently. It allows administrators to manage member profiles, trainer schedules, class bookings, and billing information. The system provides an intuitive interface for managing gym resources and generating reports for better operational oversight.",
        fullDescription: "This desktop application serves as the operational backbone of the gym. It manages member subscriptions, tracks attendance, and handles billing. The intuitive interface ensures that gym staff can manage daily operations with minimal training.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        ],
        technologies: ["Java", "JavaSwing", "MySQL"],
        category: "Desktop Application",
        client: "The Gym Fitness Center",
        year: "2024",
        liveUrl: "#",
        features: [
            "Member Management",
            "Subscription Tracking",
            "Attendance Logging",
            "Operational Reports"
        ]
    }
];
