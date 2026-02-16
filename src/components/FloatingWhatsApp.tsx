import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/77071846970?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость.%20Отправляю%20фото.";

const FloatingWhatsApp = () => (
  <a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion?.('https://api.whatsapp.com/send/?phone=77071846970'); }}
    className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg animate-pulse-glow hover:bg-whatsapp-hover transition-colors active:scale-90"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </a>
);

export default FloatingWhatsApp;
