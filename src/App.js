import React, {useState} from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About";

function App() {

  const [showNavBar, setShowNavBar] = useState(false)

  return (
    <>
    {showNavBar && <NavBar
                    setShowNavBar={setShowNavBar}/>}
    
    <HeroSection 
    setShowNavBar={setShowNavBar}/>

    <About/>

    </>
  );
}

export default App;
