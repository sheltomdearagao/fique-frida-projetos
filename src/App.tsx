
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Pagamento from "./pages/Pagamento";
import Sucesso from "./pages/Sucesso";
import Cadastro from "./pages/Cadastro";
import LoginPage from "./pages/LoginPage";
import Contato from "./pages/Contato";
import Dashboard from "./pages/Dashboard";
import TermosUso from "./pages/TermosUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/termos-uso" element={<TermosUso />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppFloat />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
