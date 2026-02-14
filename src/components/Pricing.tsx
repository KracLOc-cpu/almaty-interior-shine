import { Camera } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const WA_URL = "https://wa.me/77071846970?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость.%20Отправляю%20фото.";

const Pricing = () => {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container px-5 text-center max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{t("price_title")}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">{t("price_text")}</p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 active:scale-95"
        >
          <Camera className="w-5 h-5" />
          {t("price_btn")}
        </a>
      </div>
    </section>
  );
};

export default Pricing;
