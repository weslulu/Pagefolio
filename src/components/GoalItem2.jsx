const GoalItem = ({ iconSrc, title, titleColor, titleSize , background1 }) => {
  return (
    <div className="group relative  flex flex-col items-end  gap-2 lg:gap-1 
   transition duration-200  p-9 lg:p-11 shadow-xl h-full text-right"
  style={{backgroundColor: background1}}>

      <img src={iconSrc} alt="goal icon" className="md:w-13 md:h-13 w-10 h-10 z-10" />
      <h1 className={`${titleSize} font-bold z-10`} style={{color:titleColor}}>{title}</h1>
    </div>
  );
};

export default GoalItem;
