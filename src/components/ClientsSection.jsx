// import { companyData } from '../data/companyData.js';

// const ClientsSection = () => {
//   const {
//     title,
//     titleColor,
//     titleSize,
//     paragraph,
//     paragraphColor,
//     paragraphSize,
//     logoHeight,
//     background,
//     sideBlurColor,
//     logos,
//   } = companyData.clientsSection;

// const duplicatedLogos = Array(17).fill(logos).flat();  //عدد تكرار اللوقو

//   return (
//     <section className={`relative py-20 overflow-hidden`}>
//       <h2 className={`${titleSize} font-bold md:mb-4 mb-2 text-center ${titleColor}`}>
//         {title}
//       </h2>
//       <p className={`${paragraphSize} ${paragraphColor} mb-15 text-center`}>
//         {paragraph}
//       </p>

//       {/* صف علوي */}
//       <div className="overflow-hidden">
//         <div
//           className={`absolute left-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-14 bg-gradient-to-r ${sideBlurColor} to-transparent blur-sm z-10`}
//         />
//         <div
//           className={`absolute right-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-12 bg-gradient-to-l ${sideBlurColor} to-transparent blur-sm z-10`}
//         />

//         <div className="marquee-container flex gap-12 animate-marquee-left">
//           {duplicatedLogos.map((logo, index) => (
//             <img
//               key={`top-${index}`}
//               src={logo}
//               className={`${logoHeight} w-auto object-contain`}
//               alt={`logo-${index}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* صف سفلي */}
//       <div className="overflow-hidden mt-12">
//         <div className="marquee-container flex gap-12 animate-marquee-right">
//           {duplicatedLogos.map((logo, index) => (
//             <img
//               key={`bottom-${index}`}
//               src={logo}
//               className={`${logoHeight} w-auto object-contain`}
//               alt={`logo-${index}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsSection;


import { useDesign } from '../Context/DesignContext.jsx';
import AnimatedSection from '../AnimatedSection.jsx';

const ClientsSection = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) return <div>جاري تحميل العملاء...</div>;

  const {
    themeColor1,
    textColor1,
    textColor2,
    sections,
  } = designData;

const { partners } = sections;

const logos = partners.list.map((partner) => partner.image);
const duplicatedLogos = Array(17).fill(logos).flat();

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: themeColor1 }}
    >
      <AnimatedSection>
        <h2
          className="text-3xl md:text-5xl font-bold md:mb-4 mb-2 text-center"
          style={{ color: textColor1 }}
        >
          {partners.title || "شركاؤنا"}
        </h2>

        <p
          className="text-lg mb-15 text-center"
          style={{ color: textColor2 }}
        >
          {partners.subtitle || "نفتخر بثقة شركائنا"} {/* إذا ما أرسلوا subtitle */}
        </p>

        {/* صف علوي */}
        <div className="overflow-hidden">
          <div
            className="absolute left-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-14 blur-sm z-10"
            style={{
              background: `linear-gradient(to right, ${themeColor1}, transparent)`,
            }}
          />
          <div
            className="absolute right-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-12 blur-sm z-10"
            style={{
              background: `linear-gradient(to left, ${themeColor1}, transparent)`,
            }}
          />

          <div className="marquee-container flex gap-12 animate-marquee-left">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={`top-${index}`}
                src={logo}
                className="h-22 w-auto object-contain"
                alt={`logo-${index}`}
              />
            ))}
          </div>
        </div>

        {/* صف سفلي */}
        <div className="overflow-hidden mt-12">
          <div className="marquee-container flex gap-12 animate-marquee-right">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={`bottom-${index}`}
                src={logo}
                className="h-22 w-auto object-contain"
                alt={`logo-${index}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ClientsSection;
