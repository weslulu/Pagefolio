// src/sections/ContactSection.jsx

import { companyData } from '../data/companyData.js';

const {
  mapImage,
  mapLink,
  flagImage,
  title,
  titleColor,
  titleSize,
  paragraph,
  paragraphColor,
  paragraphSize,
  background,
} = companyData.contactSection;

const ContactSection = () => {
  return (
    <section>
    <img src={flagImage} className="absolute  right-0 left-0 w-full" />

    <div >

      <div className={`${background} py-20 md:px-30 px-13`}>
        <div className="flex flex-col lg:flex-row items-center md:justify-between md:gap-10 gap-3">
          {/* خريطة */}
          <a href={mapLink} target="_blank" rel="noopener noreferrer">
            <img
              src={mapImage}
              className="rounded-lg shadow-w-100 w-full h-full object-cover"
              alt="Map Location"
            />
          </a>

          {/* النص */}
          <div className={`max-w-xl lg:text-right text-center`}>
            <h2 className={`font-bold mb-4 ${titleColor} ${titleSize}`}>{title}</h2>
            <p className={`leading-loose ${paragraphColor} ${paragraphSize}`}>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactSection;