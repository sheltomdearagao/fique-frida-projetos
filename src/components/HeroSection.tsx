
const heroVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
const heroImg = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&h=600&q=80";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col gap-6 md:gap-8 justify-center items-center min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-frida-beige to-frida-yellow/20 overflow-visible px-4 md:px-8 pt-8 md:pt-12 pb-8">
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-3 md:border-4 border-frida-orange">
        {/* Desktop: Vídeo, Mobile: Imagem */}
        <video 
          className="w-full h-[280px] md:h-[400px] object-cover object-center hidden md:block"
          autoPlay loop muted playsInline poster={heroImg}
        >
          <source src={heroVideo} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <img 
          src={heroImg}
          alt="Bolsas artesanais em tecido"
          className="w-full h-[280px] md:h-[400px] object-cover block md:hidden"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"/>
        
        {/* Overlay Text on Mobile */}
        <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
          <h2 className="font-display text-xl font-bold mb-1">Bolsas & Acessórios</h2>
          <p className="text-sm opacity-90">Feito à mão em Salvador</p>
        </div>
      </div>

      <div className="mt-4 md:mt-6 flex flex-col items-center text-center z-10 animate-fade-in max-w-4xl">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-frida-red drop-shadow-xl mb-3 md:mb-4 leading-tight">
          Bolsas que Contam Histórias
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-body text-frida-dark mb-6 md:mb-8 max-w-2xl leading-relaxed">
          Mochilas, pochetes, necessaires e shoulder bags únicas, criadas com amor e técnica em Salvador, Bahia.
        </p>
        <a 
          href="#criacao"
          className="mt-2 px-8 md:px-12 py-3 md:py-4 rounded-full bg-frida-orange text-white text-base md:text-lg font-bold font-body shadow-lg hover:bg-frida-red transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Explore Nossa Coleção
        </a>
      </div>
    </section>
  );
}
