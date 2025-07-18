// import "./Feedback.css";
// import { useState, useEffect, useRef } from 'react';

// function Feedback() {
//   const [reviews, setReviews] = useState([]);
//   const [hoveredReview, setHoveredReview] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollContainers = useRef([]);

//   useEffect(() => {
//     fetch('./reviews.json')
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);

//   useEffect(() => {
//     const startAutoScroll = (container, direction) => {
//       if (!container) return;
//       let scrollAmount = 1;
//       const interval = setInterval(() => {
//         if (!isPaused) {
//           container.scrollLeft += scrollAmount * direction;

//           // إعادة التمرير بسلاسة عند الوصول للنهاية
//           if (direction === 1 && container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
//             container.scrollLeft = 1;
//           }
//           if (direction === -1 && container.scrollLeft <= 1) {
//             container.scrollLeft = container.scrollWidth - container.clientWidth - 1;
//           }
//         }
//       }, 25);
//       return interval;
//     };

//     const intervals = scrollContainers.current
//       .filter((container) => container !== null) 
//       .map((container, idx) => {
//         const direction = idx % 2 === 0 ? 1 : -1;
//         return startAutoScroll(container, direction);
//       });

//     return () => intervals.forEach((interval) => clearInterval(interval));
//   }, [isPaused]);

//   const renderCard = (review) => (
//     <div
//       key={review.id} 
//       onMouseEnter={() => { setHoveredReview(review); setIsPaused(true); }}
//       onMouseLeave={() => { setHoveredReview(null); setIsPaused(false); }}
//       className="relative bg-white rounded-full px-2 sm:px-3 py-2 shadow text-xs sm:text-sm cursor-pointer flex items-center gap-1 sm:gap-2 min-w-[200px] sm:min-w-[220px] hover:shadow-lg transition transform hover:scale-105"
//     >
//       <div className="flex items-center gap-3">
//         <img
//           src={review.image || 'src/assets/images/Screenshot 2025-05-07 034546.png'}
//           alt={review.name}
//           className="w-8 h-8 rounded-full"
//         />
//         <span className="text-sm font-medium text-center">{review.name}</span>
//       </div>
//       <div className="flex text-yellow-400">
//         {Array.from({ length: 5 }, (_, i) => (
//           <span key={i}>{i < review.rating ? '★' : '☆'}</span>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold mb-4">وش قالــوا عـن هبـــّــــاب؟</h1>
//       <div className="w-full max-w-3xl sm:max-w-4xl lg:max-w-7xl py-4 sm:py-8 lg:py-13 bg-gradient-to-r from-white via-blue-200 to-white">
//         {Array.from({ length: 3 }).map((_, idx) => (
//           <div
//             key={`scroll-container-${idx}`}
//             ref={(el) => {
//               if (el) scrollContainers.current[idx] = el;
//             }}
//             className="scroll-container gap-2 py-1 px-30 flex overflow-hidden mb-2 whitespace-nowrap"
//           >
//             {reviews.slice(idx * 6, idx * 6 + 6).map((review) => renderCard(review))}
//           </div>
//         ))}
//       </div>
//       {hoveredReview && (
//         <div className="fixed top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 p-5 sm:p-8 bg-white shadow-2xl rounded-xl max-w-xs sm:max-w-md lg:max-w-lg">
//           <div className="flex items-center mb-4">
//             <img src={hoveredReview.image || 'src/assets/images/Screenshot 2025-05-07 034546.png'} alt={hoveredReview.name} className="w-12 h-12 rounded-xl mr-4" />
//             <div>
//               <h2 className="text-sm sm:text-md lg:text-lg font-bold">{hoveredReview.name}</h2>
//               <div className="flex text-yellow-400">
//                 {Array.from({ length: 5 }, (_, i) => (
//                   <span key={i}>{i < hoveredReview.rating ? '★' : '☆'}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className='text-xs sm:text-sm lg:text-base text-right'>{hoveredReview.comment}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Feedback;


// import "./Feedback.css";
// import { useState, useEffect, useRef } from 'react';
// import { getCompanyInfo } from './Api/companiesAPI.js';
// import AnimatedSection from "./AnimatedSection.jsx";

// function Feedback() {
//   const [reviews, setReviews] = useState([]);
//   const [sectionTitle, setSectionTitle] = useState('');
//   const [iconSrc, setIconSrc] = useState('');
//   const [bgColor1, setBgColor1] = useState('#ffffff');
//   const [bgColor2, setBgColor2] = useState('#ffffff');
//   const [textColor1, setTextColor1] = useState('#000000');
//   const [textColor2, setTextColor2] = useState('#000000');
//   const [hoveredReview, setHoveredReview] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollContainers = useRef([]);

// getCompanyInfo(1)
//   .then((response) => {
//     const pageData = response.data.data[0];  // لأن data عبارة عن Array
//     const section = pageData.sections[0];    // لأن sections كمان Array
//     const feedbackData = section.feedback_title;

//     setSectionTitle(feedbackData.section_name);
//     setIconSrc(feedbackData.feedback_icon);  // هنا صح تخزينه بدون رابط
//     setReviews(feedbackData.feedbacks);

//     setBgColor1(pageData.theme_color1);
//     setTextColor1(pageData.text_color1);  // انتبه: عندك text_color1 مو text_color
//     setBgColor2(pageData.theme_color2);
//     setTextColor2(pageData.text_color2); 
//   })
//   .catch((error) => {
//     console.error("Failed to fetch company info:", error);
//   });


//   const renderCard = (review) => (
//     <div
//       key={review.id}
//       onMouseEnter={() => { setHoveredReview(review); setIsPaused(true); }}
//       onMouseLeave={() => { setHoveredReview(null); setIsPaused(false); }}
//       className="relative rounded-full px-2 sm:px-3 py-2 shadow text-xs sm:text-sm cursor-pointer flex items-center gap-1 sm:gap-2 min-w-[200px] sm:min-w-[220px] hover:shadow-lg transition transform hover:scale-105"
//       style={{ backgroundColor: textColor2, color: bgColor1 }}
//     >
//       <div className="flex items-center gap-3">
//         <img
//           src={`http://68.183.28.116/storage/${iconSrc}`}  
//           alt={review.user}
//           className="w-8 h-8 rounded-full"
//         />
//         <span className="text-sm font-medium text-center">{review.user}</span>
//       </div>
//       <div className="flex text-yellow-400">
//         {Array.from({ length: 5 }, (_, i) => (
//           <span key={i}>{i < review.rating ? '★' : '☆'}</span>
//         ))}
//       </div>
//     </div>
//   );

//   useEffect(() => {
//     const startAutoScroll = (container, direction) => {
//       if (!container) return;
//       let scrollAmount = 1;
//       const interval = setInterval(() => {
//         if (!isPaused) {
//           container.scrollLeft += scrollAmount * direction;
//           if (direction === 1 && container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
//             container.scrollLeft = 1;
//           }
//           if (direction === -1 && container.scrollLeft <= 1) {
//             container.scrollLeft = container.scrollWidth - container.clientWidth - 1;
//           }
//         }
//       }, 25);
//       return interval;
//     };

//     const intervals = scrollContainers.current
//       .filter((container) => container !== null)
//       .map((container, idx) => {
//         const direction = idx % 2 === 0 ? 1 : -1;
//         return startAutoScroll(container, direction);
//       });

//     return () => intervals.forEach((interval) => clearInterval(interval));
//   }, [isPaused]);

//   return (
//     <section style={{ backgroundColor: bgColor1 }} >
//       <AnimatedSection>
//     <div className="flex flex-col items-center  ">
//       <h1 className="text-xl sm:text-2xl lg:text-5xl text-center font-bold mb-4" style={{ color: textColor1 }}  >
//         {sectionTitle || "ايش قالوا عنّا؟"}
//       </h1>

//       <div className="w-full max-w-fit sm:max-w-fit lg:max-w-fit lg:px-10 py-4 sm:py-8 lg:py-13" style={{ backgroundColor: bgColor1 }}>
//         {Array.from({ length: 3 }).map((_, idx) => (
//           <div
//             key={`scroll-container-${idx}`}
//             ref={(el) => {
//               if (el) scrollContainers.current[idx] = el;
//             }}
//             className="scroll-container gap-2 py-1 px-30 flex overflow-hidden mb-2 whitespace-nowrap"
//           >
//             {reviews.slice(idx * 6, idx * 6 + 6).map((review) => renderCard(review))}
//           </div>
//         ))}
//       </div>

//       {hoveredReview && (
//         <div className="fixed top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 p-5 sm:p-8 bg-white shadow-2xl rounded-xl max-w-xs sm:max-w-md lg:max-w-lg">
//           <div className="flex items-center mb-4">
//             <img
//               src={`http://68.183.28.116/storage/${iconSrc}`}
//               alt={hoveredReview.user}
//               className="w-12 h-12 rounded-xl mr-4"
//             />
//             <div>
//               <h2 className="text-sm sm:text-md lg:text-lg font-bold">{hoveredReview.user}</h2>
//               <div className="flex text-yellow-400">
//                 {Array.from({ length: 5 }, (_, i) => (
//                   <span key={i}>{i < hoveredReview.rating ? '★' : '☆'}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className='text-xs sm:text-sm lg:text-base text-right'>{hoveredReview.content}</p>
//         </div>
//       )}
//     </div>
//     </AnimatedSection>
//     </section>
//   );
// }

// export default Feedback;

import { useState, useRef, useEffect } from 'react';
import { useDesign } from './Context/DesignContext';

function Feedback() {
  const { designData, loading } = useDesign();

  const [hoveredReview, setHoveredReview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainers = useRef([]);

  useEffect(() => {
    if (!designData?.sections?.feedbacks?.items) return;

    const startAutoScroll = (container, direction) => {
      if (!container) return;
      let scrollAmount = 1;
      const interval = setInterval(() => {
        if (!isPaused) {
          container.scrollLeft += scrollAmount * direction;
          if (direction === 1 && container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollLeft = 1;
          }
          if (direction === -1 && container.scrollLeft <= 1) {
            container.scrollLeft = container.scrollWidth - container.clientWidth - 1;
          }
        }
      }, 25);
      return interval;
    };

    const intervals = scrollContainers.current
      .filter((container) => container !== null)
      .map((container, idx) => {
        const direction = idx % 2 === 0 ? 1 : -1;
        return startAutoScroll(container, direction);
      });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [designData, isPaused]);

  if (loading || !designData?.sections?.feedbacks?.items) return null;

  const { feedbacks } = designData.sections;
  const reviews = feedbacks.items;
  const iconSrc = feedbacks.icon;
  const sectionTitle = feedbacks.section_name;
  const bgColor1 = designData.themeColor1;
  const textColor1 = designData.textColor1;
  const textColor2 = designData.textColor2;

  const renderCard = (review) => (
    <div
      key={review.id}
      onMouseEnter={() => { setHoveredReview(review); setIsPaused(true); }}
      onMouseLeave={() => { setHoveredReview(null); setIsPaused(false); }}
      className="relative rounded-full px-2 sm:px-3 py-2 shadow text-xs sm:text-sm cursor-pointer flex items-center gap-1 sm:gap-2 min-w-[200px] sm:min-w-[220px] hover:shadow-lg transition transform hover:scale-105"
      style={{ backgroundColor: textColor2, color: bgColor1 }}
    >
      <div className="flex items-center gap-3">
        <img
          src={review.image || `${iconSrc}`}
          alt={review.name}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-center">{review.name}</span>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: bgColor1 }}>
      <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold mb-4" style={{ color: textColor1 }}>
        {sectionTitle || "وش قالــوا عنّا؟"}
      </h1>

      <div className="w-full max-w-3xl sm:max-w-4xl lg:max-w-7xl py-4 sm:py-8 lg:py-13">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={`scroll-container-${idx}`}
            ref={(el) => {
              if (el) scrollContainers.current[idx] = el;
            }}
            className="scroll-container gap-2 py-1 px-30 flex overflow-hidden mb-2 whitespace-nowrap"
          >
            {reviews.slice(idx * 6, idx * 6 + 6).map((review) => renderCard(review))}
          </div>
        ))}
      </div>

      {hoveredReview && (
        <div className="fixed top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 p-5 sm:p-8 bg-white shadow-2xl rounded-xl max-w-xs sm:max-w-md lg:max-w-lg">
          <div className="flex items-center mb-4">
            <img
              src={hoveredReview.image || `${iconSrc}`}
              alt={hoveredReview.name}
              className="w-12 h-12 rounded-xl mr-4"
            />
            <div>
              <h2 className="text-sm sm:text-md lg:text-lg font-bold">{hoveredReview.name}</h2>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < hoveredReview.rating ? '★' : '☆'}</span>
                ))}
              </div>
            </div>
          </div>
          <p className='text-xs sm:text-sm lg:text-base text-right'>{hoveredReview.comment}</p>
        </div>
      )}
    </div>
  );
}

export default Feedback;
