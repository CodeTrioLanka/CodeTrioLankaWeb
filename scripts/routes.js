import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getRoutes() {
  const root = path.resolve(__dirname, "..");
  
  const projectsContent = fs.readFileSync(path.join(root, "src/data/projects.ts"), "utf-8");
  const blogPostsContent = fs.readFileSync(path.join(root, "src/data/blogPosts.ts"), "utf-8");

  const projectIds = [...projectsContent.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const blogPostIds = [...blogPostsContent.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);

  const staticRoutes = [
    "/",
    "/team/senuda-adihetty",
    "/team/pahasara-liyanage",
    "/team/chalana-jayod",
    "/team/ravindu-kandawela"
  ];

  const projectRoutes = projectIds.map(id => `/project/${id}`);
  const blogRoutes = blogPostIds.map(id => `/blog/${id}`);

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
