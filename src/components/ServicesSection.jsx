import ServiceCard from "./ServiceCard";

const services = [
  {
    image: "src/assets/service1.png",
    icon: "src/assets/icons/react.svg",
    text: "تصمم لك موقع بروفايلو يعكس هوية شركتك وخدماتك بدقة"
  },
  {
    image: "src/assets/service2.png",
    icon: "src/assets/icons/react.svg",
    text: "قابلية التعديل المستمر لضمان تحديثات صفحتك"
  },
  {
    image: "src/assets/service3.png",
    icon: "src/assets/icons/react.svg",
    text: "توفير رابط مخصص لسهولة الوصول والمشاركة"
  },
  {
    image: "src/assets/service4.png",
    icon: "src/assets/icons/react.svg",
    text: "نظام متجاوب يعمل على جميع الأجهزة"
  },
  {
    image: "src/src/assets/service5.png",
    icon: "src/assets/icons/react.svg",
    text: "دعم فني مستمر ومتابعة"
  },
  {
    image: "src/assets/service6.png",
    icon: "src/assets/icons/react.svg",
    text: "تحسين لمحركات البحث SEO"
  },
  {
    image: "src/assets/service7.png",
    icon: "src/assets/icons/react.svg",
    text: "تحديثات دورية تلقائية"
  },
  {
    image: "/assets/service8.png",
    icon: "src/assets/icons/react.svg",
    text: "خدمات تصميم إضافية للهوية"
  }
];

const ServicesSection = () => {
  return (
    <section className="">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F5374] text-center mb-10 md:mb-16">الخدمات التي نقدمها</h2>

      <div className="flex gap-5 overflow-x-auto no-scrollbar py-17 px-2 bg-gradient-to-r from-[#81D9FF] via-[#2C78A7] to-[#1F5374] text-center" dir="rtl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            icon={service.icon}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
