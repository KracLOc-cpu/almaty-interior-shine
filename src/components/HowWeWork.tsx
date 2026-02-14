import { Camera, Calculator, Palette, Wrench, Truck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Camera, Calculator, Palette, Wrench, Truck];
const stepKeys = ["how_1", "how_2", "how_3", "how_4", "how_5"];

const HowWeWork = () => {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
          {t("how_title")}
        </h2>
        <div className="max-w-md mx-auto space-y-4">
          {stepKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-primary font-bold">0{i + 1}</span>
                  <p className="font-semibold text-foreground text-sm">{t(key)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
