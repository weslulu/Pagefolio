import companyData from "../data/companyData";

const AboutPage = () => {
  const { title, titleColor, paragraphs } = companyData.about2;

  return (
    <section className="bg-[#0979A2] relative px-10 md:px-15 py-22 flex flex-col-reverse lg:flex-row items-center content-center justify-center md:gap-10 md:justify-between">

        <img
            src="/src/assets/Vectors.png"
            className="absolute top-0 right-0 w-full h-full object-cover  pointer-events-none z-0"/>
      {/* النصوص */}
      <div className="w-full lg:w-1/2 text-center lg:text-right px-2 md:px-5 lg:px-0 md:leading-7 z-10  ">


        {paragraphs.map((p, index) => (
          <p
            key={index}
            className={`text-base md:text-xl lg:text-1xl md:leading-8 mb-3 md:mb-6 ${p.color}`}> {p.text} </p>
        ))}
      </div>

      {/* الصورة */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-items-start mt-6 lg:mt-0 z-10">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${titleColor}`}>
          {title}
        </h1>
      </div>
    </section>
  );
};

export default AboutPage;
