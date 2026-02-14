export type Lang = "ru" | "kz" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  ru: {
    // Hero
    hero_title: "Перетяжка салонов и мебели в Алматы",
    hero_subtitle: "Полный салон • Сиденья • Карты дверей • Диваны и кресла • Замена поролона • Оценка по фото за 10 минут",
    hero_wa: "Написать в WhatsApp",
    hero_call: "Позвонить",
    hero_info: "Жумабаева 192 • Без выходных • 10:00–22:00 • Выезд и доставка",

    // Advantages
    adv_title: "Почему выбирают нас",
    adv_1: "Премиальный результат",
    adv_1d: "Качество, которое видно с первого взгляда",
    adv_2: "Аккуратная разборка/сборка",
    adv_2d: "Без повреждений и следов вмешательства",
    adv_3: "Замена поролона",
    adv_3d: "Восстановление формы и комфорта",
    adv_4: "Подбор материалов и цвета",
    adv_4d: "Широкий выбор кожи и ткани",
    adv_5: "Сроки по договорённости",
    adv_5d: "Чёткое соблюдение дедлайнов",
    adv_6: "Выезд и доставка",
    adv_6d: "По всему Алматы бесплатно",

    // Services
    svc_title: "Наши услуги",
    svc_1: "Полная перетяжка салона",
    svc_2: "Перетяжка сидений",
    svc_3: "Карты дверей / элементы салона",
    svc_4: "Перетяжка мебели",
    svc_5: "Замена поролона",
    svc_6: "Замена секционных деталей",

    // Portfolio
    port_title: "До / После",
    port_more: "Ещё работы",
    port_1: "Toyota Camry — перетяжка сидений",
    port_2: "Диван — замена поролона + перетяжка",
    port_3: "Полный салон — перетяжка",

    // Pricing
    price_title: "Стоимость",
    price_text: "Точная стоимость зависит от состояния и материала. Отправьте фото — рассчитаем бесплатно.",
    price_btn: "Отправить фото в WhatsApp",

    // How we work
    how_title: "Как мы работаем",
    how_1: "Вы отправляете фото",
    how_2: "Мы называем цену и сроки",
    how_3: "Подбор материала и цвета",
    how_4: "Выполнение работы",
    how_5: "Выдача или доставка",

    // Materials
    mat_title: "Материалы и качество",
    mat_1: "Премиальные материалы",
    mat_2: "Ровные швы и аккуратная посадка",
    mat_3: "Восстановление формы",
    mat_4: "Контроль качества на каждом этапе",

    // Reviews
    rev_title: "Отзывы",

    // Final CTA
    cta_title: "Отправьте фото и получите точный расчёт за 10 минут",
    cta_btn: "Написать в WhatsApp",

    // Contacts
    cont_title: "Контакты",
    cont_address: "Алматы, Жумабаева 192",
    cont_hours: "10:00–22:00, без выходных",
    cont_delivery: "Выезд и доставка по Алматы",
    cont_gmaps: "Открыть в Google Maps",
    cont_2gis: "Открыть в 2GIS",
  },

  kz: {
    hero_title: "Алматыда салон мен жиһаз қайта тартуы",
    hero_subtitle: "Толық салон • Отырғыштар • Есік карталары • Дивандар мен креслолар • Көбік ауыстыру • 10 минутта фото бойынша баға",
    hero_wa: "WhatsApp-қа жазу",
    hero_call: "Қоңырау шалу",
    hero_info: "Жұмабаева 192 • Демалыссыз • 10:00–22:00 • Шығу және жеткізу",

    adv_title: "Неге бізді таңдайды",
    adv_1: "Премиум нәтиже",
    adv_1d: "Бірінші қарағаннан көрінетін сапа",
    adv_2: "Ұқыпты бөлшектеу/жинау",
    adv_2d: "Зақымсыз және іздерсіз",
    adv_3: "Көбік ауыстыру",
    adv_3d: "Пішін мен жайлылықты қалпына келтіру",
    adv_4: "Материал мен түс таңдау",
    adv_4d: "Тері мен маталардың кең таңдауы",
    adv_5: "Келісілген мерзімдер",
    adv_5d: "Мерзімдерді қатаң сақтау",
    adv_6: "Шығу және жеткізу",
    adv_6d: "Бүкіл Алматы бойынша тегін",

    svc_title: "Біздің қызметтер",
    svc_1: "Салонды толық қайта тарту",
    svc_2: "Отырғыштарды қайта тарту",
    svc_3: "Есік карталары / салон элементтері",
    svc_4: "Жиһазды қайта тарту",
    svc_5: "Көбік ауыстыру",
    svc_6: "Секциялық бөлшектерді ауыстыру",

    port_title: "Дейін / Кейін",
    port_more: "Тағы жұмыстар",
    port_1: "Toyota Camry — отырғыш қайта тартуы",
    port_2: "Диван — көбік ауыстыру + қайта тарту",
    port_3: "Толық салон — қайта тарту",

    price_title: "Құны",
    price_text: "Нақты құны жағдайы мен материалға байланысты. Фото жіберіңіз — тегін есептейміз.",
    price_btn: "WhatsApp-қа фото жіберу",

    how_title: "Біз қалай жұмыс істейміз",
    how_1: "Сіз фото жібересіз",
    how_2: "Біз бағаны және мерзімді айтамыз",
    how_3: "Материал мен түс таңдау",
    how_4: "Жұмысты орындау",
    how_5: "Беру немесе жеткізу",

    mat_title: "Материалдар мен сапа",
    mat_1: "Премиум материалдар",
    mat_2: "Тегіс тігістер мен ұқыпты отыру",
    mat_3: "Пішінді қалпына келтіру",
    mat_4: "Әр кезеңде сапа бақылау",

    rev_title: "Пікірлер",

    cta_title: "Фото жіберіңіз және 10 минутта нақты есеп алыңыз",
    cta_btn: "WhatsApp-қа жазу",

    cont_title: "Байланыс",
    cont_address: "Алматы, Жұмабаева 192",
    cont_hours: "10:00–22:00, демалыссыз",
    cont_delivery: "Алматы бойынша шығу және жеткізу",
    cont_gmaps: "Google Maps-те ашу",
    cont_2gis: "2GIS-те ашу",
  },

  en: {
    hero_title: "Premium Car Interior & Furniture Upholstery in Almaty",
    hero_subtitle: "Full interior • Seats • Door panels • Sofas & chairs • Foam replacement • Photo estimate in 10 minutes",
    hero_wa: "Message on WhatsApp",
    hero_call: "Call us",
    hero_info: "Zhumabayeva 192 • Open daily • 10:00–22:00 • Pickup & delivery",

    adv_title: "Why choose us",
    adv_1: "Premium results",
    adv_1d: "Quality you can see at first glance",
    adv_2: "Careful disassembly/assembly",
    adv_2d: "No damage or marks left behind",
    adv_3: "Foam replacement",
    adv_3d: "Restoring shape and comfort",
    adv_4: "Material & color matching",
    adv_4d: "Wide selection of leather and fabric",
    adv_5: "Agreed deadlines",
    adv_5d: "Strict deadline compliance",
    adv_6: "Pickup & delivery",
    adv_6d: "Free across Almaty",

    svc_title: "Our services",
    svc_1: "Full interior upholstery",
    svc_2: "Seat upholstery",
    svc_3: "Door panels / interior elements",
    svc_4: "Furniture upholstery",
    svc_5: "Foam replacement",
    svc_6: "Sectional part replacement",

    port_title: "Before / After",
    port_more: "More work",
    port_1: "Toyota Camry — seat upholstery",
    port_2: "Sofa — foam replacement + upholstery",
    port_3: "Full interior — upholstery",

    price_title: "Pricing",
    price_text: "The exact cost depends on condition and material. Send a photo — we'll estimate for free.",
    price_btn: "Send photo via WhatsApp",

    how_title: "How we work",
    how_1: "You send a photo",
    how_2: "We give you the price and timeline",
    how_3: "Material and color selection",
    how_4: "We do the work",
    how_5: "Pickup or delivery",

    mat_title: "Materials & Quality",
    mat_1: "Premium materials",
    mat_2: "Even stitching and neat fit",
    mat_3: "Shape restoration",
    mat_4: "Quality control at every stage",

    rev_title: "Reviews",

    cta_title: "Send a photo and get an exact quote in 10 minutes",
    cta_btn: "Message on WhatsApp",

    cont_title: "Contacts",
    cont_address: "Almaty, Zhumabayeva 192",
    cont_hours: "10:00–22:00, open daily",
    cont_delivery: "Pickup and delivery across Almaty",
    cont_gmaps: "Open in Google Maps",
    cont_2gis: "Open in 2GIS",
  },
};
