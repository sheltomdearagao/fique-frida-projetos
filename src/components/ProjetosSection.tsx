
import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";
import { StackedCardsInteraction } from "@/components/StackedCards";

interface ProjetosSectionProps {
  onAdicionarAoCarrinho?: (projeto: any) => void;
}

export default function ProjetosSection({ onAdicionarAoCarrinho }: ProjetosSectionProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: products, isLoading, error } = useProducts();

  // Debug: verificar dados dos produtos
  console.log('Produtos carregados:', products);
  products?.forEach(produto => {
    console.log(`Produto: ${produto.name}`);
    console.log(`URL da imagem: ${produto.image_url}`);
  });

  const handleVerDetalhes = (produto: any) => {
    navigate(`/produto/${produto.id}`);
  };

  const handleAdicionarCarrinho = (e: React.MouseEvent, produto: any) => {
    e.stopPropagation(); // Evita que o clique no card seja acionado
    
    if (onAdicionarAoCarrinho) {
      // Converter o produto para o formato esperado pelo carrinho
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
    return (price * 0.83).toFixed(2); // 17% de desconto no PIX (29,90 -> 24,90)
  };

  if (isLoading) {
    return (
      <section id="projetos" className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-frida-dark">Carregando projetos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Erro ao carregar produtos:', error);
    return (
      <section id="projetos" className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-red-500">Erro ao carregar projetos. Tente novamente.</p>
        </div>
      </section>
    );
  }

  // Converter produtos para formato StackedCards
  const cardsData = products?.map(produto => ({
    image: produto.image_url || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    title: produto.name,
    description: produto.description || '',
    produto: produto, // Manter referência ao produto original
  })) || [];

  return (
    <section id="projetos" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-frida-blue mb-3 md:mb-4 font-bold">
            Nossos Produtos
          </h2>
          <p className="text-base md:text-lg text-frida-dark max-w-2xl mx-auto px-4">
            Cada produto inclui moldes em PDF e acesso exclusivo à aula completa no YouTube
          </p>
        </div>

        <div className="flex justify-center">
          <StackedCardsInteraction cards={cardsData} />
        </div>
      </div>
    </section>
  );
}
