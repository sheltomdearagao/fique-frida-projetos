
import { FileText, Video, ShoppingCart } from "lucide-react";

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
  return (
    <section id="projetos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-frida-blue mb-4 font-bold">
            Nossos Projetos
          </h2>
          <p className="text-lg text-frida-dark max-w-2xl mx-auto">
            Cada projeto inclui moldes em PDF e acesso exclusivo à aula completa no YouTube
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projetos.map(projeto => (
            <div key={projeto.id} className="bg-white border-2 border-frida-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-frida-yellow text-frida-dark px-3 py-1 rounded-full text-sm font-bold">
                  {projeto.nivel}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl text-frida-red mb-2 font-bold">
                  {projeto.nome}
                </h3>
                <p className="text-frida-dark/80 mb-4">
                  {projeto.descricao}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-frida-dark/70">
                  <div className="flex items-center gap-1">
                    <FileText size={16} />
                    <span>Moldes PDF</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video size={16} />
                    <span>Aula YouTube</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-frida-red">
                    {projeto.preco}
                  </span>
                  <button 
                    onClick={() => onAdicionarAoCarrinho(projeto)}
                    className="flex items-center gap-2 bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
                  >
                    <ShoppingCart size={18} />
                    Comprar
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
