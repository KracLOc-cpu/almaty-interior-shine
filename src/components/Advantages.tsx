import { Award, Wrench, Sofa, Palette, Clock, Truck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Award, Wrench, Sofa, Palette, Clock, Truck];
const keys = [
  { t: "adv_1", d: "adv_1d" },
  { t: "adv_2", d: "adv_2d" },
  { t: "adv_3", d: "adv_3d" },
  { t: "adv_4", d: "adv_4d" },
  { t: "adv_5", d: "adv_5d" },
  { t: "adv_6", d: "adv_6d" },
];

const Advantages = () => {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
          {t("adv_title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {keys.map((k, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-card rounded-xl p-5 text-center border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">{t(k.t)}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t(k.d)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
