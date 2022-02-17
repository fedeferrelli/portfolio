import React, {useState} from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar/NavBar";

function App() {

  const [showNavBar, setShowNavBar] = useState(false)

  return (
    <>
    {showNavBar && <NavBar
                    setShowNavBar={setShowNavBar}/>}
    
    <HeroSection 
    setShowNavBar={setShowNavBar}/>

    </>
  );
}

export default App;
