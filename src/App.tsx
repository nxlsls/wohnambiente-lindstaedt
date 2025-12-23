import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import UeberMich from "./pages/UeberMich";
import Leistungen from "./pages/Leistungen";
import Insektenschutz from "./pages/Insektenschutz";
import Sonnenschutz from "./pages/Sonnenschutz";
import Gardinen from "./pages/Gardinen";
import Polsterei from "./pages/Polsterei";
import Galerie from "./pages/Galerie";
import Partner from "./pages/Partner";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/insektenschutz" element={<Insektenschutz />} />
            <Route path="/sonnenschutz" element={<Sonnenschutz />} />
            <Route path="/gardinen" element={<Gardinen />} />
            <Route path="/polsterei" element={<Polsterei />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
