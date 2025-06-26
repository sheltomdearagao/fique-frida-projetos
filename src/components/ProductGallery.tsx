
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0] || '');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar imagens válidas (não vazias)
  const validImages = images.filter(img => img && img.trim() !== '');
  
  if (validImages.length === 0) {
    return (
      <div className="w-full h-64 md:h-80 bg-frida-beige rounded-lg flex items-center justify-center">
        <p className="text-frida-dark/60">Nenhuma imagem disponível</p>
      </div>
    );
  }

  const handleThumbnailClick = (clickedImage: string) => {
    // Se a imagem clicada é diferente da principal, troca elas
    if (clickedImage !== mainImage) {
      setMainImage(clickedImage);
    }
  };

  const handleMainImageClick = () => {
    setIsModalOpen(true);
  };

  // Organizar thumbnails (todas as imagens exceto a principal)
  const thumbnails = validImages.filter(img => img !== mainImage);

  return (
    <>
      <div className="w-full space-y-4">
        {/* Imagem Principal */}
        <div className="relative">
          <img
            src={mainImage}
            alt="Produto em destaque"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-lg"
            onClick={handleMainImageClick}
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 rounded-lg" />
        </div>

        {/* Miniaturas */}
        {thumbnails.length > 0 && (
          <div className="flex gap-2 md:gap-3 justify-center">
            {thumbnails.map((image, index) => (
              <button
                key={`${image}-${index}`}
                onClick={() => handleThumbnailClick(image)}
                className="relative group"
              >
                <img
                  src={image}
                  alt={`Produto miniatura ${index + 1}`}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg border-2 border-frida-beige hover:border-frida-red transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/90 border-none">
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={mainImage}
              alt="Produto ampliado"
              className="max-w-full max-h-full object-contain"
            />
            <DialogClose className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
              <X className="w-6 h-6 text-white" />
              <span className="sr-only">Fechar</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
