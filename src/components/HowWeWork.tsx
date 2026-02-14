import { Camera, Calculator, Palette, Wrench, Truck } from "lucide-react";

const steps = [
  { icon: Camera, num: "01", title: "Вы отправляете фото" },
  { icon: Calculator, num: "02", title: "Мы называем цену и сроки" },
  { icon: Palette, num: "03", title: "Подбор материала и цвета" },
  { icon: Wrench, num: "04", title: "Выполнение работы" },
  { icon: Truck, num: "05", title: "Выдача или доставка" },
];

const HowWeWork = () => (
  <section className="py-16 sm:py-20">
    <div className="container px-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
        Как мы работаем
      </h2>
      <div className="max-w-md mx-auto space-y-4">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-primary font-bold">Шаг {s.num}</span>
              <p className="font-semibold text-foreground text-sm">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
