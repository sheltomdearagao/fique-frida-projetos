
import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  produto: Product;
  onVerDetalhes: (produto: Product) => void;
  onAdicionarCarrinho?: (e: React.MouseEvent, produto: Product) => void;
}

export default function ProductCard({ produto, onVerDetalhes, onAdicionarCarrinho }: ProductCardProps) {
  const getPromotionalPrice = (price: number) => {
    return (price * 0.83).toFixed(2);
  };

  const renderProductImages = (imageUrls: string[] | null, productName: string) => {
    if (!imageUrls || imageUrls.length === 0) {
      return (
        <div className="w-full h-40 sm:h-48 md:h-52 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400">Sem imagem</span>
        </div>
      );
    }

    const mainImage = imageUrls[0];
    const secondaryImages = imageUrls.slice(1, 3);

    return (
      <div className="relative w-full h-40 sm:h-48 md:h-52 flex gap-1">
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
          <div className="w-20 sm:w-24 flex flex-col gap-1">
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
      className="bg-gray-900/95 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-frida-magenta/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        {renderProductImages(produto.image_urls, produto.name)}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      
      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="font-netflix text-lg sm:text-xl text-white mb-2 font-bold leading-tight group-hover:text-frida-magenta transition-colors">
          {produto.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
          {produto.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <FileText size={14} className="sm:w-4 sm:h-4 text-frida-magenta" />
            <span>Moldes PDF</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Video size={14} className="sm:w-4 sm:h-4 text-frida-magenta" />
            <span>Aula YouTube</span>
          </div>
        </div>

        <div className="mb-4 sm:mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg sm:text-xl font-bold text-frida-magenta">
              R$ {getPromotionalPrice(produto.price || 0).replace('.', ',')}
            </span>
            <span className="text-xs sm:text-sm bg-frida-magenta text-white px-2 py-1 rounded font-bold">
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

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onVerDetalhes(produto);
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-frida-magenta text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-magenta/80 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            Ver Detalhes
          </button>
          
          {onAdicionarCarrinho && (
            <button 
              onClick={(e) => onAdicionarCarrinho(e, produto)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border-2 border-frida-magenta text-frida-magenta px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-magenta hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Adicionar</span>
              <span className="sm:hidden">+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
