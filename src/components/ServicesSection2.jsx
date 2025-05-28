import { useState, useEffect, useRef } from "react";

const ServicesSection2 = () => {
  const companyData = {
    services2: {
      sectionTitleColor: "text-white",
      background: "bg-[#0979A2]",
    },
  };

  const { sectionTitleColor, background } = companyData.services2;

  const cards = [
    {
      id: 1,
      img: "/src/assets/services/ser1.png",
      title: "نعكس هويتك بدقة",
      desc: "نصمم لك موقع بورتفوليو احترافي يعكس هوية شركتك بدقة، ويُبرز نقاط قوتك بأسلوب جذاب ويمنح عملاءك انطباعًا مميزًا",
      href: "####",
    },
    {
      id: 2,
      img: "/src/assets/services/ser2.png",
      title: "سهولة الوصول والمشاركة",
      desc: "نوفّر لك رابطًا مخصصًا لموقعك يسهل عليك مشاركته مع عملائك ويمنحهم وصولًا مباشرًا وسريعًا إلى صفحتك دون أي تعقيد",
      href: "####",
    },
    {
      id: 3,
      img: "/src/assets/services/ser3.png",
      title: "مرونة في التحديث",
      desc: "قابلية التعديل المستمر على موقعك لضمان تحديث المحتوى بسهولة، ومواكبة كل جديد في شركتك أو خدماتك بدون أي تعقيد",
      href: "####",
    },
    {
      id: 4,
      img: "/src/assets/services/ser2.png",
      title: "دعم فني مستمر",
      desc: "نوفر لك فريق دعم فني جاهز لمساعدتك في أي مشكلة تواجهها لضمان استمرارية موقعك بأفضل أداء",
      href: "####",
    },
    {
      id: 5,
      img: "/src/assets/services/ser1.png",
      title: "تحليلات متقدمة",
      desc: "نوفر لك تقارير وتحليلات متقدمة تساعدك على فهم سلوك زوار موقعك واتخاذ قرارات مبنية على البيانات",
      href: "####",
    },
    {
      id: 6,
      img: "/src/assets/services/ser3.png",
      title: "تخصيص كامل",
      desc: "نقدم لك حلول تخصيص كاملة تتيح لك تعديل أي جزء في موقعك بسهولة تامة لتلائم احتياجاتك الخاصة",
      href: "####",
    },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const cardWidth = 350; // عرض كل كرت تقريبي بالبكسل
  const cardsToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className={`py-16 ${background}`}>
      <h1 className={`text-3xl md:text-5xl font-medium text-center mb-4 ${sectionTitleColor}`}>
        الخدمات التي نقدمها
      </h1>
      <p className={`text-sm md:text-xl text-center mb-10 ${sectionTitleColor} px-4`}>
        نحن لا نقدم مجرد خدمات، بل نبني شراكة تساهم في تعزيز حضورك الرقمي. خدماتنا مصممة وفق رؤيتك، وتُنفذ باحتراف لتحقيق نتائج ملموسة
      </p>

      {/* سطح المكتب */}
      <div className="hidden lg:flex justify-center items-center gap-4 px-10 relative">
        <button
          onClick={prev}
          className="p-5 rounded-full bg-[#DCB12E] hover:bg-[#bb9d5b] text-white text-xl font-bold z-10"> </button>

        <div className="overflow-hidden w-[1100px]">
          <div
            ref={containerRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (cardWidth + 16)}px)`,
              minWidth: `${cards.length * (cardWidth + 16)}px`,
            }}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative z-0 bg-white text-black w-[350px] rounded-lg shadow-lg mx-2 my-2 p-6 flex-shrink-0 transition-all duration-160 hover:shadow-[0_0_7px_10px_rgba(247,210,80,0.9)]">
                <img src={card.img} alt={card.title} className="w-full h-44 object-cover rounded-md mb-4" />
                <h2 className="text-lg font-bold text-right">{card.title}</h2>
                <p className="text-sm text-right">{card.desc}</p>
                <div className="flex justify-end mt-4">
                  <a
                    href={card.href}
                    className="flex items-center gap-2 bg-[#DCB12E] hover:bg-[#bb9d5b] text-white px-4 py-1 rounded-full text-sm">
                    <img src="/src/assets/Arrowbut.png" className="w-4 h-4" />
                    اكتشف المزيد
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="p-5 rounded-full bg-[#DCB12E] hover:bg-[#bb9d5b] text-white text-xl font-bold z-10">

        </button>
      </div>

      {/* الجوال */}
      <div className="lg:hidden flex overflow-x-auto gap-4 px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative z-0 w-[85vw] flex-shrink-0 bg-white text-black rounded-lg shadow-lg snap-start p-4 my-2 hover:shadow-[0_0_20px_12px_rgba(247,210,80,0.9)]"
          >
            <img src={card.img} alt={card.title} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="font-bold text-right">{card.title}</h2>
            <p className="text-sm text-right">{card.desc}</p>
            <div className="flex justify-end mt-4">
              <a
                href={card.href}
                className="flex items-center gap-2 bg-[#DCB12E] hover:bg-[#bb9d5b] text-white px-4 py-1 rounded-full text-sm"
              >
                <img src="/src/assets/Arrowbut.png" className="w-4 h-4" />
                اكتشف المزيد
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection2;
