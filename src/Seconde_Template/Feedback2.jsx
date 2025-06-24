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
    <div className="relative flex flex-col lg:flex-row-reverse items-center mb-10 lg:justify-between lg:px-60">

      {/* العنوان */}
      <div className="w-full flex justify-center items-center">
        {/* نص اللارج  */}
        <h1 className="hidden lg:block text-4xl font-medium text-[#08445e] pb-8 text-right leading-snug whitespace-pre-line">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'وش قالــوا'} {' \nعن هبـــّــــاب؟'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>

        {/* نص الميديم والسمول */}
        <h1 className="block lg:hidden text-4xl font-medium text-[#08445e] pb-8 text-center leading-snug">
          وش قالــوا عـن هبـــّــــاب؟
        </h1>
      </div>

      {/* الكونتينر حق الكرت كامل */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* الكروت اللي ورا */}
        <div className="absolute w-[320px] h-full bg-[#0D6C95] rounded-lg shadow-lg transform rotate-[7deg] scale-95 z-0 opacity-30"></div>
        <div className="absolute w-[320px] h-full bg-[#0D6C95] rounded-lg shadow-lg transform rotate-[-10deg] scale-95 z-0 opacity-60"></div>

        {/* الكرت اللي قدام */}
        {currentReview && (
          <div key={currentReview.id} className="relative z-10 w-[295px] h-full">
            <div className="bg-[#126b8d] text-white rounded-lg shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="mt-7 ml-5 text-xl font-bold">
                  ⭐ {currentReview.rating}
                  <span className="absolute text-xs ml-2 mt-3 font-light">(التقييم من 5)</span>
                </div>
                <p className="mt-8 mx-6 text-md text-right font-medium leading-relaxed">
                  {currentReview.comment}
                </p>
              </div>
              <div className="flex items-center justify-start flex-row-reverse gap-3 bg-[#FFE065] px-4 py-3 rounded-b-lg">
                <img
                  src={`src/assets/images/Screenshot 2025-05-18 110353.png`}
                  alt={currentReview.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-lg text-[#0A5A7D] font-bold">
                  {currentReview.name}
                </span>
              </div>
            </div>

            {/* الأسهم */}
            <div className="relative w-full h-[60px] mt-4">
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={handlePrev} className="text-3xl text-[#0A5A7D] hover:text-blue-500">←</button>
                <span className="text-sm text-gray-600">{currentIndex + 1} / {reviews.length}</span>
                <button onClick={handleNext} className="text-3xl text-[#0A5A7D] hover:text-blue-500">→</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback2;
