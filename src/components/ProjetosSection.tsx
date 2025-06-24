
import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products?.map(produto => (
            <div 
              key={produto.id} 
              onClick={() => handleVerDetalhes(produto)}
              className="bg-white border-2 border-frida-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
            >
              <div className="relative">
                <img 
                  src={produto.image_url || ''}
                  alt={produto.name}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`Erro ao carregar imagem para ${produto.name}:`, produto.image_url);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80';
                  }}
                  onLoad={() => {
                    console.log(`Imagem carregada com sucesso para ${produto.name}`);
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="font-display text-lg sm:text-xl text-frida-red mb-2 font-bold leading-tight group-hover:text-frida-orange transition-colors">
                  {produto.name}
                </h3>
                <p className="text-sm sm:text-base text-frida-dark/80 mb-3 sm:mb-4 leading-relaxed">
                  {produto.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-frida-dark/70">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <FileText size={14} className="sm:w-4 sm:h-4" />
                    <span>Moldes PDF</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Video size={14} className="sm:w-4 sm:h-4" />
                    <span>Aula YouTube</span>
                  </div>
                </div>

                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg sm:text-xl font-bold text-frida-green">
                      R$ {getPromotionalPrice(produto.price || 0).replace('.', ',')}
                    </span>
                    <span className="text-xs sm:text-sm bg-frida-green text-white px-2 py-1 rounded font-bold">
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

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVerDetalhes(produto);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-frida-red text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-orange transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Ver Detalhes
                  </button>
                  
                  {onAdicionarAoCarrinho && (
                    <button 
                      onClick={(e) => handleAdicionarCarrinho(e, produto)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border-2 border-frida-red text-frida-red px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-red hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span className="hidden sm:inline">Adicionar</span>
                      <span className="sm:hidden">+</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
