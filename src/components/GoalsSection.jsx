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

import { useDesign } from '../Context/DesignContext.jsx'; // استيراد الكونتكس
import GoalItem from './GoalItem';
import AnimatedSection from '../AnimatedSection.jsx';

const GoalsSection = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) return <div>جاري تحميل الأهداف...</div>;

  const {
    textColor1: titleColor,
    textColor2: itemTitleColor,
    themeColor1: background,
    textColor2: background2, // لو حاب تستخدمها داخل كل بطاقة
    sections,
  } = designData;

  const goalsData = sections.objectives.items;

  return (
    <section className="px-12 py-25 lg:px-30 text-right" style={{ backgroundColor: background }}>
      <AnimatedSection>
        <div className="mx-auto">
          <h2 className="text-5xl font-bold mb-15 text-center" style={{ color: titleColor }}>
            {sections.objectives.section_name}
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {goalsData.map((goal, index) => (
              <div key={index} className="w-full md:w-[48%]">
                <GoalItem
                  iconSrc={goal.icon}
                  title={goal.text}
                  titleColor={background}
                  titleSize="text-lg"
                  background2={background2}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default GoalsSection;
