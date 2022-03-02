import React from "react";
import { BiX } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import {scroller} from "react-scroll"

function NavBar({ setShowNavBar, language }) {

  const srollAndClose = (WhereTo, duration=1000) =>{
    scroller.scrollTo(WhereTo, {
      duration: duration,
      delay: 0,
      smooth: 'easeInOutQuart'
    })

    setShowNavBar(false)

  }

  return (

    
    <Fade 
      direction="down"
      duration="500"
      className="w-full h-80 absolute bg-pink-500 z-50 rounded-b-lg shadow-md shadow-gray-700"
    >

<div className="flex flex-col">
      <div className="w-full flex flex-row justify-end p-2">
        <BiX
          className="text-purple-900 border  border-purple-800 rounded-full  text-4xl right-0  "
          onClick={(e) => {
            setShowNavBar(false);
          }}
        />
      </div>

  <div className="flex flex-col h-60 items-center justify-center">   

            <div className='mx-4 text-white font-mono text-2xl cursor-pointer py-2 ' onClick={(e) =>srollAndClose("about")}>
            {language === 'esp' ? "Quien soy" : "About"}
            </div>

            <div className='mx-4 text-white font-mono text-2xl cursor-pointer py-2' onClick={(e) =>srollAndClose("stack")}>
            {language === 'esp' ? "mi Stack" : "my Stack"}
            </div>

            <div className='mx-4 text-white font-mono text-2xl cursor-pointer py-2' onClick={(e) =>srollAndClose("projects", 2000)}>
            {language === 'esp' ? "Proyectos" : "Portfolio"}
            </div>

            <div className='mx-4 text-white font-mono text-2xl cursor-pointer py-2' onClick={(e) =>srollAndClose("contact", 3000)}>
            {language === 'esp' ? "Contacto" : "Contact"}
            </div>
</div>      
</div>

    </Fade>
   

    
  );
}

export default NavBar;
