// src/components/Navbar.jsx

// import { companyData } from '../data/companyData.js';

// const Navbar = () => {
//   const {
//     logo,
//     links,
//     createButtonText,
//     loginButtonText,
//     createButtonBg,
//     createButtonHover,
//     createButtonTextColor,
//     loginButtonTextColor,
//   } = companyData.navbar;

//   return (
//     <nav className="font-[Cairo] w-full bg-transparent">
//       <div className="flex flex-wrap items-center lg:justify-between px-4 py-4 md:px-20 justify-center">
        
//         {/* يمين الصفحة: الشعار + السكشنات */}
//         <div className="flex flex-wrap justify-center items-center gap-6">
//           {/* الشعار */}
//           <div>
//             <img
//               src={logo}
//               alt="شعار"
//               className="w-20 h-16 md:w-24 md:h-20"
//             />
//           </div>

//           {/* روابط السكشنات */}
//           <ul className="flex flex-wrap gap-3 justify-center lg:gap-6 text-white font-bold text-sm md:text-base">
//             {links.map((link, index) => (
//               <li key={index} className="cursor-pointer">
//                 <a href={link.href} className="hover:text-amber-200">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* يسار الصفحة: الأزرار */}
//         <div className="hidden md:flex  items-center gap-3">
//           <button
//             className={`px-4 py-1 rounded-full text-sm md:text-base transition cursor-pointer ${createButtonBg} ${createButtonHover} ${createButtonTextColor}`}
//           >
//             {createButtonText}
//           </button>
//           <button
//             className={`font-extrabold text-sm md:text-base cursor-pointer ${loginButtonTextColor}`}
//           >
//             {loginButtonText}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useDesign } from '../Context/DesignContext';

const Navbar = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData?.sections) {
    return (
      <nav className="w-full bg-transparent py-6 text-center text-white">
        جاري التحميل...
      </nav>
    );
  }

  const {
    logo,
    textColor2,
    textColor1,
    themeColor1,
    themeColor2,
    sections,
  } = designData;

  const links = [
    { name: sections.whoWeAre.section_name, href: '#about' },
    { name: sections.services.section_name || 'خدماتنا', href: '#services' },
    { name: sections.objectives.section_name || 'أهدافنا', href: '#objectives' },
    { name: sections.partners.title || 'شركاؤنا', href: '#partners' },
    { name: sections.location.section_name || 'موقعنا', href: '#locations' },
  ];

  const createButtonText = 'أنشئ ملفك';
  const loginButtonText = 'تسجيل دخول';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 opacity-95 shadow-md backdrop-blur-md"
      style={{ backgroundColor: themeColor1 }}
    >
      <div className="flex flex-wrap items-center lg:justify-between px-4 py-4 md:px-20 justify-center">

        {/* الشعار والروابط */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div>
            <img
              src={logo}
              alt="شعار"
              className="w-35 h-10 md:w-35 md:h-10 sm:w-35 sm:h-10"
            />
          </div>

          <ul className="flex flex-wrap gap-3 justify-center lg:gap-6 font-bold text-sm md:text-base">
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer transition duration-300">
                <a
                  href={link.href}
                  style={{ color: textColor2 }}
                  onMouseEnter={(e) => (e.target.style.color = textColor1)}
                  onMouseLeave={(e) => (e.target.style.color = textColor2)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* الأزرار */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="px-4 py-1 rounded-full text-sm md:text-base transition cursor-pointer"
            style={{
              backgroundColor: textColor1,
              color: textColor2,
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = themeColor2)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = textColor1)}
          >
            {createButtonText}
          </button>

          <button
            className="font-extrabold text-sm md:text-base cursor-pointer transition"
            style={{ color: textColor2 }}
            onMouseEnter={(e) => (e.target.style.color = textColor1)}
            onMouseLeave={(e) => (e.target.style.color = textColor2)}
          >
            {loginButtonText}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
