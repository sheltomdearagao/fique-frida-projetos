
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Product } from "@/hooks/useProducts";

interface ProductCarouselProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCarousel({
  title,
  products,
  onProductClick,
  onAddToCart
}: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.8;
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }, 300);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="relative group mb-8 lg:mb-12">
      {/* Container do Carrossel */}
      <div className="relative">
        {/* Botão Esquerda */}
        {canScrollLeft && (
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-2 lg:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        )}

        {/* Botão Direita */}
        {canScrollRight && (
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white p-2 lg:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        )}

        {/* Container dos Cards */}
        <div 
          ref={scrollContainerRef} 
          onScroll={handleScroll} 
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }} 
          className="flex gap-3 overflow-x-auto hide-scrollbar px-4 lg:px-8 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 py-4 lg:py-8"
        >
          {products.map(product => (
            <div 
              key={product.id} 
              onClick={() => onProductClick(product)} 
              className="flex-none w-[280px] sm:w-[320px] md:w-auto bg-gray-900/95 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-frida-magenta/20 group/card"
            >
              {/* Imagem do Produto */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image_urls?.[0] || ''} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" 
                  onError={e => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80';
                  }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Informações do Produto */}
              <div className="p-4 lg:p-5">
                <h3 className="text-white text-lg lg:text-xl mb-2 line-clamp-2 leading-tight font-semibold">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 text-sm lg:text-base mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-frida-magenta font-bold text-lg lg:text-xl">
                      R$ {((product.price || 0) * 0.83).toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-gray-400 text-xs line-through">
                      R$ {(product.price || 0).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <button 
                    onClick={e => {
                      e.stopPropagation();
                      onAddToCart?.(product);
                    }} 
                    className="bg-frida-magenta hover:bg-frida-magenta/80 text-white px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base hover:scale-105 active:scale-95"
                  >
                    Quero!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
