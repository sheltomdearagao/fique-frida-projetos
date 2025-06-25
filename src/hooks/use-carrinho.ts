
import { useState } from "react";
import { ProdutoCarrinho } from "@/types/produto-carrinho";
import { useToast } from "@/hooks/use-toast";

export const useCarrinho = () => {
  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);
  const { toast } = useToast();

  const adicionarAoCarrinho = (produto: Omit<ProdutoCarrinho, 'quantidade'>) => {
    setCarrinho(prev => {
      const existingItem = prev.find(item => item.id === produto.id);
      
      if (existingItem) {
        toast({
          title: "Produto atualizado",
          description: `${produto.nome} já está no carrinho. Quantidade aumentada.`,
        });
        return prev.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        toast({
          title: "Produto adicionado",
          description: `${produto.nome} foi adicionado ao carrinho.`,
        });
        return [...prev, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (id: string) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const totalPreco = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);

  return {
    carrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    limparCarrinho,
    totalItens,
    totalPreco,
  };
};
