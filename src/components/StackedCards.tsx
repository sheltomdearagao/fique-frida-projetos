
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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
      <div className="relative h-48 rounded-xl shadow-lg overflow-hidden w-[calc(100%-1rem)] mx-2 mt-2">
        <img
          src={image}
          alt="card"
          className="object-cover mt-0 w-full h-full"
        />
      </div>
    )}
    {children && (
      <div className="px-4 p-2 flex flex-col gap-y-2 h-[calc(100%-12rem)]">{children}</div>
    )}
  </div>
);
};

interface CardData {
image: string;
title: string;
description: string;
produto?: any;
}

const StackedCardsInteraction = ({
cards,
spreadDistance = 40,
rotationAngle = 5,
animationDelay = 0.1,
onAdicionarAoCarrinho,
}: {
cards: CardData[];
spreadDistance?: number;
rotationAngle?: number;
animationDelay?: number;
onAdicionarAoCarrinho?: (projeto: any) => void;
}) => {
const [isHovering, setIsHovering] = useState(false);
const navigate = useNavigate();
const { toast } = useToast();

// Limit to maximum of 3 cards
const limitedCards = cards.slice(0, 3);

const handleVerDetalhes = (produto: any) => {
  navigate(`/produto/${produto.id}`);
};

const handleAdicionarCarrinho = (e: React.MouseEvent, produto: any) => {
  e.stopPropagation();
  
  if (onAdicionarAoCarrinho) {
    const projetoFormatado = {
      id: produto.id,
      nome: produto.name,
      preco: `R$ ${produto.price?.toFixed(2).replace('.', ',')}`,
      precoNumerico: produto.price || 0,
      imagem: produto.image_url || ''
    };
    
    onAdicionarAoCarrinho(projetoFormatado);
    toast({
      title: "✅ Produto adicionado!",
      description: `${produto.name} foi adicionado ao seu carrinho.`,
      duration: 3000,
      className: "bg-white border-2 border-frida-green shadow-lg",
    });
  }
};

const getPromotionalPrice = (price: number) => {
  return (price * 0.83).toFixed(2);
};

return (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[350px] h-[400px]">
      {limitedCards.map((card, index) => {
        const isFirst = index === 0;
        const produto = card.produto;

        let xOffset = 0;
        let rotation = 0;

        if (limitedCards.length > 1) {
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
            key={index}
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
              image={card.image}
            >
              <h3 className="font-display text-lg text-frida-red mb-2 font-bold leading-tight">
                {card.title}
              </h3>
              <p className="text-sm text-frida-dark/80 mb-3 leading-relaxed flex-1">
                {card.description}
              </p>
              
              {produto && (
                <>
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-frida-dark/70">
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>Moldes PDF</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video size={14} />
                      <span>Aula YouTube</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-frida-green">
                        R$ {getPromotionalPrice(produto.price || 0).replace('.', ',')}
                      </span>
                      <span className="text-xs bg-frida-green text-white px-2 py-1 rounded font-bold">
                        PIX
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-frida-dark/60 line-through">
                        R$ {produto.price?.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-frida-dark/50">
                        outros meios
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVerDetalhes(produto);
                      }}
                      className="flex items-center justify-center gap-2 bg-frida-red text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-frida-orange transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <ArrowRight size={16} />
                      Ver Detalhes
                    </button>
                    
                    {onAdicionarAoCarrinho && (
                      <button 
                        onClick={(e) => handleAdicionarCarrinho(e, produto)}
                        className="flex items-center justify-center gap-2 bg-transparent border-2 border-frida-red text-frida-red px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-frida-red hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <ShoppingCart size={16} />
                        Adicionar
                      </button>
                    )}
                  </div>
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

export { StackedCardsInteraction, Card };
