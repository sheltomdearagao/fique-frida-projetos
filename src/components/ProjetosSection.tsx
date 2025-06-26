import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast"; // Supondo que este caminho está correto ou configurado
import { useProducts } from "@/hooks/useProducts";
import { StackedCardsInteraction } from './StackedCards'; // CAMINHO CORRIGIDO

interface ProjetosSectionProps {
  onAdicionarAoCarrinho?: (projeto: any) => void;
}

export default function ProjetosSection({ onAdicionarAoCarrinho }: ProjetosSectionProps) {
  const { toast } = useToast();
  const { data: products, isLoading, error } = useProducts();

  const handleAdicionarCarrinho = (e: React.MouseEvent, produto: any) => {
    e.stopPropagation();
    if (onAdicionarAoCarrinho) {
      const projetoFormatado = {
        id: produto.id,
        nome: produto.name,
        precoNumerico: produto.price || 0,
        imagem: (produto.image_urls && produto.image_urls[0]) || ''
      };
      onAdicionarAoCarrinho(projetoFormatado);
      toast({
        title: "✅ Produto adicionado!",
        description: `${produto.name} foi adicionado ao seu carrinho.`,
      });
    }
  };

  if (isLoading) return <section id="projetos" className="py-16 text-center">Carregando projetos...</section>;
  if (error) return <section id="projetos" className="py-16 text-center text-red-500">Erro ao carregar projetos.</section>;

  return (
    <section id="projetos" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-frida-blue font-bold">Nossos Produtos</h2>
          <p className="text-lg text-frida-dark max-w-2xl mx-auto mt-4">Cada produto inclui moldes em PDF e acesso exclusivo à aula completa no YouTube</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {products?.map(produto => {
            const cardsParaAnimacao = (produto.image_urls || []).map((url, index) => ({
              image: url,
              title: index === 0 ? produto.name : '',
              description: index === 0 ? produto.description || '' : '',
            }));

            if (cardsParaAnimacao.length === 0) {
              cardsParaAnimacao.push({
                image: 'https://placehold.co/600x400/EEE/31343C?text=Imagem+Indisponível',
                title: produto.name,
                description: produto.description || '',
              });
            }
            
            return (
              <div key={produto.id} className="flex flex-col items-center gap-y-4">
                <Link to={`/produto/${produto.id}`} className="cursor-pointer">
                  <StackedCardsInteraction cards={cardsParaAnimacao} />
                </Link>

                <div className="flex w-[350px]">
                  {onAdicionarAoCarrinho && (
                    <button 
                      onClick={(e) => handleAdicionarCarrinho(e, produto)}
                      className="w-full flex items-center justify-center gap-2 bg-frida-red text-white px-4 py-3 rounded-lg font-bold text-base hover:bg-frida-orange transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <ShoppingCart size={18} />
                      <span>Adicionar ao Carrinho</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
