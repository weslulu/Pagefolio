// ContactSection2.jsx
import { companyData } from '../data/companyData.js';


const {
  maps,
  flagImage,
  background,
} = companyData.contactSection2;

const ContactSection2 = () => {
  return (
    <section>
      {/* صورة الزخرفة */}
      <img
        src={flagImage}
        className="absolute left-0 right-0  w-full z-0"
        alt="Decoration"
      />

      {/* الخلفية الصفراء + الكروت + النص */}
      <div className={`${background} px-4 md:px-15 sm:10 pt-23 z-10`}>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          
          {/*  الكروت أول (يسار في الاتجاه العادي) */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-7 md:mt-0">
            {maps.map((map, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden w-[290px] md:w-[350px] px-3 py-3"
              >
                <a href={map.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={map.image}
                    alt={`Map of ${map.city}`}
                    className="w-full h-64 object-cover"
                  />
                </a>
                <div className="text-right py-3 px-8 text-2xl font-bold text-[#0A5A7D]">
                  {map.city}
                </div>
              </div>
            ))}
          </div>

          {/* النص بعد الكروت (يمين) */}
          <div className="text-white text-center text-xl md:text-4xl px-20 py-5 mt-25 font-bold  leading-snug md:w-1/2">
            <p>قم بزيارتنا للوصول و انضم الينا </p>

          </div>
        </div>
      </div>

      {/* الشريط الأزرق في الأسفل */}
      <div className="bg-[#0A5A7D] h-6 w-full" />
    </section>
  );
};

export default ContactSection2;
