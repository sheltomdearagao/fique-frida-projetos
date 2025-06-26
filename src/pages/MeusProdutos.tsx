
import { Link, useNavigate } from "react-router-dom";
import { Play, Calendar } from "lucide-react";
import Header from "@/components/Header";
import { useUserPurchases } from "@/hooks/useUserPurchases";
import { useAuth } from "@/contexts/AuthContext";

export default function MeusProdutos() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { data: purchases, isLoading, error } = useUserPurchases();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <h1 className="text-2xl font-bold text-frida-red mb-4">Acesso Restrito</h1>
              <p className="text-frida-dark mb-6">
                Você precisa estar logado para ver seus produtos.
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
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="font-display text-3xl text-frida-red mb-8 font-bold">Meus Produtos</h1>
            <p className="text-center text-frida-dark">Carregando seus produtos...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-frida-beige">
        <Header />
        <main className="pt-20">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="font-display text-3xl text-frida-red mb-8 font-bold">Meus Produtos</h1>
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-red-500 mb-4">Erro ao carregar produtos.</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-frida-beige">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="font-display text-3xl text-frida-red mb-8 font-bold">Meus Produtos</h1>

          {!purchases || purchases.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-frida-dark mb-4">
                Você ainda não possui produtos
              </h2>
              <p className="text-frida-dark/70 mb-6">
                Explore nossa coleção e adquira seu primeiro produto.
              </p>
              <Link
                to="/"
                className="bg-frida-red text-white px-6 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
              >
                Ver Produtos Disponíveis
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative">
                    <img
                      src={purchase.product.image_url || ''}
                      alt={purchase.product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-frida-green text-white px-3 py-1 rounded-full text-sm font-bold">
                      Adquirido
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl text-frida-red mb-2 font-bold">
                      {purchase.product.name}
                    </h3>
                    
                    <p className="text-frida-dark/80 mb-4 text-sm leading-relaxed">
                      {purchase.product.description}
                    </p>

                    <div className="flex items-center gap-2 text-frida-dark/60 mb-4 text-sm">
                      <Calendar size={14} />
                      <span>
                        Adquirido em {new Date(purchase.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>

                    <Link
                      to={`/curso/${purchase.product.id}`}
                      className="w-full flex items-center justify-center gap-2 bg-frida-red text-white px-4 py-3 rounded-lg font-bold hover:bg-frida-orange transition-colors"
                    >
                      <Play size={16} />
                      Acessar Conteúdo
                    </Link>
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
