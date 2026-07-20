import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import BlogPost from "./pages/BlogPost";
import SenudaPortfolio from "./pages/SenudaPortfolio";
import PahasaraPortfolio from "./pages/PahasaraPortfolio";
import ChalanaPortfolio from "./pages/ChalanaPortfolio";
import RavinduPortfolio from "./pages/RavinduPortfolio";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SmoothScroll />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
