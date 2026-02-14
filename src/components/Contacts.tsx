import { MapPin, Phone, Clock, Truck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Contacts = () => {
  const { t } = useLang();

  return (
    <section id="contacts" className="py-16 sm:py-20">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">{t("cont_title")}</h2>

        <div className="max-w-lg mx-auto space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span className="text-foreground text-sm">{t("cont_address")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <a href="tel:+77071846970" className="text-foreground text-sm hover:text-primary transition-colors">+7 707 184 6970</a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <span className="text-foreground text-sm">{t("cont_hours")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-primary shrink-0" />
            <span className="text-foreground text-sm">{t("cont_delivery")}</span>
          </div>
        </div>

        {/* Map — Жумабаева 192, Алматы */}
        <div className="max-w-lg mx-auto rounded-xl overflow-hidden border border-border mb-4">
          <iframe
            src="https://www.google.com/maps?q=43.316966,76.920362&z=17&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <a
            href="https://maps.app.goo.gl/N6NpmfzmpbL9ygTf7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-border text-foreground font-semibold py-3 rounded-xl hover:bg-surface transition-colors text-sm"
          >
            {t("cont_gmaps")}
          </a>
          <a
            href="https://go.2gis.com/teq2a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-border text-foreground font-semibold py-3 rounded-xl hover:bg-surface transition-colors text-sm"
          >
            {t("cont_2gis")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
