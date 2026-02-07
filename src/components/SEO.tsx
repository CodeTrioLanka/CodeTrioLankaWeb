import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = "CodeTrio Lanka | Best Software Company in Sri Lanka - Web & Mobile Apps",
    description = "CodeTrio Lanka is a top-rated software company in Sri Lanka. We specialize in custom software development, web design, mobile apps, and SEO services. Partner with Code Trio for digital excellence.",
    keywords = "CodeTrio, Code Trio, CodeTrio Lanka, Code Trio Solutions, Software Company Sri Lanka, Web Development, Mobile Apps, SEO, Digital Marketing, Galle Software, Sri Lanka Tech, Software Solutions, Best IT Company",
    image = "/src/assets/LOGO.jpg",
    url = "https://codetriolanka.lk",
}: SEOProps) => {
    const siteTitle = title.includes("CodeTrio") ? title : `${title} | CodeTrio Lanka Solutions`;
    const absoluteImage = image.startsWith("http") ? image : `${url}${image}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />

            {/* Structured Data for Software Company */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "CodeTrio Lanka Solutions",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "All",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "LKR"
                    },
                    "author": {
                        "@type": "Organization",
                        "name": "CodeTrio Lanka",
                        "url": "https://codetriolanka.lk"
                    }
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "CodeTrio Lanka",
                    "url": "https://codetriolanka.lk",
                    "logo": "https://codetriolanka.lk/src/assets/LOGO.jpg",
                    "sameAs": [
                        "https://www.facebook.com/codetriolanka",
                        "https://www.linkedin.com/company/codetriolanka"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+94-71-425-7207",
                        "contactType": "Customer Service",
                        "areaServed": "LK",
                        "availableLanguage": ["English", "Sinhala"]
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
