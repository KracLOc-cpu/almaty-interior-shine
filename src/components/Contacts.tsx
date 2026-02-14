import { MapPin, Phone, Clock, Truck } from "lucide-react";

const Contacts = () => (
  <section id="contacts" className="py-16 sm:py-20">
    <div className="container px-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">Контакты</h2>

      <div className="max-w-lg mx-auto space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          <span className="text-foreground text-sm">Алматы, Жумабаева 192</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary shrink-0" />
          <a href="tel:+77071846970" className="text-foreground text-sm hover:text-primary transition-colors">+7 707 184 6970</a>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary shrink-0" />
          <span className="text-foreground text-sm">10:00–22:00, без выходных</span>
        </div>
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-primary shrink-0" />
          <span className="text-foreground text-sm">Выезд и доставка по Алматы</span>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-lg mx-auto rounded-xl overflow-hidden border border-border mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8!2d76.89!3d43.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE2JzQ4LjAiTiA3NsKwNTMnMjQuMCJF!5e0!3m2!1sru!2skz!4v1700000000000"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Жумабаева+192+Алматы"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-border text-foreground font-semibold py-3 rounded-xl hover:bg-surface transition-colors text-sm"
        >
          Открыть в Google Maps
        </a>
        <a
          href="https://2gis.kz/almaty/search/Жумабаева%20192"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-border text-foreground font-semibold py-3 rounded-xl hover:bg-surface transition-colors text-sm"
        >
          Открыть в 2GIS
        </a>
      </div>
    </div>
  </section>
);

export default Contacts;
