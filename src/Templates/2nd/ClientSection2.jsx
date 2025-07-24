// import { companyData } from '../data/companyData.js';
// import "../App.css";


// const {
//   title,
//   titleColor,
//   titleSize,
//   paragraph,
//   paragraphColor,
//   paragraphSize,
//   logoHeight,
//   logos,
// } = companyData.clientsSection2;

// const clientsSection2 = () => {
//   const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

//   return (
//     <section className="py-25 text-center">
//       <h2 className={`${titleColor} ${titleSize} font-bold mb-2`}>
//         {title}
//       </h2>
//       <p className={`${paragraphColor} ${paragraphSize} mb-6`}>
//         {paragraph}
//       </p>

//       <div className="relative bg-white shadow-lg rounded-2xl mx-auto w-full max-w-5xl overflow-hidden px-2 sm:px-4 md:px-6">
//         <div className="flex items-center animate-scroll gap-10 w-max py-6">
//           {scrollingLogos.map((logo, i) => (
//             <img
//               key={i}
//               src={logo}
//               alt={`logo-${i}`}
//               className={`${logoHeight} object-contain`}
//             />
//           ))}
//         </div>

//         {/* الفاصل والرقم */}
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-white pr-15 pl-0 py-9  rounded-l-lg shadow-md">
//           <div className="w-[1px] h-[60px] sm:h-[80px] md:h-[90px] mr-5 bg-[#0A5A7D]" />
//           <span className="text-[#0A5A7D] text-6xl sm:text-6xl md:text-7xl ml-8  font-sans">{logos.length}</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default clientsSection2;

import { useDesign } from '../../Context/DesignContext';
// import '../App.css';
import AnimatedSection from '../../AnimatedSection'

const ClientsSection2 = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        جاري تحميل بيانات العملاء...
      </div>
    );
  }

  const {
    sections,
    textColor1,
    textColor2,
    themeColor1,
    themeColor2,
    fontFamily,
  } = designData;

  const { title, subtitle, list } = sections?.partners || {};

  // تكرار الشعارات للسكرول اللانهائي
  const scrollingLogos = [...list, ...list, ...list, ...list];

  return (
    <section className="py-25 text-center" style={{ fontFamily: fontFamily || 'inherit', backgroundColor: themeColor1 }}>
      <AnimatedSection>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: textColor1 }}>
        {title}
      </h2>
      <p className="text-base md:text-lg lg:text-xl mb-6" style={{ color: textColor2 }}>
        {subtitle}
      </p>

      <div className="relative shadow-lg rounded-2xl mx-auto w-full max-w-5xl overflow-hidden px-2 sm:px-4 md:px-6" style={{backgroundColor:textColor1}}>
        <div className="flex items-center animate-scroll gap-10 w-max py-6">
          {scrollingLogos.map((logo, i) => (
            <img
              key={i}
              src={`${logo.image}?v=${Date.now()}`} // منع الكاش للصورة
              alt={`logo-${i}`}
              className="h-14 sm:h-20 md:h-24 object-contain"
            />
          ))}
        </div>

        {/* الفاصل والعدد */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center  pr-15 pl-0 py-9 rounded-l-lg shadow-md" style={{backgroundColor:textColor1}}>
          <div className="w-[1px] h-[60px] sm:h-[80px] md:h-[90px] mr-5" style={{ backgroundColor: themeColor2 }} />
          <span className="text-6xl sm:text-6xl md:text-7xl ml-8 font-sans" style={{ color: textColor2 }}>
            {list.length}
          </span>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default ClientsSection2;

