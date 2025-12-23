import { MessageCircle } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * Botão Flutuante de WhatsApp
 */

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5599984687433?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20SA%20Porto%20e%20receber%20o%20link%20do%20Zoom"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
