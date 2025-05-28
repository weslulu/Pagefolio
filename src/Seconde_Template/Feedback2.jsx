import { useState, useEffect } from 'react';
import '../index.css';

function Feedback2() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('./reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-30 gap-6 mr-10 ml-35">
      
      <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[290px]">
        <h1 className="text-4xl  font-bold text-[#3A3A3A] z-10 text-center">
         وش قالــوا  عـن هبـــّــــاب؟
        </h1>
        
        {/* الأيقونات الخلفية */}
        <img src="src/assets/icons/cloud.png" alt="icon" className="w-35 h-19 absolute top-3 left-5 opacity-60" />
        <img src="src/assets/icons/idea.png" alt="icon" className="w-20 h-30 absolute top-5 right-2 opacity-60 " />
        <img src="src/assets/icons/light.png" alt="icon" className="w-14 h-38 absolute bottom-0 left-0 opacity-60" />
        <img src="src/assets/icons/handOstars.png" alt="icon" className="w-20 h-23 absolute bottom-5 right-9 opacity-60 " />
      </div>

      {/* القسم الأيمن */}
      <div className="w-full md:w-1/2 max-w-lg flex flex-col items-center relative">
        <div className="relative ml-7 w-full h-[395px] transition-all duration-500 overflow-visible">

{/* الكروت الخلفية الوهمية بشكل أنيق خلف الكرت */} 
<div className="absolute top-4 left-1 w-85 h-full bg-[#0D6C95] rounded-lg shadow-lg transform rotate-[7deg] scale-95 z-0 opacity-30"></div>
<div className="absolute top-3 left-2 w-84 h-97 bg-[#0D6C95] rounded-lg shadow-lg transform rotate-[-10deg] scale-[0.97] z-0 opacity-60"></div>


          {/* الكرت الفعلي */}
          {currentReview && (
            <div key={currentReview.id} className="relative z-10 w-full h-full">
              <div className="bg-[#126b8d] text-white w-75  mt-6 ml-7 mr-7 rounded-lg shadow-xl flex flex-col justify-between h-full ">
                <div>
                  <div className="mt-7 ml-5 text-xl font-bold">
                    ⭐ {currentReview.rating} <span className="text-xs align-bottom font-light">(التقييم من 5)</span>
                  </div>
                  <p className="mt-8 mr-9 ml-9 text-md text-right font-medium leading-relaxed">{currentReview.comment}</p>
                </div>
                <div className=" flex justify-start items-center flex-row-reverse gap-3 bg-[#FFE065] px-4 py-3  rounded-b-lg ">
                  <img
                    src={`src/assets/images/Screenshot 2025-05-18 110353.png`}
                    alt={currentReview.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-lg text-[#0A5A7D]  font-bold">{currentReview.name}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* أزرار التنقل */}
        <div className="flex items-center justify-center gap-6 mt-9">
          <button onClick={handlePrev} className="text-3xl text-[#0A5A7D] hover:text-blue-500 mt-5 absolute  -translate-x-30 ">←</button>
          <span className="text-sm  absolute  -translate-x-13 mt-5 text-gray-600">{currentIndex + 1} / {reviews.length}</span>
          <button onClick={handleNext} className="text-3xl text-[#0A5A7D] hover:text-blue-500 mt-5 absolute  left-1/2 transform">→</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback2;
