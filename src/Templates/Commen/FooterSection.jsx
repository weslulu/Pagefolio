// import { companyData } from '../data/companyData.js';

// const SiteFooter = () => {
//   const {
//     logo,
//     paragraph,
//     paragraphColor,
//     socialIcons,
//     socialHoverColor,
//     email,
//     copyButton,
//     linkHoverColor,
//     copyright,
//   } = companyData.footer;

//   return (
//     <footer className="text-white text-sm font-sans" style={{ backgroundColor: "#0A5A7D" }}>
//       {/* Navbar العلوي */}
//       <div className="border-b border-white/25 mx-10 lg:mx-70">
//         <nav className="flex items-center justify-center gap-5 lg:gap-8 py-6 text-sm flex-wrap ">
//           {companyData.navbar.links.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               className={`${linkHoverColor} transition`}
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* المحتوى الرئيسي */}
//       <div className="px-5 py-8 md:px-15 md:pl-40 flex flex-col lg:flex-row-reverse lg:justify-between gap-8">
//         {/* الشعار والوصف والأيقونات */}
//         <div className="flex flex-col items-end text-right">
//           <img src={logo} alt="شعار الموقع" className="w-30 mb-2" />
//           <p className={`mb-3 max-w-xs md:max-w-md leading-relaxed break-words ${paragraphColor}`}>{paragraph}</p>
//           <div className="flex gap-1.5 mt-2">
//             {socialIcons.map((social, idx) => (
//               <a
//                 key={idx}
//                 href={social.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${socialHoverColor} rounded-full p-1.5 transition`}
//               >
//                 <img src={social.icon} alt={`social-${idx}`} className="w-7 h-7" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* البريد الإلكتروني + زر نسخ */}
//         <div className="flex lg:flex-row-reverse items-center lg:w-1/2 justify-end gap-3 flex-wrap lg:flex-nowrap">
//           <p className="font-bold whitespace-nowrap">البريد الإلكتروني</p>
//           <div className="flex flex-row-reverse border border-white rounded overflow-hidden w-full">
//             <input
//               type="text"
//               value={email}
//               readOnly
//               className="bg-transparent text-white px-3 py-2 text-sm flex-1 text-right"
//             />
//             <button
//               onClick={() => navigator.clipboard.writeText(email)}
//               className={`${copyButton.bgColor} ${copyButton.hoverBg} ${copyButton.textColor} px-12 py-2 text-sm`}
//             >
//               {copyButton.text}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* حقوق النشر */}
//       <div className={`${copyright.bgColor} text-center text-xs p-6`}>
//         <p>{copyright.text}</p>
//       </div>
//     </footer>
//   );
// };

// export default SiteFooter;

import { useDesign } from '../../Context/DesignContext';

const SiteFooter = () => {
  const { designData, loading, language } = useDesign();
  const isArabic = language === 'ar';

  if (loading || !designData) return null;

  const company = {
    logoHeader: designData.logoHeader,
    slogan: designData.slogan,
    email: designData.sections?.location?.mapUrl?.includes("mailto:")
      ? designData.sections?.location?.mapUrl.replace("mailto:", "")
      : designData.email || "",
    name: designData.companyName
  };

  const theme = {
    backgroundColor: designData.themeColor1,
    textColor: designData.textColor2,
    hoverColor: designData.textColor1,
    hoverBg: designData.textColor1,
    copyButton: {
      bgColor: designData.textColor2,
      textColor: designData.themeColor1,
      hoverBg: designData.textColor1
    },
    copyright: {
      text: `© ${new Date().getFullYear()} ${company.name} جميع الحقوق محفوظة.`,
      bgColor: designData.textColor2
    }
  };

  const socialIcons = designData.sections?.socials || [];

  const links = [
    { name: designData.sections?.whoWeAre?.section_name, href: '#about' },
    { name: designData.sections?.services?.section_name, href: '#services' },
    { name: designData.sections?.objectives?.section_name, href: '#objectives' },
    { name: designData.sections?.partners?.title, href: '#partners' },
    { name: designData.sections?.location?.section_name, href: '#locations' }
  ];

  return (
    <footer className="text-sm" style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
      {/* روابط التنقل */}
      <div className="border-b mx-10 lg:mx-70">
        <nav className="flex items-center justify-center gap-5 text-lg font-medium lg:gap-8 py-6 flex-wrap">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{ color: theme.textColor }}
              onMouseEnter={(e) => e.target.style.color = theme.hoverColor}
              onMouseLeave={(e) => e.target.style.color = theme.textColor}
              className="transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* المحتوى الرئيسي */}
      <div
        className={`px-5 py-8 md:px-15 ${isArabic ? "md:pl-40" : "md:pr-40"} flex flex-col lg:flex-row-reverse ${isArabic ? "lg:flex-row-reverse text-right" : "lg:flex-row text-left"} lg:justify-between gap-8`}
      >
        {/* البريد الإلكتروني */}
        <div className={`flex items-center lg:w-1/2 gap-3 flex-wrap lg:flex-nowrap ${isArabic ? "lg:flex-row-reverse justify-end order-2" : "lg:flex-row justify-start order-1"}`}>
          <p className="font-bold whitespace-nowrap">
            {language === "ar" ? "البريد الإلكتروني" : "Email"}
          </p>
          <div className={`flex ${isArabic ? "flex-row-reverse" : "flex-row"} border rounded overflow-hidden w-full`}>
            <input
              type="text"
              value={company.email}
              readOnly
              className={`bg-transparent px-3 py-2 text-sm flex-1 ${isArabic ? "text-right" : "text-left"}`}
            />
            <button
              onClick={() => navigator.clipboard.writeText(company.email)}
              className="px-12 py-2 text-sm transition"
              style={{
                backgroundColor: theme.copyButton.bgColor,
                color: theme.copyButton.textColor
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = theme.copyButton.hoverBg}
              onMouseLeave={(e) => e.target.style.backgroundColor = theme.copyButton.bgColor}
            >
              {language === "ar" ? "نسخ" : "Copy"}
            </button>
          </div>
        </div>

        {/* الشعار والسوشال ميديا */}
        <div className={`flex flex-col ${isArabic ? "items-end order-1" : "items-start order-2"}`}>
          <img src={company.logoHeader} alt="شعار الموقع" className="w-30 mb-2" />
          <p className="mb-3 max-w-xs md:max-w-md text-lg leading-relaxed break-words">
            {company.slogan}
          </p>
          <div className="flex gap-1.5 mt-2">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-1.5 transition"
              >
                <img src={social.icon} alt={`social-${idx}`} className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* الحقوق */}
      <div className="text-center text-xs p-6" style={{ backgroundColor: theme.copyright.bgColor, color: '#fff' }}>
        <p>{theme.copyright.text}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
