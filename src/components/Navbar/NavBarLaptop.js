import React from "react";

import {BiGridAlt } from "react-icons/bi";


import { Link as LinkScroll } from "react-scroll";

function NavBarLaptop({ setShowNavBar }) {
 
  return (
   
<>

      <div className=" w-full flex flex-row justify-end z-50 bg-indigo-900  p-2 sm:hidden">
        
        <BiGridAlt
          className="text-white text-4xl"
          onClick={(e) => {
            setShowNavBar(true);
          }}
        />
      </div>

   

    <div      
     
      className="hidden w-full sm:flex sm:flex-row justify-end z-50  p-2 bg-indigo-900"
    >
      <LinkScroll 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true} 
            className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>Quien soy</LinkScroll>
     
      <LinkScroll 
            activeClass="active"
            to="stack"
            spy={true}
            smooth={true} 
            className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'> Mi Stack</LinkScroll>
      
      <LinkScroll 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
             className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>Proyectos</LinkScroll>
     
      <LinkScroll 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={2000}
            className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>Contacto</LinkScroll>
    
    
    </div>

    </>


  
  );
}

export default NavBarLaptop;
