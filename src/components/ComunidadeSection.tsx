
export default function ComunidadeSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-frida-yellow/20 to-frida-orange/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Texto Principal */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-frida-red mb-4 leading-tight">
              Faça Parte da Nossa Comunidade Criativa
            </h3>
            <div className="w-20 md:w-32 border-b-3 border-frida-orange mb-6 mx-auto lg:mx-0"/>
            <p className="text-base md:text-lg text-frida-dark/80 max-w-xl mx-auto lg:mx-0">
              Receba novidades, dicas exclusivas e inspirações direto de Salvador para sua criatividade!
            </p>
          </div>

          {/* Cards de Comunidade */}
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto lg:flex-shrink-0">
            {/* Grupo VIP */}
            <div className="bg-white rounded-2xl border-2 border-frida-green shadow-lg px-6 py-8 flex-1 lg:w-72 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-frida-green/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-frida-blue mb-2">Grupo VIP</span>
              <p className="text-sm md:text-base text-frida-dark/70 mb-6 leading-relaxed">
                Entre para o grupo exclusivo e participe das novidades, sorteios e bastidores!
              </p>
              <a
                href="https://chat.whatsapp.com/invite/EXEMPLO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full font-body font-bold text-white bg-frida-green hover:bg-frida-blue transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Entrar no Grupo!
              </a>
            </div>

            {/* Lista de Transmissão */}
            <div className="bg-white rounded-2xl border-2 border-frida-red shadow-lg px-6 py-8 flex-1 lg:w-72 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-frida-red/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📬</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-frida-red mb-2">Newsletter</span>
              <p className="text-sm md:text-base text-frida-dark/70 mb-6 leading-relaxed">
                Receba conteúdos fresquinhos direto no seu WhatsApp ou E-mail.
              </p>
              <a
                href="https://forms.gle/EXEMPLO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full font-body font-bold text-white bg-frida-red hover:bg-frida-orange transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Receber Novidades!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
