import { Phone, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const WA_URL = "https://wa.me/77071846970?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость.%20Отправляю%20фото.";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Перетяжка салона" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container px-5 py-20 text-center max-w-2xl mx-auto pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-foreground">
          {t("hero_title")}
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
          {t("hero_subtitle")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-6">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            {t("hero_wa")}
          </a>
          <a
            href="tel:+77071846970"
            className="inline-flex items-center justify-center gap-2.5 border-2 border-foreground/20 text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-foreground/5 transition-all duration-200 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            {t("hero_call")}
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          {t("hero_info")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
