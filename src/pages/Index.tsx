
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjetosSection from "@/components/ProjetosSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main>
        <HeroSection />
        <ProjetosSection />
        <footer className="bg-frida-dark text-white py-8 text-center">
          <p>© {new Date().getFullYear()} Fique Frida - Projetos de Costura de Salvador, BA</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
