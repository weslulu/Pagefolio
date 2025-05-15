
import "./App.css";
import { useState, useEffect, useRef } from 'react';

function App() {
  const [reviews, setReviews] = useState([]);
  const [hoveredReview, setHoveredReview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainers = useRef([]);

  useEffect(() => {
    fetch('./reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    const startAutoScroll = (container, direction) => {
      let scrollAmount = 1;
      const interval = setInterval(() => {
        if (!isPaused && container) {
          container.scrollLeft += scrollAmount * direction;
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth || container.scrollLeft <= 0) {
            scrollAmount *= -1;
          }
        }
      }, 20);
      return interval;
    };

    const intervals = scrollContainers.current.map((container, idx) => {
      const direction = idx % 2 === 0 ? 1 : -1; 
      return startAutoScroll(container, direction);
    });
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isPaused]);

  const renderCard = (review) => (
    <div
      key={review.id}
      onMouseEnter={() => { setHoveredReview(review); setIsPaused(true); }}
      onMouseLeave={() => { setHoveredReview(null); setIsPaused(false); }}
      className="relative bg-white rounded-full px-2 sm:px-3 py-2 shadow text-xs sm:text-sm cursor-pointer flex items-center gap-1 sm:gap-2 min-w-[180px] sm:min-w-[199px] hover:shadow-lg transition transform hover:scale-105"
    >
      <div className="flex items-center gap-3">
        <img
          src={review.image || 'src/assets/images/Screenshot 2025-05-07 034546.png'}
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
    <div className="flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold mb-4">وش قالــوا عـن هبـــّــــاب؟</h1>
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-4xl py-4 sm:py-8 lg:py-13 bg-gradient-to-r from-white via-blue-200 to-white">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            ref={(el) => (scrollContainers.current[idx] = el)}
            className="scroll-container gap-2 py-1 px-30 flex overflow-hidden mb-2 whitespace-nowrap"
          >
            {reviews.slice(idx * 6, idx * 6 + 6).map(renderCard)}
          </div>
        ))}
      </div>
      {hoveredReview && (
        <div className="fixed top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 p-5 sm:p-8 bg-white shadow-2xl rounded-xl max-w-xs sm:max-w-md lg:max-w-lg">
          <div className="flex items-center mb-4">
            <img src={hoveredReview.image || 'src/assets/images/Screenshot 2025-05-07 034546.png'} alt={hoveredReview.name} className="w-12 h-12 rounded-xl mr-4" />
            <div>
              <h2 className="text-sm sm:text-md lg:text-lg font-bold">{hoveredReview.name}</h2>
              <div className="flex text-yellow-400 ">
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

export default App;
