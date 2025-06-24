import { useEffect, useState } from "react";

const EmployeeSlider = () => {
  const [employees, setEmployees] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // default for large screens

  useEffect(() => {
    fetch("./employes2.json")
      .then((res) => res.json())
      .then(setEmployees);
  }, []);

  // تحديث عدد العناصر الظاهرة حسب حجم الشاشة
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); // sm
      else if (width < 1024) setVisibleCount(2); // md
      else setVisibleCount(3); // lg+
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const next = () => {
    if (startIndex + visibleCount < employees.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const prev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleEmployees = employees.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full px-4 py-15 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2756] mb-6 text-center">
        افرادنــا المتميزيــن
      </h2>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* زر السابق */}
        <button
          onClick={prev}
          className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#1C2756] text-2xl sm:text-3xl rounded-full hover:text-white hover:bg-[#1c27564f] disabled:opacity-50"
          disabled={startIndex === 0}
        >
          ←
        </button>

        {/* البطاقات */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
          {visibleEmployees.map((employee) => (
            <div
              key={employee.name}
              className="relative w-69 sm:w-75 h-75 group rounded-[20px] overflow-hidden shadow-md shrink-0"
            >
              <img
                src={`./src/assets/images/${employee.image}`}
                alt={employee.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C2756] to-transparent opacity-90 z-10"></div>

              <div className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl  font-bold z-20 text-center px-2 py-45">
                {employee.name}
              </div>

              <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#1C2756] opacity-75 rounded-br-full z-30"></div>

              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-14 sm:h-13 bg-[#1C2756] rounded-tl-full z-30 group-hover:bg-opacity-80 transition duration-300"></div>

              <div className="absolute flex items-center justify-center group-hover:right-0 group-hover:rounded-b-none group-hover:bottom-0 
                  group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full -bottom-32 -right-16 w-36 h-48 
                  rounded-full bg-[#1C2756] bg-opacity-95 transition-all duration-500 group-hover:px-6 sm:group-hover:px-8 2xl:group-hover:px-14 group-hover:pt-10
                  lg:group-hover:pt-8 2xl:group-hover:pt-10 z-40 text-white text-center">
                <p className="text-justify hidden group-hover:block text-sm sm:text-base 2xl:text-lg font-semibold">
                  {employee.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* زر التالي */}
        <button
          onClick={next}
          className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#1C2756] text-2xl sm:text-3xl rounded-full hover:text-white hover:bg-[#1c27564f] disabled:opacity-50"
          disabled={startIndex + visibleCount >= employees.length}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default EmployeeSlider;
