import { useDesign } from '../../Context/DesignContext.jsx';

const GoalItem = ({ iconSrc, title, background2, titleColor, titleSize }) => {
  const { language } = useDesign();
  const isArabic = language === "ar";

  return (
    <div
      className={`flex ${isArabic ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center gap-2 lg:gap-12 p-9 lg:p-12 rounded-4xl shadow-lg h-full`}
      style={{ backgroundColor: background2 }}
    >
      <img
        src={iconSrc}
        alt="goal icon"
        className="w-18 h-16 md:w-20 md:h-20 sm:w-10 sm:h-10"
      />
      <p
        className={`font-bold ${titleSize || 'text-lg'} ${isArabic ? 'text-right' : 'text-left'}`}
        style={{ color: titleColor }}
      >
        {title}
      </p>
    </div>
  );
};

export default GoalItem;
