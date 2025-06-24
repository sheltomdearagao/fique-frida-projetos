
import { useState } from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface CarrinhoItem {
  id: string;
  nome: string;
  preco: string;
  precoNumerico: number;
  quantidade: number;
  imagem: string;
}

interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
  items: CarrinhoItem[];
  onUpdateQuantity: (id: string, quantidade: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Carrinho({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CarrinhoProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const total = items.reduce((sum, item) => sum + (item.precoNumerico * item.quantidade), 0);

  const handleFinalizarCompra = () => {
    console.log('Finalizando compra do carrinho:', items);
    
    if (!isAuthenticated) {
      toast({
        title: "Login necessário",
        description: "Faça login para finalizar sua compra.",
        duration: 3000,
        className: "bg-white border-2 border-frida-yellow shadow-lg",
      });
      onClose();
      navigate('/login');
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho antes de finalizar a compra.",
        duration: 3000,
        className: "bg-white border-2 border-frida-yellow shadow-lg",
      });
      return;
    }
    
    // Redirecionar para página de pagamento com dados do carrinho
    onClose();
    navigate('/pagamento', { state: { carrinho: items, total } });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-frida-beige bg-frida-beige/30">
          <h3 className="font-display text-lg sm:text-xl text-frida-red font-bold">
            Seu Carrinho
          </h3>
          <button 
            onClick={onClose} 
            className="text-frida-dark/60 hover:text-frida-dark p-1 hover:bg-frida-beige rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[50vh] sm:max-h-96">
          {items.length === 0 ? (
            <div className="p-6 sm:p-8 text-center">
              <ShoppingCart className="mx-auto mb-4 text-frida-dark/40" size={48} />
              <p className="text-frida-dark/60 text-sm sm:text-base">Seu carrinho está vazio</p>
              <p className="text-frida-dark/40 text-xs sm:text-sm mt-2">
                Adicione alguns produtos incríveis!
              </p>
            </div>
          ) : (
            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-frida-beige/50 rounded-lg hover:bg-frida-beige/70 transition-colors">
                  <img 
                    src={item.imagem} 
                    alt={item.nome} 
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-frida-dark mb-1 text-sm sm:text-base truncate">
                      {item.nome}
                    </h4>
                    <p className="text-frida-red font-bold text-sm sm:text-base mb-2">
                      {item.preco}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantidade - 1))}
                          className="p-1 bg-white rounded-full hover:bg-frida-orange/20 transition-colors shadow-sm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-2 font-bold text-sm w-8 text-center">
                          {item.quantidade}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}
                          className="p-1 bg-white rounded-full hover:bg-frida-orange/20 transition-colors shadow-sm"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-frida-beige bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-base sm:text-lg">Total:</span>
              <span className="font-bold text-lg sm:text-xl text-frida-red">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button 
              onClick={handleFinalizarCompra}
              className="w-full bg-frida-red text-white py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-orange transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
