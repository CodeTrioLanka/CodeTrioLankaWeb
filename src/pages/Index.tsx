import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CodeTrio Lanka | Best Software Company in Sri Lanka - Web & Mobile Apps"
        description="CodeTrio Lanka is a top-rated software company in Sri Lanka. We specialize in custom software development, web design, mobile apps, and SEO services. Partner with Code Trio for digital excellence."
        keywords="CodeTrio, Code Trio, CodeTrio Lanka, Code Trio Solutions, Software Company Sri Lanka, Web Development, Mobile Apps, SEO, Digital Marketing, Galle Software, Sri Lanka Tech, Software Solutions, Best IT Company"
        url="https://codetriolanka.lk/"
      />
      <Helmet>
        <link rel="canonical" href="https://codetriolanka.lk/" />
        {/* JSON-LD Structured Data for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CodeTrio Lanka Solutions",
              "image": "https://codetriolanka.lk/logo.jpg",
              "@id": "https://codetriolanka.lk",
              "url": "https://codetriolanka.lk",
              "telephone": "+94714257207",
              "email": "codetriolankasolutions@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Galle",
                "addressCountry": "LK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.0535,
                "longitude": 80.2210
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61586191610766",
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
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
