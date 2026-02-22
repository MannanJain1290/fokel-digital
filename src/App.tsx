import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomelaneCaseStudy from "./pages/HomelaneCaseStudy";
import WtcCaseStudy from "./pages/WtcCaseStudy";
import GenesLecoanetCaseStudy from "./pages/GenesLecoanetCaseStudy";
import Blueleopardmedia from "./pages/Blueleopardmedia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/homelane" element={<HomelaneCaseStudy />} />
          <Route path="/work/wtc-2026" element={<WtcCaseStudy />} />
          <Route path="/work/genes-lecoanet-hemant" element={<GenesLecoanetCaseStudy />} />
          <Route path="/work/blue-leopard-media" element={<Blueleopardmedia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
