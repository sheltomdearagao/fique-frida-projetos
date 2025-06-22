
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjetosSection from "@/components/ProjetosSection";
import Carrinho from "@/components/Carrinho";
import Login from "@/components/Login";

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
      <main>
        <HeroSection />
        <ProjetosSection onAdicionarAoCarrinho={adicionarAoCarrinho} />
        <footer className="bg-frida-dark text-white py-8 text-center">
          <p>© {new Date().getFullYear()} Fique Frida - Projetos de Costura de Salvador, BA</p>
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
