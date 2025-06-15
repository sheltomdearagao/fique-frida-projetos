
export default function ComunidadeSection() {
  return (
    <section className="py-16 bg-frida-yellow/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center px-4">
        {/* Textos lado esquerdo */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="font-display text-2xl md:text-3xl text-frida-red mb-2">Receba novidades, dicas e inspirações em primeira mão!</h3>
          <div className="w-24 border-b-4 border-frida-orange mb-5"/>
        </div>
        {/* Colunas de botões */}
        <div className="flex flex-col md:flex-row gap-7 w-full md:w-auto">
          <div className="bg-white rounded-xl border-2 border-frida-green shadow px-6 py-7 flex-1 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-frida-blue mb-1">Grupo VIP</span>
            <p className="text-sm text-frida-dark mb-3">Entre para o grupo exclusivo e participe das novidades e sorteios!</p>
            <a
              href="https://chat.whatsapp.com/invite/EXEMPLO" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-body font-bold text-white bg-frida-green hover:bg-frida-blue hover-scale transition-colors mt-2"
            >
              Quero Entrar no Grupo!
            </a>
          </div>
          <div className="bg-white rounded-xl border-2 border-frida-red shadow px-6 py-7 flex-1 flex flex-col items-center text-center">
            <span className="text-lg font-bold text-frida-red mb-1">Lista de Transmissão</span>
            <p className="text-sm text-frida-dark mb-3">Receba conteúdos fresquinhos direto no seu WhatsApp ou E-mail.</p>
            <a
              href="https://forms.gle/EXEMPLO" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-body font-bold text-white bg-frida-red hover:bg-frida-orange hover-scale transition-colors mt-2"
            >
              Quero Receber as Novidades!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
