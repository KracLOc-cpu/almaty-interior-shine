import serviceFullSalon from "@/assets/service-full-salon.jpg";
import serviceSeats from "@/assets/service-seats.jpg";
import serviceDoors from "@/assets/service-doors.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceFoam from "@/assets/service-foam.jpg";
import serviceParts from "@/assets/service-parts.jpg";

const services = [
  { img: serviceFullSalon, title: "Полная перетяжка салона" },
  { img: serviceSeats, title: "Перетяжка сидений" },
  { img: serviceDoors, title: "Карты дверей / элементы салона" },
  { img: serviceFurniture, title: "Перетяжка мебели" },
  { img: serviceFoam, title: "Замена поролона" },
  { img: serviceParts, title: "Замена секционных деталей" },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-card">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
          Наши услуги
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base text-foreground">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
