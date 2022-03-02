import React from "react";
import Language from "../Language";

import {BiGridAlt } from "react-icons/bi";


import { Link as LinkScroll } from "react-scroll";

function NavBarLaptop({ setShowNavBar, language, setLanguage }) {
 
  return (
   
<div className="flex flex-row justify-between bg-indigo-900">

<Language
language={language}
setLanguage={setLanguage}/>

      <div className="  flex flex-row justify-between  bg-indigo-900 items-center p-2 sm:hidden">
    
     

        <BiGridAlt
          className="text-white text-4xl"
          onClick={(e) => {
            setShowNavBar(true);
          }}
        />



      </div>

   

    <div      
     
      className="hidden w-full sm:flex sm:flex-row justify-end p-2 bg-indigo-900"
    >
      <LinkScroll 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true} 
            className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>{language === 'esp' ? "Quien soy" : "About"} </LinkScroll>
     
      <LinkScroll 
            activeClass="active"
            to="stack"
            spy={true}
            smooth={true} 
            className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>{language === 'esp' ? "Mi Stack" : "My Stack"} </LinkScroll>
      
      <LinkScroll 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
             className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>{language === 'esp' ? "Proyectos" : "Portfolio"}</LinkScroll>
     
      <LinkScroll 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={2000}
            className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'> {language === 'esp' ? "Contacto" : "Contact"}</LinkScroll>
    
    
    </div>

    </div>


  
  );
}

export default NavBarLaptop;
