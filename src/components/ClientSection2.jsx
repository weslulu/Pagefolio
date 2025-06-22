import { companyData } from '../data/companyData.js';
import "../App.css";


const {
  title,
  titleColor,
  titleSize,
  paragraph,
  paragraphColor,
  paragraphSize,
  logoHeight,
  logos,
} = companyData.clientsSection2;

const clientsSection2 = () => {
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-25 text-center">
      <h2 className={`${titleColor} ${titleSize} font-bold mb-2`}>
        {title}
      </h2>
      <p className={`${paragraphColor} ${paragraphSize} mb-6`}>
        {paragraph}
      </p>

      <div className="relative bg-white shadow-lg rounded-2xl mx-auto w-full max-w-5xl overflow-hidden px-2 sm:px-4 md:px-6">
        <div className="flex items-center animate-scroll gap-10 w-max py-6">
          {scrollingLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className={`${logoHeight} object-contain`}
            />
          ))}
        </div>

        {/* الفاصل والرقم */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-white pr-15 pl-0 py-9  rounded-l-lg shadow-md">
          <div className="w-[1px] h-[60px] sm:h-[80px] md:h-[90px] mr-5 bg-[#0A5A7D]" />
          <span className="text-[#0A5A7D] text-6xl sm:text-6xl md:text-7xl ml-8  font-sans">{logos.length}</span>
        </div>
      </div>
    </section>
  );
};

export default clientsSection2;
