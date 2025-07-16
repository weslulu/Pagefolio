import useIntersectionObserver from "./Hooks/useInterSection.js";

function AnimatedSection({ children, threshold = 0.3 }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
