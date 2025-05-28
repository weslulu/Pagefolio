const GoalItem = ({ iconSrc, title, titleColor, titleSize }) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 lg:gap-12 bg-white p-9 lg:p-12 rounded-4xl shadow-lg h-full text-right">
      <img src={iconSrc} alt="goal icon" className="md:w-20 md:h-20 sm:w-10 sm:h-10" />
      <p className={`${titleSize} font-bold ${titleColor}`}>{title}</p>
    </div>
  );
};

export default GoalItem;
