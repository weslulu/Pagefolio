import companyData from "../data/companyData";

const AboutPage = () => {
  const { title, titleColor, logo, paragraphs } = companyData.about;

  return (
    <section className="px-10 md:px-15 py-12 flex flex-col lg:flex-row items-center content-center justify-center md:gap-10 md:justify-between">

      {/* النصوص */}
      <div className="w-full lg:w-1/2 text-center lg:text-right px-2 md:px-5 lg:px-0 md:leading-7">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${titleColor}`}>
          {title}
        </h1>

        {paragraphs.map((p, index) => (
          <p
            key={index}
            className={`text-base md:text-xl lg:text-2xl md:leading-8 mb-3 md:mb-6 ${p.color}`}
          >
            {p.text}
          </p>
        ))}
      </div>

      {/* الصورة */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-items-start mt-6 lg:mt-0">
        <img
          src={logo}
          alt="Logo"
          className="w-50 lg:w-150 object-contain"
        />
      </div>
    </section>
  );
};

export default AboutPage;
