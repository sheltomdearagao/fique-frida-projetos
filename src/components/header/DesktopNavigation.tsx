
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const menu = [
  { name: "Início", href: "/" },
  { name: "Contato", href: "/contato" }
];

export default function DesktopNavigation() {
  const { isAuthenticated } = useAuth();

  return (
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
  );
}
