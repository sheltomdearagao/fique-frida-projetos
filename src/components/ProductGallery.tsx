
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0] || '');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validImages = images.filter(img => img && img.trim() !== '');
  
  if (validImages.length === 0) {
    return (
      <div className="w-full h-64 md:h-80 bg-netflix-gray rounded-lg flex items-center justify-center border border-gray-700">
        <p className="text-gray-500">Nenhuma imagem disponível</p>
      </div>
    );
  }

  const handleThumbnailClick = (clickedImage: string) => {
    if (clickedImage !== mainImage) {
      setMainImage(clickedImage);
    }
  };

  const handleMainImageClick = () => {
    setIsModalOpen(true);
  };

  const thumbnails = validImages.filter(img => img !== mainImage);

  return (
    <>
      <div className="w-full space-y-4">
        {/* Imagem Principal */}
        <div className="relative">
          <img
            src={mainImage}
            alt="Produto em destaque"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-2xl border border-gray-700"
            onClick={handleMainImageClick}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 rounded-lg" />
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
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-lg border-2 border-gray-700 hover:border-frida-magenta transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
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
