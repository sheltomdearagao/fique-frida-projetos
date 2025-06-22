
import { Play, BookOpen } from "lucide-react";

export default function AulasTeaser() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-white rounded-2xl border-2 border-frida-blue shadow-xl p-6 md:p-10 relative overflow-hidden">
        {/* Vídeo Thumbnail */}
        <div className="relative flex-shrink-0 w-full lg:w-auto">
          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80"
            alt="Aulas de costura de bolsas"
            className="rounded-2xl w-full lg:w-80 h-48 md:h-56 object-cover border-4 border-frida-blue shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
            <button className="bg-white/95 rounded-full p-4 md:p-6 border-3 border-frida-blue hover:scale-110 transition-transform shadow-lg" aria-label="Play">
              <Play size={32} className="text-frida-blue ml-1"/>
            </button>
          </div>
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-frida-orange text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">
            Aulas Exclusivas
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left flex-1">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <BookOpen className="text-frida-blue" size={28} />
            <h3 className="font-display text-2xl md:text-3xl text-frida-blue">Aprenda a Arte das Bolsas</h3>
          </div>
          
          <p className="text-base md:text-lg text-frida-dark/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Domine as técnicas profissionais de costura de bolsas, mochilas e acessórios. Desde o básico até projetos avançados, tudo no conforto da sua casa.
          </p>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="text-center p-3 bg-frida-beige rounded-lg">
              <div className="font-bold text-frida-red text-lg md:text-xl">15+</div>
              <div className="text-xs md:text-sm text-frida-dark/70">Projetos</div>
            </div>
            <div className="text-center p-3 bg-frida-beige rounded-lg">
              <div className="font-bold text-frida-blue text-lg md:text-xl">HD</div>
              <div className="text-xs md:text-sm text-frida-dark/70">Qualidade</div>
            </div>
          </div>

          <a
            href="/aulas"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-frida-orange text-white font-bold hover:bg-frida-red transition-all duration-300 hover:scale-105 shadow-lg mx-auto lg:mx-0 w-full sm:w-auto"
          >
            Ver Cursos Disponíveis
          </a>
        </div>

        {/* Decoração */}
        <img src="/src/assets/floral-frame.svg" alt="" className="absolute -top-8 -right-8 w-24 md:w-32 opacity-40 pointer-events-none select-none rotate-45" />
      </div>
    </section>
  );
}
