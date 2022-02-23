import React from "react";

import Curriculum from '../assets/CV_Fede_Ferrelli_Front_End.pdf';





function About() {
  return (
    <div id="about" className="bg-gray-100 pt-12 pb-8 w-full sm:w-3/4 flex flex-col justify-center">
    
      <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          Quién Soy
        </span>
      </div>
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
        Apasionado por el desarrollo Front End, disfruto de resolver problemas con {" "}
        <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
          {" "}soluciones creativas y robustas
        </span>
        .
      </p>
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
        Estoy siempre en búsqueda de oportunidades que me permitan {" "}
        <span className=" bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50 font-display font-bold ">
          {" "}
          seguir aprendiendo, enseñando y disfrutando
        </span>
        .
      </p>


        <button
            className="m-auto bg-pink-600 px-6 py-3 uppercase rounded-lg mt-8 text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)]
         sm:hover:bg-pink-700  ease-in-out duration-300"
          >
            <a href={Curriculum} download>Descargar CV</a>
            
          </button>

          
    </div>
  );
}

export default About;
