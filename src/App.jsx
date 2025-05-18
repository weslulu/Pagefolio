import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import GoalsSection from './components/GoalsSection';
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ClientsSection from "./components/ClientsSection";
import './index.css';



function App() {
  return (
    <div className=" h-[800px] relative bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#70CBF3] via-[#12A3E3] to-[#0A5A7D]">
      
      <div className="h-full bg-[url('/src/assets/5.svg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <HomeSection />
      </div>

      <div className=" w-full">
      <AboutSection />
      </div>

      <div className="w-full">
      <GoalsSection />
      </div>

  
      <div className="w-full ">
        <ServicesSection />
      </div>

      
      <div className="w-full ">
      <ClientsSection />
      </div>

      <div className="w-full ">
        <ContactSection />
        <FooterSection />
      </div>


    </div>
    
  );
}

export default App;