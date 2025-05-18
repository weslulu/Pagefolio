import techwin from '../assets/company/techwin.png';
import ummAlQura from '../assets/company/umm al-qura.png';
import Hbab from '../assets/company/Logohbab.png';

const logos = [ //لاضافه العملاء
  techwin, ummAlQura,Hbab,
  techwin, ummAlQura,Hbab,
  techwin, ummAlQura,Hbab,
  techwin, ummAlQura,Hbab
];

const ClientsSection = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; // مضاعفة اللوقو

  return (
    <section className="relative bg-gradient-to-br from-white via-white to-blue-100 py-20 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold md:mb-4 mb-2 text-center">
        عملاء تشرفنا بالعمل معهم
      </h2>
      <p className="text-[14px] md:text-lg text-gray-700 mb-15 text-center">
        يرحب هباب بكل عملائنا ونحن نفتخر بكوننا جزء منكم
      </p>

      {/* صف علوي */}
      <div className=" overflow-hidden">
        <div className="absolute left-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-14 bg-gradient-to-r from-blue-300 to-transparent blur-sm z-10" />
        <div className="absolute right-[-20px] top-43 md:h-[320px] md:w-24 h-[245px] w-12 bg-gradient-to-l from-blue-300 to-transparent blur-sm z-10" />
        
        <div className="marquee-container flex gap-12 animate-marquee-left">
          {duplicatedLogos.map((logo, index) => (
            <img key={`top-${index}`} src={logo} className="md:h-23 h-17 w-auto object-contain" alt={`logo-${index}`} />
          ))}
        </div>
      </div>

      {/* صف سفلي */}
      <div className="overflow-hidden mt-12">

        <div className="marquee-container flex gap-12 animate-marquee-right">
          {duplicatedLogos.map((logo, index) => (
            <img key={`bottom-${index}`} src={logo} className="md:h-23  h-17 w-auto object-contain" alt={`logo-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
