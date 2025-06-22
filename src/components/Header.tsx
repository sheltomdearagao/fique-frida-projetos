
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";

const menu = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" }
];

interface HeaderProps {
  onOpenCarrinho?: () => void;
  onOpenLogin?: () => void;
  carrinhoCount?: number;
}

export default function Header({ onOpenCarrinho, onOpenLogin, carrinhoCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b-2 border-frida-orange sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-display text-2xl md:text-3xl text-frida-red font-bold">
              Fique Frida
            </h1>
            <span className="hidden md:block ml-2 text-sm text-frida-dark/60">
              Projetos de Costura
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menu.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-frida-dark hover:text-frida-red transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenLogin}
              className="p-2 text-frida-dark hover:text-frida-red transition-colors"
            >
              <User size={20} />
            </button>

            <button 
              onClick={onOpenCarrinho}
              className="relative p-2 bg-frida-red text-white rounded-lg hover:bg-frida-orange transition-colors"
            >
              <ShoppingCart size={20} />
              {carrinhoCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-frida-yellow text-frida-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {carrinhoCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-frida-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-frida-orange/20">
            <div className="flex flex-col space-y-3 pt-4">
              {menu.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-frida-dark hover:text-frida-red transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
