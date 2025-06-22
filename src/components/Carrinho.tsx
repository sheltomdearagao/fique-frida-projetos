
import { useState } from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";

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
  const total = items.reduce((sum, item) => sum + (item.precoNumerico * item.quantidade), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="font-display text-xl text-frida-red font-bold">
            Seu Carrinho
          </h3>
          <button onClick={onClose} className="text-frida-dark/60 hover:text-frida-dark">
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-96">
          {items.length === 0 ? (
            <div className="p-6 text-center">
              <ShoppingCart className="mx-auto mb-4 text-frida-dark/40" size={48} />
              <p className="text-frida-dark/60">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-frida-beige rounded-lg">
                  <img src={item.imagem} alt={item.nome} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-bold text-frida-dark mb-1">{item.nome}</h4>
                    <p className="text-frida-red font-bold">{item.preco}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantidade - 1))}
                        className="p-1 bg-white rounded hover:bg-frida-orange/10"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-2 font-bold">{item.quantidade}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}
                        className="p-1 bg-white rounded hover:bg-frida-orange/10"
                      >
                        <Plus size={16} />
                      </button>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
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
          <div className="p-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-xl text-frida-red">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button className="w-full bg-frida-red text-white py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
