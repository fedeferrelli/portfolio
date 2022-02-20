import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar/NavBar";
import NavBarLaptop from "./components/Navbar/NavBarLaptop";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";


function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <>
      {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}

      <NavBarLaptop />

      <HeroSection setShowNavBar={setShowNavBar} />

      <div className="bg-gray-100 hidden w-full sm:flex flex-row">
        <About className="w-full sm:w-1/2"/>
        <Stack className="w-full sm:w-1/2"/>
      </div>

      <div className="bg-gray-100 sm:hidden">
        <About/>
        <Stack/>
      </div>

      <Projects />
    </>
  );
}

export default App;
