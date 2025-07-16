// import ServiceCard from "./ServiceCard";
// import { companyData } from '../data/companyData.js';

// const ServicesSection = () => {
//   const { sectionTitle, sectionTitleColor, background, list } = companyData.services;

//   return (
//     <section className="">
//       <h2 className={`text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 ${sectionTitleColor}`}>
//         {sectionTitle}
//       </h2>

//       <div className={`flex gap-5 overflow-x-auto no-scrollbar py-17 px-2 ${background} text-center`} dir="rtl">
//         {list.map((service, index) => (
//           <ServiceCard
//             key={index}
//             image={service.image}
//             text={service.text}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { useDesign } from "../Context/DesignContext.jsx";
import ServiceCard from "./ServiceCard";
import AnimatedSection from "../AnimatedSection.jsx";

const ServicesSection = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) return null;

  const {
    textColor1: titleColor,
    themeColor1: backgroundColor,
    sections,
  } = designData;

  const servicesSection = sections.services;

  if (!servicesSection || !servicesSection.items.length) return null;

  return (
    <section style={{ backgroundColor }}>
      <AnimatedSection>
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-1"
          style={{ color: titleColor }}
        >
          {servicesSection.section_name}
        </h2>

        <div
          className="flex gap-5 overflow-x-auto no-scrollbar py-17 px-2 text-center"
          dir="rtl"
        >
          {servicesSection.items.map((service, index) => (
            <ServiceCard key={index} image={service.image} text={service.text} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ServicesSection;
