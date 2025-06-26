import { useState } from "react";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
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
  const { toast } = useToast();
  const { data: products, isLoading } = useProducts();
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
      className: "bg-gray-900 border-frida-magenta text-white",
    });
  };

  const handleProductClick = (produto: any) => {
    navigate(`/produto/${produto.id}`);
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-white text-xl">Carregando FlixFrida...</div>
      </div>
    );
  }

  // Organizar produtos em diferentes seções
  const allProducts = products || [];
  const recentProducts = allProducts.slice(0, 6);
  const popularProducts = allProducts.slice(2, 8);
  const featuredProducts = allProducts.slice(1, 7);

  return (
    <div className="min-h-screen bg-netflix-black">
      <Header 
        onOpenCarrinho={() => setCarrinhoAberto(true)}
        onOpenLogin={() => setLoginAberto(true)}
        carrinhoCount={totalItems}
      />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[80vh] lg:h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent z-10"></div>
          
          {featuredProducts[0] && (
            <img
              src={featuredProducts[0].image_urls?.[0] || ''}
              alt="Hero"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1920&q=80';
              }}
            />
          )}
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="px-4 lg:px-8 max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-netflix">
                FlixFrida
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Descubra o mundo da costura através dos olhos de Frida. 
                Projetos únicos, aulas exclusivas e inspiração sem limites.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => featuredProducts[0] && handleProductClick(featuredProducts[0])}
                  className="bg-white text-netflix-black px-8 lg:px-10 py-4 lg:py-5 rounded font-bold text-base lg:text-lg hover:bg-gray-200 transition-colors flex items-center gap-3"
                >
                  ▶ Começar Agora
                </button>
                <button className="bg-gray-600/70 text-white px-8 lg:px-10 py-4 lg:py-5 rounded font-bold text-base lg:text-lg hover:bg-gray-600/90 transition-colors">
                  ℹ Mais Informações
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carrosséis de Produtos */}
        <div className="relative -mt-40 lg:-mt-48 z-30">
          <ProductCarousel
            title="🔥 Lançamentos"
            products={recentProducts}
            onProductClick={handleProductClick}
            onAddToCart={adicionarAoCarrinho}
          />

          <ProductCarousel
            title="⭐ Mais Populares"
            products={popularProducts}
            onProductClick={handleProductClick}
            onAddToCart={adicionarAoCarrinho}
          />

          <ProductCarousel
            title="🎨 Projetos em Destaque"
            products={featuredProducts}
            onProductClick={handleProductClick}
            onAddToCart={adicionarAoCarrinho}
          />

          {allProducts.length > 6 && (
            <ProductCarousel
              title="📚 Todos os Projetos"
              products={allProducts}
              onProductClick={handleProductClick}
              onAddToCart={adicionarAoCarrinho}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="bg-netflix-black/90 text-white py-16 mt-16">
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
