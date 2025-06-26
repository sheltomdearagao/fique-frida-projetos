import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import { useProducts } from "@/hooks/useProducts";
import { useToast } from "@/hooks/use-toast";

export default function Produto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: products, isLoading } = useProducts();
  const { toast } = useToast();
  const [isBuyLoading, setIsBuyLoading] = useState(false);

  const produto = products?.find(p => p.id === id);

  const handleBuy = async (product: any) => {
    setIsBuyLoading(true);
    
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.init_point;
      } else {
        throw new Error(data.error || 'Erro ao iniciar o pagamento.');
      }
    } catch (error) {
      console.error('Falha ao criar o pagamento:', error);
      toast({
        title: "❌ Erro no pagamento",
        description: error.message || "Houve um erro ao processar o pagamento. Tente novamente.",
        duration: 5000,
        className: "bg-gray-900 border-red-500 text-white",
      });
    } finally {
      setIsBuyLoading(false);
    }
  };

  const getPromotionalPrice = (price: number) => {
    return (price * 0.83).toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-white text-xl">Carregando produto...</div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Produto não encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-frida-magenta text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-magenta/80 transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Voltar aos produtos
          </button>

          <div className="bg-netflix-gray/50 rounded-xl shadow-lg overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Galeria de Imagens */}
              <div className="p-6">
                <ProductGallery images={produto.image_urls || []} />
              </div>
              
              {/* Informações do Produto */}
              <div className="p-6 lg:p-8">
                <h1 className="font-netflix text-2xl md:text-3xl text-white mb-4 font-bold">
                  {produto.name}
                </h1>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {produto.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-frida-cyan">
                      R$ {getPromotionalPrice(produto.price || 0).replace('.', ',')}
                    </span>
                    <span className="bg-frida-cyan text-netflix-black px-3 py-1 rounded-full text-sm font-bold">
                      PIX
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="line-through">
                      R$ {produto.price?.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-sm">
                      em outros meios de pagamento
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-frida-cyan font-medium">
                    💰 Economize R$ {((produto.price || 0) - parseFloat(getPromotionalPrice(produto.price || 0))).toFixed(2).replace('.', ',')} pagando no PIX!
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-frida-cyan rounded-full"></div>
                    <span>Acesso vitalício ao conteúdo</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-frida-cyan rounded-full"></div>
                    <span>Vídeo aula exclusiva</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-frida-cyan rounded-full"></div>
                    <span>Moldes em PDF para download</span>
                  </div>
                </div>

                <button
                  onClick={() => handleBuy(produto)}
                  disabled={isBuyLoading}
                  className="w-full flex items-center justify-center gap-3 bg-frida-magenta text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-frida-magenta/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={20} />
                  {isBuyLoading ? 'Processando...' : 'Comprar Agora'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
