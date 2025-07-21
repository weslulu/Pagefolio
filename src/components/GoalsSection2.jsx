// import GoalItem2 from './GoalItem2';
// import { companyData } from '../data/companyData.js';

// const GoalsSection = () => {
//   const {
//     title,
//     titleColor,
//     titleSize,
//     itemTitleSize,
//     itemTitleColor,
//     textColor,
//     goals,
//   } = companyData.goalsSection2;

//   return (
//     <section className={" px-12 py-20 lg:px-50 "}>
//       <div className=" text-right">
//         <h2 className={`${titleSize} font-bold ${titleColor} mb-12 text-center`}>   {title}  </h2>
//         <div className="flex flex-wrap justify-center gap-9 ">
//           {goals.map((goal, index) => (
//             <div key={index} className=" md:w-[30%] w-full"> 

//               <GoalItem2
//                 iconSrc={goal.iconSrc}
//                 title={goal.title}
//                 text={goal.text}
//                 titleColor={itemTitleColor}
//                 titleSize={itemTitleSize}
//                 textColor={textColor}/>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GoalsSection;

import GoalItem2 from './GoalItem2';
import { useDesign } from '../Context/DesignContext.jsx';
import AnimatedSection from '../AnimatedSection.jsx'

const GoalsSection = () => {
  const { designData, loading } = useDesign();

  if (loading || !designData) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        بيتم التحميل...
      </div>
    );
  }

  const {
    textColor1,
    textColor2,
    themeColor1,
    themeColor2,
    fontFamily,
    sections,
  } = designData;

  const { section_name, items } = sections?.objectives || {};

  return (
    <section
      className="px-12 py-20 lg:px-50"
      style={{
        fontFamily: fontFamily || 'inherit',
        backgroundColor: themeColor1,
      }}
    >
      <AnimatedSection>
      <div className="text-right">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
          style={{ color: textColor1 }}
        >
          {section_name}
        </h2>

        <div className="flex flex-wrap justify-center gap-9">
          {items.map((goal, index) => (
            <div key={index} className="md:w-[30%] w-full">
              <GoalItem2
                iconSrc={`${goal.icon}?v=${Date.now()}`} 
                title={goal.text}
                titleColor={textColor1}
                titleSize="text-xl"
                background1={textColor2}
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
