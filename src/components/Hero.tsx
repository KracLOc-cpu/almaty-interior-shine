import { Phone, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const WA_URL = "https://wa.me/77071846970?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость.%20Отправляю%20фото.";

const Hero = () => {
  const { t } = useLang();
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Fallback image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Перетяжка салона"
          className={`w-full h-full object-cover transition-opacity duration-700 ${desktopLoaded || mobileLoaded ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Desktop video (hidden on mobile) */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setDesktopLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 hidden md:block ${desktopLoaded ? "opacity-100" : "opacity-0"}`}
        poster={heroBg}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Mobile video (hidden on desktop) */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setMobileLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 block md:hidden ${mobileLoaded ? "opacity-100" : "opacity-0"}`}
        poster={heroBg}
      >
        <source src="/hero-video-vertical.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/[0.70] md:bg-background/[0.65]" />

      {/* Content with glass effect */}
      <div className="relative z-10 container px-5 py-20 text-center max-w-2xl mx-auto pt-24">
        <div className="backdrop-blur-[6px] bg-background/[0.12] rounded-2xl border border-foreground/[0.08] px-6 py-10 sm:px-10 sm:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-foreground">
            {t("hero_title")}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed whitespace-pre-line">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-6">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion?.('https://api.whatsapp.com/send/?phone=77071846970'); }}
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 shadow-[0_0_20px_hsl(var(--whatsapp)/0.35)] hover:shadow-[0_0_28px_hsl(var(--whatsapp)/0.5)]"
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero_wa")}
            </a>
            <a
              href="tel:+77071846970"
              onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion?.('tel:+77071846970'); }}
              className="inline-flex items-center justify-center gap-2.5 border-2 border-foreground/30 text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-foreground/10 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              {t("hero_call")}
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            {t("hero_info")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
