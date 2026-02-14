import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const slides = [
  { before: before1, after: after1, key: "port_1" },
  { before: before2, after: after2, key: "port_2" },
  { before: before3, after: after3, key: "port_3" },
];

const gallery = [
  { img: gallery1, label: "Перетяжка салона" },
  { img: gallery2, label: "Перетяжка кресла" },
  { img: gallery3, label: "Перетяжка сиденья" },
  { img: gallery4, label: "Перетяжка салона" },
  { img: gallery5, label: "Перетяжка сиденья скутера" },
  { img: gallery6, label: "Перетяжка кресла" },
  { img: gallery7, label: "Карта двери" },
  { img: gallery8, label: "Перетяжка сиденья мото" },
  { img: gallery9, label: "Перетяжка тренажёра" },
];

const Portfolio = () => {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setLightboxIndex((prev) => diff > 0 ? (prev + 1) % gallery.length : (prev - 1 + gallery.length) % gallery.length);
    }
  };

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      autoRef.current = setInterval(next, 5000);
    }, 500);
    return () => { clearTimeout(startTimeout); if (autoRef.current) clearInterval(autoRef.current); };
  }, [next]);

  const pauseAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      autoRef.current = setInterval(next, 5000);
    }, 10000);
  };

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  const handleTouchStart = () => { setIsDragging(true); pauseAuto(); };
  const handleTouchMove = (e: React.TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };
  const handleMouseDown = () => { setIsDragging(true); pauseAuto(); };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging) handleMove(e.clientX); };
  const handleEnd = () => setIsDragging(false);

  const slide = slides[current];

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
          {t("port_title")}
        </h2>

        <div className="max-w-2xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-square rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
          >
            <img src={slide.after} alt="После" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img src={slide.before} alt="До" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current ? containerRef.current.offsetWidth : '100%' }} />
            </div>
            <div className="absolute top-0 bottom-0 w-0.5 bg-foreground/80" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-foreground/90 flex items-center justify-center shadow-lg">
                <ChevronLeft className="w-4 h-4 text-background" />
                <ChevronRight className="w-4 h-4 text-background -ml-1" />
              </div>
            </div>
            <span className="absolute top-3 left-3 bg-background/70 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1 rounded-md">ДО</span>
            <span className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-md">ПОСЛЕ</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button onClick={() => { prev(); pauseAuto(); }} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-sm text-muted-foreground text-center flex-1 px-2">{t(slide.key)}</p>
            <button onClick={() => { next(); pauseAuto(); }} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); pauseAuto(); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>

        {/* More works gallery */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mt-14 mb-8 text-foreground">
          {t("port_more")}
        </h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto">
          {gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              className="relative overflow-hidden rounded-lg aspect-square border border-border/30 shadow-sm active:scale-[0.98] transition-transform duration-150"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/20 flex items-center justify-center text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-background/20 flex items-center justify-center text-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % gallery.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-background/20 flex items-center justify-center text-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center gap-3 px-4 max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={gallery[lightboxIndex].img}
                alt={gallery[lightboxIndex].label}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <p className="text-foreground/80 text-sm font-medium">{gallery[lightboxIndex].label}</p>
              <p className="text-muted-foreground text-xs">{lightboxIndex + 1} / {gallery.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
