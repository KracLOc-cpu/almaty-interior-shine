import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useState, useEffect, useRef, useCallback } from "react";

const reviewsData = {
  ru: [
    { name: "Асхат М.", city: "Алматы", text: "Перетянули полный салон на Camry, как новый стал. Рекомендую!" },
    { name: "Марина К.", city: "Алматы", text: "Диван восстановили идеально, даже поролон заменили. Спасибо!" },
    { name: "Дмитрий Р.", city: "Алматы", text: "Быстро, аккуратно, материал отличный. Буду обращаться ещё." },
    { name: "Айгерим Т.", city: "Алматы", text: "Перетяжка сидений — швы ровные, сидеть удобно. 5 из 5!" },
    { name: "Сергей Л.", city: "Алматы", text: "Доставили и забрали сами, очень удобно. Качество на высоте." },
    { name: "Олег В.", city: "Алматы", text: "Руль и ручник перетянули за день. Выглядит шикарно." },
    { name: "Алия Б.", city: "Алматы", text: "Кресло из офиса как новое. Быстро и недорого." },
    { name: "Нурлан С.", city: "Алматы", text: "Полностью доволен работой — карты дверей сделаны идеально." },
    { name: "Екатерина П.", city: "Алматы", text: "Два дивана перетянули, качество отличное, рекомендую всем." },
    { name: "Арман Ж.", city: "Алматы", text: "Обратился по рекомендации друга, не пожалел. Всё супер!" },
  ],
  kz: [
    { name: "Асхат М.", city: "Алматы", text: "Camry-ге толық салон қайта тартылды, жаңадай болды. Ұсынамын!" },
    { name: "Марина К.", city: "Алматы", text: "Диванды тамаша қалпына келтірді, көбігін де ауыстырды. Рахмет!" },
    { name: "Дмитрий Р.", city: "Алматы", text: "Жылдам, ұқыпты, материал керемет. Тағы хабарласамын." },
    { name: "Айгерім Т.", city: "Алматы", text: "Отырғыш қайта тартуы — тігістер тегіс, отыру ыңғайлы. 5/5!" },
    { name: "Сергей Л.", city: "Алматы", text: "Өздері жеткізіп, өздері алып кетті, өте ыңғайлы. Сапа жоғары." },
    { name: "Олег В.", city: "Алматы", text: "Руль мен қол тежегішін бір күнде қайта тартты. Керемет көрінеді." },
    { name: "Алия Б.", city: "Алматы", text: "Кеңседегі кресло жаңадай болды. Жылдам және арзан." },
    { name: "Нұрлан С.", city: "Алматы", text: "Жұмысқа толық ризамын — есік карталары тамаша жасалған." },
    { name: "Екатерина П.", city: "Алматы", text: "Екі диванды қайта тартты, сапасы керемет, бәріне ұсынамын." },
    { name: "Арман Ж.", city: "Алматы", text: "Досымның кеңесімен хабарластым, өкінбедім. Бәрі тамаша!" },
  ],
  en: [
    { name: "Askhat M.", city: "Almaty", text: "Full Camry interior reupholstered, looks brand new. Highly recommend!" },
    { name: "Marina K.", city: "Almaty", text: "Sofa restored perfectly, foam replaced too. Thank you!" },
    { name: "Dmitry R.", city: "Almaty", text: "Fast, neat, great material. Will come back again." },
    { name: "Aigerim T.", city: "Almaty", text: "Seat upholstery — even stitches, very comfortable. 5 out of 5!" },
    { name: "Sergey L.", city: "Almaty", text: "They picked up and delivered, very convenient. Top quality." },
    { name: "Oleg V.", city: "Almaty", text: "Steering wheel and handbrake done in a day. Looks amazing." },
    { name: "Aliya B.", city: "Almaty", text: "Office chair looks brand new. Fast and affordable." },
    { name: "Nurlan S.", city: "Almaty", text: "Fully satisfied — door panels done perfectly." },
    { name: "Ekaterina P.", city: "Almaty", text: "Two sofas reupholstered, excellent quality, recommend to everyone." },
    { name: "Arman Zh.", city: "Almaty", text: "Came on a friend's recommendation, no regrets. Everything is great!" },
  ],
};

function getInitials(name: string) {
  const parts = name.split(" ");
  return parts.map((p) => p[0]).join("").toUpperCase().slice(0, 2);
}

const Reviews = () => {
  const { lang, t } = useLang();
  const reviews = reviewsData[lang] || reviewsData.ru;
  const count = reviews.length;

  const [active, setActive] = useState(0);
  const pauseUntil = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((idx: number) => {
    setActive(((idx % count) + count) % count);
  }, [count]);

  const interact = useCallback(() => {
    pauseUntil.current = Date.now() + 8000;
  }, []);

  // Auto-play with delayed start after mount
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const id = setInterval(() => {
        if (Date.now() > pauseUntil.current) {
          setActive((prev) => (prev + 1) % count);
        }
      }, 4000);
      intervalRef.current = id;
    }, 500);
    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      interact();
      goTo(active + (diff > 0 ? 1 : -1));
    }
  };

  // Calculate position offset for each card relative to active
  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
          {t("rev_title")}
        </h2>

        {/* Carousel */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: 600, height: 260 }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {reviews.map((r, i) => {
            const offset = getOffset(i);
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;
            if (!isVisible) return null;

            const scale = isCenter ? 1.07 : 0.93;
            const opacity = isCenter ? 1 : 0.6;
            const blur = isCenter ? 0 : 1.5;
            const translateX = offset * 75; // percent
            const translateY = isCenter ? -2 : 0;
            const zIndex = isCenter ? 30 : 20 - Math.abs(offset);

            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale}) translateY(${translateY}px)`,
                  opacity,
                  filter: blur > 0 ? `blur(${blur}px)` : "none",
                  zIndex,
                  transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isCenter ? "auto" : "none",
                }}
              >
                <div
                  className="w-[280px] sm:w-[320px] rounded-2xl p-5 border border-border bg-card"
                  style={{
                    boxShadow: isCenter
                      ? "0 12px 40px -8px hsl(var(--primary) / 0.18), 0 4px 16px -4px rgba(0,0,0,0.25)"
                      : "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {getInitials(r.name)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">{r.name}</p>
                      <p className="text-[11px] text-muted-foreground">{r.city}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4" style={{ fill: "#F5B301", color: "#F5B301" }} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-secondary-foreground leading-relaxed line-clamp-4">
                    "{r.text}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { interact(); goTo(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 7,
                height: 7,
                backgroundColor: i === active ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.3)",
              }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
