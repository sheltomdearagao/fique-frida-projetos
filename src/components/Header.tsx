
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const menu = [
  { name: "Início", href: "/" },
  { name: "Contato", href: "/contato" }
];

interface HeaderProps {
  onOpenCarrinho?: () => void;
  onOpenLogin?: () => void;
  carrinhoCount?: number;
}

export default function Header({ onOpenCarrinho, onOpenLogin, carrinhoCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl text-frida-red font-bold transition-colors group-hover:text-frida-coral">
              Fique Frida
            </h1>
            <span className="hidden lg:block ml-3 text-sm text-frida-teal/80 font-medium">
              Projetos de Costura
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menu.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="text-frida-brown hover:text-frida-teal transition-colors font-medium text-sm lg:text-base relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-frida-teal transition-all group-hover:w-full"></span>
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                to="/meus-produtos"
                className="text-frida-brown hover:text-frida-teal transition-colors font-medium text-sm lg:text-base relative group"
              >
                Meus Produtos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-frida-teal transition-all group-hover:w-full"></span>
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <span className="text-frida-brown text-sm lg:text-base">
                    Olá, {user?.name}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="text-frida-brown hover:text-frida-red transition-colors font-medium text-sm lg:text-base flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login"
                    className="text-frida-brown hover:text-frida-teal transition-colors font-medium text-sm lg:text-base"
                  >
                    Entrar
                  </Link>
                  <span className="text-frida-brown/30">|</span>
                  <Link 
                    to="/cadastro"
                    className="bg-gradient-to-r from-frida-teal to-frida-green text-white px-4 lg:px-5 py-2 rounded-full hover:from-frida-green hover:to-frida-teal transition-all duration-300 font-medium text-sm lg:text-base shadow-md hover:shadow-lg hover:scale-105"
                  >
                    Cadastrar
                  </Link>
                </>
              )}
            </div>

            {onOpenLogin && (
              <button 
                onClick={onOpenLogin}
                className="md:hidden p-2 text-frida-brown hover:text-frida-teal transition-colors"
              >
                <User size={18} />
              </button>
            )}

            {onOpenCarrinho && (
              <button 
                onClick={onOpenCarrinho}
                className="relative p-2.5 bg-gradient-to-r from-frida-red to-frida-coral text-white rounded-full hover:from-frida-coral hover:to-frida-orange transition-all duration-300 hover:scale-105 shadow-md"
              >
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                {carrinhoCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-frida-yellow text-frida-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-md">
                    {carrinhoCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-frida-brown hover:text-frida-teal transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-frida-warm/30">
            <div className="flex flex-col space-y-3 pt-4">
              {menu.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-frida-brown hover:text-frida-teal transition-colors font-medium py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  to="/meus-produtos"
                  className="text-frida-brown hover:text-frida-teal transition-colors font-medium py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meus Produtos
                </Link>
              )}
              <div className="border-t border-frida-warm/30 pt-3 mt-3">
                {isAuthenticated ? (
                  <>
                    <span className="block text-frida-brown py-2 text-base">
                      Olá, {user?.name}
                    </span>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-frida-brown hover:text-frida-red transition-colors font-medium py-2 text-base flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Sair
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      className="block text-frida-brown hover:text-frida-teal transition-colors font-medium py-2 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Entrar
                    </Link>
                    <Link 
                      to="/cadastro"
                      className="block bg-gradient-to-r from-frida-teal to-frida-green text-white px-5 py-3 rounded-full hover:from-frida-green hover:to-frida-teal transition-all duration-300 font-medium mt-3 text-center shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cadastrar
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
