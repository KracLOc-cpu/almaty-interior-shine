import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const itemKeys = ["mat_1", "mat_2", "mat_3", "mat_4"];

const Materials = () => {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container px-5 max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
          {t("mat_title")}
        </h2>
        <div className="space-y-3">
          {itemKeys.map((key, i) => (
            <div key={i} className="flex items-center gap-3 bg-surface rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground font-medium text-sm">{t(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
