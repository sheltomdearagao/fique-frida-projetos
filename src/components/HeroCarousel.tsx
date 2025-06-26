
import { useState, useEffect } from "react";
import { Product } from "@/hooks/useProducts";

interface HeroCarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function HeroCarousel({ products, onProductClick }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (!products || products.length === 0) return null;

  const currentProduct = products[currentIndex];

  return (
    <div className="relative h-[80vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/60 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent z-10"></div>
      
      {/* Carrossel de Imagens */}
      <div className="relative w-full h-full">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={product.image_urls?.[0] || ''} 
              alt={product.name} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80';
              }} 
            />
          </div>
        ))}
      </div>
      
      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-frida-magenta scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="px-4 lg:px-8 max-w-3xl mx-0">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-netflix">Costure comigo</h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Descubra o mundo da costura através dos olhos da Fique Frida. 
            Projetos únicos, aulas exclusivas e inspiração sem limites.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => currentProduct && onProductClick(currentProduct)} 
              className="bg-white text-netflix-black px-8 lg:px-10 py-4 lg:py-5 rounded font-bold text-base lg:text-lg hover:bg-gray-200 transition-colors flex items-center gap-3"
            >
              ▶ Começar Agora
            </button>
            <button className="bg-gray-600/70 text-white px-8 lg:px-10 py-4 lg:py-5 rounded font-bold text-base lg:text-lg hover:bg-gray-600/90 transition-colors">
              Como Funciona
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
