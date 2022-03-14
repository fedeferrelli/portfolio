import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { Link as LinkScroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";

import image from "../../assets/ani5.gif";

function HeroSection({ setShowNavBar, language }) {
  return (
    <div
    id="home"
      className="w-full h-screen pt-16 flex flex-col justify-between items-center    
    bg-gradient-to-b from-indigo-900 via-violet-900 to-purple-800 sm:flex-col max-w-[1400px]"
    >
      <div className="h-full flex flex-col justify-around  w-full  sm:flex-row wiggle">
        <div className="flex flex-row h-80 w-full m-auto relative sm:w-1/2 ">
          <img
            src={image}
            alt="hero-section"
            className=" h-[350px] z-10 m-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] sm:h-full"
          />

          <div className="absolute animate-spin-slow w-full h-full">
            <div
              className="w-40 h-40 rounded-full bg-gradient-to-b from-purple-500/75 to-pink-500/75 border border-pink-400/25 shadow-md shadow-gray-500/50
               absolute top-1 right-2"
            ></div>

            <div
              className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/75 to-pink-500/75 border border-pink-400/25 shadow-md shadow-gray-500/50
               absolute top-52 left-10"
            ></div>

            <div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/75 to-pink-500/75 border border-pink-400/25 shadow-md shadow-gray-500/50
                absolute top-16 left-16"
            ></div>
          </div>
        </div>

        <Fade duration="5000" triggerOnce className="w-full sm:w-1/2 m-auto">
          <div className="text-white text-center m-auto">
            <h1 className="text-5xl font-bold w-full">
              <span className="hidden sm:inline text-5xl font-bold">
                {language === "esp" ? "Hola, soy" : "Hello, I'm"} &nbsp;
              </span>
              Fede Ferrelli
            </h1>
            <h2 className="text-xl uppercase mt-4">Front end developer</h2>
       <button
               className="mt-8"
            > 
              <LinkScroll
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                className="bg-pink-600 px-10 py-3 uppercase rounded-lg mt-18 text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)]
          sm:hover:bg-pink-700  ease-in-out duration-300 cursor-pointer"
              >
                {language === "esp" ? "Mis Trabajos" : "Portfolio"}
              </LinkScroll>
        </button>
            <BiCodeAlt className="m-auto text-center text-4xl mt-4" />
          </div>
        </Fade>
      </div>

      <div className="h-4 bg-gradient-to-b from-purple-800 to-gray-100 w-full"></div>
    </div>
  );
}

export default HeroSection;
