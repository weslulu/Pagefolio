const GoalItem = ({ iconSrc, title, background2, titleColor, titleSize }) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 lg:gap-12  p-9 lg:p-12 rounded-4xl shadow-lg h-full text-right"
    style={{backgroundColor:background2}}>
      <img
        src={iconSrc}
        alt="goal icon"
        className="w-18 h-16 md:w-20 md:h-20 sm:w-10 sm:h-10"
      />
      <p className=" font-bold " style={{color:titleColor,titleSize}}>{title}</p>
    </div>
  );
};

export default GoalItem;
