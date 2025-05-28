import GoalItem2 from './GoalItem2';
import companyData from "/companyData.js";

const GoalsSection = () => {
  const {
    title,
    titleColor,
    titleSize,
    itemTitleSize,
    itemTitleColor,
    textColor,
    goals,
  } = companyData.goalsSection2;

  return (
    <section className={" px-12 py-20 lg:px-50 "}>
      <div className=" text-right">
        <h2 className={`${titleSize} font-bold ${titleColor} mb-12 text-center`}>   {title}  </h2>
        <div className="flex flex-wrap justify-center gap-9 ">
          {goals.map((goal, index) => (
            <div key={index} className=" md:w-[30%] w-full"> 

              <GoalItem2
                iconSrc={goal.iconSrc}
                title={goal.title}
                text={goal.text}
                titleColor={itemTitleColor}
                titleSize={itemTitleSize}
                textColor={textColor}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
