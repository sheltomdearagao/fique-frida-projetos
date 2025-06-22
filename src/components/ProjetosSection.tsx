
import { FileText, Video, ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const projetos = [
  {
    id: 1,
    nome: "Mochila Urban Style",
    preco: "R$ 47,90",
    imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
    descricao: "Mochila moderna e prática para o dia a dia",
    nivel: "Intermediário"
  },
  {
    id: 2,
    nome: "Pochete Vintage",
    preco: "R$ 32,90", 
    imagem: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80",
    descricao: "Pochete estilosa com toque retrô",
    nivel: "Iniciante"
  },
  {
    id: 3,
    nome: "Necessaire Floral",
    preco: "R$ 29,90",
    imagem: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=400&q=80", 
    descricao: "Necessaire com estampa delicada",
    nivel: "Iniciante"
  },
  {
    id: 4,
    nome: "Shoulder Bag Elegante",
    preco: "R$ 52,90",
    imagem: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80",
    descricao: "Bolsa de ombro sofisticada",
    nivel: "Avançado"
  }
];

interface ProjetosSectionProps {
  onAdicionarAoCarrinho: (projeto: any) => void;
}

export default function ProjetosSection({ onAdicionarAoCarrinho }: ProjetosSectionProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleComprarAgora = (projeto: any) => {
    // Adiciona ao carrinho e vai direto para pagamento
    onAdicionarAoCarrinho(projeto);
    navigate('/pagamento');
  };

  const handleAdicionarCarrinho = (projeto: any) => {
    onAdicionarAoCarrinho(projeto);
    toast({
      title: "✅ Produto adicionado!",
      description: `${projeto.nome} foi adicionado ao seu carrinho.`,
      duration: 3000,
      className: "bg-white border-2 border-frida-green shadow-lg",
    });
  };

  return (
    <section id="projetos" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-frida-blue mb-3 md:mb-4 font-bold">
            Nossos Projetos
          </h2>
          <p className="text-base md:text-lg text-frida-dark max-w-2xl mx-auto px-4">
            Cada projeto inclui moldes em PDF e acesso exclusivo à aula completa no YouTube
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projetos.map(projeto => (
            <div key={projeto.id} className="bg-white border-2 border-frida-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img 
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover"
                />
                <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-frida-yellow text-frida-dark px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  {projeto.nivel}
                </span>
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="font-display text-lg sm:text-xl text-frida-red mb-2 font-bold leading-tight">
                  {projeto.nome}
                </h3>
                <p className="text-sm sm:text-base text-frida-dark/80 mb-3 sm:mb-4 leading-relaxed">
                  {projeto.descricao}
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

                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-xl sm:text-2xl font-bold text-frida-red">
                    {projeto.preco}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button 
                    onClick={() => handleComprarAgora(projeto)}
                    className="flex-1 flex items-center justify-center gap-2 bg-frida-red text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-orange transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Comprar Agora
                  </button>
                  
                  <button 
                    onClick={() => handleAdicionarCarrinho(projeto)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border-2 border-frida-red text-frida-red px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-frida-red hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden sm:inline">Adicionar</span>
                    <span className="sm:hidden">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
