
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface HeaderProps {
  onOpenCarrinho?: () => void;
  onOpenLogin?: () => void;
  carrinhoCount?: number;
}

export default function Header({ onOpenCarrinho, onOpenLogin, carrinhoCount = 0 }: HeaderProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-netflix-black/90 to-transparent">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <h1 className="font-netflix text-2xl lg:text-4xl text-white font-bold transition-colors group-hover:text-frida-magenta">
              FlixFrida
            </h1>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {isAuthenticated ? (
              <div className="hidden lg:flex items-center gap-4">
                <span className="text-white/80 text-sm">
                  Olá, {user?.name}
                </span>
                <Link 
                  to="/meus-produtos"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  Meus Produtos
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-white/80 hover:text-frida-magenta transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sair
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-4">
                <Link 
                  to="/login"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  Entrar
                </Link>
                <Link 
                  to="/cadastro"
                  className="bg-frida-magenta hover:bg-frida-magenta/80 text-white px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm"
                >
                  Cadastrar
                </Link>
              </div>
            )}

            {/* Mobile Auth Button */}
            {!isAuthenticated && onOpenLogin && (
              <button 
                onClick={onOpenLogin}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              >
                <User size={20} />
              </button>
            )}

            {/* Carrinho */}
            {onOpenCarrinho && (
              <button 
                onClick={onOpenCarrinho}
                className="relative p-3 bg-frida-magenta hover:bg-frida-magenta/80 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <ShoppingCart size={20} />
                {carrinhoCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-frida-cyan text-netflix-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-md">
                    {carrinhoCount}
                  </span>
                )}
              </button>
            )}

            {/* Contact Link */}
            <Link 
              to="/contato"
              className="hidden lg:block text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
