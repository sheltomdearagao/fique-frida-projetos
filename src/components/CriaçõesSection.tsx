
import { ArrowRight } from "lucide-react";

const producaoFotos = [
  // Exemplos
  { src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", alt: "Peça pronta 1" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", alt: "Peça pronta 2" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", alt: "Peça pronta 3" },
];
const projDigitalFotos = [
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", alt: "Projeto digital 1" },
  { src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80", alt: "Projeto digital 2" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", alt: "Projeto digital 3" },
];

export default function CriaçõesSection() {
  return (
    <section id="criacao" className="py-16 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="font-display text-3xl md:text-4xl text-frida-blue mb-2 tracking-wide">Nossas Criações</h2>
        <div className="w-24 border-b-4 border-frida-orange mb-2"/>
      </div>
      <div className="grid md:grid-cols-2 gap-14">
        {/* Peças Prontas */}
        <div className="flex flex-col items-start gap-4 bg-white rounded-xl border-2 border-frida-blue shadow-md p-8 relative overflow-hidden">
          <span className="text-xl font-display text-frida-red mb-2">Peças Prontas para te Encantar</span>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {producaoFotos.map((foto, i) => (
              <img
                key={foto.alt}
                src={foto.src}
                alt={foto.alt}
                className={`rounded-lg h-40 w-44 object-cover border-2 border-frida-yellow shadow-lg transition-transform hover:scale-105 duration-200`}
              />
            ))}
          </div>
          <a href="/loja?cat=prontas" className="flex items-center gap-2 mt-4 px-6 py-2 rounded-full bg-frida-red text-white font-bold hover:bg-frida-orange transition-colors hover-scale">
            Ver Peças Prontas <ArrowRight size={20}/>
          </a>
          {/* Moldura decorativa */}
          <img src="/src/assets/floral-frame.svg" alt="" className="absolute -top-7 -left-8 w-32 opacity-80 pointer-events-none select-none" />
        </div>
        {/* Projetos Digitais/E-books */}
        <div className="flex flex-col items-start gap-4 bg-white rounded-xl border-2 border-frida-green shadow-md p-8 relative overflow-hidden">
          <span className="text-xl font-display text-frida-blue mb-2">Projetos para Você Criar</span>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {projDigitalFotos.map((foto, i) => (
              <img
                key={foto.alt}
                src={foto.src}
                alt={foto.alt}
                className={`rounded-lg h-40 w-44 object-cover border-2 border-frida-orange shadow-lg transition-transform hover:scale-105`}
              />
            ))}
          </div>
          <a href="/loja?cat=projetos" className="flex items-center gap-2 mt-4 px-6 py-2 rounded-full bg-frida-blue text-white font-bold hover:bg-frida-green transition-colors hover-scale">
            Ver Projetos Digitais <ArrowRight size={20}/>
          </a>
          <img src="/src/assets/floral-frame.svg" alt="" className="absolute -bottom-7 -right-8 w-32 opacity-80 pointer-events-none select-none rotate-180" />
        </div>
      </div>
    </section>
  );
}
