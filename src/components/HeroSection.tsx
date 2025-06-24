
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-frida-beige via-frida-warm to-white py-16 md:py-24 relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-frida-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-frida-teal/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-frida-red mb-6 font-bold leading-tight">
            Aprenda a Criar Bolsas
            <span className="block text-frida-teal">Incríveis</span>
          </h1>
          <p className="text-lg md:text-xl text-frida-brown/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Projetos completos de costura com moldes em PDF e aulas exclusivas no YouTube. 
            <br className="hidden md:block" />
            Mochilas, pochetes, necessaires e shoulder bags direto de Salvador, Bahia.
          </p>
        </div>

        {/* Preview de Projeto */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-frida-warm border border-frida-warm/20 overflow-hidden max-w-5xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
                alt="Bolsa artesanal exemplo"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-frida-teal/20 to-transparent"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-3xl text-frida-teal mb-6 leading-tight">
                Como Funciona?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-br from-frida-red to-frida-coral text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md flex-shrink-0 mt-1">1</span>
                  <p className="text-frida-brown font-medium">Escolha seu projeto de bolsa favorito</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-br from-frida-teal to-frida-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md flex-shrink-0 mt-1">2</span>
                  <p className="text-frida-brown font-medium">Faça o pagamento e informe seu Gmail</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-gradient-to-br from-frida-yellow to-frida-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md flex-shrink-0 mt-1">3</span>
                  <p className="text-frida-brown font-medium">Receba moldes em PDF + acesso à aula no YouTube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
