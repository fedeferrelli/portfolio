import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar/NavBar";
import NavBarLaptop from "./components/Navbar/NavBarLaptop";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";




function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <>
      {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}

      {<NavBarLaptop  setShowNavBar={setShowNavBar} />}

            <HeroSection />
   

         <div className="bg-gray-100 w-full sm:flex sm:flex-row">
   
              <About className=" sm:w-1/2" />
      

              <Stack className="sm:w-1/2" />
    
       </div>

        
            <Projects />
        

       
            <Contact />
   
    </>
  );
}

export default App;
