const SiteFooter = () => {
  return (
    <footer  className="bg-[#0A5A7D] text-white text-sm">
      <div className="px-5 py-5 md:px-10 flex justify-between items-center gap-6 ">



        {/* القسم الأوسط - معلومات الاتصال */}
        <div className="text-right">
          <p className="font-bold">البريد الإلكتروني</p>
          <p>info@pagefolio.sa</p>
        </div>

                {/* القسم الأيمن - الشعار والنص داخل مربع بلون مختلف */}
        <div className="flex flex-col items-end justify-between text-right ">
          <img src="/src/assets/Logohbab.png" alt="شعار الموقع" className="w-25 mb-2" />
          <p>
            هي أول صفحة بسيطة تُمكّنكم من تفصيل صفحات الهبوط بطريقة مرنة، ذكية وسلسة
          </p>
          <div className="flex">
          <img src="/src/assets/Social Media/x.png" alt="شعار الموقع" className=" mt-3  mx-1" />
          <img src="/src/assets/Social Media/instagram.png" alt="شعار الموقع" className=" mt-3 mx-1" />
          <img src="/src/assets/Social Media/linkedin.png" alt="شعار الموقع" className="mt-3  mx-1" />
          <img src="/src/assets/Social Media/whatsapp.png" alt="شعار الموقع" className=" mt-3  ml-1" />
          </div>    
          

        </div>

        {/* القسم الأيسر - الأيقونات */}



      </div>

      {/* حقوق النشر */}
      <div className="bg-[#034A69] p-3 text-center text-xs">
        <p>جميع الحقوق محفوظة © هباب 2025</p>
        <p>هباب سرعة وابداع</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
