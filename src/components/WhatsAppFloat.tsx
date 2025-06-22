
import { Phone } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5571991087886?text=Olá! Gostaria de saber mais sobre os projetos de costura."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-frida-green text-white p-4 rounded-full shadow-lg hover:bg-frida-green/90 transition-colors z-50"
      aria-label="Falar no WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
}
