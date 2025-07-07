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

import { useEffect, useState } from 'react';
import { getCompanyInfo } from '../Api/companiesAPI';

const ClientsSection = () => {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [logos, setLogos] = useState([]);
  const [themeColor1, setThemeColor1] = useState('#ffffff');
  const [themeColor2, setThemeColor2] = useState('#cccccc');
  const [textColor1, setTextColor1] = useState('#000000');
 const [textColor2, setTextColor2] = useState('#111111');
  useEffect(() => {
    getCompanyInfo()
      .then((res) => {
        const page = res.data?.data?.[0];
        const partnerTitle = page?.sections?.[0]?.partner_title;

        if (partnerTitle) {
          setTitle(partnerTitle.section_name);
          setParagraph(partnerTitle.sub_title);
          const logoUrls = partnerTitle.partners?.map(
            (partner) => `http://68.183.28.116/storage/${partner.image.image_url}`
          );
          setLogos(logoUrls || []);
        }

        setThemeColor1(page?.theme_color1 || '#ffffff');
        setThemeColor2(page?.theme_color2 || '#cccccc');
        setTextColor1(page?.text_color1 || '#000000');
        setTextColor2(page?.text_color2 || '#000000');
      })
      .catch((err) => {
        console.error('فشل جلب بيانات العملاء:', err);
      });
  }, []);

  const duplicatedLogos = Array(17).fill(logos).flat();

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: themeColor1 }}
    >
      <h2
        className="text-3xl font-bold md:mb-4 mb-2 text-center"
        style={{ color: textColor1 }}
      >
        {title}
      </h2>
      <p
        className="text-lg mb-15 text-center"
        style={{ color: textColor2 }}
      >
        {paragraph}
      </p>

      {/* صف علوي */}
      <div className="overflow-hidden">
        <div
          className="absolute left-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-14 blur-sm z-10"
          style={{
            background: `linear-gradient(to right, ${themeColor1}, transparent)`
          }}
        />
        <div
          className="absolute right-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-12 blur-sm z-10"
          style={{
            background: `linear-gradient(to left, ${themeColor1}, transparent)`
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
    </section>
  );
};

export default ClientsSection;
