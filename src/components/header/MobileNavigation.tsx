
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AuthSection from "./AuthSection";

const menu = [
  { name: "Início", href: "/" },
  { name: "Contato", href: "/contato" }
];

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const { isAuthenticated } = useAuth();

  if (!isOpen) return null;

  return (
    <nav className="md:hidden mt-4 pb-4 border-t border-frida-warm/30">
      <div className="flex flex-col space-y-3 pt-4">
        {menu.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className="text-frida-brown hover:text-frida-teal transition-colors font-medium py-2 text-base"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        {isAuthenticated && (
          <Link
            to="/meus-produtos"
            className="text-frida-brown hover:text-frida-teal transition-colors font-medium py-2 text-base"
            onClick={onClose}
          >
            Meus Produtos
          </Link>
        )}
        <AuthSection isMobile onMenuClose={onClose} />
      </div>
    </nav>
  );
}
