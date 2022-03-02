import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar/NavBar";
import NavBarLaptop from "./components/Navbar/NavBarLaptop";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Language from "./components/Language";




function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [language, setLanguage] = useState("esp");
  
  return (
    <>
   {/*  <Language
    language={language}
    setLanguage={setLanguage}/> */}
      {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}

      {<NavBarLaptop  setShowNavBar={setShowNavBar}
      language={language}
      setLanguage={setLanguage} />}

            <HeroSection language={language} />
   

         <div className="bg-gray-100 w-full sm:flex sm:flex-row">
   
              <About className=" sm:w-1/2" language={language}/>
      

              <Stack className="sm:w-1/2" language={language} />
    
       </div>

        
            <Projects language={language} />
        

       
            <Contact language={language} />
   
    </>
  );
}

export default App;
