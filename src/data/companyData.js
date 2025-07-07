// src/data/companyData.js

export const companyData = {
  fontFamily: "Cairo",

  
  navbar: {
    logo: "/src/assets/Logohbab.png",
    links: [
      { name: "الصفحة الرئيسية", href: "#home" },
      { name: "من نحن", href: "#about" },
      { name: "الاهداف", href: "#goals" },
      { name: "الخدمات", href: "#services" },
      { name: "عملاءنا", href: "#clients" },
      { name: "رأي عملائنا", href: "#feedback" },
      { name: "موظف الشهر", href: "#employee" },
      { name: "الموقع", href: "#contact" },

    ],
    createButtonText: "!انشئ ملفك",
    loginButtonText: "للدخول لملفك",
    createButtonBg: "bg-[#DCB12E]",
    createButtonHover: "hover:bg-[#bb9d5b]",
    createButtonTextColor: "text-white",
    loginButtonTextColor: "text-[#DCAD27]",
  },




  hero: {
    title: "هبـــّــــاب | افتح الباب، وخلّي هبّاب يهبّ",
    subtitle: "الريح التقنية اللي تدخل على صفحات شركتك، وتحركها، وتعدلها، وتعيد تشكيلها من جديد بدون ما تلمس سطر كود",
    gifImage: "/src/assets/gif.gif",
    flagImage: "/src/assets/Flag.png",
    background: "bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#0f172a]",
    titleColor: "text-white",
    subtitleColor: "text-white",
    buttonBg: "bg-[#DCB12E]",
    buttonHover: "hover:bg-[#bb9d5b]",
    buttonText: "text-white",
  },


  //--------------------------------------------------------------------------
    hero2: {
    title: "هبـــّــــاب | افتح الباب، وخلّي هبّاب يهبّ",
    subtitle: "الريح التقنية اللي تدخل على صفحات شركتك، وتحركها، وتعدلها، وتعيد تشكيلها من جديد بدون ما تلمس سطر كود",
    // gifImage: "/src/assets/gif.gif",
    flagImage: "/src/assets/Flagblue.png",
    // background: "bg-gradient-to-r from-[#70cbf3] via-[#12A3E3] to-[#0A5A7D]",
    titleColor: "text-white",
    subtitleColor: "text-white",

    textbutton: "! ابدا رحلتك معنا",
    buttonBg: "bg-[#F7D250]",
    buttonHover: "hover:bg-[#bb9d5b]",
    buttonTextColor: "text-white",
  },




  about: {
    logo: "/src/assets/Logohbab.png",
    title: "مين هبـــّــــــــــاب؟",
    titleColor: "text-black", // ← لون العنوان
    paragraphs: [
      {
        text: "في هبّاب، أنت المصمم، وأنت القائد، ونحن الجسر الذي يحول رؤيتك إلى واقع. تخيل لاندينج بيج كأنها مرآتك: ألوانك، أفكارك، صورك، ذوقك — بضغطة زر، تتحول إلى حضور رقمي نابض بالحياة ",
        color: "text-black", // ← لون أول فقرة
      },
      {
        text: "كل ما تحتاجه هو أن تخبرنا كيف تتخيل صفحة أحلامك — من الألوان والثيمات إلى الصور والفيديوهات والأقسام — ونحن نصنعها لك ببساطة، بدون تعقيد ولا انتظار، وبدون الحاجة إلى أي كود. في عالم يتغير بسرعة، نؤمن أن التخصيص السهل والنتائج الفورية هما سر النجاح الحقيقي",
        color: "text-gray-700", // ← لون ثاني فقرة
      },
      {
        text: " في هبّاب، نصغي إلى تفاصيلك الصغيرة قبل الكبيرة، ونحول أفكارك إلى صفحات تبهر العالم معنا، أنت تبدأ الحكاية، ونحن نكتب لك أجمل فصولها",
        color: "text-[#555]", // ← لون ثالث فقرة
      },
    ],
  },

    about2: {
    // logo: "/src/assets/Logohbab.png",
    title: "مين هبـــّــــــــــاب؟",
    titleColor: "text-white", // ← لون العنوان
    paragraphs: [
      {
        text: "في هبّاب، أنت المصمم، وأنت القائد، ونحن الجسر الذي يحول رؤيتك إلى واقع. تخيل لاندينج بيج كأنها مرآتك: ألوانك، أفكارك، صورك، ذوقك — بضغطة زر، تتحول إلى حضور رقمي نابض بالحياة ",
        color: "text-white", // ← لون أول فقرة
      },
      {
        text: "كل ما تحتاجه هو أن تخبرنا كيف تتخيل صفحة أحلامك — من الألوان والثيمات إلى الصور والفيديوهات والأقسام — ونحن نصنعها لك ببساطة، بدون تعقيد ولا انتظار، وبدون الحاجة إلى أي كود. في عالم يتغير بسرعة، نؤمن أن التخصيص السهل والنتائج الفورية هما سر النجاح الحقيقي",
        color: "text-white", // ← لون ثاني فقرة
      },
      {
        text: " في هبّاب، نصغي إلى تفاصيلك الصغيرة قبل الكبيرة، ونحول أفكارك إلى صفحات تبهر العالم معنا، أنت تبدأ الحكاية، ونحن نكتب لك أجمل فصولها",
        color: "text-white", // ← لون ثالث فقرة
      },
    ],
  },


  goalsSection: {
  background: "bg-gradient-to-b from-[#2690BE] via-[#C0DBE8] to-[#ffffff]",
  title: "أهدافــنــا",
  titleColor: "text-white",
  titleSize: "text-5xl md:text-6xl",
  itemTitleSize: "md:text-3xl sm:text-xl",
  itemTitleColor: "text-black",

  goals: [
    {
      iconSrc: "/src/assets/icons/react.svg",
      title: "نسمع فكرتك ونحولها لصفحة جاهزة بدون ما تشيل هم الأدوات أو الأكواد",
    },
    {
      iconSrc: "/src/assets/icons/react.svg",
      title: "تعطينا طلبك، وننفذه لك بسرعة وبكل بساطة",
    },
    {
      iconSrc: "/src/assets/icons/react.svg",
      title: "نطور دايمًا عشان نوصل لك أفضل نتيجة بأقل مجهود",
    },
    {
      iconSrc: "/src/assets/icons/react.svg",
      title: "نصمم صفحات تشبهك وتلفت انتباه جمهورك",
    },
  ],
},



goalsSection2: {
  title: "أهدافــنــا",
  titleColor: "text-[#0A5A7D]",
  titleSize: "text-5xl md:text-6xl",
  itemTitleSize: "md:text-2xl sm:text-xl",
  itemTitleColor: "text-[#E0AA25] group-hover:text-white",
  textColor: "text-black",

  goals: [
    {
      iconSrc: "/src/assets/icons/led.png",
      title: "تحويل الرؤية لتصميم",
      text:"نسمـع فكرتـك ونحولـها لصفحـة جاهـزة بدون ما تشـيل هم الأدوات أو الأكـواد"
    },
    {
      iconSrc: "/src/assets/icons/design.png",
      title: "صفحات جذابة",
      text:"نصمم صفحات تشبهك وتلفت انتباه جمهورك"
    },
    {
      iconSrc: "/src/assets/icons/air.png",
      title: "خدمة فورية",
      text:"تعطينا طلبك، وننفذه لك بسرعة وبكل بساطة"
    },
    {
      iconSrc: "/src/assets/icons/block.png",
      title: "تطوير يلبي تطلعاتك",
      text:"نطور دايمًا عشان نوصل لك أفضل نتيجة بأقل مجهود"
    },
        {
      iconSrc: "/src/assets/icons/design.png",
      title: "صفحات جذابة",
      text:"نصمم صفحات تشبهك وتلفت انتباه جمهورك"
    },
        {
      iconSrc: "/src/assets/icons/air.png",
      title: "خدمة فورية",
      text:"تعطينا طلبك، وننفذه لك بسرعة وبكل بساطة"
    },
  ],
},





  services: {
    sectionTitle: "الخدمات التي نقدمها",
    sectionTitleColor: "text-[#1F5374]",
    background: "bg-gradient-to-r from-[#81D9FF] via-[#2C78A7] to-[#1F5374]",
    list: [
      {
        image: "src/assets/service1.png",
        icon: "src/assets/icons/react.svg",
        text: "تصمم لك موقع بروفايلو يعكس هوية شركتك وخدماتك بدقة",
      },
      {
        image: "src/assets/service2.png",
        icon: "src/assets/icons/react.svg",
        text: "قابلية التعديل المستمر لضمان تحديثات صفحتك",
      },
      {
        image: "src/assets/service3.png",
        icon: "src/assets/icons/react.svg",
        text: "توفير رابط مخصص لسهولة الوصول والمشاركة",
      },
      {
        image: "src/assets/service4.png",
        icon: "src/assets/icons/react.svg",
        text: "نظام متجاوب يعمل على جميع الأجهزة",
      },
      {
        image: "src/assets/service5.png",
        icon: "src/assets/icons/react.svg",
        text: "دعم فني مستمر ومتابعة",
      },
      {
        image: "src/assets/service6.png",
        icon: "src/assets/icons/react.svg",
        text: "تحسين لمحركات البحث SEO",
      },
      {
        image: "src/assets/service7.png",
        icon: "src/assets/icons/react.svg",
        text: "تحديثات دورية تلقائية",
      },
      {
        image: "/assets/service8.png",
        icon: "src/assets/icons/react.svg",
        text: "خدمات تصميم إضافية للهوية",
      },
    ],
  },




  services2: {
    sectionTitle: "الخدمات التي نقدمها",
    sectionTitleColor: "text-white",
    background: "bg-[#0979A2]",
    list: [
      {
        image: "src/assets/service1.png",
        icon: "src/assets/icons/react.svg",
        text: "تصمم لك موقع بروفايلو يعكس هوية شركتك وخدماتك بدقة",
      },
      {
        image: "src/assets/service2.png",
        icon: "src/assets/icons/react.svg",
        text: "قابلية التعديل المستمر لضمان تحديثات صفحتك",
      },
      {
        image: "src/assets/service3.png",
        icon: "src/assets/icons/react.svg",
        text: "توفير رابط مخصص لسهولة الوصول والمشاركة",
      },
      {
        image: "src/assets/service4.png",
        icon: "src/assets/icons/react.svg",
        text: "نظام متجاوب يعمل على جميع الأجهزة",
      },
      {
        image: "src/assets/service5.png",
        icon: "src/assets/icons/react.svg",
        text: "دعم فني مستمر ومتابعة",
      },
      {
        image: "src/assets/service6.png",
        icon: "src/assets/icons/react.svg",
        text: "تحسين لمحركات البحث SEO",
      },
      {
        image: "src/assets/service7.png",
        icon: "src/assets/icons/react.svg",
        text: "تحديثات دورية تلقائية",
      },
      {
        image: "/assets/service8.png",
        icon: "src/assets/icons/react.svg",
        text: "خدمات تصميم إضافية للهوية",
      },
    ],
  },








  clientsSection: {
  title: "عملاء تشرفنا بالعمل معهم",
  titleColor: "text-[#1F5374]",
  titleSize: "text-3xl md:text-5xl",

  paragraph: "يرحب هباب بكل عملائنا و نفتخر بكوننا جزء منكم",
  paragraphColor: "text-gray-700",
  paragraphSize: "text-[14px] md:text-lg",

  logoHeight: "md:h-23 h-17",
  sideBlurColor: "from-blue-300", // تستخدم في الجهتين

  logos: [
    "/src/assets/company/techwin.png",
    "/src/assets/company/umm al-qura.png",
    "/src/assets/company/Logohbab.png",
    
  ],
},


  clientsSection2: {
  title: "عمــــــلاء تشرفنــــــا بالعمــــــل معهــــــم ",
  titleColor: "text-[#0A5A7D]",
  titleSize: "text-3xl md:text-5xl",

  paragraph: "يرحب هباب بكل عملائنا و نفتخر بكوننا جزء منكم",
  paragraphColor: "text-gray-700",
  paragraphSize: "text-[14px] md:text-lg",

  logoHeight: "md:h-20 h-20",

  logos: [
    "/src/assets/company/techwin.png",
    "/src/assets/company/umm al-qura.png",
    "/src/assets/company/Logohbab.png",
    
  ],
},


contactSection: {
  mapImage: "/src/assets/Map.png", // صورة الخريطة
  mapLink: "https://maps.google.com/?q=21.3891,39.8579", // رابط عند الضغط على الخريطة
  flagImage: "/src/assets/flag2.png", // صورة العلم أو الزخرفة أسفل الصفحة

  title: "قم بزيارتنا للوصول وانضم الينا",
  titleColor: "text-white",
  titleSize: "text-3xl md:text-3xl",

  paragraph:
    "في موقعنا، نؤمن أن كل فكرة تستحق أن تظهر بأفضل شكل على الإنترنت، لذلك أنشأنا نظامًا سريعًا ومرنًا يتيح لك الحصول على موقع إلكتروني خاص بك بكل سهولة. كل ما عليك هو تزويدنا بمعلوماتك الأساسية، ونحن سنتولى الباقي! من خلال منصتنا، نقوم بإنشاء موقع ديناميكي مصمم حسب احتياجك، سواء كنت صاحب مشروع، مقدم خدمة، أو حتى شخص يريد عرض أعماله في بورتفوليو أنيق. لا حاجة لأي خبرة تقنية، فقط زرنا أو تواصل معنا، وسنحوّل فكرتك إلى موقع فعّال يعكس هويتك ويبرز تميزك.",
  paragraphColor: "text-white",
  paragraphSize: "text-sm md:text-base",

  background: "bg-no-repeat bg-gradient-to-r from-[#FFEB9A] via-[#D9AE28] to-[#E0AA25]",
},


contactSection2: {
  flagImage: "/src/assets/flag2.png",
  title: "قم بزيارتنا للوصول وانضم الينا",
  titleColor: "text-white",
  titleSize: "text-3xl md:text-4xl",
  background: "bg-no-repeat bg-gradient-to-r from-[#FFEB9A] via-[#D9AE28] to-[#E0AA25]",
  maps: [
    {
      city: "جدة",
      image: "/src/assets/Map2.png",
      link: "https://maps.google.com/?q=21.3891,39.8579",
    },
    {
      city: "مكة المكرمة",
      image: "/src/assets/Map2.png",
      link: "https://maps.google.com/?q=21.3891,39.8579",
    },
  ],
},


footer: {
  logo: "/src/assets/Logohbab.png",
  paragraph: "هـبــــــــاب هو أول منصة عربية تتحكم بتفاصيل صفحات الهبوط بطريقة ديناميكية، ذكية، وسلسة", 
  paragraphColor: "text-white",
  socialIcons: [
    { icon: "/src/assets/Social Media/x.png", link: "https://x.com" },
    { icon: "/src/assets/Social Media/instagram.png", link: "https://instagram.com" },
    { icon: "/src/assets/Social Media/whatsapp.png", link: "https://wa.me" },
    { icon: "/src/assets/Social Media/linkedin.png", link: "https://linkedin.com" },
  ],
  socialHoverColor: "hover:bg-yellow-400",
  email: "info@pagefolio.sa",
  copyButton: {
    text: "نسخ",
    bgColor: "bg-yellow-400",
    hoverBg: "hover:bg-[#bb9d5b]",
    textColor: "text-black",
  },
  linkHoverColor: "hover:text-yellow-400",
  copyright: {
    text: "جميع الحقوق محفوظة © هـبّــاب 2025",
    bgColor: "bg-[#034A69]",
  },
},





};

export default companyData;
