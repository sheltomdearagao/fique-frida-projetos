
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";
import ProductGrid from "./ProductGrid";

interface ProjetosSectionProps {
  onAdicionarAoCarrinho?: (projeto: any) => void;
}

export default function ProjetosSection({ onAdicionarAoCarrinho }: ProjetosSectionProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: products, isLoading, error } = useProducts();

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
        imagem: produto.image_urls?.[0] || ''
      };
      
      onAdicionarAoCarrinho(projetoFormatado);
      toast({
        title: "✅ Produto adicionado!",
        description: `${produto.name} foi adicionado ao seu carrinho.`,
        duration: 3000,
        className: "bg-gray-900 border-frida-magenta text-white",
      });
    }
  };

  if (isLoading) {
    return (
      <section id="projetos" className="py-12 md:py-16 bg-netflix-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white">Carregando projetos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Erro ao carregar produtos:', error);
    return (
      <section id="projetos" className="py-12 md:py-16 bg-netflix-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-red-500">Erro ao carregar projetos. Tente novamente.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projetos" className="py-12 md:py-16 bg-netflix-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-netflix text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-4 font-bold">
            Nossos Produtos
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Cada produto inclui moldes em PDF e acesso exclusivo à aula completa no YouTube
          </p>
        </div>

        <ProductGrid
          products={products || []}
          onVerDetalhes={handleVerDetalhes}
          onAdicionarCarrinho={onAdicionarAoCarrinho ? handleAdicionarCarrinho : undefined}
        />
      </div>
    </section>
  );
}
