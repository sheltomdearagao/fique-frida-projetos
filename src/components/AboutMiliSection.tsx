
export default function AboutMiliSection() {
  return (
    <section className="py-14 max-w-4xl mx-auto px-3">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white border-2 border-frida-blue rounded-xl shadow-lg p-8 relative">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=320&h=320&q=80"
          alt="Foto da Mili no ateliê"
          className="rounded-full w-36 h-36 object-cover border-4 border-frida-yellow shadow-lg"
        />
        <div className="flex flex-col items-start">
          <h4 className="font-display text-xl text-frida-blue mb-2">A Alma por Trás da Agulha</h4>
          <p className="text-base font-body text-frida-dark mb-3 max-w-lg">
            Oi, eu sou a Mili! Uma mãe apaixonada por cores, tecidos e pela magia de transformar sonhos em acessórios. Cada peça que você vê aqui carrega um pedaço do meu coração e da minha história. Obrigada por manter esse sonho vivo comigo!
          </p>
          <a
            href="/sobre"
            className="inline-block px-7 py-2 mt-2 rounded-full bg-frida-blue text-white font-bold font-body hover:bg-frida-green transition-colors hover-scale"
          >
            Conheça Minha História
          </a>
        </div>
        <img src="/src/assets/floral-frame.svg" alt="" className="absolute -bottom-10 right-0 w-32 opacity-90 select-none pointer-events-none"/>
      </div>
    </section>
  );
}
