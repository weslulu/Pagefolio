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


import { useEffect, useState } from 'react';
import { getCompanyInfo } from '../Api/companiesAPI';

const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    getCompanyInfo()
      .then((res) => {
        const pages = res.data.data; // مصفوفة الصفحات
const layout1Page = pages.find((p) => p.layout === "1");
if (!layout1Page) return;


        const logo = `http://68.183.28.116/storage/${layout1Page.company.logo_url}`;

        // تقدر تضبط الروابط والأزرار حسب بنية الـ backend لاحقًا
        setNavbarData({
          logo,
          links: [
  { name: layout1Page.sections[0].back_title.section_name, href: '#about' },
  { name: layout1Page.sections[0].service_title.section_name, href: '#services' },
  { name: layout1Page.sections[0].objective_title.section_name, href: '#objectives' },
  { name: layout1Page.sections[0].partner_title.section_name, href: '#partners' },
  { name: layout1Page.sections[0].location_title.section_name, href: '#locations' },
],

          createButtonText: 'أنشئ ملفك',
          loginButtonText: 'تسجيل دخول',
          createButtonBg: 'bg-yellow-400',
          createButtonHover: 'hover:bg-yellow-500',
          createButtonTextColor: 'text-black',
          loginButtonTextColor: 'text-white',
        });
      })
      .catch((err) => {
        console.error('فشل في تحميل بيانات النافبار', err);
      });
  }, []);

  if (!navbarData) {
    return (
      <nav className="w-full bg-transparent py-6 text-center text-white">
        جاري التحميل...
      </nav>
    );
  }

  const {
    logo,
    links,
    createButtonText,
    loginButtonText,
    createButtonBg,
    createButtonHover,
    createButtonTextColor,
    loginButtonTextColor,
  } = navbarData;

  return (
    <nav className="font-[Cairo] w-full bg-transparent">
      <div className="flex flex-wrap items-center lg:justify-between px-4 py-4 md:px-20 justify-center">
        {/* يمين الصفحة: الشعار + السكشنات */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* الشعار */}
          <div>
            <img
              src={logo}
              alt="شعار"
              className="w-27 h-10 md:w-27 md:h-10 sm:w-27 sm:h-10"
            />
          </div>

          {/* روابط السكشنات */}
          <ul className="flex flex-wrap gap-3 justify-center lg:gap-6 text-white font-bold text-sm md:text-base">
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <a href={link.href} className="hover:text-amber-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* يسار الصفحة: الأزرار */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={`px-4 py-1 rounded-full text-sm md:text-base transition cursor-pointer ${createButtonBg} ${createButtonHover} ${createButtonTextColor}`}
          >
            {createButtonText}
          </button>
          <button
            className={`font-extrabold text-sm md:text-base cursor-pointer ${loginButtonTextColor}`}
          >
            {loginButtonText}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
