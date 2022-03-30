import React, { useState } from "react";
import HeroSection from "./components/02_HeroSection/HeroSection";
import NavBar from "./components/01_Navbar/NavBar";
import About from "./components/03_About/About";
import Stack from "./components/04_Stack/Stack";
import Projects from "./components/05_Projects/Projects";
import Contact from "./components/06_Contact/Contact";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [language, setLanguage] = useState("esp");

  return (
    <div className="w-full flex">
      <div className="m-auto">
      <NavBar
        setShowNavBar={setShowNavBar}
        showNavBar={showNavBar}
        language={language}
        setLanguage={setLanguage}
       
      />

      <HeroSection language={language} />

      <Projects language={language} />

      <div className="bg-gray-100 w-full sm:flex sm:flex-row">
        <About className=" sm:w-1/2" language={language} />

        <Stack className="sm:w-1/2" language={language} />
      </div>

  
      <Contact language={language} />
    </div>
    </div>
  );
}

export default App;
