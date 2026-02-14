import { MessageCircle, Camera } from "lucide-react";

const Pricing = () => (
  <section className="py-16 sm:py-20 bg-card">
    <div className="container px-5 text-center max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Стоимость</h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Точная стоимость зависит от состояния и материала. Отправьте фото — рассчитаем бесплатно.
      </p>
      <a
        href="https://wa.me/77071846970"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 active:scale-95"
      >
        <Camera className="w-5 h-5" />
        Отправить фото в WhatsApp
      </a>
    </div>
  </section>
);

export default Pricing;
