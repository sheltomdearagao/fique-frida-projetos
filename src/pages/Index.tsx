import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjetosSection from "@/components/ProjetosSection";
import Carrinho from "@/components/Carrinho";
import Login from "@/components/Login";
import { Link } from "react-router-dom";
import { ProductImageStack } from '@/components/ui/product-image-stack';

interface CarrinhoItem {
  id: string;
  nome: string;
  preco: string;
  precoNumerico: number;
  quantidade: number;
  imagem: string;
}

const Index = () => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [loginAberto, setLoginAberto] = useState(false);
  const [carrinhoItems, setCarrinhoItems] = useState<CarrinhoItem[]>([]);

  const adicionarAoCarrinho = (projeto: any) => {
    const itemExistente = carrinhoItems.find(item => item.id === projeto.id);
    
    if (itemExistente) {
      setCarrinhoItems(carrinhoItems.map(item =>
        item.id === projeto.id 
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinhoItems([...carrinhoItems, {
        id: projeto.id,
        nome: projeto.nome,
        preco: projeto.preco,
        precoNumerico: projeto.precoNumerico || parseFloat(projeto.preco.replace('R$ ', '').replace(',', '.')),
        quantidade: 1,
        imagem: projeto.imagem
      }]);
    }
  };

  const atualizarQuantidade = (id: string, quantidade: number) => {
    setCarrinhoItems(carrinhoItems.map(item =>
      item.id === id ? { ...item, quantidade } : item
    ));
  };

  const removerItem = (id: string) => {
    setCarrinhoItems(carrinhoItems.filter(item => item.id !== id));
  };

  const totalItems = carrinhoItems.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header 
        onOpenCarrinho={() => setCarrinhoAberto(true)}
        onOpenLogin={() => setLoginAberto(true)}
        carrinhoCount={totalItems}
      />
      <main className="pt-20">
        <HeroSection />
        <ProjetosSection onAdicionarAoCarrinho={adicionarAoCarrinho} />
        <footer className="bg-frida-dark text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-white mb-2">Fique Frida</h3>
              <p className="text-white/80">Projetos de Costura de Salvador, BA</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
              <Link 
                to="/termos-uso"
                className="text-white/60 hover:text-white/80 transition-colors text-sm font-medium"
              >
                Termos de Uso
              </Link>
              <span className="hidden sm:block text-white/30">•</span>
              <Link 
                to="/politica-privacidade"
                className="text-white/60 hover:text-white/80 transition-colors text-sm font-medium"
              >
                Política de Privacidade
              </Link>
            </div>
            
            <div className="text-center border-t border-white/20 pt-6">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Fique Frida. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <Carrinho
        isOpen={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
        items={carrinhoItems}
        onUpdateQuantity={atualizarQuantidade}
        onRemoveItem={removerItem}
      />

      <Login
        isOpen={loginAberto}
        onClose={() => setLoginAberto(false)}
      />
    </div>
  );
};

export default Index;
