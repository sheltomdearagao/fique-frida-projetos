
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-frida-beige to-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-5xl text-frida-red mb-4 font-bold">
            Aprenda a Criar Bolsas Incríveis
          </h1>
          <p className="text-lg md:text-xl text-frida-dark max-w-3xl mx-auto mb-8 leading-relaxed">
            Projetos completos de costura com moldes em PDF e aulas exclusivas no YouTube. 
            Mochilas, pochetes, necessaires e shoulder bags direto de Salvador, Bahia.
          </p>
          <a 
            href="#projetos"
            className="inline-flex items-center gap-2 bg-frida-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-frida-orange transition-colors shadow-lg"
          >
            <Play size={20} />
            Ver Projetos Disponíveis
          </a>
        </div>

        {/* Preview de Projeto */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
                alt="Bolsa artesanal exemplo"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="font-display text-2xl text-frida-blue mb-4">
                Como Funciona?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-frida-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-frida-dark">Escolha seu projeto de bolsa</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-frida-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-frida-dark">Faça o pagamento e informe seu Gmail</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-frida-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-frida-dark">Receba moldes em PDF + acesso à aula no YouTube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
