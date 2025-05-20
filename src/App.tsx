import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CommunityPage from "./pages/community/CommunityPage";
import TherapyPage from "./pages/therapy/TherapyPage";
import ProgressPage from "./pages/progress/ProgressPage";
import NotFound from "./pages/NotFound";
import SupportPage from "./pages/support/SupportPage";
import ResourcesPage from "./pages/support/ResourcesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<CommunityPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/therapy" element={<TherapyPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
