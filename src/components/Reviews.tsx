import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const reviewsData = {
  ru: [
    { name: "Асхат М.", text: "Перетянули полный салон на Camry, как новый стал. Рекомендую!" },
    { name: "Марина К.", text: "Диван восстановили идеально, даже поролон заменили. Спасибо!" },
    { name: "Дмитрий Р.", text: "Быстро, аккуратно, материал отличный. Буду обращаться ещё." },
    { name: "Айгерим Т.", text: "Перетяжка сидений — швы ровные, сидеть удобно. 5 из 5!" },
    { name: "Сергей Л.", text: "Доставили и забрали сами, очень удобно. Качество на высоте." },
    { name: "Олег В.", text: "Руль и ручник перетянули за день. Выглядит шикарно." },
    { name: "Алия Б.", text: "Кресло из офиса как новое. Быстро и недорого." },
    { name: "Нурлан С.", text: "Полностью доволен работой — карты дверей сделаны идеально." },
    { name: "Екатерина П.", text: "Два дивана перетянули, качество отличное, рекомендую всем." },
    { name: "Арман Ж.", text: "Обратился по рекомендации друга, не пожалел. Всё супер!" },
  ],
  kz: [
    { name: "Асхат М.", text: "Camry-ге толық салон қайта тартылды, жаңадай болды. Ұсынамын!" },
    { name: "Марина К.", text: "Диванды тамаша қалпына келтірді, көбігін де ауыстырды. Рахмет!" },
    { name: "Дмитрий Р.", text: "Жылдам, ұқыпты, материал керемет. Тағы хабарласамын." },
    { name: "Айгерім Т.", text: "Отырғыш қайта тартуы — тігістер тегіс, отыру ыңғайлы. 5/5!" },
    { name: "Сергей Л.", text: "Өздері жеткізіп, өздері алып кетті, өте ыңғайлы. Сапа жоғары." },
    { name: "Олег В.", text: "Руль мен қол тежегішін бір күнде қайта тартты. Керемет көрінеді." },
    { name: "Алия Б.", text: "Кеңседегі кресло жаңадай болды. Жылдам және арзан." },
    { name: "Нұрлан С.", text: "Жұмысқа толық ризамын — есік карталары тамаша жасалған." },
    { name: "Екатерина П.", text: "Екі диванды қайта тартты, сапасы керемет, бәріне ұсынамын." },
    { name: "Арман Ж.", text: "Досымның кеңесімен хабарластым, өкінбедім. Бәрі тамаша!" },
  ],
  en: [
    { name: "Askhat M.", text: "Full Camry interior reupholstered, looks brand new. Highly recommend!" },
    { name: "Marina K.", text: "Sofa restored perfectly, foam replaced too. Thank you!" },
    { name: "Dmitry R.", text: "Fast, neat, great material. Will come back again." },
    { name: "Aigerim T.", text: "Seat upholstery — even stitches, very comfortable. 5 out of 5!" },
    { name: "Sergey L.", text: "They picked up and delivered, very convenient. Top quality." },
    { name: "Oleg V.", text: "Steering wheel and handbrake done in a day. Looks amazing." },
    { name: "Aliya B.", text: "Office chair looks brand new. Fast and affordable." },
    { name: "Nurlan S.", text: "Fully satisfied — door panels done perfectly." },
    { name: "Ekaterina P.", text: "Two sofas reupholstered, excellent quality, recommend to everyone." },
    { name: "Arman Zh.", text: "Came on a friend's recommendation, no regrets. Everything is great!" },
  ],
};

const Reviews = () => {
  const { lang, t } = useLang();
  const reviews = reviewsData[lang] || reviewsData.ru;

  return (
    <section className="py-16 sm:py-20">
      <div className="container px-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">{t("rev_title")}</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-5 px-5">
          {reviews.map((r, i) => (
            <div key={i} className="min-w-[260px] max-w-[300px] snap-start bg-card rounded-xl p-5 border border-border shrink-0">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground mb-3 leading-relaxed">"{r.text}"</p>
              <p className="text-xs font-semibold text-muted-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
