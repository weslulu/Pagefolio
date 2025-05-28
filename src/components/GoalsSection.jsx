import GoalItem from './GoalItem';
import { companyData } from '../data/companyData.js';

const GoalsSection = () => {
  const {
    background,
    title,
    titleColor,
    titleSize,
    itemTitleSize,
    itemTitleColor,
    goals,
  } = companyData.goalsSection;

  return (
    <section className={`${background} px-12 py-20 lg:px-30 text-right`}>
      <div className="mx-auto">
        <h2 className={`${titleSize} font-bold ${titleColor} mb-15 text-center`}>
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-5 ">
          {goals.map((goal, index) => (
            <div key={index} className="w-full md:w-[48%]">
              <GoalItem
                iconSrc={goal.iconSrc}
                title={goal.title}
                titleColor={itemTitleColor}
                titleSize={itemTitleSize}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
