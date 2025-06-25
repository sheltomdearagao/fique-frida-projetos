import HeroSection from "@/components/HeroSection";
import ProjetosSection from "@/components/ProjetosSection";
import SobreSection from "@/components/SobreSection";
import NewsletterSection from "@/components/NewsletterSection";
import { useState } from "react";
import { ProdutoCarrinho } from "@/types/produto-carrinho";
import { useCarrinho } from "@/hooks/use-carrinho";
import Header from "@/components/Header";
import DatabaseUpdater from "@/components/DatabaseUpdater";

export default function Index() {
  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);
  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <div className="min-h-screen bg-gradient-to-b from-frida-cream via-white to-frida-cream/50">
      <Header />
      <HeroSection />
      <ProjetosSection
        onAdicionarAoCarrinho={(produto) => {
          adicionarAoCarrinho(produto);
        }}
      />
      <SobreSection />
      <NewsletterSection />
      
      {/* Componente temporário para atualizar o banco */}
      <DatabaseUpdater />
    </div>
  );
}
