
import { ShoppingCart, Menu, X, User } from "lucide-react";
import AuthSection from "./AuthSection";

interface HeaderActionsProps {
  onOpenCarrinho?: () => void;
  onOpenLogin?: () => void;
  carrinhoCount?: number;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export default function HeaderActions({ 
  onOpenCarrinho, 
  onOpenLogin, 
  carrinhoCount = 0,
  isMenuOpen,
  onToggleMenu
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <AuthSection />

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
        onClick={onToggleMenu}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );
}
