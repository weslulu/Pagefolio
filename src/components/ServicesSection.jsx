import ServiceCard from "./ServiceCard";
import { companyData } from '../data/companyData.js';

const ServicesSection = () => {
  const { sectionTitle, sectionTitleColor, background, list } = companyData.services;

  return (
    <section className="">
      <h2 className={`text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 ${sectionTitleColor}`}>
        {sectionTitle}
      </h2>

      <div className={`flex gap-5 overflow-x-auto no-scrollbar py-17 px-2 ${background} text-center`} dir="rtl">
        {list.map((service, index) => (
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
