import { useEffect, useState } from "react";

const EmployeeSlider = () => {
  const [employees, setEmployees] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const visibleCount = 3;

  useEffect(() => {
    fetch("/employees.json")
      .then((res) => res.json())
      .then(setEmployees);
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
    <div className="w-full px-6 flex flex-col items-center">
      <h2 className="text-2xl text-[#075476] font-bold mb-6 text-center">
        افرادنــا المتميزيــن
      </h2>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="text-3xl text-gray-500 hover:text-black disabled:opacity-30"
          disabled={startIndex === 0}
        >
          &lt;
        </button>

        <div className="flex gap-6">
          {visibleEmployees.map((employee, index) => (
            <div
              key={employee.name}
              className="relative w-64 h-80 bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={`/images/${employee.image}`}
                alt={employee.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
                {employee.name}
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 transition-opacity duration-300 z-10">
                  <p>{employee.description}</p>
                </div>
              )}

              {/* الزاوية اليسرى العليا لتفعيل الهوفر */}
              <div
                className="absolute top-0 left-0 w-10 h-10 cursor-pointer z-20"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              ></div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="text-3xl text-gray-500 hover:text-black disabled:opacity-30"
          disabled={startIndex + visibleCount >= employees.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EmployeeSlider;
