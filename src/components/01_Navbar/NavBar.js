import React from "react";

import { BiGridAlt } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import { Link as LinkScroll } from "react-scroll";

import Language from "./Language";
import FloatingNavBar from "./FloatingNavBar";

function NavBar({ setShowNavBar, showNavBar,language, setLanguage }) {
  return (
    <div className="bg-indigo-900/0 w-full fixed z-50">
      <Fade delay="250" triggerOnce>

<div className="w-full bg-indigo-900/90 flex flex-row justify-between">

       
  
<Language language={language} setLanguage={setLanguage} />
      
      <div className="w-full flex flex-row justify-end">
         
    

          <div className=" p-2 sm:hidden">
            <BiGridAlt
              className="text-white text-3xl bg-indigo-900 rounded-sm"
              onClick={(e) => {
                setShowNavBar(true);
              }}
            />  
          </div>
          {showNavBar && <FloatingNavBar setShowNavBar={setShowNavBar} language={language}/>}
          

          <div className="hidden w-full sm:flex sm:flex-row justify-end p-2 bg-indigo-900/10">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-25}
              className="mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300"
            >
              {language === "esp" ? "Quien soy" : "About"}{" "}
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="stack"
              spy={true}
              smooth={true}
              offset={-25}
              className="mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300"
            >
              {language === "esp" ? "Mi Stack" : "My Stack"}{" "}
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-25}
              className="mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300"
            >
              {language === "esp" ? "Proyectos" : "Portfolio"}
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={2000}
              className="mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300"
            >
              {" "}
              {language === "esp" ? "Contacto" : "Contact"}
            </LinkScroll>
          </div>
        </div>
        </div>
      </Fade>
    </div>
  );
}

export default NavBar;
