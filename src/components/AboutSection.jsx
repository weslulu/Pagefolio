// import { companyData } from '../data/companyData.js';

// const AboutPage = () => {
//   const { title, titleColor, logo, paragraphs } = companyData.about;

//   return (
//     <section className="px-10 md:px-15 py-12 flex flex-col lg:flex-row items-center content-center justify-center md:gap-10 md:justify-between">

//       {/* النصوص */}
//       <div className="w-full lg:w-1/2 text-center lg:text-right px-2 md:px-5 lg:px-0 md:leading-7">
//         <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${titleColor}`}>
//           {title}
//         </h1>

//         {paragraphs.map((p, index) => (
//           <p
//             key={index}
//             className={`text-base md:text-xl lg:text-2xl md:leading-8 mb-3 md:mb-6 ${p.color}`}
//           >
//             {p.text}
//           </p>
//         ))}
//       </div>

//       {/* الصورة */}
//       <div className="w-full lg:w-1/2 flex justify-center lg:justify-items-start mt-6 lg:mt-0">
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-50 lg:w-150 object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutPage;

import { useEffect, useState } from 'react';
import { getCompanyInfo } from '../Api/companiesAPI';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [sectionTitle, setSectionTitle] = useState('');

  useEffect(() => {
    getCompanyInfo()
      .then((res) => {
        const pages = res.data?.data;

        if (!pages || pages.length === 0) return;

        const layout1Page = pages.find((page) => page.layout === "1");
        if (!layout1Page) return;

        const backTitle = layout1Page.sections?.[0]?.back_title;
        if (!backTitle) return;

        setSectionTitle(backTitle.section_name);
        setAboutData({
          background: backTitle.background,
          textColor1: layout1Page.text_color1,
          textColor2: layout1Page.text_color2,
          bgColor: layout1Page.theme_color1,
          logoUrl: layout1Page.company.logo_url, // ✅ نضيف الشعار هنا
        });
      })
      .catch((err) => {
        console.error('البيانات ما وصلت', err);
      });
  }, []);

  if (!aboutData) return <div>بيتحمل اصبري</div>;

  const { background, textColor1, textColor2, bgColor, logoUrl } = aboutData;
  const { content, image } = background;

  return (
    <section
      className="px-10 md:px-15 py-12 flex flex-col lg:flex-row items-center content-center justify-center md:gap-10 md:justify-between"
      style={{ backgroundColor: bgColor }}
    >
      {/* النصوص */}
      <div className="w-full text-center lg:text-right px-10 md:px-5 lg:px-0 md:leading-7">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: textColor1 }}
        >
          {sectionTitle}
        </h1>

        <p
          className="text-base md:text-xl lg:text-2xl md:leading-8 mb-3 md:mb-6"
          style={{ color: textColor2 }}
        >
          {content}
        </p>
      </div>

      {/* الصورة */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-items-start mt-6 lg:mt-0">
        <img
          src={`http://68.183.28.116/storage/${encodeURI(logoUrl)}`}
          alt={image.image_name}
          className="w-70 lg:w-100 object-contain"
        />
      </div>
    </section>
  );
};

export default AboutPage;
