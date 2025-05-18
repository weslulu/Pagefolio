const Navbar = () => {
  return (
    <nav className="font-[Cairo] w-full bg-transparent ">
      <div className="flex items-center md:justify-between px-4 py-4 md:px-20 justify-center	">
        
        {/* يمين الصفحة: الشعار + السكشنات */}
        <div className="flex items-center gap-6 ">
          {/* الشعار */}
          <div>
            <img
              src="src/assets/Logohbab.png"
              alt="شعار"
              className="w-20 h-16 md:w-24 md:h-20"
            />
          </div>

          {/* روابط السكشنات */}
          <ul className="flex flex-wrap gap-4 text-white font-bold text-sm md:text-base">
            <li className="cursor-pointer">من نحن</li>
            <li className="cursor-pointer">واجهتنا</li>
            <li className="cursor-pointer">المميزات</li>
            <li className="cursor-pointer">عملاءنا</li>
          </ul>
        </div>

        {/* يسار الصفحة: الأزرار */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-[#DCB12E] text-white px-4 py-1 rounded-full text-sm md:text-base hover:bg-[#bb9d5b] transition cursor-pointer">
            !انشئ ملفك
          </button>
          <button className="text-[#DCAD27] font-extrabold text-sm md:text-base cursor-pointer">
            للدخول لملفك
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
