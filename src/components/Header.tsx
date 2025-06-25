import { useState } from "react";
import HeaderLogo from "./header/HeaderLogo";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileNavigation from "./header/MobileNavigation";
import HeaderActions from "./header/HeaderActions";
interface HeaderProps {
  onOpenCarrinho?: () => void;
  onOpenLogin?: () => void;
  carrinhoCount?: number;
}
export default function Header({
  onOpenCarrinho,
  onOpenLogin,
  carrinhoCount = 0
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-6xl mx-auto py-3 px-[12px] sm:py-px">
        <div className="flex justify-between items-center">
          <HeaderLogo />
          <DesktopNavigation />
          <HeaderActions onOpenCarrinho={onOpenCarrinho} onOpenLogin={onOpenLogin} carrinhoCount={carrinhoCount} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <MobileNavigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>;
}