
export default function AboutMiliSection() {
  return (
    <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-white border-2 border-frida-blue rounded-2xl shadow-xl p-6 md:p-10 relative overflow-hidden">
        {/* Foto da Mili */}
        <div className="relative flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b789?auto=format&fit=facearea&w=400&h=400&q=80"
            alt="Mili - Fundadora do Fique Frida"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover border-4 border-frida-yellow shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 bg-frida-orange text-white p-2 rounded-full">
            <span className="text-lg md:text-xl">🎨</span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left flex-1">
          <div>
            <h4 className="font-display text-xl md:text-2xl lg:text-3xl text-frida-blue mb-2">
              A Alma por Trás das Criações
            </h4>
            <div className="w-16 md:w-24 border-b-2 border-frida-orange mx-auto lg:mx-0 mb-4"/>
          </div>

          <p className="text-base md:text-lg font-body text-frida-dark/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Oi, eu sou a Mili! Uma mãe soteropolitana apaixonada por cores, tecidos e pela magia de transformar retalhos em acessórios únicos. 
            Aqui em Salvador, cada bolsa que crio carrega um pedaço da nossa cultura baiana e muito amor.
          </p>

          <p className="text-sm md:text-base font-body text-frida-dark/70 italic max-w-2xl mx-auto lg:mx-0">
            "Cada ponto é uma história, cada bolsa é um sonho realizado. Obrigada por fazer parte dessa jornada comigo!"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="/sobre"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-frida-blue text-white font-bold font-body hover:bg-frida-green transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Minha História Completa
            </a>
            <div className="flex items-center justify-center gap-2 text-frida-dark/60 text-sm">
              <span>📍</span>
              <span>Salvador, Bahia - Brasil</span>
            </div>
          </div>
        </div>

        {/* Decoração */}
        <img src="/src/assets/floral-frame.svg" alt="" className="absolute -bottom-8 right-4 w-20 md:w-32 opacity-30 select-none pointer-events-none"/>
      </div>
    </section>
  );
}
