
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import floralFrame from "@/assets/floral-frame.svg";

const menu = [
  { name: "Início", href: "/" },
  { name: "Loja", href: "/loja" },
  { name: "Aulas", href: "/aulas" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-30 bg-frida-beige shadow-lg">
      <div className="w-full flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <img 
            src={floralFrame}
            className="w-8 h-8 md:w-10 md:h-10 -mr-2"
            alt=""
            aria-hidden="true"
          />
          <span className="font-display text-2xl md:text-3xl text-frida-blue tracking-tight select-none" style={{ letterSpacing: "0.02em" }}>
            Fique Frida
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
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

        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button className="p-3 rounded-full bg-frida-blue hover:bg-frida-red transition-colors shadow relative" aria-label="Carrinho de compras">
            <ShoppingCart size={20} className="text-frida-beige" />
            <span className="absolute -top-2 -right-2 bg-frida-yellow text-frida-dark text-xs font-bold rounded-full px-2 shadow min-w-[1.4em] h-6 flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-frida-orange hover:bg-frida-red transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-frida-beige border-t-2 border-frida-orange shadow-lg">
          <nav className="py-4">
            <ul className="flex flex-col">
              {menu.map(m => (
                <li key={m.name}>
                  <a
                    href={m.href}
                    className="block px-6 py-3 text-lg font-body text-frida-dark hover:bg-frida-orange hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="hidden md:block">
        <img src={floralFrame} alt="" className="w-full h-7 object-cover opacity-80" aria-hidden="true"/>
      </div>
    </header>
  );
}
