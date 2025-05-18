import React from 'react';

const GoalItem = ({ iconSrc, title }) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 lg:gap-12 bg-white p-9 lg:p-12 rounded-4xl shadow-lg h-full text-right">
      <img src={iconSrc} alt="goal icon" className="md:w-20 md:h-20 sm:w-10 sm:h-10" />
      <p className="md:text-3xl font-bold sm:text-1xl md:leading-12">{title}</p>
    </div>
  );
};

export default GoalItem;
