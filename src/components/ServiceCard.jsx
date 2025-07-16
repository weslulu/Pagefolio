const ServiceCard = ({ image, text, backgroundColor = '#ffffff' }) => {
  return (
    <div
      className="relative min-w-[320px] sm:min-w-[350px] md:min-w-[380px] rounded-md shadow-md overflow-visible"
      style={{ backgroundColor }}
    >
      <img
        src={image}
        alt="صورة الخدمة"
        className="w-full h-65 object-cover rounded-t-md"
      />

      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2  p-4 rounded-sm flex items-center justify-center opacity-90 gap-4 w-[85%] shadow-lg"
      style={{ backgroundColor }}>
        <p className="text-sm font-semibold text-center">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
