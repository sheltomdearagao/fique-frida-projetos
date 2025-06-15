
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CriaçõesSection from "@/components/CriaçõesSection";
import ComunidadeSection from "@/components/ComunidadeSection";
import AulasTeaser from "@/components/AulasTeaser";
import AboutMiliSection from "@/components/AboutMiliSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-frida-beige font-body">
      <Header />
      <main className="flex flex-col gap-2">
        <HeroSection />
        <CriaçõesSection />
        <ComunidadeSection />
        <AulasTeaser />
        <AboutMiliSection />
        <footer className="mt-12 py-10 text-center text-sm text-frida-dark/60 font-body">
          © {new Date().getFullYear()} Fique Frida - Feito com 💖 no Brasil
        </footer>
      </main>
    </div>
  );
};

export default Index;
