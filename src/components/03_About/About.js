import React from "react";
import { Fade } from "react-awesome-reveal";

import Curriculum_esp from "../../assets/CV_Fede_Ferrelli_FED_esp.pdf";
import Curriculum_eng from "../../assets/CV_Fede_Ferrelli_FED_eng.pdf";

function About({ language }) {
  return (
    <div
      id="about"
      className="bg-gray-100 pt-12 m-auto pb-8 w-full sm:w-10/12 sm:h-[450px] flex flex-col justify-center sm:justify-start"
    >
      <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          {language === "esp" ? "Quién Soy" : "About me"}{" "}
        </span>
      </div>
      <Fade direction="up" duration="1000" triggerOnce className="flex">
        <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
          {language === "esp"
            ? "Apasionado por el desarrollo Front End, disfruto de resolver problemas con"
            : "Passionate about Front End development, I enjoy solving problems with"}{" "}
          <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
            {" "}
            {language === "esp"
              ? "soluciones creativas y robustas"
              : "creative and robust solutions"}
          </span>
          .
        </p>

        <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
          {language === "esp"
            ? "Estoy siempre en búsqueda de oportunidades que me permitan"
            : "I am always looking for opportunities that allow me "}{" "}
          <span className=" bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50 font-display font-bold ">
            {" "}
            {language === "esp"
              ? "seguir aprendiendo, enseñando y disfrutando"
              : "to continue learning, teaching and enjoying"}
          </span>
          .
        </p>

  
          <a
            href={language === "esp" ? Curriculum_esp : Curriculum_eng}
            download
            className="m-auto mt-8"
          >
      <button
          className="bg-pink-600 px-10 py-3 uppercase rounded-lg  text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)]
         sm:hover:bg-pink-700  ease-in-out duration-300"
        >
            {language === "esp" ? "Descargar CV" : "Download Resume"}

            </button>
          </a>
       
      </Fade>
    </div>
  );
}

export default About;
