import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import WhyUsPage from "./pages/WhyUsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import EngineOilsPage from "./pages/products/EngineOilsPage";
import GearBrakeOilsPage from "./pages/products/GearBrakeOilsPage";
import GreasesPage from "./pages/products/GreasesPage";
import HydraulicOilsPage from "./pages/products/HydraulicOilsPage";
import CoolantsPage from "./pages/products/CoolantsPage";
import YzolLubricantsPage from "./pages/brands/YzolLubricantsPage";
import ScrollToTop from "./components/ScrollToTop";
import AnalyticsTracker from "./components/AnalyticsTracker";
import AnalyticsDebugger from "./components/AnalyticsDebugger";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsTracker />
        <AnalyticsDebugger />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/engine-oils" element={<EngineOilsPage />} />
          <Route path="/products/gear-brake-oils" element={<GearBrakeOilsPage />} />
          <Route path="/products/greases" element={<GreasesPage />} />
          <Route path="/products/hydraulic-oils" element={<HydraulicOilsPage />} />
          <Route path="/products/coolants" element={<CoolantsPage />} />
          <Route path="/brands/yzol-lubricants" element={<YzolLubricantsPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
