
import { ArrowRight, ShoppingBag, Backpack } from "lucide-react";

const bolsasFotos = [
  { src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", alt: "Bolsa artesanal 1" },
  { src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80", alt: "Mochila em tecido 2" },
  { src: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=400&q=80", alt: "Necessaire artesanal 3" },
];

const projetosFotos = [
  { src: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80", alt: "Projeto bolsa tote" },
  { src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", alt: "Projeto mochila" },
  { src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80", alt: "Projeto pochete" },
];

export default function CriaçõesSection() {
  return (
    <section id="criacao" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-frida-blue mb-3 md:mb-4 tracking-wide">Nossa Coleção</h2>
        <div className="w-20 md:w-32 border-b-3 md:border-b-4 border-frida-orange mb-4"/>
        <p className="text-sm md:text-lg text-frida-dark max-w-2xl">
          Descubra bolsas prontas para usar ou aprenda a criar suas próprias peças únicas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Bolsas Prontas */}
        <div className="flex flex-col gap-6 bg-white rounded-2xl border-2 border-frida-blue shadow-xl p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="text-frida-red" size={28} />
            <span className="text-xl md:text-2xl font-display text-frida-red">Peças Prontas</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {bolsasFotos.map((foto, i) => (
              <div key={foto.alt} className="relative group/item">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="rounded-lg h-32 md:h-40 w-full object-cover border-2 border-frida-yellow shadow-md transition-all duration-300 group-hover/item:scale-105 group-hover/item:shadow-lg"
                />
                <div className="absolute inset-0 bg-frida-blue/20 opacity-0 group-hover/item:opacity-100 transition-opacity rounded-lg"/>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-frida-dark/80 mb-4">
            Bolsas, mochilas, pochetes e necessaires prontas para usar. Cada peça é única e feita com carinho em Salvador.
          </p>

          <a href="/loja?cat=prontas" className="flex items-center justify-center gap-2 mt-auto px-6 py-3 rounded-full bg-frida-red text-white font-bold hover:bg-frida-orange transition-all duration-300 hover:scale-105 shadow-lg">
            Ver Coleção Pronta <ArrowRight size={20}/>
          </a>

          <img src="/src/assets/floral-frame.svg" alt="" className="absolute -top-6 -left-6 w-24 md:w-32 opacity-60 pointer-events-none select-none" />
        </div>

        {/* Projetos e Moldes */}
        <div className="flex flex-col gap-6 bg-white rounded-2xl border-2 border-frida-green shadow-xl p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Backpack className="text-frida-blue" size={28} />
            <span className="text-xl md:text-2xl font-display text-frida-blue">Projetos DIY</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {projetosFotos.map((foto, i) => (
              <div key={foto.alt} className="relative group/item">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="rounded-lg h-32 md:h-40 w-full object-cover border-2 border-frida-orange shadow-md transition-all duration-300 group-hover/item:scale-105 group-hover/item:shadow-lg"
                />
                <div className="absolute inset-0 bg-frida-green/20 opacity-0 group-hover/item:opacity-100 transition-opacity rounded-lg"/>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-frida-dark/80 mb-4">
            Moldes digitais, tutoriais e projetos completos para você criar suas próprias bolsas em casa.
          </p>

          <a href="/loja?cat=projetos" className="flex items-center justify-center gap-2 mt-auto px-6 py-3 rounded-full bg-frida-blue text-white font-bold hover:bg-frida-green transition-all duration-300 hover:scale-105 shadow-lg">
            Ver Projetos DIY <ArrowRight size={20}/>
          </a>

          <img src="/src/assets/floral-frame.svg" alt="" className="absolute -bottom-6 -right-6 w-24 md:w-32 opacity-60 pointer-events-none select-none rotate-180" />
        </div>
      </div>
    </section>
  );
}
