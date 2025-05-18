import GoalItem from './GoalItem';

import icon1 from '../assets/icons/react.svg';
import icon2 from '../assets/icons/react.svg';
import icon3 from '../assets/icons/react.svg';
import icon4 from '../assets/icons/react.svg';

const GoalsSection = () => {
  const goals = [
    {
      iconSrc: icon1,
      title: 'نسمع فكرتك ونحولها لصفحة جاهزة بدون ما تشيل هم الأدوات أو الأكواد',
    },
    {
      iconSrc: icon2,
      title: 'تعطينا طلبك، وننفذه لك بسرعة وبكل بساطة',
    },
    {
      iconSrc: icon3,
      title: 'نطور دايمًا عشان نوصل لك أفضل نتيجة بأقل مجهود',
    },
    {
      iconSrc: icon4,
      title: 'نصمم صفحات تشبهك وتلفت انتباه جمهورك',
      
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#2690BE] via-[#C0DBE8] to-[#ffffff] px-12 py-20 lg:px-30 text-right">
      <div className=" mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-15 text-center">أهدافــنــا</h2>
        <div className="flex flex-wrap justify-center gap-5 ">
          {goals.map((goal, index) => (
            <div key={index} className="w-full md:w-[48%]">
              <GoalItem iconSrc={goal.iconSrc} title={goal.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
