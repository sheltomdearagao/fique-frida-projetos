import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'; // CAMINHO CORRIGIDO

const menu = [
  { name: "Início", href: "/" },
  { name: "Contato", href: "/contato" },
];

export default function DesktopNavigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="flex items-center gap-x-8">
      <ul className="flex items-center gap-x-6">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className="text-base text-frida-dark font-medium hover:text-frida-red transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="h-6 w-px bg-gray-300" />
      <div className="flex items-center gap-x-4">
        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="bg-frida-blue text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-frida-red transition-colors duration-300"
          >
            Meu Painel
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="text-base text-frida-dark font-medium hover:text-frida-red transition-colors duration-200"
            >
              Entrar
            </Link>
            <Link
              to="/cadastro"
              className="bg-frida-red text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-frida-orange transition-colors duration-300"
            >
              Cadastrar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}