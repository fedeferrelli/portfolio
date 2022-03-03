import React from "react";
import { Fade } from "react-awesome-reveal";

import Curriculum from '../../assets/CV_Fede_Ferrelli_Front_End.pdf';





function About({language}) {
  return (
  
    <div id="about" className="bg-gray-100 pt-12 m-auto pb-8 w-full sm:w-10/12 flex flex-col justify-center">
   
      <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          {language=== 'esp' ? "Quién Soy" : "About me"} </span>
      </div>
      <Fade  direction="up" duration="1500" triggerOnce className="flex">
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">

      {language=== 'esp' ? "Apasionado por el desarrollo Front End, disfruto de resolver problemas con" : "Passionate about Front End development, I enjoy solving problems with"}

         {" "}
        
        <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
          {" "} {language=== 'esp' ? 'soluciones creativas y robustas' :  'creative and robust solutions'}
        </span>
        .
      </p>


      <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
      {language=== 'esp' ? "Estoy siempre en búsqueda de oportunidades que me permitan" : "I am always looking for opportunities that allow me "}

         {" "}
        <span className=" bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50 font-display font-bold ">
          {" "}
          {language === 'esp' ? "seguir aprendiendo, enseñando y disfrutando" : "to continue learning, teaching and enjoying"}
          
        </span>
        .
      </p>


        <button
            className="m-auto bg-pink-600 px-6 py-3 uppercase rounded-lg mt-8 text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)]
         sm:hover:bg-pink-700  ease-in-out duration-300"
          >
            <a href={Curriculum} download>
              
              {language === 'esp' ? "Descargar CV" : "Download Resume"}
              
              </a>
            
          </button>
          </Fade>
          
    </div>
  
   
  );
}

export default About;