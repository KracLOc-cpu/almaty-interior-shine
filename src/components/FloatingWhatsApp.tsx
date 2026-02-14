import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/77071846970"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg animate-pulse-glow hover:bg-whatsapp-hover transition-colors active:scale-90"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </a>
);

export default FloatingWhatsApp;
