import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import { getRoutes } from "./routes.js";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const distPath = path.join(root, "dist");

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn("npm", ["run", "preview", "--", "--port", "4173"], { stdio: 'ignore', shell: true });
    
    // Give it a second to start
    setTimeout(() => {
      resolve(server);
    }, 2000);

    server.on('error', (err) => {
      reject(err);
    });
  });
}

async function prerender() {
  console.log("Starting static server for prerendering...");
  let server;
  try {
    server = await startServer();
  } catch(e) {
    console.log("Failed to start server. Make sure you have 'serve' installed.");
    process.exit(1);
  }

  console.log("Starting Puppeteer...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const routes = getRoutes();
  console.log(`Found ${routes.length} routes to prerender.`);

  for (const route of routes) {
    const url = `http://localhost:4173${route}`;
    console.log(`Prerendering ${route}...`);
    
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      
      // Wait an extra small amount of time for any React hydration or Framer Motion entrance animations to settle
      await sleep(1000);
      
      const html = await page.content();
      
      // Save the HTML
      const routePath = route === "/" ? "/index.html" : `${route}/index.html`;
      const fullPath = path.join(distPath, routePath);
      
      // Ensure directory exists
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(fullPath, html);
    } catch (e) {
      console.error(`Failed to prerender ${route}:`, e.message);
    }
  }

  await browser.close();
  server.kill();
  console.log("Prerendering complete!");
}

prerender();
