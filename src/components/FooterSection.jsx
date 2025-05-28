import companyData from "/companyData.js";

const SiteFooter = () => {
  const {
    logo,
    paragraph,
    paragraphColor,
    socialIcons,
    socialHoverColor,
    email,
    copyButton,
    linkHoverColor,
    copyright,
  } = companyData.footer;

  return (
    <footer className="text-white text-sm font-sans" style={{ backgroundColor: "#0A5A7D" }}>
      {/* Navbar العلوي */}
      <div className="border-b border-white/25 mx-10 lg:mx-70">
        <nav className="flex items-center justify-center gap-5 lg:gap-8 py-6 text-sm flex-wrap ">
          {companyData.navbar.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${linkHoverColor} transition`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="px-5 py-8 md:px-15 md:pl-40 flex flex-col lg:flex-row-reverse lg:justify-between gap-8">
        {/* الشعار والوصف والأيقونات */}
        <div className="flex flex-col items-end text-right">
          <img src={logo} alt="شعار الموقع" className="w-30 mb-2" />
          <p className={`mb-3 max-w-xs md:max-w-md leading-relaxed break-words ${paragraphColor}`}>{paragraph}</p>
          <div className="flex gap-1.5 mt-2">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialHoverColor} rounded-full p-1.5 transition`}
              >
                <img src={social.icon} alt={`social-${idx}`} className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>

        {/* البريد الإلكتروني + زر نسخ */}
        <div className="flex lg:flex-row-reverse items-center lg:w-1/2 justify-end gap-3 flex-wrap lg:flex-nowrap">
          <p className="font-bold whitespace-nowrap">البريد الإلكتروني</p>
          <div className="flex flex-row-reverse border border-white rounded overflow-hidden w-full">
            <input
              type="text"
              value={email}
              readOnly
              className="bg-transparent text-white px-3 py-2 text-sm flex-1 text-right"
            />
            <button
              onClick={() => navigator.clipboard.writeText(email)}
              className={`${copyButton.bgColor} ${copyButton.hoverBg} ${copyButton.textColor} px-12 py-2 text-sm`}
            >
              {copyButton.text}
            </button>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className={`${copyright.bgColor} text-center text-xs p-6`}>
        <p>{copyright.text}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
