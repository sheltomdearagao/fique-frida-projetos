
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-[350px] cursor-pointer h-[400px] overflow-hidden bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.02)] border border-gray-200/80",
        className
      )}
    >
      {image && (
        <div className="relative h-72 rounded-xl shadow-lg overflow-hidden w-[calc(100%-1rem)] mx-2 mt-2">
          <img
            src={image}
            alt="card"
            className="object-cover mt-0 w-full h-full"
          />
        </div>
      )}
      {children && (
        <div className="px-4 p-2 flex flex-col gap-y-2">{children}</div>
      )}
    </div>
  );
};

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  image_urls: string[] | null;
}

const ProductImageStack = ({
  product,
  spreadDistance = 40,
  rotationAngle = 5,
  animationDelay = 0.1,
}: {
  product: Product;
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  // Filtrar imagens válidas e limitar a máximo 3
  const validImages = (product.image_urls || []).filter(img => img && img.trim() !== '').slice(0, 3);
  
  // Se não há imagens válidas, não renderizar o componente
  if (validImages.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[350px] h-[400px]">
        {validImages.map((imageUrl, index) => {
          const isFirst = index === 0;

          let xOffset = 0;
          let rotation = 0;

          if (validImages.length > 1) {
            // Primeiro card fica no lugar
            // Segundo card vai para a esquerda
            // Terceiro card vai para a direita
            if (index === 1) {
              xOffset = -spreadDistance;
              rotation = -rotationAngle;
            } else if (index === 2) {
              xOffset = spreadDistance;
              rotation = rotationAngle;
            }
          }

          return (
            <motion.div
              key={`${product.id}-${index}`}
              className={cn("absolute", isFirst ? "z-10" : "z-0")}
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: isHovering ? xOffset : 0,
                rotate: isHovering ? rotation : 0,
                zIndex: isFirst ? 10 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * animationDelay,
                type: "spring",
              }}
              {...(isFirst && {
                onHoverStart: () => setIsHovering(true),
                onHoverEnd: () => setIsHovering(false),
              })}
            >
              <Card
                className={isFirst ? "z-10 cursor-pointer" : "z-0"}
                image={imageUrl}
              >
                {/* Só o primeiro card (principal) mostra o texto */}
                {isFirst && (
                  <>
                    <h2 className="font-bold text-lg text-frida-red line-clamp-2">
                      {product.name}
                    </h2>
                    <p className="text-sm text-frida-dark/80 line-clamp-3">
                      {product.description}
                    </p>
                    {product.price && (
                      <p className="text-lg font-bold text-frida-green mt-2">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </p>
                    )}
                  </>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { ProductImageStack, Card };
