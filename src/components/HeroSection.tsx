
import { Play } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card";

export default function HeroSection() {
  return <section className="bg-gradient-to-br from-frida-beige via-frida-warm to-white py-16 relative overflow-hidden md:py-[86px]">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-frida-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-frida-teal/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Logo/Texto Fique Frida */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/1ec00f97-06fc-4ee0-a229-8d5247d4b75d.png" 
            alt="Fique Frida" 
            className="mx-auto max-w-md w-full h-auto"
          />
        </div>

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

        {/* Foto sem moldura */}
        <div className="flex justify-center mb-16">
          <img 
            src="/lovable-uploads/5c30abb7-fa47-4565-9e6a-eb0771836632.png" 
            alt="Mili - Criadora do Fique Frida" 
            className="w-64 h-64 rounded-full object-cover shadow-2xl"
          />
        </div>

        {/* Como Funciona com GlareCard */}
        <div className="mb-12">
          <h3 className="font-display text-3xl md:text-4xl text-frida-teal mb-12 text-center leading-tight">
            Como Funciona?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <GlareCard className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-br from-frida-red to-frida-coral">
              <div className="text-center">
                <span className="bg-white text-frida-red rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-md mb-4 mx-auto">1</span>
                <p className="text-white font-bold text-lg mb-2">Escolha seu projeto</p>
                <p className="text-white/90 text-sm">Selecione a bolsa favorita</p>
              </div>
            </GlareCard>
            
            <GlareCard className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-br from-frida-teal to-frida-green">
              <div className="text-center">
                <span className="bg-white text-frida-teal rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-md mb-4 mx-auto">2</span>
                <p className="text-white font-bold text-lg mb-2">Faça o pagamento</p>
                <p className="text-white/90 text-sm">Informe seu Gmail</p>
              </div>
            </GlareCard>
            
            <GlareCard className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-br from-frida-yellow to-frida-orange">
              <div className="text-center">
                <span className="bg-white text-frida-yellow rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-md mb-4 mx-auto">3</span>
                <p className="text-white font-bold text-lg mb-2">Receba os materiais</p>
                <p className="text-white/90 text-sm">Moldes PDF + aula YouTube</p>
              </div>
            </GlareCard>
          </div>
        </div>
      </div>
    </section>;
}
