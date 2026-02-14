import { useLang } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Instagram } from "lucide-react";

const langs: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
  </svg>
);

const Header = () => {
  const { lang, setLang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-5 h-12 flex items-center justify-between">
        <span className="font-bold text-foreground text-sm tracking-wide">ПЕРЕТЯЖКА</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 items-center">
            <a href="https://www.instagram.com/almaty_peretyazhka" target="_blank" rel="noopener noreferrer" className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@peretyazhka11" target="_blank" rel="noopener noreferrer" className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
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
      </div>
    </header>
  );
};

export default Header;
