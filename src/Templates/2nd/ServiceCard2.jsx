import { useDesign } from '../../Context/DesignContext';

const ServiceCard2 = ({ image, icon, text }) => {
  const { language } = useDesign();
  const isArabic = language === 'ar';

  return (
    <div className="relative min-w-[380px] bg-[#ffffff] rounded-md shadow-md overflow-visible">
      {/* الصورة */}
      <img
        src={image}
        className="w-full h-65 object-cover rounded-t-md"
      />

      {/* المحتوى العائم */}
      <div
        className={`absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-sm flex items-center w-[85%] shadow-lg gap-4 ${isArabic ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <p className={`text-sm ${isArabic ? 'text-right' : 'text-left'} flex-1`}>
          {text}
        </p>
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default ServiceCard2;
