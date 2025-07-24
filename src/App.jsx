// import HomeSection from "./components/HomeSection";
// import HomeSection2 from "./components/HomeSection2";

// import AboutSection from "./components/AboutSection";
// import AboutSection2 from "./components/AboutSection2";

// import GoalsSection from './components/GoalsSection';
// import GoalsSection2 from './components/GoalsSection2';

// import ServicesSection from "./components/ServicesSection";
// import ServicesSection2 from "./components/ServicesSection2";

// import ContactSection from "./components/ContactSection";
// import FooterSection from "./components/FooterSection";
// import ClientsSection from "./components/ClientsSection";
// import './index.css';

// import { companyData } from '/src/data/companyData.js';

// import "./App.css";
// import SpecialEmploy from './SpecialEmploy.jsx'
// import Feedback from './Feedback.jsx'
// import Feedback2 from "./Seconde_Template/Feedback2.jsx";
// import SpecialEmp2 from "./Seconde_Template/SpecialEmp2.jsx";
// import ContactSection2 from "./components/ContactSection2.jsx";
// import ClientsSection2 from "./components/ClientSection2.jsx";
// import Navbar from './components/Navbar.jsx';

// function App() {

//     const { hero } = companyData;

//   return (

    
//     <div >
//       <Navbar/>

//       <div id="home" className={`h-[800px] relative bg-cover bg-center bg-no-repeat ${hero.background}`}>
//       {/* <HomeSection /> */}
//       <HomeSection2 />
//       </div>

//       <div id="about" className=" w-full">
//       {/* <AboutSection /> */}
//       <AboutSection2 />
//       </div>

//       <div id="goals" className="w-full">
//       {/* <GoalsSection /> */}
//       <GoalsSection2 />
//       </div>

  
//       <div id="services" className="w-full ">
//         {/* <ServicesSection /> */}
//         <ServicesSection2 />

//       </div>

// {/*       
//       <div id="clients" className="w-full ">
//         <ClientsSection />
//       </div> */}

//       <div id="clients" className="w-full ">
//         <ClientsSection2 />
//       </div>

//        <div id="" className="w-full">
//         {/* <Feedback /> */}
//         <Feedback2 />
//       </div>

//        <div id="" className="w-full">
//         {/* <SpecialEmploy /> */}
//         <SpecialEmp2 />
//       </div>
      

//       <div id="contact" className="w-full ">
//         <ContactSection2 />
//         {/* <ContactSection/> */}
//         <FooterSection />
//       </div>


//     </div>
    
//   );
// }

// export default App;



// import { useEffect, useState } from 'react';
// import { getCompanyInfo } from './Api/companiesAPI.js';

// import HomeSection from "./Templates/1st/HomeSection.jsx";
// import HomeSection2 from "./Templates/2nd/HomeSection2.jsx";

// import AboutSection from "./Templates/1st/AboutSection.jsx";
// import AboutSection2 from "./Templates/2nd/AboutSection2.jsx";

// import GoalsSection from './Templates/1st/GoalsSection.jsx';
// import GoalsSection2 from './Templates/2nd/GoalsSection2.jsx';

// import ServicesSection from "./Templates/1st/ServicesSection.jsx";
// import ServicesSection2 from "./Templates/2nd/ServicesSection2.jsx";

// import ContactSection from "./Templates/1st/ContactSection.jsx";
// import ContactSection2 from "./Templates/2nd/ContactSection2.jsx";

// import FooterSection from "./Templates/Commen/FooterSection.jsx";

// import ClientsSection from "./Templates/1st/ClientsSection.jsx";
// import ClientsSection2 from "./Templates/2nd/ClientSection2.jsx";

// import SpecialEmploy from './Templates/1st/SpecialEmploy.jsx';
// import SpecialEmp2 from './Templates/2nd/SpecialEmp2.jsx'

// import Feedback from './Templates/1st/Feedback.jsx';
// import Feedback2 from './Templates/2nd/Feedback2.jsx';

// import Navbar from './Templates/Commen/Navbar.jsx';
// import { DesignProvider } from './Context/DesignContext.jsx';

// function App() {
//   const [companyData, setCompanyData] = useState(null);

//   useEffect(() => {
//     getCompanyInfo()
//       .then((res) => {
//         const pages = res.data?.data;
//         if (pages && pages.length > 0) {
//           const layout1Page = pages.find((page) => page.layout === "2");
//           setCompanyData(layout1Page);

//           // تغيير العنوان
//           if (layout1Page?.company.name) {
//             document.title = layout1Page.company.name;
//           }

//           // تغيير الفافيكون
//           if (layout1Page?.company.logo_url) {
//             const faviconUrl = `http://68.183.28.116/storage/${layout1Page.company.logo_url}`;
//             let favicon = document.querySelector("link[rel*='icon']");
//             if (!favicon) {
//               favicon = document.createElement('link');
//               favicon.rel = 'icon';
//               document.head.appendChild(favicon);
//             }
//             favicon.type = 'image/png';
//             favicon.href = faviconUrl;
//           }
//         } else {
//           console.error("No pages found");
//         }
//       })
//       .catch((err) => console.error("API Error:", err));
//   }, []);

//   if (!companyData) return <div>جاري تحميل البيانات...</div>;

//   const { sections = [], theme_color1 = "#fff" } = companyData;
//   const firstSection = sections[0] || {};

//   return (
//     <DesignProvider>
//       <div>
//         <Navbar data={firstSection.back_title} />

//         <div id="home" className="h-[800px] relative bg-cover bg-center bg-no-repeat" style={{ backgroundColor: theme_color1 }}>
//           <HomeSection data={firstSection.back_title} />
//           {/* <HomeSection2 data={firstSection.back_title} /> */}
//         </div>

//         <div id="about" className="w-full">
//           <AboutSection data={firstSection.back_title} />
//           {/* <AboutSection2 data={firstSection.back_title} /> */}
//         </div>

//         <div id="objectives" className="w-full">
//           {/* <GoalsSection data={firstSection.objective_title} theme={companyData} /> */}
//           <GoalsSection2 data={firstSection.objective_title} theme={companyData} />
//         </div>

//         <div id="services" className="w-full">
//           {/* <ServicesSection data={firstSection.service_title} theme={companyData} /> */}
//           <ServicesSection2 data={firstSection.service_title} theme={companyData} />
//         </div>

//         <div id="partners" className="w-full">
//           {/* <ClientsSection data={firstSection.partner_title} theme={companyData} /> */}
//           <ClientsSection2 data={firstSection.partner_title} theme={companyData} />
//         </div>

//         <div id="feedbacks" className="w-full">
//           {/* <Feedback />  */}
//           <Feedback2 /> 
//         </div>

//         <div id="special-employ" className="w-full">
//           {/* <SpecialEmploy data={firstSection.eotm_title} theme={companyData} /> */}
//           <SpecialEmp2 data={firstSection.eotm_title} theme={companyData} />
//         </div>

//         <div id="locations" className="w-full">
//           {/* <ContactSection data={firstSection.location_title} /> */}
//           <ContactSection2 data={firstSection.location_title} />
//           <FooterSection />
//         </div>
//       </div>
//     </DesignProvider>
//   );
// }

// export default App;


import { useEffect } from "react";
import { useDesign } from "./Context/DesignContext";
import { DesignProvider } from "./Context/DesignContext.jsx";
import { templateComponents } from "./Templates/templateMapping";

import Navbar from "./Templates/Commen/Navbar.jsx";
import Footer from "./Templates/Commen/FooterSection.jsx";

function App() {
  return (
    <DesignProvider>
      <MainContent />
    </DesignProvider>
  );
}

function MainContent() {
  const { designData, loading } = useDesign();
  const { language } = useDesign();

  useEffect(() => {
    if (!designData) return;

    // ✅ تغيير العنوان
    if (designData.companyName) {
      document.title = designData.companyName;
    }

    // ✅ تغيير الفافيكون
    if (designData.logo) {
      const updateFavicon = (url) => {
        let favicon = document.querySelector("link[rel*='icon']");
        if (!favicon) {
          favicon = document.createElement("link");
          favicon.rel = "icon";
          document.head.appendChild(favicon);
        }
        favicon.type = "image/png";
        favicon.href = url;
      };
      updateFavicon(designData.logo);
    }
  }, [designData]);

  if (loading || !designData) return <div>جاري تحميل البيانات...</div>;

  const layoutId = designData.layout || "1"; 
  const Template = templateComponents[layoutId];
  const themeColor = designData.themeColor1 || "#fff";

  return (
    <div>
      {/* <div dir={language === "ar" ? "rtl" : "ltr"}> */}
      <Navbar data={designData.sections.whoWeAre} />

      <div id="home" className="h-[800px] relative bg-cover bg-center bg-no-repeat" style={{ backgroundColor: themeColor }}>
        <Template.Home />
      </div>

      <div id="about" className="w-full">
        <Template.About />
      </div>

      <div id="objectives" className="w-full">
        <Template.Objectives />
      </div>

      <div id="services" className="w-full">
        <Template.Services />
      </div>

      <div id="partners" className="w-full">
        <Template.Partners />
      </div>

      <div id="feedbacks" className="w-full">
        <Template.Feedbacks />
      </div>

      <div id="special-employ" className="w-full">
        <Template.SpecialEmploy />
      </div>

      <div id="locations" className="w-full">
        <Template.Contact />
        <Footer />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;

