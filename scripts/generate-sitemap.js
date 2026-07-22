import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getRoutes } from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://codetriolanka.lk";

async function generateSitemap() {
  const routes = getRoutes();
  const date = new Date().toISOString().split("T")[0];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  const root = path.resolve(__dirname, "..");
  fs.writeFileSync(path.join(root, "dist/sitemap.xml"), sitemapContent);
  // Also write to public so it's available in dev, but mostly dist matters for production
  fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemapContent);
  
  console.log(`Generated sitemap.xml with ${routes.length} routes.`);
}

generateSitemap();
