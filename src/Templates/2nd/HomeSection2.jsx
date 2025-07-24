
// import { companyData } from '../data/companyData.js';



// const Hero = () => {
//   const { fontFamily, hero2 } = companyData;

//   return (


// <div className="h-full bg-[url('/src/assets/SaudiFlag.png')] bg-cover bg-center bg-no-repeat">

//         <div className="absolute inset-0 bg-black  opacity-70"></div>

//       <section className={" w-full px-10 md:px-20 py-40 flex flex-col items-center lg:justify-center gap-10 overflow-hidden content-center relative"} style={{ fontFamily }}>

//       {/* الصورة */}
//       {/* <div className="md:w-full lg:w-[550px] lg:shadow-xl rounded-xl overflow-hidden">
//         <img src={hero2.gifImage} className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto"/>
//       </div> */}

//       {/* النص */}
//       <div className={`text-center space-y-3 md:space-y-6 lg:space-y-10`}>
//         <h1 className={`text-4xl lg:px-0 sm:text-2xl md:text-5xl lg:text-6xl font-extrabold lg:leading-10 ${hero2.titleColor}`}>
//           {hero2.title}
//         </h1>

//         <p className={` text-md sm:text-lg md:text-2xl md:px-30 lg:text-3xl lg:px-90 ${hero2.subtitleColor}`}>
//           {hero2.subtitle}
//         </p>

//         {/* زر الجوال فقط */}
//         <div>
//           <button
//             className={` shadow-lg drop-shadow-md px-10 py-2 rounded-lg text-md lg:text-2xl font-bold transition mt-2 md:mt-0 cursor-pointer ${hero2.buttonBg}  ${hero2.buttonTextColor} ${hero2.buttonHover}`}> <span className="drop-shadow-xl">{hero2.textbutton}</span>
//           </button>
//         </div>
//       </div>

//     </section>

//           {/* العلم */}
//           <img src={hero2.flagImage} className="absolute bottom-0 right-0 left-0 w-full " />
//     </div>
    

    
    
//   );
// };

// export default Hero;

import { useDesign } from '../../Context/DesignContext';

const Hero = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        بيتم التحميل...
      </div>
    );
  }

  const {
    fontFamily,
    companyName,
    slogan,
    textColor1,
    textColor2,
    themeColor2,
    sections,
  } = designData;

  return (
<div
  className="h-full bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url("${sections.whoWeAre?.image}")`,
    fontFamily: fontFamily || "inherit",
  }}
>

      {/* فلتر أسود */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <section className="w-full px-10 md:px-20 py-60 flex flex-col items-center lg:justify-center gap-10 overflow-hidden content-center relative z-10">
        {/* النصوص */}
        <div className="text-center space-y-3 md:space-y-6 lg:space-y-10">
          <h1
            className="text-4xl lg:px-0 sm:text-2xl md:text-5xl lg:text-5xl font-extrabold lg:leading-10"
            style={{ color: textColor1 }}
          >
            {companyName}
          </h1>

          <p
            className="text-md sm:text-lg md:text-2xl md:px-30 lg:text-2xl lg:px-65"
            style={{ color: textColor2 }}
          >
            {slogan}
          </p>

          {/* الزر */}
          <div>
            <button
              className="shadow-lg drop-shadow-md px-10 py-2 rounded-lg text-md lg:text-2xl opacity-85 font-bold transition mt-2 md:mt-0 cursor-pointer"
              style={{
                backgroundColor: textColor1,
                color: textColor2,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = themeColor2;
                e.target.style.color = textColor2;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = textColor1;
                e.target.style.color = textColor2;
              }}
            >
              <span className="drop-shadow-xl">Start now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
