import { Award, Wrench, Sofa, Palette, Clock, Truck } from "lucide-react";

const advantages = [
  { icon: Award, title: "Премиальный результат", desc: "Качество, которое видно с первого взгляда" },
  { icon: Wrench, title: "Аккуратная разборка/сборка", desc: "Без повреждений и следов вмешательства" },
  { icon: Sofa, title: "Замена поролона", desc: "Восстановление формы и комфорта" },
  { icon: Palette, title: "Подбор материалов и цвета", desc: "Широкий выбор кожи и ткани" },
  { icon: Clock, title: "Сроки по договорённости", desc: "Чёткое соблюдение дедлайнов" },
  { icon: Truck, title: "Выезд и доставка", desc: "По всему Алматы бесплатно" },
];

const Advantages = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-5 text-center border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
