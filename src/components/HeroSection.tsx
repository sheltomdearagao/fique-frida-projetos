
const heroVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Substituir pelo vídeo da Mili no futuro
const heroImg = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=1200&h=600&q=80"; // Placeholder mobile

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-8 justify-center items-center min-h-[54vh] bg-frida-beige overflow-visible px-8 pt-10 pb-6">
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-frida-orange">
        {/* Mobile: Imagem, Desktop: Vídeo */}
        <video 
          className="w-full h-[340px] object-cover object-center hidden md:block"
          autoPlay loop muted playsInline poster={heroImg}
        >
          <source src={heroVideo} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <img 
          src={heroImg}
          alt="Destaque costura criativa"
          className="w-full h-[240px] object-cover block md:hidden"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-frida-beige/80 to-transparent"/>
      </div>
      <div className="mt-2 flex flex-col items-center text-center z-10 animate-fade-in">
        <h1 className="font-display text-4xl md:text-5xl text-frida-red drop-shadow-xl mb-2">Costure seus sonhos. Vista sua arte.</h1>
        <p className="text-lg md:text-2xl font-body text-frida-dark mb-4 max-w-xl">
          Peças artesanais e projetos de costura criativa feitos com alma, de uma mãe empreendedora para você.
        </p>
        <a 
          href="#criacao"
          className="mt-2 px-10 py-4 rounded-full bg-frida-orange text-white text-lg font-bold font-body shadow hover:bg-frida-red transition-colors relative hover-scale"
          style={{ boxShadow: "0 2px 24px rgba(230,57,70,0.10)" }}
        >
          Explore o Ateliê
        </a>
      </div>
    </section>
  );
}
