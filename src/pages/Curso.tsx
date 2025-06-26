
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Play, Download, Lock } from "lucide-react";
import Header from "@/components/Header";
import { useProductContent } from "@/hooks/useProductContent";
import { useProducts } from "@/hooks/useProducts";
import { useAuth } from "@/contexts/AuthContext";

export default function Curso() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { data: products } = useProducts();
  const { data: content, isLoading } = useProductContent(id || '', isAuthenticated);
  const [showVideo, setShowVideo] = useState(false);

  const produto = products?.find(p => p.id === id);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <Lock className="mx-auto mb-4 text-frida-red" size={48} />
              <h1 className="text-2xl font-bold text-frida-red mb-4">Acesso Restrito</h1>
              <p className="text-frida-dark mb-6">
                Você precisa estar logado para acessar este conteúdo.
              </p>
              <Link
                to="/login"
                className="bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
              >
                Fazer Login
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-center text-frida-dark">Verificando acesso...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <Lock className="mx-auto mb-4 text-frida-red" size={48} />
              <h1 className="text-2xl font-bold text-frida-red mb-4">Acesso Negado</h1>
              <p className="text-frida-dark mb-6">
                Você ainda não tem acesso a este conteúdo. Adquira o produto para ter acesso completo.
              </p>
              {produto && (
                <Link
                  to={`/produto/${produto.id}`}
                  className="bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
                >
                  Comprar {produto.name}
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/meus-produtos')}
            className="flex items-center gap-2 text-frida-dark hover:text-frida-red transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Voltar aos meus produtos
          </button>

          {produto && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-6">
                <h1 className="font-display text-2xl md:text-3xl text-frida-red mb-4 font-bold">
                  {produto.name}
                </h1>
                <p className="text-frida-dark/80 mb-6">
                  {produto.description}
                </p>
              </div>
            </div>
          )}

          {/* Seção do Vídeo */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold text-frida-dark mb-4">Vídeo Aula</h2>
              
              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {!showVideo ? (
                  <div className="relative w-full h-full">
                    <img
                      src={produto?.image_urls?.[0] || ''}
                      alt="Thumbnail do vídeo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button
                        onClick={() => setShowVideo(true)}
                        className="bg-frida-red hover:bg-frida-orange text-white rounded-full p-4 transition-colors group"
                      >
                        <Play size={32} className="ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={getYouTubeEmbedUrl(content.youtube_unlisted_url)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>

          {/* Seção do PDF */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-frida-dark mb-4">Material de Apoio</h2>
              
              <div className="flex items-center justify-between p-4 bg-frida-beige rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-frida-red rounded-lg flex items-center justify-center">
                    <Download className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-frida-dark">Moldes em PDF</h3>
                    <p className="text-sm text-frida-dark/70">
                      Baixe os moldes para imprimir em casa
                    </p>
                  </div>
                </div>
                
                <a
                  href={content.pdf_url}
                  download
                  className="bg-frida-red text-white px-4 py-2 rounded-lg font-bold hover:bg-frida-orange transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Baixar PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
