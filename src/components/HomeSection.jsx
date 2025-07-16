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


import { useDesign } from "../Context/DesignContext";

const Hero = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        بيحمل، اصبري...
      </div>
    );
  }

  const company = {
    title: designData.companyName,
    subtitle: designData.slogan,
    gifImage: designData.sections?.whoWeAre?.image,
    titleColor: designData.textColor1,
    subtitleColor: designData.textColor2,
    buttonBgColor: designData.textColor1,
    hoverTextColor: designData.textColor1,
    hoverButtonColor: designData.themeColor2,
    buttonTextColor: designData.textColor2,
  };

  const {
    title,
    subtitle,
    gifImage,
    titleColor,
    subtitleColor,
    buttonBgColor,
    buttonTextColor,
    hoverButtonColor,
  } = company;

  return (
    <div className="h-full bg-[url('/src/assets/5.svg')] bg-cover bg-center bg-no-repeat">
      <section className="px-10 md:px-20 pt-40 pb-5 flex flex-col lg:flex-row items-center lg:justify-between gap-10 overflow-hidden content-center relative">
        {/* صورة الشعار */}
        <div className="md:w-full lg:w-[510px] lg:shadow-xl rounded-xl overflow-hidden">
          <img
            src={gifImage}
            className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto"
            alt="Logo"
          />
        </div>

        {/* النصوص */}
        <div className="text-center lg:text-right w-full lg:w-1/2 space-y-3">
          <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold leading-10" style={{ color: titleColor }}>
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl" style={{ color: subtitleColor }}>
            {subtitle}
          </p>

          {/* زر يظهر فقط على الجوال */}
          <div className="block md:hidden">
            <button
              className="px-4 py-1 rounded-full text-sm md:text-base transition cursor-pointer"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = hoverButtonColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = buttonBgColor)}
            >
              أنشئ ملفك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

