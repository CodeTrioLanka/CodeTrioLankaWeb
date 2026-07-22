import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";

const Index = lazy(() => import("./pages/Index"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SenudaPortfolio = lazy(() => import("./pages/SenudaPortfolio"));
const PahasaraPortfolio = lazy(() => import("./pages/PahasaraPortfolio"));
const ChalanaPortfolio = lazy(() => import("./pages/ChalanaPortfolio"));
const RavinduPortfolio = lazy(() => import("./pages/RavinduPortfolio"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SmoothScroll />
        <BrowserRouter>
          <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/team/senuda-adihetty" element={<SenudaPortfolio />} />
              <Route path="/team/pahasara-liyanage" element={<PahasaraPortfolio />} />
              <Route path="/team/chalana-jayod" element={<ChalanaPortfolio />} />
              <Route path="/team/ravindu-kandawela" element={<RavinduPortfolio />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
