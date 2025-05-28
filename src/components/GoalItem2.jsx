const GoalItem = ({ iconSrc, title, titleColor, titleSize, text, textColor }) => {
  return (
    <div className="group relative  flex flex-col items-end  gap-2 lg:gap-1 hover:shadow-[0_0_12px_2px_rgba(0,0,0,0.9)]
  hover:bg-[#F7D250] transition duration-200 bg-white p-9 lg:p-11 shadow-xl h-full text-right">

        <img
            src="/src/assets/Vectorscard.png"
            className="absolute top-0 right-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"/>

      <img src={iconSrc} alt="goal icon" className="md:w-13 md:h-13 w-10 h-10 z-10" />
      <h1 className={`${titleSize} font-bold ${titleColor} z-10`}>{title}</h1>
      <p className={`${textColor} z-10 `}>{text}</p>
    </div>
  );
};

export default GoalItem;
