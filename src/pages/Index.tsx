import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CodeTrio Lanka | Top Software & Web Development Company in Sri Lanka</title>
        <meta name="description" content="CodeTrio Lanka provides premium web design, software development, and mobile app solutions. We are the best software company in Sri Lanka for modern, responsive, and SEO-friendly websites." />
        <meta name="keywords" content="codetrio, codetrio lanka, web development sri lanka, software company sri lanka, web design sri lanka, best software company, mobile app development sri lanka, seo sri lanka, digital marketing sri lanka" />
        <link rel="canonical" href="https://www.codetriolanka.lk/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codetriolanka.lk/" />
        <meta property="og:title" content="CodeTrio Lanka | Top Software & Web Development Company in Sri Lanka" />
        <meta property="og:description" content="CodeTrio Lanka provides premium web design, software development, and mobile app solutions. We are the best software company in Sri Lanka." />
        <meta property="og:image" content="https://www.codetriolanka.lk/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.codetriolanka.lk/" />
        <meta property="twitter:title" content="CodeTrio Lanka | Top Software & Web Development Company in Sri Lanka" />
        <meta property="twitter:description" content="CodeTrio Lanka provides premium web design, software development, and mobile app solutions. We are the best software company in Sri Lanka." />
        <meta property="twitter:image" content="https://www.codetriolanka.lk/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CodeTrio Lanka Solutions",
              "image": "https://www.codetriolanka.lk/logo.jpg",
              "@id": "https://www.codetriolanka.lk",
              "url": "https://www.codetriolanka.lk",
              "telephone": "+94701234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street",
                "addressLocality": "Colombo",
                "postalCode": "00100",
                "addressCountry": "LK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.9271,
                "longitude": 79.8612
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/CodeTrioLanka",
                "https://www.instagram.com/codetriolanka",
                "https://www.linkedin.com/company/codetriolanka"
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <About />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
