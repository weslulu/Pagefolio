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
import { useState, useEffect } from 'react';
import { getCompanyInfo } from '../Api/companiesAPI.js';

const SiteFooter = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    getCompanyInfo()
      .then((response) => {
        const page = response.data.data[0];
        const socialMedia = page.sections[0].company_media_accounts;

        setFooterData({
          logo: `http://68.183.28.116/storage/${page.company.logo_url}`,
          slogan: page.company.slogan,
          email: page.company.email,
          backgroundColor: page.theme_color1,
          textColor: page.text_color2,
          hoverColor: page.text_color1,
          copyright: {
            text: `© ${new Date().getFullYear()} ${page.company.name} جميع الحقوق محفوظة.`,
            bgColor: page.text_color1,
          }, 
          copyButton: {
            text: 'نسخ',
            bgColor: page.text_color1,         // زر نسخ من API
            textColor: page.theme_color1,        // لون نص الزر من API
            hoverBg: page.text_color2,         // هوفر للزر من API
          },
          socialIcons: socialMedia.map((social) => ({
            link: social.username_account,
            icon: `http://68.183.28.116/storage/${social.icon.icon_url}`,
          })),
          links: [
            { name: page.sections[0].back_title.section_name, href: '#about' },
            { name: page.sections[0].service_title.section_name, href: '#services' },
            { name: page.sections[0].objective_title.section_name, href: '#objectives' },
            { name: page.sections[0].partner_title.section_name, href: '#partners' },
            { name: page.sections[0].location_title.section_name, href: '#locations' },
          ],
        });
      })
      .catch((error) => console.error('Error fetching footer data:', error));
  }, []);

  if (!footerData) return null;

  const {
    logo,
    slogan,
    email,
    backgroundColor,
    textColor,
    hoverColor,
    socialIcons,
    links,
    copyButton,
    copyright,
  } = footerData;

  return (
    <footer className="text-sm font-sans" style={{ backgroundColor: backgroundColor, color: textColor }}>
      {/* Navbar العلوي */}
      <div className="border-b mx-10 lg:mx-70" style={{color: textColor}}>
        <nav className="flex items-center justify-center gap-5 lg:gap-8 py-6 text-sm flex-wrap">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{ color: textColor }}
              onMouseEnter={(e) => e.target.style.color = hoverColor}
              onMouseLeave={(e) => e.target.style.color = textColor}
              className="transition"
            > 
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="px-5 py-8 md:px-15 md:pl-40 flex flex-col lg:flex-row-reverse lg:justify-between gap-8 text-right">
        <div className="flex flex-col items-end">
          <img src={logo} alt="شعار الموقع" className="w-30 mb-2" />
          <p className="mb-3 max-w-xs md:max-w-md leading-relaxed break-words" style={{ color: textColor }}>
            {slogan}
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

        <div className="flex lg:flex-row-reverse items-center lg:w-1/2 justify-end gap-3 flex-wrap lg:flex-nowrap">
          <p className="font-bold whitespace-nowrap" style={{ color: textColor }}>البريد الإلكتروني</p>
          <div className="flex flex-row-reverse border rounded overflow-hidden w-full" style={{color: textColor}}>
            <input
              type="text"
              value={email}
              readOnly
              className="bg-transparent px-3 py-2 text-sm flex-1 text-right"
              style={{ color: textColor }}
            />
            <button
              onClick={() => navigator.clipboard.writeText(email)}
              className="px-12 py-2 text-sm transition"
              style={{
                backgroundColor: copyButton.bgColor,
                color: copyButton.textColor,
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = copyButton.hoverBg}
              onMouseLeave={(e) => e.target.style.backgroundColor = copyButton.bgColor}
            >
              {copyButton.text}
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-xs p-6" style={{ backgroundColor: copyright.bgColor, color: '#fff' }}>
        <p>{copyright.text}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
