import Gif from "../assets/gif.gif";
import Flag from "../assets/Flag.png";

const Hero = () => {
  return (
    <section className=" px-10 md:px-20 py-20 flex flex-col lg:flex-row items-center lg:justify-between gap-10 overflow-hidden content-center">
      
      {/* الصورة - فوق في الجوال، يسار في الكبير */}
      <div className=" md:w-full lg:w-[550px] lg:shadow-xl rounded-xl overflow-hidden">
        <img
          src={Gif}
          alt="هباب جيف"
          className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[550px] mx-auto"
        />
      </div>

      {/* النص - تحت في الجوال، يمين في الكبير */}
      <div className="text-white text-center lg:text-right w-full lg:w-1/2 space-y-3 ">
        <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold leading-10">
          هبـــّــــاب | افتح الباب، وخلّي هبّاب يهبّ
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-">
          الريح التقنية اللي تدخل على صفحات شركتك، وتحركها، وتعدلها، وتعيد تشكيلها من جديد بدون ما تلمس سطر كود
        </p>

        {/* زر الجوال فقط */}
        <div className="block lg:hidden ">
          <button className="bg-[#DCB12E] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#bb9d5b] transition">
            !انشئ ملفك
          </button>
        </div>
      </div>

      {/* العلم بأسفل القسم - مكانه مضبوط */}
      <img
        src={Flag}
        className="absolute bottom-0 right-0 left-0"
      />
    </section>
  );
};

export default Hero;
