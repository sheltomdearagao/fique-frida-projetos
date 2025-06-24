
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Package, Video, Download, User } from "lucide-react";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-frida-beige flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-frida-red mx-auto mb-4"></div>
          <p className="text-frida-dark">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  // Projetos mockados do usuário
  const meusProjetos = [
    {
      id: "1",
      nome: "Mochila Urban Style",
      status: "Comprado",
      dataCompra: "2024-01-15",
      videoUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "2", 
      nome: "Pochete Vintage",
      status: "Comprado",
      dataCompra: "2024-01-10",
      videoUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header do Dashboard */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-frida-red to-frida-coral p-3 rounded-full text-white">
              <User size={32} />
            </div>
            <div>
              <h1 className="font-display text-2xl text-frida-red font-bold">
                Olá, {user.name}!
              </h1>
              <p className="text-frida-dark/70">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-frida-dark/70 text-sm font-medium">Projetos Comprados</p>
                <p className="text-2xl font-bold text-frida-red">{meusProjetos.length}</p>
              </div>
              <Package className="text-frida-teal" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-frida-dark/70 text-sm font-medium">Aulas Acessadas</p>
                <p className="text-2xl font-bold text-frida-green">{meusProjetos.length}</p>
              </div>
              <Video className="text-frida-orange" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-frida-dark/70 text-sm font-medium">Downloads</p>
                <p className="text-2xl font-bold text-frida-brown">{meusProjetos.length * 2}</p>
              </div>
              <Download className="text-frida-yellow" size={32} />
            </div>
          </div>
        </div>

        {/* Meus Projetos */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="font-display text-xl text-frida-red font-bold mb-6">
            Meus Projetos
          </h2>
          
          {meusProjetos.length === 0 ? (
            <div className="text-center py-12">
              <Package className="mx-auto text-frida-dark/30 mb-4" size={64} />
              <p className="text-frida-dark/70 text-lg">
                Você ainda não possui projetos comprados
              </p>
              <button 
                onClick={() => navigate('/#projetos')}
                className="mt-4 bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
              >
                Ver Projetos Disponíveis
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {meusProjetos.map(projeto => (
                <div key={projeto.id} className="border-2 border-frida-beige rounded-lg p-4 hover:border-frida-red transition-colors">
                  <h3 className="font-display text-lg text-frida-red font-bold mb-2">
                    {projeto.nome}
                  </h3>
                  <p className="text-sm text-frida-dark/70 mb-4">
                    Comprado em: {new Date(projeto.dataCompra).toLocaleDateString('pt-BR')}
                  </p>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-frida-red text-white px-4 py-2 rounded-lg font-medium hover:bg-frida-orange transition-colors flex items-center justify-center gap-2">
                      <Video size={16} />
                      Ver Aula
                    </button>
                    <button className="flex-1 bg-transparent border-2 border-frida-red text-frida-red px-4 py-2 rounded-lg font-medium hover:bg-frida-red hover:text-white transition-colors flex items-center justify-center gap-2">
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
