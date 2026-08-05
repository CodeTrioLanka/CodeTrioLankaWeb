# Software Requirements Specification (SRS)

## CodeTrio Lanka Solutions — Corporate Website & Free Online Tools Platform

---

| Field | Details |
|---|---|
| **Document Version** | 1.0 |
| **Date** | August 1, 2026 |
| **Prepared By** | CodeTrio Lanka Solutions Development Team |
| **Organization** | CodeTrio Lanka Solutions |
| **Location** | Galle, Sri Lanka |
| **Website** | https://codetriolanka.lk |
| **Email** | codetriolankasolutions@gmail.com |
| **Phone** | +94 71 425 7207 |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Features & Functional Requirements](#3-system-features--functional-requirements)
4. [Non-Functional Requirements](#4-non-functional-requirements)
5. [System Architecture & Technology Stack](#5-system-architecture--technology-stack)
6. [User Interface Requirements](#6-user-interface-requirements)
7. [External Interface Requirements](#7-external-interface-requirements)
8. [Data Requirements](#8-data-requirements)
9. [Constraints & Assumptions](#9-constraints--assumptions)
10. [Appendix](#10-appendix)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document describes the complete functional and non-functional requirements for the **CodeTrio Lanka Solutions** corporate website. The system serves as the primary digital presence for the company, showcasing services, team profiles, portfolio projects, and providing integrated free online document-conversion utilities accessible to the public.

### 1.2 Scope

The system is a single-page application (SPA) with supporting multi-page routes built on React. It encompasses:

- A **marketing/corporate website** with sections for hero, services, technology stack, portfolio, about, team, free tools, and contact.
- **Individual team member portfolio pages** for each of the four founding members.
- A **project detail page** for each portfolio entry.
- A suite of **free online file-conversion tools** (PDF ↔ Image, PDF ↔ Word, Image → PDF) processed entirely client-side in the browser.
- A **contact form** system integrated with EmailJS for automated email delivery to administrators and confirmation emails to inquiring users.
- Full **SEO optimization** including structured JSON-LD data for Google Local Business, meta tags, and server-side pre-rendering support.

### 1.3 Intended Audience

| Audience | Purpose |
|---|---|
| **Development Team** | Implementation reference and decision rationale |
| **Project Stakeholders** | Scope confirmation and feature sign-off |
| **QA Engineers** | Test case derivation |
| **Future Maintainers** | Onboarding and change management |

### 1.4 Definitions, Acronyms & Abbreviations

| Term | Definition |
|---|---|
| **SPA** | Single Page Application — a web app where navigation happens without full page reloads |
| **SRS** | Software Requirements Specification |
| **CMS** | Content Management System |
| **SEO** | Search Engine Optimization |
| **PDF** | Portable Document Format |
| **DOCX** | Microsoft Word Open XML document format |
| **CSR** | Client-Side Rendering |
| **SSG** | Static Site Generation / Pre-rendering |
| **UI** | User Interface |
| **UX** | User Experience |
| **API** | Application Programming Interface |
| **CDN** | Content Delivery Network |

### 1.5 Overview

Section 2 provides product context. Section 3 details all features. Sections 4–8 cover quality and interface requirements. Section 9 lists constraints. Section 10 is the appendix.

---

## 2. Overall Description

### 2.1 Product Perspective

CodeTrio Lanka Solutions is a software development company founded in Galle, Sri Lanka. This website is the company's **sole digital storefront** — it must communicate credibility, showcase expertise, and generate leads through the contact form. It is not integrated with a backend CMS; all content is statically authored in the codebase. The free tools feature differentiates the site from competitors by providing immediate value to visitors.

### 2.2 Product Functions (High-Level Summary)

1. **Corporate Showcase** — Hero section, services carousel, tech-stack marquee, project portfolio grid, and about section with statistics.
2. **Team Profiles** — Team card grid on the main page; individual in-depth portfolio pages per member.
3. **Portfolio Detail Pages** — Rich project pages with image carousels, feature lists, technology tags, and live demo links.
4. **Free Online Tools** — Client-side browser tools for PDF/image/document conversion with no server upload required.
5. **Contact System** — Form with EmailJS dual-send (admin + user auto-reply) and toast notifications.
6. **Navigation & UX** — Auto-hiding sticky navbar with smooth scroll, theme toggle (light/dark), and WhatsApp floating button.
7. **SEO & Performance** — Pre-rendered pages, structured data, Helmet-managed meta tags, lazy-loaded routes, and sitemap generation.

### 2.3 User Classes & Characteristics

| User Class | Description | Primary Goal |
|---|---|---|
| **Prospective Client** | Business or individual seeking software services | Evaluate company, contact for a quote |
| **General Public** | Any internet user needing file-conversion utilities | Use the free online tools without registration |
| **Recruiter / Partner** | HR or agency evaluating the team | Review team member portfolios and project history |
| **Search Engine Bot** | Googlebot and other crawlers | Index all pages for organic discovery |
| **Company Administrator** | CodeTrio team member | Receive contact form submissions via email |

### 2.4 Operating Environment

- **Platform**: Modern web browsers (Chrome ≥ 90, Firefox ≥ 88, Safari ≥ 14, Edge ≥ 90)
- **Deployment**: Vercel (with `vercel.json` routing for SPA fallback)
- **Network**: Standard broadband; video background degrades gracefully on slow connections
- **Device Types**: Desktop, tablet, and mobile (fully responsive)

### 2.5 Design & Implementation Constraints

- All free-tool processing must occur **client-side only** — no user files are uploaded to any server.
- All content updates require a **code deployment** (no CMS backend).
- EmailJS free-tier limits apply (~200 emails/month); no self-hosted mail server is used.
- The site must score ≥ 90 on Google PageSpeed Insights (desktop).

### 2.6 Assumptions & Dependencies

- The Vercel hosting platform remains available and free-tier compatible.
- Third-party CDN assets (Devicons, Cloudinary images, Cloudinary-hosted video) remain available.
- EmailJS service and template IDs are correctly configured via environment variables.
- The `pdfjs-dist`, `pdf-lib`, `mammoth`, `docx`, and `jspdf` libraries continue to function in modern browsers without breaking changes.

---

## 3. System Features & Functional Requirements

---

### 3.1 Navigation — Sticky Auto-Hiding Navbar

**Description**: A fixed navigation bar at the top of all pages that hides when the user scrolls down and reappears when scrolling up.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-NAV-01 | The navbar SHALL be fixed to the top of the viewport on all pages. |
| FR-NAV-02 | The navbar SHALL hide (slide up, opacity 0) when the user scrolls down past 50px. |
| FR-NAV-03 | The navbar SHALL reappear (slide down, opacity 1) when the user scrolls upward. |
| FR-NAV-04 | The navbar SHALL display a top bar (email + phone + social links) that also hides on scroll-down. |
| FR-NAV-05 | Clicking any navigation link SHALL smoothly scroll to the corresponding section on the home page. |
| FR-NAV-06 | The navbar SHALL include a "Get Started" CTA button that links to the `#contact` section. |
| FR-NAV-07 | On screens narrower than `md` breakpoint (768px), the navbar SHALL collapse to a hamburger menu. |
| FR-NAV-08 | The mobile hamburger menu SHALL animate open/close and SHALL close when a link is tapped. |
| FR-NAV-09 | The navbar background SHALL transition to a frosted-glass effect with a shadow when the page is scrolled. |

---

### 3.2 Hero Section

**Description**: The full-viewport landing section with a video background, headline, and call-to-action buttons.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-HERO-01 | The hero section SHALL occupy at least 100vh on initial load. |
| FR-HERO-02 | A looping, auto-playing, muted background video SHALL play on all devices (MP4 from Cloudinary CDN). |
| FR-HERO-03 | A semi-transparent dark overlay (40% opacity) SHALL be applied over the video for text readability. |
| FR-HERO-04 | The headline "CLEAN DESIGN. REAL RESULTS." SHALL be displayed in large, bold typography with a gradient accent on the second line. |
| FR-HERO-05 | A subtitle paragraph SHALL describe the company's value proposition. |
| FR-HERO-06 | A primary CTA button ("Start Your Project") SHALL link to `#contact` and include a shine animation on hover. |
| FR-HERO-07 | A secondary CTA button ("View Portfolio") SHALL link to `#projects`. |
| FR-HERO-08 | All hero text SHALL use a parallax effect controlled by the page scroll position via `framer-motion`. |
| FR-HERO-09 | A decorative SVG wave shape SHALL separate the hero from the next section. |

---

### 3.3 Services Section

**Description**: An infinitely scrolling horizontal carousel displaying all service offerings.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-SVC-01 | The section SHALL display all 12 services as cards in an auto-scrolling horizontal marquee. |
| FR-SVC-02 | The marquee animation SHALL pause when the user hovers over the carousel area. |
| FR-SVC-03 | Each service card SHALL display: a Lucide icon, a service title, and a short description. |
| FR-SVC-04 | The card icon container SHALL scale up and change background color on hover. |
| FR-SVC-05 | The following services SHALL be listed: Web Development, SEO Services, Mobile Apps, Desktop Applications, Database Solutions, Network Solutions, Custom Software, AI Automation, Graphic Design, University Assignments, Social Media Management, Data Entry. |

---

### 3.4 Technology Stack Section

**Description**: A continuously scrolling horizontal marquee of technology logos.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-TECH-01 | The section SHALL display logos for all 13 technologies: HTML5, CSS3, JavaScript, PHP, React, Node.js, Express.js, MongoDB, Laravel, MySQL, Bootstrap, Tailwind CSS, Java. |
| FR-TECH-02 | Logos SHALL be sourced from the Devicons CDN and loaded lazily. |
| FR-TECH-03 | The marquee SHALL scroll continuously and pause on hover. |
| FR-TECH-04 | Hovering a technology icon SHALL scale it up with a spring animation and reveal the technology name label. |

---

### 3.5 Portfolio / Projects Section

**Description**: A filterable grid of completed project cards.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-PROJ-01 | The section SHALL display all portfolio projects loaded from the static `projects.ts` data file. |
| FR-PROJ-02 | Each project card SHALL display: a cover image, category badge, project title, short description, and technology tags. |
| FR-PROJ-03 | Clicking a project card SHALL navigate to `/project/:id` for the full project detail page. |
| FR-PROJ-04 | Project images SHALL be loaded lazily. |
| FR-PROJ-05 | Cards SHALL animate in using a staggered fade-up effect when they enter the viewport. |

---

### 3.6 Project Detail Page (`/project/:id`)

**Description**: A dedicated page for each portfolio project showing full details.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-PD-01 | The page SHALL be accessible via the route `/project/:id` where `id` matches the project's `id` field. |
| FR-PD-02 | The page SHALL display: project title, category, client name, year, full description, an image gallery/carousel, technology tags, feature list(s), and a "View Live" button. |
| FR-PD-03 | If a project has nested feature categories (e.g., Vehicle Service Management), each category SHALL render as a labeled sub-list. |
| FR-PD-04 | If a project has a `githubUrl`, a "View GitHub" button SHALL also be displayed. |
| FR-PD-05 | Navigating to a non-existent project `id` SHALL render the 404 page. |
| FR-PD-06 | A "Back" button or breadcrumb SHALL allow the user to return to the main portfolio section. |
| FR-PD-07 | The page SHALL have its own SEO meta tags (title, description) based on the project data. |

---

### 3.7 About Section

**Description**: Company overview with key metrics.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-ABOUT-01 | The section SHALL display a two-column layout (text content + stats grid) on large screens and a stacked layout on mobile. |
| FR-ABOUT-02 | The text content SHALL include a section headline, two description paragraphs, and a bullet list of four key features. |
| FR-ABOUT-03 | The four feature bullets SHALL be: "Expert team of developers," "Agile development methodology," "24/7 support and maintenance," "Transparent communication." |
| FR-ABOUT-04 | The stats grid SHALL display four metrics: 10+ Projects Delivered, 98% Success Rate, 2+ Years of Experience, 5+ Happy Clients. |
| FR-ABOUT-05 | Each stat card SHALL have a colored icon, numeric value, and label. |
| FR-ABOUT-06 | A "Learn More About Us" CTA SHALL link to `#contact`. |

---

### 3.8 Team Section & Individual Portfolio Pages

**Description**: Team member cards on the main page, each linking to a full individual portfolio page.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-TEAM-01 | The section SHALL display four team member cards in a responsive grid (1 col mobile, 2 col tablet, 4 col desktop). |
| FR-TEAM-02 | Each card SHALL display: member photo, full name, role, and bio summary. |
| FR-TEAM-03 | Hovering a card SHALL reveal a "View Portfolio →" badge and apply a gradient overlay on the image. |
| FR-TEAM-04 | Each card SHALL be a clickable link navigating to the member's individual portfolio route. |
| FR-TEAM-05 | Individual portfolio routes SHALL be: `/team/ravindu-kandawela`, `/team/senuda-adihetty`, `/team/pahasara-liyanage`, `/team/chalana-jayod`. |
| FR-TEAM-06 | Each portfolio page SHALL contain detailed personal information including skills, education, work history, projects, and social links (LinkedIn, GitHub, email). |
| FR-TEAM-07 | Each portfolio page SHALL have a unique SEO title and description meta tag. |

**Team Member Roster**:

| Name | Role | Portfolio Route |
|---|---|---|
| Ravindu Kandawela | CEO & Founder \| Full Stack Engineer | `/team/ravindu-kandawela` |
| Senuda Adihetty | Lead Engineer \| Full Stack Developer \| Graphic Designer | `/team/senuda-adihetty` |
| Pahasara Liyanage | UI/UX Engineer \| Frontend Developer \| Graphic Designer | `/team/pahasara-liyanage` |
| Chalana Jayod | System Administrator \| Full Stack Developer | `/team/chalana-jayod` |

---

### 3.9 Free Online Tools Section

**Description**: A public-facing suite of client-side file-conversion utilities, accessible without registration and without uploading files to any server.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-TOOLS-01 | The section SHALL display four tool cards in a responsive grid (1 col mobile, 2 col tablet, 4 col desktop). |
| FR-TOOLS-02 | Clicking a tool card SHALL open a modal dialog containing the tool's interactive UI. |
| FR-TOOLS-03 | The modal SHALL have a sticky header with the tool title, description, and a close button. |
| FR-TOOLS-04 | A privacy badge SHALL be visible on the section, stating that all processing is local to the browser. |
| FR-TOOLS-05 | **No file data SHALL ever be sent to any external server** — all conversions MUST be performed in-browser using JavaScript libraries. |

**FR-TOOLS-T1: PDF to Image Tool**

| ID | Requirement |
|---|---|
| FR-TOOLS-T1-01 | The user SHALL be able to upload a PDF file via drag-and-drop or file browser. |
| FR-TOOLS-T1-02 | The tool SHALL render each page of the PDF as a preview image using `pdfjs-dist`. |
| FR-TOOLS-T1-03 | The user SHALL be able to select an output format: JPG or PNG. |
| FR-TOOLS-T1-04 | The user SHALL be able to download all pages as individual images or a single ZIP archive. |

**FR-TOOLS-T2: PDF to Word Tool**

| ID | Requirement |
|---|---|
| FR-TOOLS-T2-01 | The user SHALL be able to upload a PDF file. |
| FR-TOOLS-T2-02 | Text content SHALL be extracted from the PDF using `pdfjs-dist`. |
| FR-TOOLS-T2-03 | The extracted text SHALL be packaged into a `.docx` file using the `docx` library. |
| FR-TOOLS-T2-04 | The resulting `.docx` file SHALL be downloadable. |

**FR-TOOLS-T3: Word to PDF Tool**

| ID | Requirement |
|---|---|
| FR-TOOLS-T3-01 | The user SHALL be able to upload a `.docx` Word file. |
| FR-TOOLS-T3-02 | The file content SHALL be extracted using `mammoth`. |
| FR-TOOLS-T3-03 | The content SHALL be rendered into a PDF using `jspdf`. |
| FR-TOOLS-T3-04 | The resulting PDF SHALL be downloadable. |

**FR-TOOLS-T4: Image to PDF Tool**

| ID | Requirement |
|---|---|
| FR-TOOLS-T4-01 | The user SHALL be able to upload one or more image files (JPG, PNG). |
| FR-TOOLS-T4-02 | The user SHALL be able to reorder images via drag-and-drop before conversion. |
| FR-TOOLS-T4-03 | The tool SHALL combine all images into a single PDF using `pdf-lib` or `jspdf`. |
| FR-TOOLS-T4-04 | The user SHALL be able to select a page size (e.g., A4, Letter). |
| FR-TOOLS-T4-05 | The resulting PDF SHALL be downloadable. |

---

### 3.10 Contact Section

**Description**: A lead-capture contact form with dual-email delivery.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-CONTACT-01 | The contact form SHALL collect: Full Name, Email Address, and Message. |
| FR-CONTACT-02 | All three fields SHALL be required; the form SHALL not submit if any field is empty. |
| FR-CONTACT-03 | Email format SHALL be validated using the browser's native `type="email"` validation. |
| FR-CONTACT-04 | On submission, the system SHALL send an email to the company admin via EmailJS (template: `VITE_EMAILJS_TEMPLATE_ID_ADMIN`). |
| FR-CONTACT-05 | On submission, the system SHALL simultaneously send an auto-reply confirmation email to the user (template: `VITE_EMAILJS_TEMPLATE_ID_USER`). |
| FR-CONTACT-06 | Both emails SHALL be sent in parallel using `Promise.all`. |
| FR-CONTACT-07 | While the form is submitting, all fields and the submit button SHALL be disabled, and a spinner icon SHALL be displayed. |
| FR-CONTACT-08 | On success, a toast notification SHALL inform the user: "Message sent successfully! Check your email for a confirmation." |
| FR-CONTACT-09 | On failure, a toast notification SHALL inform the user: "Failed to send message. Please try again later." |
| FR-CONTACT-10 | On success, the form SHALL be reset to empty values. |
| FR-CONTACT-11 | Contact information (email, phone, WhatsApp, location, Facebook) SHALL be displayed alongside the form. |

---

### 3.11 Footer

**Description**: A multi-column footer with branding, quick links, and services list.

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-FOOTER-01 | The footer SHALL display the company logo, tagline, and social media icon links (Facebook, YouTube, WhatsApp, Email). |
| FR-FOOTER-02 | A "Quick Links" column SHALL list all main navigation sections. |
| FR-FOOTER-03 | A "Services" column SHALL list the first 7 services. |
| FR-FOOTER-04 | The footer SHALL display a copyright notice with the current year (dynamically computed). |

---

### 3.12 Theme Toggle (Light / Dark Mode)

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-THEME-01 | A floating theme-toggle button SHALL be persistently visible at a fixed position on the screen. |
| FR-THEME-02 | The system SHALL support Light and Dark themes using CSS custom properties (Tailwind CSS dark mode). |
| FR-THEME-03 | The user's theme preference SHALL be persisted across sessions (via `next-themes` library). |
| FR-THEME-04 | The toggle SHALL animate between sun and moon icons. |

---

### 3.13 WhatsApp Floating Button

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-WA-01 | A floating WhatsApp icon button SHALL be visible on all pages at a fixed position. |
| FR-WA-02 | Clicking it SHALL open `https://wa.me/94714257207` in a new browser tab. |
| FR-WA-03 | The button SHALL have a pulse or glow animation to draw attention. |

---

### 3.14 SEO & Structured Data

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-SEO-01 | Every page SHALL have a unique, descriptive `<title>` and `<meta name="description">` tag managed by `react-helmet-async`. |
| FR-SEO-02 | The home page SHALL include a JSON-LD `LocalBusiness` schema containing: name, address (Galle, LK), telephone, email, geolocation, opening hours, and social profiles. |
| FR-SEO-03 | A `sitemap.xml` SHALL be generated post-build via `scripts/generate-sitemap.js`. |
| FR-SEO-04 | All routes SHALL be pre-rendered to static HTML via `scripts/prerender.js` using Puppeteer as part of the build pipeline. |
| FR-SEO-05 | All images SHALL have meaningful `alt` attributes. |
| FR-SEO-06 | The site SHALL use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`, `<h1>`–`<h3>`). |

---

### 3.15 404 Not Found Page

**Functional Requirements**:

| ID | Requirement |
|---|---|
| FR-404-01 | Any unmatched URL route SHALL render the Not Found page. |
| FR-404-02 | The page SHALL clearly communicate that the page does not exist. |
| FR-404-03 | The page SHALL provide a link back to the home page. |

---

## 4. Non-Functional Requirements

### 4.1 Performance

| ID | Requirement |
|---|---|
| NFR-PERF-01 | All page routes SHALL be code-split via React `lazy()` and `Suspense` to minimize initial bundle size. |
| NFR-PERF-02 | The hero video and all `<img>` tags below-the-fold SHALL use lazy loading. |
| NFR-PERF-03 | The site SHALL target a Lighthouse Performance score ≥ 85 on mobile and ≥ 90 on desktop. |
| NFR-PERF-04 | The production build SHALL be generated using Vite's optimized build pipeline. |

### 4.2 Usability

| ID | Requirement |
|---|---|
| NFR-USAB-01 | The site SHALL be fully functional on viewport widths from 320px (mobile) to 2560px (4K desktop). |
| NFR-USAB-02 | Interactive elements (buttons, links) SHALL have clear hover and active states. |
| NFR-USAB-03 | All animations and transitions SHALL respect the user's `prefers-reduced-motion` media query where possible. |
| NFR-USAB-04 | Smooth scrolling SHALL be provided by the `lenis` library for all in-page anchor navigation. |

### 4.3 Reliability

| ID | Requirement |
|---|---|
| NFR-REL-01 | Contact form submission errors SHALL be gracefully caught, and the user SHALL be informed without a page crash. |
| NFR-REL-02 | If EmailJS environment variables are missing, the form SHALL display an informative error toast instead of throwing an unhandled exception. |
| NFR-REL-03 | The site SHALL remain accessible (displaying static content) even if third-party CDN assets (icons, Cloudinary) fail to load, through graceful degradation. |

### 4.4 Security

| ID | Requirement |
|---|---|
| NFR-SEC-01 | All third-party links SHALL open with `target="_blank"` and include `rel="noopener noreferrer"` to prevent tab-napping. |
| NFR-SEC-02 | EmailJS API keys SHALL be stored exclusively in environment variables (`VITE_EMAILJS_*`) and SHALL NOT be committed to source control. |
| NFR-SEC-03 | The `.env` file SHALL be listed in `.gitignore`. |
| NFR-SEC-04 | User-uploaded files in the free tools SHALL never leave the browser — no `fetch()` or `XMLHttpRequest` SHALL transmit file data to any remote server. |

### 4.5 Maintainability

| ID | Requirement |
|---|---|
| NFR-MAINT-01 | All project data (titles, descriptions, images, features) SHALL be centralized in `src/data/projects.ts` for easy updates. |
| NFR-MAINT-02 | All service definitions SHALL be centralized in `src/components/Services.tsx` in the exported `services` array. |
| NFR-MAINT-03 | All navigation links SHALL be centralized in the exported `navLinks` array in `src/components/Navbar.tsx`. |
| NFR-MAINT-04 | The codebase SHALL use TypeScript throughout to ensure type safety and reduce runtime errors. |
| NFR-MAINT-05 | ESLint SHALL be configured and passing with no errors in the production build. |

### 4.6 Accessibility

| ID | Requirement |
|---|---|
| NFR-ACC-01 | All interactive icon-only buttons (close, hamburger) SHALL have `aria-label` or `<span className="sr-only">` for screen reader compatibility. |
| NFR-ACC-02 | Form inputs SHALL be associated with their labels via `htmlFor` / `id` attributes. |
| NFR-ACC-03 | Color contrast for body text and interactive elements SHALL meet WCAG 2.1 AA standards. |

### 4.7 Scalability

| ID | Requirement |
|---|---|
| NFR-SCALE-01 | New projects SHALL be addable by appending to the `projects` array in `src/data/projects.ts` without changes to any other component. |
| NFR-SCALE-02 | New services SHALL be addable by appending to the `services` array in `src/components/Services.tsx`. |
| NFR-SCALE-03 | New team members SHALL be addable by creating a new portfolio page file and a new route in `src/App.tsx`. |

---

## 5. System Architecture & Technology Stack

### 5.1 High-Level Architecture

```
┌────────────────────────────────────────────────────────────┐
│                     User's Browser                         │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            React SPA (Client-Side)                  │   │
│  │                                                     │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Pages   │  │Components│  │  Free Tools      │  │   │
│  │  │ (Lazy)   │  │          │  │  (Browser APIs)  │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  │                                                     │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Zustand │  │ TanStack │  │  Framer Motion   │  │   │
│  │  │  Store   │  │  Query   │  │  Animations      │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
└──────────────────────────┼──────────────────────────────────┘
                           │ HTTPS
            ┌──────────────┼──────────────┐
            │              │              │
      ┌─────▼──────┐ ┌─────▼──────┐ ┌────▼──────────┐
      │  Vercel    │ │  EmailJS   │ │  Cloudinary   │
      │  (Hosting) │ │  (Email)   │ │  (Media CDN)  │
      └────────────┘ └────────────┘ └───────────────┘
```

### 5.2 Frontend Technology Stack

| Category | Technology | Version |
|---|---|---|
| **Build Tool** | Vite | ^5.4.19 |
| **Framework** | React | ^18.3.1 |
| **Language** | TypeScript | ^5.8.3 |
| **Styling** | Tailwind CSS | ^3.4.17 |
| **UI Primitives** | Radix UI (via shadcn/ui) | Various |
| **Animations** | Framer Motion | ^12.28.1 |
| **Smooth Scroll** | Lenis | ^1.3.17 |
| **Routing** | React Router DOM | ^6.30.1 |
| **State Management** | Zustand | ^5.0.11 |
| **Server State** | TanStack React Query | ^5.83.0 |
| **Forms** | React Hook Form + Zod | ^7.61.1 / ^3.25.76 |
| **Email** | EmailJS Browser | ^4.4.1 |
| **SEO** | React Helmet Async | ^2.0.5 |
| **PDF Processing** | pdfjs-dist, pdf-lib, jspdf | Multiple |
| **Document Processing** | mammoth, docx | Multiple |
| **File Handling** | JSZip, file-saver | Multiple |
| **Charts** | Recharts | ^2.15.4 |
| **Pre-rendering** | Puppeteer | ^25.3.0 |
| **Testing** | Vitest + Testing Library | ^3.2.4 |

### 5.3 Deployment & Infrastructure

| Aspect | Details |
|---|---|
| **Hosting** | Vercel |
| **SPA Routing** | `vercel.json` configured to rewrite all paths to `index.html` |
| **Build Command** | `vite build` → `generate-sitemap.js` → `prerender.js` |
| **Dev Server** | `vite` (hot module replacement) |
| **Domain** | `codetriolanka.lk` |
| **Media CDN** | Cloudinary (images and video assets) |

---

## 6. User Interface Requirements

### 6.1 Page Layout Structure

```
Homepage (/)
├── TopBar (contact info + social icons)
├── Navbar (logo + nav links + CTA)
├── #home     — Hero (full-viewport video bg)
├── #services — Services (auto-scroll carousel)
├── #tech-stack — Tech Stack (marquee)
├── #projects — Portfolio Grid
├── #about    — About + Stats
├── #team     — Team Cards
├── #free-tools — Free Tools Grid + Dialogs
├── #contact  — Contact Form + Info
├── Footer
├── ThemeToggle (fixed floating)
└── WhatsAppButton (fixed floating)

/project/:id
└── ProjectDetail page

/team/:member-slug
└── Individual Portfolio page

* (catch-all)
└── NotFound page
```

### 6.2 Design System

| Token | Light Mode | Dark Mode |
|---|---|---|
| **Primary** | Navy Dark | White |
| **Secondary** | Teal/Gold | Gold (#f2b53a) |
| **Background** | White | Dark Navy (#0a131f) |
| **Card** | White/Light | Slightly lighter navy |
| **Font Family** | Poppins (Google Fonts) | Same |
| **Border Radius** | xl (12px), 2xl (16px), full | Same |

### 6.3 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| `sm` | ≥ 640px |
| `md` | ≥ 768px |
| `lg` | ≥ 1024px |
| `xl` | ≥ 1280px |
| `2xl` | ≥ 1536px |

### 6.4 Animation Principles

- **Entrance animations**: Elements fade up (`opacity: 0 → 1`, `y: 30 → 0`) when entering the viewport (`whileInView`), triggered once.
- **Stagger**: Grids of cards stagger child animations at 0.1s intervals.
- **Hover effects**: Cards lift with `y: -5px` or `y: -6px` on hover.
- **Scroll-linked**: Hero text has parallax via `useScroll` + `useTransform`.
- **Continuous loops**: Services carousel and tech-stack marquee loop infinitely at constant speed (60s and 40s respectively).

---

## 7. External Interface Requirements

### 7.1 EmailJS Integration

| Parameter | Environment Variable | Description |
|---|---|---|
| Service ID | `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| Admin Template | `VITE_EMAILJS_TEMPLATE_ID_ADMIN` | Template sent to company |
| User Template | `VITE_EMAILJS_TEMPLATE_ID_USER` | Auto-reply template sent to submitter |
| Public Key | `VITE_EMAILJS_PUBLIC_KEY` | EmailJS account public key |

**Template Variables Used**:
- `user_name` — Submitter's name
- `user_email` — Submitter's email address
- `message` — Message body

### 7.2 Cloudinary CDN

- **Purpose**: Hosts all team member photos, project screenshots, and the hero background video.
- **Access**: Public read-only URLs embedded in source code.
- **Formats**: JPEG/PNG images, MP4 video.
- **Base URL**: `https://res.cloudinary.com/dicyqfwrf/`

### 7.3 Devicons CDN

- **Purpose**: Hosts technology logos for the Tech Stack marquee section.
- **Access**: Public CDN — `https://cdn.jsdelivr.net/gh/devicons/devicon/`

### 7.4 Vercel Deployment API

- The `vercel.json` file configures all URL patterns to be served by the built `index.html`, enabling client-side SPA routing.

---

## 8. Data Requirements

### 8.1 Project Data Schema (`src/data/projects.ts`)

```typescript
interface Project {
  id: string;               // URL slug (e.g., "tourism-website")
  title: string;            // Display title
  description: string;      // Short summary
  fullDescription: string;  // Long-form content for detail page
  image: string;            // Primary cover image URL
  images: string[];         // Gallery image URLs
  technologies: string[];   // Technology tag labels
  category: string;         // e.g., "Web Development", "Desktop Application"
  client: string;           // Client name
  year: string;             // Completion year
  liveUrl: string;          // Live demo URL or "#"
  githubUrl?: string;       // Optional GitHub link
  features: string[] | { [category: string]: string[] }; // Flat or grouped
}
```

### 8.2 Team Member Data (Inline per Portfolio File)

Each portfolio page (`src/pages/*Portfolio.tsx`) contains inline data covering:
- Personal bio, profile image URL
- Skills list
- Education history
- Work/project experience
- Social links (LinkedIn, GitHub, email)

### 8.3 Blog Post Data (`src/data/blogPosts.ts`)

Blog data (~269KB) is statically defined in the data file. The Blog section is currently **commented out** in the navigation and home page but the route `/blog/:id` remains registered for future activation.

### 8.4 Static Data Policy

All content data (projects, team, services, blog posts, tech stack) is **statically authored** in TypeScript files. There is no database or backend API for content. Updates require a code change and redeployment.

---

## 9. Constraints & Assumptions

### 9.1 Constraints

| # | Constraint |
|---|---|
| C-01 | **No backend server** — the project is a pure frontend SPA. Contact emails are handled entirely by EmailJS. |
| C-02 | **No user authentication** — there is no login system; all pages are public. |
| C-03 | **Static content** — adding or editing projects, services, or team members requires a code change and Vercel redeployment. |
| C-04 | **EmailJS rate limits** — the free EmailJS tier limits total email sends per month; high-traffic contact form usage may require a paid plan upgrade. |
| C-05 | **Browser API dependency** — free tools depend on browser support for `FileReader`, `Canvas`, `Blob`, and `URL.createObjectURL`. Older browsers may not be supported. |
| C-06 | **Puppeteer pre-rendering** — the `postbuild` script requires a headless Chrome installation, handled automatically by the `postinstall` script. |

### 9.2 Assumptions

| # | Assumption |
|---|---|
| A-01 | Vercel continues to offer free hosting sufficient for the site's traffic. |
| A-02 | Cloudinary URLs remain stable and the free Cloudinary tier is sufficient for current media volume. |
| A-03 | The `pdfjs-dist`, `pdf-lib`, `mammoth`, `docx`, and `jspdf` libraries remain actively maintained and browser-compatible. |
| A-04 | Google Fonts (Poppins) CDN is available; fallback system fonts are acceptable if unavailable. |
| A-05 | The blog section may be reactivated in a future version by uncommenting relevant code. |

---

## 10. Appendix

### 10.1 Portfolio Projects Summary

| # | Project ID | Title | Category | Client | Year |
|---|---|---|---|---|---|
| 1 | `tourism-website` | Tourism Website with Admin Dashboard & CMS | Web Development | Nature Escape Travels | 2026 |
| 2 | `flippy-crypto` | Flippy: Penguin-Inspired Crypto Platform | Web Development | Flippy Crypto | 2025 |
| 3 | `seko-crypto` | SEKO: Rabbit-Inspired Crypto Platform | Web Development | SEKO Crypto | 2025 |
| 4 | `institute-management-system` | Institute Management System (Web) | Web Application | Vidura Institute | 2024 |
| 5 | `gym-website` | GYM Website with Admin Dashboard & CMS | Web Development | The Gym Fitness Center | 2024 |
| 6 | `tea-collecting-web` | Tea Collecting Web Application | Web Application | Green Leaf Tea Center | 2024 |
| 7 | `vehicle-management-system` | Vehicle Service Management System | Web & Desktop | AutoCare Service Center | 2024 |
| 8 | `sweetshop-pos` | Sweetshop Management System \| POS | Desktop Application | Sweet Delights Shop | 2024 |
| 9 | `tea-collecting-desktop` | Tea Collecting System Desktop Application | Desktop Application | Green Leaf Tea Center | 2024 |
| 10 | `institute-management-desktop` | Institute Management System Desktop App | Desktop Application | Vidura Institute | 2024 |
| 11 | `gym-management-desktop` | GYM Management System Desktop Application | Desktop Application | The Gym Fitness Center | 2024 |

### 10.2 Services Offered

| # | Service | Icon |
|---|---|---|
| 1 | Web Development | Globe |
| 2 | SEO Services | TrendingUp |
| 3 | Mobile Apps | Smartphone |
| 4 | Desktop Applications | Computer |
| 5 | Database Solutions | Database |
| 6 | Network Solutions | Network |
| 7 | Custom Software | Cpu |
| 8 | AI Automation | Bot |
| 9 | Graphic Design | Palette |
| 10 | University Assignments | GraduationCap |
| 11 | Social Media Management | Share2 |
| 12 | Data Entry | FileSpreadsheet |

### 10.3 Application Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Index` | Main single-page corporate website |
| `/project/:id` | `ProjectDetails` | Individual project detail page |
| `/blog/:id` | `BlogPost` | Blog post page (future use) |
| `/team/senuda-adihetty` | `SenudaPortfolio` | Senuda's personal portfolio |
| `/team/pahasara-liyanage` | `PahasaraPortfolio` | Pahasara's personal portfolio |
| `/team/chalana-jayod` | `ChalanaPortfolio` | Chalana's personal portfolio |
| `/team/ravindu-kandawela` | `RavinduPortfolio` | Ravindu's personal portfolio |
| `*` | `NotFound` | 404 catch-all route |

### 10.4 Key File Structure

```
src/
├── App.tsx              — Root component with routing
├── main.tsx             — Application entry point
├── index.css            — Global CSS & Tailwind directives
├── pages/
│   ├── Index.tsx        — Home page assembly
│   ├── ProjectDetails.tsx
│   ├── BlogPost.tsx
│   ├── *Portfolio.tsx   — Individual team portfolios
│   └── NotFound.tsx
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx     — services[] array (exported)
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx       — navLinks[] array (exported)
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── WhatsAppButton.tsx
│   ├── SEO.tsx
│   ├── SmoothScroll.tsx
│   └── free-tools/
│       ├── FreeToolsSection.tsx
│       ├── PdfToImageTool.tsx
│       ├── PdfToWordTool.tsx
│       ├── WordToPdfTool.tsx
│       └── ImageToPdfTool.tsx
├── data/
│   ├── projects.ts      — All portfolio project data
│   └── blogPosts.ts     — Blog post data (future use)
├── api/
│   └── blog.api.ts
└── scripts/
    ├── generate-sitemap.js
    └── prerender.js
```

---

*End of Software Requirements Specification*

*Document prepared for: CodeTrio Lanka Solutions | Galle, Sri Lanka*
*Version 1.0 — August 2026*
