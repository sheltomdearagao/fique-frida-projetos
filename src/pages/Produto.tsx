
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import { useProducts } from "@/hooks/useProducts";
import { usePurchases } from "@/hooks/usePurchases";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { ProductImageStack } from '@/components/ui/product-image-stack';

export default function Produto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: products, isLoading } = useProducts();
  const { createPurchase } = usePurchases();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const produto = products?.find(p => p.id === id);

  const getPromotionalPrice = (price: number) => {
    return (price * 0.83).toFixed(2); // 17% de desconto no PIX (29,90 -> 24,90)
  };

  const handleComprar = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Login necessário",
        description: "Faça login para finalizar sua compra.",
        duration: 3000,
        className: "bg-white border-2 border-frida-yellow shadow-lg",
      });
      navigate('/login');
      return;
    }

    if (!produto) return;

    try {
      await createPurchase.mutateAsync({ productId: produto.id });
      navigate(`/curso/${produto.id}`);
    } catch (error) {
      console.error('Erro ao processar compra:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-center text-frida-dark">Carregando produto...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-frida-red mb-4">Produto não encontrado</h1>
              <button
                onClick={() => navigate('/')}
                className="bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
              >
                Voltar ao início
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-frida-dark hover:text-frida-red transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Voltar aos produtos
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Galeria de Imagens */}
              <div className="p-6">
                <ProductGallery images={produto.image_urls || []} />
              </div>
              
              {/* Informações do Produto */}
              <div className="p-6 lg:p-8">
                <h1 className="font-display text-2xl md:text-3xl text-frida-red mb-4 font-bold">
                  {produto.name}
                </h1>
                
                <p className="text-frida-dark/80 mb-6 leading-relaxed">
                  {produto.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-frida-green">
                      R$ {getPromotionalPrice(produto.price || 0).replace('.', ',')}
                    </span>
                    <span className="bg-frida-green text-white px-3 py-1 rounded-full text-sm font-bold">
                      PIX
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-frida-dark/60">
                    <span className="line-through">
                      R$ {produto.price?.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-sm">
                      em outros meios de pagamento
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-frida-green font-medium">
                    💰 Economize R$ {((produto.price || 0) - parseFloat(getPromotionalPrice(produto.price || 0))).toFixed(2).replace('.', ',')} pagando no PIX!
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-frida-dark/70">
                    <div className="w-2 h-2 bg-frida-green rounded-full"></div>
                    <span>Acesso vitalício ao conteúdo</span>
                  </div>
                  <div className="flex items-center gap-3 text-frida-dark/70">
                    <div className="w-2 h-2 bg-frida-green rounded-full"></div>
                    <span>Vídeo aula exclusiva</span>
                  </div>
                  <div className="flex items-center gap-3 text-frida-dark/70">
                    <div className="w-2 h-2 bg-frida-green rounded-full"></div>
                    <span>Moldes em PDF para download</span>
                  </div>
                </div>

                <button
                  onClick={handleComprar}
                  disabled={createPurchase.isPending}
                  className="w-full flex items-center justify-center gap-3 bg-frida-red text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-frida-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={20} />
                  {createPurchase.isPending ? 'Processando...' : 'Comprar Agora'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
