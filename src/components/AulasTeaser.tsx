
import { Play } from "lucide-react";

export default function AulasTeaser() {
  return (
    <section className="py-14 px-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="relative flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
          alt="Thumbnail de vídeo aulas exclusivas"
          className="rounded-2xl w-64 h-40 object-cover border-4 border-frida-blue shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white/80 rounded-full p-4 border-2 border-frida-blue hover:scale-110 transition-transform shadow" aria-label="Play">
            <Play size={36} className="text-frida-blue"/>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <h3 className="font-display text-2xl text-frida-blue mb-1">Desvende as Técnicas da Costura Criativa</h3>
        <p className="text-base text-frida-dark mb-2 max-w-md">
          Acesse aulas exclusivas e aprenda o passo a passo de peças incríveis no conforto da sua casa.
        </p>
        <a
          href="/aulas"
          className="inline-block px-8 py-3 rounded-full bg-frida-orange text-white font-bold hover:bg-frida-red transition-colors font-body hover-scale mt-2"
        >
          Ver Cursos Disponíveis
        </a>
      </div>
    </section>
  );
}
