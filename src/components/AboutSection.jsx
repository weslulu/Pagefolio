// import { companyData } from '../data/companyData.js';

// const AboutPage = () => {
//   const { title, titleColor, logo, paragraphs } = companyData.about;

//   return (
//     <section className="px-10 md:px-15 py-12 flex flex-col lg:flex-row items-center content-center justify-center md:gap-10 md:justify-between">

//       {/* النصوص */}
//       <div className="w-full lg:w-1/2 text-center lg:text-right px-2 md:px-5 lg:px-0 md:leading-7">
//         <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${titleColor}`}>
//           {title}
//         </h1>

//         {paragraphs.map((p, index) => (
//           <p
//             key={index}
//             className={`text-base md:text-xl lg:text-2xl md:leading-8 mb-3 md:mb-6 ${p.color}`}
//           >
//             {p.text}
//           </p>
//         ))}
//       </div>

//       {/* الصورة */}
//       <div className="w-full lg:w-1/2 flex justify-center lg:justify-items-start mt-6 lg:mt-0">
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-50 lg:w-150 object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutPage;




import { useDesign } from '../Context/DesignContext.jsx';
import AnimatedSection from '../AnimatedSection.jsx';

const AboutPage = () => {
  const { designData, loading } = useDesign();

  if (loading) return <div>بيتحمل اصبري</div>;
  if (!designData?.sections?.whoWeAre) return <div>ما في بيانات</div>;

  const { section_name, text, image } = designData.sections.whoWeAre;

  return (
    <section style={{ backgroundColor: designData.themeColor1 }}>
      <AnimatedSection>
        <div className="px-10 md:px-15 pb-15 flex flex-col lg:flex-row items-center content-center justify-center md:gap-10 md:justify-between">
          
          {/* النصوص */}
          <div className="w-full text-center lg:text-right px-10 md:px-5 lg:px-0 md:leading-7">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: designData.textColor1 }}
            >
              {section_name}
            </h1>

            <p
              className="text-base md:text-xl lg:text-2xl md:leading-8 mb-3 md:mb-6"
              style={{ color: designData.textColor2 }}
            >
              {text}
            </p>
          </div>

          {/* الصورة */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-items-start mt-6 lg:mt-0">
            <img
              src={image}
              alt="من نحن"
              className="w-70 lg:w-100 object-contain"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutPage;
