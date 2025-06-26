import { useState } from "react";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import HeroCarousel from "@/components/HeroCarousel";
import Carrinho from "@/components/Carrinho";
import Login from "@/components/Login";
import { useProducts } from "@/hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface CarrinhoItem {
  id: string;
  nome: string;
  preco: string;
  precoNumerico: number;
  quantidade: number;
  imagem: string;
}

const Index = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    data: products,
    isLoading
  } = useProducts();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [loginAberto, setLoginAberto] = useState(false);
  const [carrinhoItems, setCarrinhoItems] = useState<CarrinhoItem[]>([]);
  const adicionarAoCarrinho = (produto: any) => {
    const itemExistente = carrinhoItems.find(item => item.id === produto.id);
    if (itemExistente) {
      setCarrinhoItems(carrinhoItems.map(item => 
        item.id === produto.id 
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinhoItems([...carrinhoItems, {
        id: produto.id,
        nome: produto.name,
        preco: `R$ ${((produto.price || 0) * 0.83).toFixed(2).replace('.', ',')}`,
        precoNumerico: (produto.price || 0) * 0.83,
        quantidade: 1,
        imagem: produto.image_urls?.[0] || ''
      }]);
    }
    toast({
      title: "✅ Produto adicionado!",
      description: `${produto.name} foi adicionado ao seu carrinho.`,
      duration: 3000,
      className: "bg-gray-900 border-frida-magenta text-white"
    });
  };
  const handleProductClick = (produto: any) => {
    navigate(`/produto/${produto.id}`);
  };
  const atualizarQuantidade = (id: string, quantidade: number) => {
    setCarrinhoItems(carrinhoItems.map(item => item.id === id ? {
      ...item,
      quantidade
    } : item));
  };
  const removerItem = (id: string) => {
    setCarrinhoItems(carrinhoItems.filter(item => item.id !== id));
  };
  const totalItems = carrinhoItems.reduce((sum, item) => sum + item.quantidade, 0);
  if (isLoading) {
    return <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-white text-xl">Carregando FlixFrida...</div>
      </div>;
  }
  const allProducts = products || [];
  return <div className="min-h-screen bg-netflix-black">
      <Header 
        onOpenCarrinho={() => setCarrinhoAberto(true)} 
        onOpenLogin={() => setLoginAberto(true)} 
        carrinhoCount={totalItems} 
      />
      
      <main>
        {/* Hero Section com Carrossel */}
        <HeroCarousel 
          products={allProducts} 
          onProductClick={handleProductClick} 
        />

        {/* Carrossel de Produtos */}
        <div className="relative -mt-40 lg:-mt-48 z-30">
          <ProductCarousel 
            title="🧵 Todos os Projetos de Costura" 
            products={allProducts} 
            onProductClick={handleProductClick} 
            onAddToCart={adicionarAoCarrinho} 
          />
        </div>

        {/* Footer */}
        <footer className="bg-netflix-black/90 text-white mt-16 py-[4px] my-[58px]">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="font-netflix text-3xl text-white mb-4">FlixFrida</h3>
              <p className="text-gray-400 text-lg">Costura • Arte • Inspiração</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
              <div>
                <h4 className="font-semibold mb-3 text-frida-magenta">Projetos</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Roupas</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Acessórios</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Decoração</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-frida-magenta">Suporte</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Ajuda</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-frida-magenta">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/termos-uso" className="hover:text-white transition-colors">Termos</a></li>
                  <li><a href="/politica-privacidade" className="hover:text-white transition-colors">Privacidade</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-frida-magenta">Social</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} FlixFrida. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <Carrinho isOpen={carrinhoAberto} onClose={() => setCarrinhoAberto(false)} items={carrinhoItems} onUpdateQuantity={atualizarQuantidade} onRemoveItem={removerItem} />

      <Login isOpen={loginAberto} onClose={() => setLoginAberto(false)} />
    </div>;
};
export default Index;
