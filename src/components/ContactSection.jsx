import mapImage from "/src/assets/Map.png";
import flag2 from "../assets/flag2.png"

const ContactSection = () => {
  return (
    
    <section className=" bg-no-repeat bg-gradient-to-r from-[#FFEB9A] via-[#D9AE28] to-[#E0AA25] py-20 md:px-30 px-13">
        {/* <img src={flag2} className="absolute top-800 buttom-0 right-0 left-0 w-full"></img>             */}

      <div className="container flex flex-col lg:flex-row items-center md:justify-between md:gap-10 gap-3">
        {/* خريطة */}
        <a href="*" target="_blank">
          <img
            src={mapImage}
            className=" rounded-lg shadow-w-100 w-full h-full object-cover"
          />
        </a>

        {/* نص */}
        <div className="text-white max-w-xl lg:text-right text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            قم بزيارتنا للوصول وانضم الينا
          </h2>
          <p className="leading-loose text-sm md:text-base">
            في موقعنا، نؤمن أن كل فكرة تستحق أن تظهر بأفضل شكل على الإنترنت، لذلك أنشأنا نظامًا سريعًا ومرنًا يتيح لك الحصول على موقع إلكتروني خاص بك بكل سهولة. كل ما عليك هو تزويدنا بمعلوماتك الأساسية، ونحن سنتولى الباقي! من خلال منصتنا، نقوم بإنشاء موقع ديناميكي مصمم حسب احتياجك، سواء كنت صاحب مشروع، مقدم خدمة، أو حتى شخص يريد عرض أعماله في بورتفوليو أنيق. لا حاجة لأي خبرة تقنية، فقط زرنا أو تواصل معنا، وسنحوّل فكرتك إلى موقع فعّال يعكس هويتك ويبرز تميزك.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
