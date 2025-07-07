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


import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { getCompanyInfo } from "../Api/companiesAPI.js";

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState({
    sectionTitle: "",
    backgroundColor: "",
    titleColor: "",
    services: [],
  });

  useEffect(() => {
    getCompanyInfo()
      .then((response) => {
        const page = response.data.data[0];
        const serviceSection = page.sections[0].service_title;

        const sectionTitle = serviceSection.section_name;
        const titleColor = page.text_color1;
        const backgroundColor = page.theme_color1;

        const services = serviceSection.services.map((service) => ({
          text: service.content,
          image: `http://68.183.28.116/storage/${service.image.image_url}`,
        }));

        setServicesData({
          sectionTitle,
          backgroundColor,
          titleColor,
          services,
        });
      })
      .catch((error) => console.error("Error fetching services data:", error));
  }, []);

  const { sectionTitle, backgroundColor, titleColor, services } = servicesData;

  if (!services.length) return null;

  return (
    <section style={{ backgroundColor }}>
  <h2
    className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16"
    style={{ color: titleColor }}
  >
    {sectionTitle}
  </h2>

  <div
    className="flex gap-5 overflow-x-auto no-scrollbar py-17 px-2 text-center"
    dir="rtl"
  >
    {services.map((service, index) => (
      <ServiceCard key={index} image={service.image} text={service.text} />
    ))}
  </div>
</section>

  );
};

export default ServicesSection;
