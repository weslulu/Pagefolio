const ServiceCard2 = ({ image, icon, text }) => {
  return (
    <div className="relative min-w-[380px] bg-[#ffffff] rounded-md shadow-md overflow-visible">
      <img
        src={image}
        className="w-full h-65 object-cover rounded-t-md"
      />

      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-sm flex items-center justify-between gap-4 w-[85%] shadow-lg">
        <p className="text-sm text-right">{text}</p>
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default ServiceCard2;
