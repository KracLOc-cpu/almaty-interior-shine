import { Star } from "lucide-react";

const reviews = [
  { name: "Асхат М.", text: "Перетянули полный салон на Camry, как новый стал. Рекомендую!" },
  { name: "Марина К.", text: "Диван восстановили идеально, даже поролон заменили. Спасибо!" },
  { name: "Дмитрий Р.", text: "Быстро, аккуратно, материал отличный. Буду обращаться ещё." },
  { name: "Айгерим Т.", text: "Перетяжка сидений — швы ровные, сидеть удобно. 5 из 5!" },
  { name: "Сергей Л.", text: "Доставили и забрали сами, очень удобно. Качество на высоте." },
];

const Reviews = () => (
  <section className="py-16 sm:py-20">
    <div className="container px-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">Отзывы</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-5 px-5">
        {reviews.map((r, i) => (
          <div key={i} className="min-w-[260px] max-w-[300px] snap-start bg-card rounded-xl p-5 border border-border shrink-0">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-star text-star" />
              ))}
            </div>
            <p className="text-sm text-secondary-foreground mb-3 leading-relaxed">"{r.text}"</p>
            <p className="text-xs font-semibold text-muted-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
