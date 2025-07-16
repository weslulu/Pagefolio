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



import { useEffect, useState } from 'react';
import { getCompanyInfo } from './Api/companiesAPI.js';
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import GoalsSection from './components/GoalsSection';
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ClientsSection from "./components/ClientsSection";
import SpecialEmploy from './SpecialEmploy.jsx';
import Feedback from './Feedback.jsx';
import Navbar from './components/Navbar.jsx';
import { DesignProvider } from './Context/DesignContext.jsx';

function App() {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    getCompanyInfo()
      .then((res) => {
        const pages = res.data?.data;
        if (pages && pages.length > 0) {
          const layout1Page = pages.find((page) => page.layout === "1");
          setCompanyData(layout1Page);

          // تغيير العنوان
          if (layout1Page?.company.name) {
            document.title = layout1Page.company.name;
          }

          // تغيير الفافيكون
          if (layout1Page?.company.logo_url) {
            const faviconUrl = `http://68.183.28.116/storage/${layout1Page.company.logo_url}`;
            let favicon = document.querySelector("link[rel*='icon']");
            if (!favicon) {
              favicon = document.createElement('link');
              favicon.rel = 'icon';
              document.head.appendChild(favicon);
            }
            favicon.type = 'image/png';
            favicon.href = faviconUrl;
          }
        } else {
          console.error("No pages found");
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!companyData) return <div>جاري تحميل البيانات...</div>;

  const { sections = [], theme_color1 = "#fff" } = companyData;
  const firstSection = sections[0] || {};

  return (
    <DesignProvider>
      <div>
        <Navbar data={firstSection.back_title} />

        <div id="home" className="h-[800px] relative bg-cover bg-center bg-no-repeat" style={{ backgroundColor: theme_color1 }}>
          <HomeSection data={firstSection.back_title} />
        </div>

        <div id="about" className="w-full">
          <AboutSection data={firstSection.back_title} />
        </div>

        <div id="objectives" className="w-full">
          <GoalsSection data={firstSection.objective_title} theme={companyData} />
        </div>

        <div id="services" className="w-full">
          <ServicesSection data={firstSection.service_title} theme={companyData} />
        </div>

        <div id="partners" className="w-full">
          <ClientsSection data={firstSection.partner_title} theme={companyData} />
        </div>

        <div id="feedbacks" className="w-full">
          <Feedback /> {/* ❌ بدون props، يعتمد على الكونتكس */}
        </div>

        <div id="special-employ" className="w-full">
          <SpecialEmploy data={firstSection.eotm_title} theme={companyData} />
        </div>

        <div id="locations" className="w-full">
          <ContactSection data={firstSection.location_title} />
          <FooterSection />
        </div>
      </div>
    </DesignProvider>
  );
}

export default App;
