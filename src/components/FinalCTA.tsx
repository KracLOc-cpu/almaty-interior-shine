import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const WA_URL = "https://wa.me/77071846970?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость.%20Отправляю%20фото.";

const FinalCTA = () => {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container px-5 text-center max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
          {t("cta_title")}
        </h2>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 mt-6"
        >
          <MessageCircle className="w-5 h-5" />
          {t("cta_btn")}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
