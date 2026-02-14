import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const slides = [
  { before: before1, after: after1, label: "Toyota Camry — перетяжка сидений" },
  { before: before2, after: after2, label: "Диван — замена поролона + перетяжка" },
  { before: before3, after: after3, label: "Полный салон — перетяжка" },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(next, 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
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
          До / После
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
            {/* After (full) */}
            <img src={slide.after} alt="После" className="absolute inset-0 w-full h-full object-cover" />
            {/* Before (clipped) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img src={slide.before} alt="До" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current ? containerRef.current.offsetWidth : '100%' }} />
            </div>
            {/* Divider */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-foreground/80" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-foreground/90 flex items-center justify-center shadow-lg">
                <ChevronLeft className="w-4 h-4 text-background" />
                <ChevronRight className="w-4 h-4 text-background -ml-1" />
              </div>
            </div>
            {/* Labels */}
            <span className="absolute top-3 left-3 bg-background/70 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1 rounded-md">ДО</span>
            <span className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-md">ПОСЛЕ</span>
          </div>

          {/* Caption + nav */}
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => { prev(); pauseAuto(); }} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-sm text-muted-foreground text-center flex-1 px-2">{slide.label}</p>
            <button onClick={() => { next(); pauseAuto(); }} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
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
      </div>
    </section>
  );
};

export default Portfolio;
