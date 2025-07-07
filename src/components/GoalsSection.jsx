// import GoalItem from './GoalItem';
// import { companyData } from '../data/companyData.js';

// const GoalsSection = () => {
//   const {
//     background,
//     title,
//     titleColor,
//     titleSize,
//     itemTitleSize,
//     itemTitleColor,
//     goals,
//   } = companyData.goalsSection;

//   return (
//     <section className={`${background} px-12 py-20 lg:px-30 text-right`}>
//       <div className="mx-auto">
//         <h2 className={`${titleSize} font-bold ${titleColor} mb-15 text-center`}>
//           {title}
//         </h2>
//         <div className="flex flex-wrap justify-center gap-5 ">
//           {goals.map((goal, index) => (
//             <div key={index} className="w-full md:w-[48%]">
//               <GoalItem
//                 iconSrc={goal.iconSrc}
//                 title={goal.title}
//                 titleColor={itemTitleColor}
//                 titleSize={itemTitleSize}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GoalsSection;


import { useEffect, useState } from 'react';
import GoalItem from './GoalItem';
import { getCompanyInfo } from '../Api/companiesAPI';

const GoalsSection = () => {
  const [goalsData, setGoalsData] = useState(null);

  useEffect(() => {
    getCompanyInfo()
      .then((res) => {
        const pages = res.data?.data;
        if (!pages || pages.length === 0) return;

        const layout1Page = pages.find((page) => page.layout === "1");
        if (!layout1Page) return;

        const section = layout1Page.sections?.[0];
        const objectiveSection = section?.objective_title;
        if (!objectiveSection) return;

        setGoalsData({
          title: objectiveSection.section_name,
          background: layout1Page.theme_color1,
          background2: layout1Page.text_color2,
          titleColor: layout1Page.text_color1,
          itemTitleColor: layout1Page.text_color2,
          goals: objectiveSection.objectives
        });
      })
      .catch((err) => {
        console.error("فشل في جلب بيانات الأهداف", err);
      });
  }, []);

  if (!goalsData) return <div>جاري تحميل الأهداف...</div>;

  const {
    title,
    background,
    background2,
    titleColor,
    itemTitleColor,
    goals
  } = goalsData;

  return (
    <section className="px-12 py-20 lg:px-30 text-right" style={{ backgroundColor: background }}>
      <div className="mx-auto">
        <h2 className={`text-5xl font-bold mb-15 text-center`} style={{ color: titleColor }}>
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {goals.map((goal, index) => (
            <div key={index} className="w-full md:w-[48%]">
              <GoalItem
                iconSrc={`http://68.183.28.116/storage/${encodeURI(goal.icon.icon_url)}`}
                title={goal.content}
                titleColor={itemTitleColor}
                titleSize="text-lg"
                background2={background2} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
