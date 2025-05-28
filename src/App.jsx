import HomeSection from "./components/HomeSection";
import HomeSection2 from "./components/HomeSection2";

import AboutSection from "./components/AboutSection";
import AboutSection2 from "./components/AboutSection2";

import GoalsSection from './components/GoalsSection';
import GoalsSection2 from './components/GoalsSection2';

import ServicesSection from "./components/ServicesSection";
import ServicesSection2 from "./components/ServicesSection2";

import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ClientsSection from "./components/ClientsSection";
import './index.css';

import companyData from "/src/data/companyData";



import "./App.css";
import SpecialEmploy from './SpecialEmploy.jsx'
import Feedback from './Feedback.jsx'
import Feedback2 from "./Seconde_Template/Feedback2.jsx";
import SpecialEmp2 from "./Seconde_Template/SpecialEmp2.jsx";

function App() {

    const { hero } = companyData;

  return (

    
    <div >
      
      <div id="home" className={`h-[800px] relative bg-cover bg-center bg-no-repeat ${hero.background}`}>
      {/* <HomeSection /> */}
      <HomeSection2 />
      </div>

      <div id="about" className=" w-full">
      {/* <AboutSection /> */}
      <AboutSection2 />
      </div>

      <div id="goals" className="w-full">
      {/* <GoalsSection /> */}
      <GoalsSection2 />
      </div>

  
      <div id="services" className="w-full ">
        {/* <ServicesSection /> */}
        <ServicesSection2 />

      </div>

      
      <div id="clients" className="w-full ">
      <ClientsSection />
      </div>

      <div id="contact" className="w-full ">
        <ContactSection />
        <FooterSection />
      </div>


    </div>
    
  );
}

export default App;