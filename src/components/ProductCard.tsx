
import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  produto: Product;
  onVerDetalhes: (produto: Product) => void;
  onAdicionarCarrinho?: (e: React.MouseEvent, produto: Product) => void;
}

export default function ProductCard({ produto, onVerDetalhes, onAdicionarCarrinho }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuy = async (product: Product) => {
    setIsLoading(true);
    
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
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getPromotionalPrice = (price: number) => {
    return (price * 0.83).toFixed(2);
  };

  const renderProductImages = (imageUrls: string[] | null, productName: string) => {
    if (!imageUrls || imageUrls.length === 0) {
      return (
        <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400">Sem imagem</span>
        </div>
      );
    }

    const mainImage = imageUrls[0];
    const secondaryImages = imageUrls.slice(1, 3);

    return (
      <div className="relative w-full h-48 sm:h-56 lg:h-64 flex gap-1">
        <div className="flex-1 relative overflow-hidden rounded-l-lg">
          <img 
            src={mainImage}
            alt={`${productName} - Imagem principal`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80';
            }}
          />
        </div>

        {secondaryImages.length > 0 && (
          <div className="w-20 sm:w-24 lg:w-28 flex flex-col gap-1">
            {secondaryImages.map((imageUrl, index) => (
              <div 
                key={index} 
                className={`flex-1 relative overflow-hidden ${
                  index === 0 ? 'rounded-tr-lg' : ''
                } ${
                  index === secondaryImages.length - 1 ? 'rounded-br-lg' : ''
                }`}
              >
                <img 
                  src={imageUrl}
                  alt={`${productName} - Imagem ${index + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
            ))}
            
            {secondaryImages.length === 1 && (
              <div className="flex-1 bg-gray-800 rounded-br-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      onClick={() => onVerDetalhes(produto)}
      className="bg-gray-900/95 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-frida-magenta/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group max-w-sm mx-auto"
    >
      <div className="relative overflow-hidden">
        {renderProductImages(produto.image_urls, produto.name)}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      
      <div className="p-5 lg:p-6">
        <h3 className="font-netflix text-xl lg:text-2xl text-white mb-3 font-bold leading-tight group-hover:text-frida-magenta transition-colors">
          {produto.name}
        </h3>
        <p className="text-sm lg:text-base text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {produto.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-frida-magenta" />
            <span>Moldes PDF</span>
          </div>
          <div className="flex items-center gap-2">
            <Video size={16} className="text-frida-magenta" />
            <span>Aula YouTube</span>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl lg:text-3xl font-bold text-frida-magenta">
              R$ {getPromotionalPrice(produto.price || 0).replace('.', ',')}
            </span>
            <span className="text-sm bg-frida-magenta text-white px-2 py-1 rounded font-bold">
              PIX
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 line-through">
              R$ {produto.price?.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs text-gray-500">
              outros meios
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onVerDetalhes(produto);
            }}
            className="w-full flex items-center justify-center gap-2 bg-frida-magenta text-white px-4 py-3 rounded-lg font-bold text-base hover:bg-frida-magenta/80 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowRight size={18} />
            Ver Detalhes
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleBuy(produto);
            }}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-frida-magenta text-frida-magenta px-4 py-3 rounded-lg font-bold text-base hover:bg-frida-magenta hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={18} />
            {isLoading ? 'Processando...' : 'Comprar Agora'}
          </button>
        </div>
      </div>
    </div>
  );
}
