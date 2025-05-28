import companyData from "/companyData.js";
import Navbar from "/src/components/Navbar";


const Hero = () => {
  const { fontFamily, hero2 } = companyData;

  return (


<div className="h-full bg-[url('/src/assets/comp.jpg')] bg-cover bg-center bg-no-repeat">

        <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative z-10">
    <Navbar />
  </div>

      <section className={" w-full px-10 md:px-20 py-40 flex flex-col items-center lg:justify-center gap-10 overflow-hidden content-center relative"} style={{ fontFamily }}>

      {/* الصورة */}
      {/* <div className="md:w-full lg:w-[550px] lg:shadow-xl rounded-xl overflow-hidden">
        <img src={hero2.gifImage} className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto"/>
      </div> */}

      {/* النص */}
      <div className={`text-center space-y-3 md:space-y-6 lg:space-y-10`}>
        <h1 className={`text-4xl lg:px-0 sm:text-2xl md:text-5xl lg:text-6xl font-extrabold lg:leading-10 ${hero2.titleColor}`}>
          {hero2.title}
        </h1>

        <p className={` text-md sm:text-lg md:text-2xl md:px-30 lg:text-3xl lg:px-90 ${hero2.subtitleColor}`}>
          {hero2.subtitle}
        </p>

        {/* زر الجوال فقط */}
        <div className>
          <button
            className={` shadow-lg drop-shadow-md px-10 py-2 rounded-lg text-md lg:text-2xl font-bold transition mt-2 md:mt-0 cursor-pointer ${hero2.buttonBg}  ${hero2.buttonTextColor} ${hero2.buttonHover}`}> <span className="drop-shadow-xl">{hero2.textbutton}</span>
          </button>
        </div>
      </div>

    </section>

          {/* العلم */}
          <img src={hero2.flagImage} className="absolute bottom-0 right-0 left-0 w-full " />
    </div>
    

    
    
  );
};

export default Hero;
