
import { ShoppingCart } from "lucide-react";
import floralFrame from "@/assets/floral-frame.svg";

const menu = [
  { name: "Início", href: "/" },
  { name: "Loja", href: "/loja" },
  { name: "Aulas", href: "/aulas" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" }
];

export default function Header() {
  return (
    <header className="relative z-30 bg-frida-beige">
      <div className="w-full flex justify-between items-center py-3 px-8 shadow-frida">
        <div className="flex items-center gap-4">
          <img 
            src={floralFrame}
            className="w-10 h-10 -mr-2"
            alt=""
            aria-hidden="true"
          />
          <span className="font-display text-3xl text-frida-blue tracking-tight select-none" style={{ letterSpacing: "0.02em" }}>
            Fique Frida
          </span>
        </div>
        <nav>
          <ul className="flex gap-8">
            {menu.map(m => (
              <li key={m.name}>
                <a
                  href={m.href}
                  className="relative text-lg font-body text-frida-dark hover:text-frida-orange transition-colors after:block after:absolute after:h-0.5 after:bg-frida-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:w-full after:bottom-0"
                  style={{ paddingBottom: "0.2em" }}
                >
                  {m.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ml-6 p-2 rounded-full bg-frida-blue hover:bg-frida-red transition-colors shadow relative" aria-label="Carrinho de compras">
          <ShoppingCart size={26} className="text-frida-beige" />
          <span className="absolute -top-2 -right-2 bg-frida-yellow text-frida-dark text-xs font-bold rounded-full px-2 shadow" style={{ minWidth: "1.4em" }}>
            0
          </span>
        </button>
      </div>
      <img src={floralFrame} alt="" className="w-full h-7 object-cover opacity-80" aria-hidden="true"/>
    </header>
  );
}
