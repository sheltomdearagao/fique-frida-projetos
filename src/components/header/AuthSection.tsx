
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface AuthSectionProps {
  isMobile?: boolean;
  onMenuClose?: () => void;
}

export default function AuthSection({ isMobile = false, onMenuClose }: AuthSectionProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    if (onMenuClose) onMenuClose();
  };

  if (isMobile) {
    return (
      <div className="border-t border-frida-warm/30 pt-3 mt-3">
        {isAuthenticated ? (
          <>
            <span className="block text-frida-brown py-2 text-base">
              Olá, {user?.name}
            </span>
            <button 
              onClick={handleLogout}
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
              onClick={onMenuClose}
            >
              Entrar
            </Link>
            <Link 
              to="/cadastro"
              className="block bg-gradient-to-r from-frida-teal to-frida-green text-white px-5 py-3 rounded-full hover:from-frida-green hover:to-frida-teal transition-all duration-300 font-medium mt-3 text-center shadow-md"
              onClick={onMenuClose}
            >
              Cadastrar
            </Link>
          </>
        )}
      </div>
    );
  }

  return (
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
  );
}
