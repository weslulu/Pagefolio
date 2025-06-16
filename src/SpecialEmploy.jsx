
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

function SpecialEmploy() {
  const [employees, setEmployees] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Fetching employee data from local JSON
    fetch('./employees.json')
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % employees.length);
    }, 13000); // Change employee every 13 seconds
    return () => clearInterval(interval);
  }, [employees.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % employees.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + employees.length) % employees.length);
  };

  return (
    <div className="w-full flex justify-center items-center py-8 sm:py-5 md:py-5 lg:py-20 px-1  bg-white">
      <div className="bg-[#0A5C80] px-30 py-8 max-w-6xl md:py-5 w-full relative">
        <h2 className="text-white font-medium text-3xl p-2 mb-4 text-center">افرادنــا المتميزيــن</h2>
        {employees.length > 0 && (
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div 
  onClick={handlePrev} 
  className="absolute h-full w-1/6 cursor-pointer z-10 transition-area left-0 flex items-center justify-start pl-4"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6"></path>
  </svg>
</div>

            <motion.div 
              className="flex-shrink-0 w-full lg:w-auto"
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="relative bg-gradient-to-r from-[#050422] via-[#151d41] to-[#0A5C80] flex flex-col lg:flex-row items-center lg:items-start p-3 md:px-6 rounded-lg">
                <img src={`./src/assets/images/${employees[current].image}`} alt={employees[current].name} 
                  className="lg:max-w-[300px] md:ml-9 md:mr-9 md:mt-5 sm:mt-4 sm:ml-6 sm:mr-4 lg:ml-0 lg:mr-1 lg:mb-4 h-auto object-cover rounded-lg mr-5 ml-5 mb-0" />
                <div className="w-full text-white text-center lg:text-right lg:w-2/3">
                  <h3 className="text-xl py-7 lg:max-w-[500px] font-bold">{employees[current].name}</h3>
                  <p className="text-sm lg:max-w-[400px] leading-relaxed">{employees[current].description}</p>
                </div>
              </div>
            </motion.div>
            <div 
  onClick={handleNext} 
  className="absolute h-full w-1/6 cursor-pointer z-10 transition-area right-0 flex items-center justify-end pr-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"></path>
  </svg>
</div>

          </div>
        )}
        <div className="flex justify-center gap-2 mt-4">
          {employees.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${current === index ? 'bg-[#d3dfe4]' : 'bg-[#073e5c]'} transition`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialEmploy;