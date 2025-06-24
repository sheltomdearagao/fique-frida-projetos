
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const menu = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/#projetos" },
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
    <header className="bg-white/95 backdrop-blur-md shadow-frida-warm border-b border-frida-orange/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-frida-red font-bold transition-colors group-hover:text-frida-coral">
              Fique Frida
            </h1>
            <span className="hidden lg:block ml-3 text-sm text-frida-teal/80 font-medium">
              Projetos de Costura
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {menu.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-frida-brown hover:text-frida-teal transition-colors font-medium text-base lg:text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-frida-teal transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard"
                    className="text-frida-brown hover:text-frida-teal transition-colors font-medium text-base lg:text-lg flex items-center gap-2"
                  >
                    <User size={18} />
                    Olá, {user?.name}
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-frida-brown hover:text-frida-red transition-colors font-medium text-base lg:text-lg flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login"
                    className="text-frida-brown hover:text-frida-teal transition-colors font-medium text-base lg:text-lg"
                  >
                    Entrar
                  </Link>
                  <span className="text-frida-brown/30">|</span>
                  <Link 
                    to="/cadastro"
                    className="bg-gradient-to-r from-frida-teal to-frida-green text-white px-5 lg:px-6 py-2.5 rounded-full hover:from-frida-green hover:to-frida-teal transition-all duration-300 font-medium text-base lg:text-lg shadow-frida-cool hover:shadow-lg hover:scale-105"
                  >
                    Cadastrar
                  </Link>
                </>
              )}
            </div>

            {onOpenLogin && (
              <button 
                onClick={onOpenLogin}
                className="md:hidden p-2.5 text-frida-brown hover:text-frida-teal transition-colors"
              >
                <User size={20} />
              </button>
            )}

            {onOpenCarrinho && (
              <button 
                onClick={onOpenCarrinho}
                className="relative p-3 bg-gradient-to-r from-frida-red to-frida-coral text-white rounded-full hover:from-frida-coral hover:to-frida-orange transition-all duration-300 hover:scale-105 shadow-frida-warm"
              >
                <ShoppingCart size={20} className="sm:w-5 sm:h-5" />
                {carrinhoCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-frida-yellow text-frida-dark text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-md">
                    {carrinhoCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2.5 text-frida-brown hover:text-frida-teal transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-frida-warm/30">
            <div className="flex flex-col space-y-4 pt-6">
              {menu.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-frida-brown hover:text-frida-teal transition-colors font-medium py-2.5 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-frida-warm/30 pt-4 mt-4">
                {isAuthenticated ? (
                  <>
                    <Link 
                      to="/dashboard"
                      className="block text-frida-brown hover:text-frida-teal transition-colors font-medium py-2.5 text-lg flex items-center gap-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={18} />
                      Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-frida-brown hover:text-frida-red transition-colors font-medium py-2.5 text-lg flex items-center gap-2"
                    >
                      <LogOut size={18} />
                      Sair
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      className="block text-frida-brown hover:text-frida-teal transition-colors font-medium py-2.5 text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Entrar
                    </Link>
                    <Link 
                      to="/cadastro"
                      className="block bg-gradient-to-r from-frida-teal to-frida-green text-white px-6 py-4 rounded-full hover:from-frida-green hover:to-frida-teal transition-all duration-300 font-medium mt-4 text-center shadow-frida-cool"
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
