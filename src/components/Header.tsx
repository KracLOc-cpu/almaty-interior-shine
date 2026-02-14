import { useLang } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
];

const Header = () => {
  const { lang, setLang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-5 h-12 flex items-center justify-between">
        <span className="font-bold text-foreground text-sm tracking-wide">ПЕРЕТЯЖКА</span>
        <div className="flex gap-1 bg-surface rounded-lg p-0.5">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                lang === l.code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
