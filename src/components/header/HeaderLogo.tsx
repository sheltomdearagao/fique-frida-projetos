
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to="/" className="flex items-center group">
      <img 
        src="/lovable-uploads/ddf0d8c5-1735-4bcc-94f6-d3fed41cf6af.png" 
        alt="Fique Frida Logo" 
        className="h-10 w-auto sm:h-12 md:h-14 transition-transform group-hover:scale-105"
      />
      <span className="hidden lg:block ml-3 text-sm text-frida-teal/80 font-medium">
        Projetos de Costura
      </span>
    </Link>
  );
}
