// import companyData from "../data/companyData";
// import Navbar from "/src/components/Navbar";


// const Hero = () => {
//   const { fontFamily, hero } = companyData;

//   return (

//     <div className="h-full bg-[url('/src/assets/5.svg')] bg-cover bg-center bg-no-repeat">
//       <Navbar />

//       <section
//       className={"px-10 md:px-20 py-20 flex flex-col lg:flex-row items-center lg:justify-between gap-10 overflow-hidden content-center relative"}
//       style={{ fontFamily }}
//     >
//       {/* الصورة */}
//       <div className="md:w-full lg:w-[550px] lg:shadow-xl rounded-xl overflow-hidden">
//         <img
//           src={hero.gifImage}
//           className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto"
//         />
//       </div>

//       {/* النص */}
//       <div className={`text-center lg:text-right w-full lg:w-1/2 space-y-3`}>
//         <h1 className={`text-3xl sm:text-2xl md:text-3xl font-bold leading-10 ${hero.titleColor}`}>
//           {hero.title}
//         </h1>

//         <p className={`text-base sm:text-lg md:text-xl ${hero.subtitleColor}`}>
//           {hero.subtitle}
//         </p>

//         {/* زر الجوال فقط */}
//         <div className="block md:hidden">
//           <button
//             className={`px-5 py-2 rounded-full text-sm font-semibold transition ${hero.buttonBg} ${hero.buttonText} ${hero.buttonHover}`}
//           >
//             !انشئ ملفك
//           </button>
//         </div>
//       </div>

//     </section>
//           {/* العلم */}
//           <img src={hero.flagImage} className="absolute bottom-0 right-0 left-0 w-full " />

//     </div>
    
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import Navbar from "/src/components/Navbar";
import { getCompanyInfo } from "../Api/companiesAPI";
// import flagImage from "/src/assets/flag.png"; // ✅ صورة ثابتة من المشروع

const Hero = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    getCompanyInfo()
      .then((res) => {
        const pages = res.data?.data;
        if (!pages || pages.length === 0) return;

        const layout1Page = pages.find((page) => page.layout === "1");
        if (!layout1Page) return;

        setCompanyInfo({
          title: layout1Page.company.name,
          subtitle: layout1Page.company.slogan,
          gifImage: res.data.data[0].sections[0].back_title.background.image.image_url,
          backgrColor1:layout1Page.theme_color1,
          backgrColor2:layout1Page.theme_color2,
          titleColor: layout1Page.text_color1, // استخدم text_color1 أو text_color حسب المتاح
          subtitleColor: layout1Page.text_color2,
          buttonBg: "bg-black",
          buttonText: "text-white",
          buttonHover: "hover:bg-gray-700",
          fontFamily: "inherit", // استخدام خط افتراضي
        });
      })
      .catch((err) => {
        console.error("فشل تحميل بيانات الشركة", err);
      });
  }, []);

  if (!companyInfo)
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        بيحمل، اصبري...
      </div>
    );

  const {
    title,
    subtitle,
    gifImage,
    titleColor,
    subtitleColor,
    buttonBg,
    buttonText,
    buttonHover,
    fontFamily,
  } = companyInfo;

  return (
    <div className="h-full bg-[url('/src/assets/5.svg')] bg-cover bg-center bg-no-repeat">
      <Navbar />

      <section
        className="px-10 md:px-20 py-20 flex flex-col lg:flex-row items-center lg:justify-between gap-10 overflow-hidden content-center relative"
        style={{ fontFamily }}
      >
        {/* صورة الشعار */}
        <div className="md:w-full lg:w-[510px] lg:shadow-xl rounded-xl overflow-hidden">
          <img
            src={`http://68.183.28.116/storage/${encodeURI(gifImage)}`}
            className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto"
            alt="Logo"
          />
        </div>

        {/* النصوص */}
        <div className="text-center lg:text-right w-full lg:w-1/2 space-y-3">
          <h1
            className="text-3xl sm:text-2xl md:text-3xl font-bold leading-10"
            style={{ color: titleColor }}
          >
            {title}
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>

          {/* زر يظهر فقط على الجوال */}
          <div className="block md:hidden">
            <button
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${buttonBg} ${buttonText} ${buttonHover}`}
            >
              !انشئ ملفك
            </button>
          </div>
        </div>
      </section>

      {/* صورة العلم (ثابتة) */}
      {/* <img
        src={flagImage}
        className="absolute bottom-0 right-0 left-0 w-full"
        alt="flag"
      /> */}
    </div>
  );
};

export default Hero;
