import { MessageCircle } from "lucide-react";

const FinalCTA = () => (
  <section className="py-16 sm:py-20 bg-card">
    <div className="container px-5 text-center max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
        Отправьте фото и получите точный расчёт за 10 минут
      </h2>
      <a
        href="https://wa.me/77071846970"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 mt-6"
      >
        <MessageCircle className="w-5 h-5" />
        Написать в WhatsApp
      </a>
    </div>
  </section>
);

export default FinalCTA;
