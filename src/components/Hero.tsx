import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Перетяжка салона" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-5 py-20 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-foreground">
          Премиальная перетяжка салонов и мебели в Алматы
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
          Полный салон • Сиденья • Карты дверей • Диваны и кресла • Замена поролона • Оценка по фото за 10 минут
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-6">
          <a
            href="https://wa.me/77071846970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Написать в WhatsApp
          </a>
          <a
            href="tel:+77071846970"
            className="inline-flex items-center justify-center gap-2.5 border-2 border-foreground/20 text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-foreground/5 transition-all duration-200 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Позвонить
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Жумабаева 192 • Работаем без выходных • Выезд и доставка по Алматы
        </p>
      </div>
    </section>
  );
};

export default Hero;
