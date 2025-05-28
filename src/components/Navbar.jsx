// src/components/Navbar.jsx

import companyData from "../data/companyData";

const Navbar = () => {
  const {
    logo,
    links,
    createButtonText,
    loginButtonText,
    createButtonBg,
    createButtonHover,
    createButtonTextColor,
    loginButtonTextColor,
  } = companyData.navbar;

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
              className="w-20 h-16 md:w-24 md:h-20"
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
        <div className="hidden md:flex  items-center gap-3">
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
