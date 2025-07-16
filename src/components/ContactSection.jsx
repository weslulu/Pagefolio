// src/sections/ContactSection.jsx

// import { companyData } from '../data/companyData.js';

// const {
//   mapImage,
//   mapLink,
//   flagImage,
//   title,
//   titleColor,
//   titleSize,
//   paragraph,
//   paragraphColor,
//   paragraphSize,
//   background,
// } = companyData.contactSection;

// const ContactSection = () => {
//   return (
//     <section>
//     <img src={flagImage} className="absolute  right-0 left-0 w-full" />

//     <div >

//       <div className={`${background} py-20 md:px-30 px-13`}>
//         <div className="flex flex-col lg:flex-row items-center md:justify-between md:gap-10 gap-3">
//           {/* خريطة */}
//           <a href={mapLink} target="_blank" rel="noopener noreferrer">
//             <img
//               src={mapImage}
//               className="rounded-lg shadow-w-100 w-full h-full object-cover"
//               alt="Map Location"
//             />
//           </a>

//           {/* النص */}
//           <div className={`max-w-xl lg:text-right text-center`}>
//             <h2 className={`font-bold mb-4 ${titleColor} ${titleSize}`}>{title}</h2>
//             <p className={`leading-loose ${paragraphColor} ${paragraphSize}`}>{paragraph}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default ContactSection;


// import { useState, useEffect } from 'react';
// import { getCompanyInfo } from '../Api/companiesAPI.js';
// import AnimatedSection from '../AnimatedSection.jsx';


// const ContactSection = () => {
//   const [contactData, setContactData] = useState(null);

//   useEffect(() => {
//     getCompanyInfo()
//       .then((response) => {
//         const data = response.data.data[0].sections[0].location_title.locations[0];
//         const page = response.data.data[0];

//        setContactData({
//               mapImage: `http://68.183.28.116/storage/${data.image.image_url}`,
//               mapLink: data.location_url,
//               title: page.sections[0].location_title.section_name,
//               titleColor: page.text_color1,
//               paragraph: data.content,
//               paragraphColor: page.text_color2,
//               background: page.theme_color1,
// });

//       })
//       .catch((error) => console.error('Error fetching contact section:', error));
//   }, []);

//   if (!contactData) return null;

//   const {
//     mapImage,
//     mapLink,
//     title,
//     titleColor,
//     titleSize,
//     paragraph,
//     paragraphColor,
//     background,
//   } = contactData;

//   return (
//     <section>
//       <div style={{ backgroundColor: contactData.background }}>
//         <AnimatedSection>
//        <div  className="py-20 md:px-30 px-13">
//   <div className="flex flex-col lg:flex-row items-center md:justify-between md:gap-10 gap-3">
//     <a href={contactData.mapLink} target="_blank" rel="noopener noreferrer">
//       <img src={contactData.mapImage} className="rounded-lg shadow-w-100 w-full h-full object-cover" alt="Map Location" />
//     </a>
//     <div className="max-w-xl lg:text-right text-center">
//       <h2 style={{ color: contactData.titleColor }} className="font-bold mb-4 md:text-4xl text-3xl">{contactData.title}</h2>
//       <p style={{ color: contactData.paragraphColor }} className="leading-loose text-lg">{contactData.paragraph}</p>
//     </div>
//   </div>
// </div>
// </AnimatedSection>
//       </div>
      
//     </section>
//   );
// };

// export default ContactSection;


import { useDesign } from '../Context/DesignContext.jsx';
import AnimatedSection from '../AnimatedSection.jsx';

const ContactSection = () => {
  const { designData, loading } = useDesign();

  const location = designData?.sections?.location;
  const bgColor = designData?.themeColor1 || '#ffffff';
  const titleColor = designData?.textColor1 || '#000000';
  const paragraphColor = designData?.textColor2 || '#333333';

  if (loading || !location) return null;

  return (
    <section>
      <div style={{ backgroundColor: bgColor }}>
        <AnimatedSection>
          <div className="py-20 md:px-30 px-13">
            <div className="flex flex-col lg:flex-row items-center md:justify-between md:gap-10 gap-3">
              <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={location.image}
                  alt={`خريطة موقع ${location.city}`}
                  className="rounded-lg shadow-w-100 w-full h-full object-cover"
                />
              </a>
              <div className="max-w-xl lg:text-right text-center">
                <h2
                  className="font-bold mb-4 md:text-4xl text-3xl"
                  style={{ color: titleColor }}
                >
                  {location.section_name}
                </h2>
                <p className="leading-loose text-lg" style={{ color: paragraphColor }}>
                  {location.content}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
