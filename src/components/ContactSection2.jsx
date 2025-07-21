
// import { companyData } from '../data/companyData.js';


// const {
//   maps,
//   flagImage,
//   background,
// } = companyData.contactSection2;

// const ContactSection2 = () => {
  
//   return (
//     <section>
//       {/* صورة الزخرفة */}
//       <img src={flagImage} className="absolute left-0 right-0  w-full z-0" alt="Decoration" />
      
//       {/* الخلفية الصفراء + الكروت + النص */}
//       <div className={`${background} px-4 md:px-15 sm:px-10 pt-23 z-10`}>
//         <div className="flex flex-col md:flex-row-reverse  items-center justify-between gap-10">
//              {/* النص بعد الكروت (يمين) */}
//            <div className="text-white text-center text-2xl md:text-4xl sm:text-3xl   font-bold  leading-snug md:w-1/2">
//             <p>قم بزيارتنا للوصول و انضم الينا </p>

//           </div>  
//           {/*  الكروت أول (يسار في الاتجاه العادي) */}
//          <div className="flex flex-row items-center gap-10 md:mt-7 ">
//             {maps.map((map, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md overflow-hidden  w-[180px] md:w-[270px] sm:w-[270px] px-3 py-3"
//               >
//                 <a href={map.link} target="_blank" rel="noopener noreferrer">
//                   <img
//                     src={map.image}
//                     alt={`Map of ${map.city}`}
//                     className="w-full h-50 sm:h-60 md:h-64 object-cover"
//                   />
//                 </a>
//                 <div className="text-right py-3 px-8 text-md md:text-2xl sm:text-2xl font-bold text-[#0A5A7D]">
//                   {map.city}
//                 </div>
//               </div>
//             ))}
//           </div> 
//         </div>
//       </div>

//       {/* الشريط الأزرق في الأسفل */}
//       <div className="bg-[#0A5A7D] h-6 w-full" />
//     </section>
//   );
// };

// export default ContactSection2;

import { useDesign } from '../Context/DesignContext.jsx';
import AnimatedSection from '../AnimatedSection.jsx'

const ContactSection2 = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        جاري تحميل البيانات...
      </div>
    );
  }

  const {
    sections,
    themeColor1,
    themeColor2,
    textColor1,
    textColor2,
    fontFamily,
  } = designData;

  const locationData = sections?.location;
  const hasMultipleLocations = sections?.location_title?.locations?.length > 1;
  const content = locationData?.content;

  const maps = locationData
    ? [{ city: locationData.city, image: locationData.image, link: locationData.mapUrl }]
    : [];

  return (
    <section style={{ fontFamily: fontFamily || 'inherit' }}>
      {/* الخلفية + الكروت + النص */}
      <div
        className="px-4 md:px-15 sm:px-10 pt-23 z-10"
        style={{ backgroundColor: themeColor1 }}
      >
        <AnimatedSection>
        <div className={`flex ${hasMultipleLocations ? 'flex-col md:flex-row-reverse' : 'flex-col-reverse md:flex-row-reverse'} items-center justify-between gap-10`}>
          
          {/* النص */}
          <div className={`text-center font-bold leading-snug ${hasMultipleLocations ? 'text-2xl md:text-4xl sm:text-3xl md:w-1/2' : 'text-3xl md:text-3xl sm:text-4xl w-full mb-6'}`} style={{ color: textColor1 }}>
            <p>{content}</p>
          </div>

          {/* الكروت */}
          <div className={`flex flex-wrap items-center gap-10 ${hasMultipleLocations ? 'md:mt-7 justify-center' : 'justify-center w-full'}`}>
            {maps.map((map, index) => (
              <div
                key={index}
                className={`${hasMultipleLocations ? 'w-[180px] md:w-[270px]' : 'w-full max-w-md'} shadow-md overflow-hidden px-3 py-3`}
                style={{ background: themeColor2 }}
              >
                <a href={map.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`${map.image}?v=${Date.now()}`}
                    alt={`Map of ${map.city}`}
                    className="w-full h-50 sm:h-60 md:h-64 object-cover"
                  />
                </a>
                <div
                  className="text-right py-3 px-8 text-md md:text-2xl sm:text-2xl font-bold"
                  style={{ color: textColor2 }}
                >
                  {map.city}
                </div>
              </div>
            ))}
          </div>
        </div>
        </AnimatedSection>
      </div>

      {/* شريط سفلي */}
      <div className="h-6 w-full" style={{ backgroundColor: themeColor1 }} />
    </section>
  );
};

export default ContactSection2;
