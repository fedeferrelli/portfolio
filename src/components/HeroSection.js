import React from 'react';
import image from '../assets/animacion.gif'

function HeroSection() {
    return (
      <div className="w-full h-screen flex-row justify-evenly bg-violet-900 lg:flex-col overflow-hidden ">
        <div className="flex flex-row h-80 w-full m-auto mt-24 relative">
          <img
            src={image}
            alt="hero-section"
            className="  h-[280px] z-20 m-auto"
          />

          <div
            className="w-40 h-40 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 border border-white/25  shadow-md shadow-gray-600
          absolute top-1 right-2"
          ></div>

          <div
            className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border border-white/25 shadow-md shadow-gray-600
          absolute top-56 left-10"
          ></div>
        </div>

        <div className="text-white text-center mt-16">
          <h1 className="text-4xl font-bold">Fede Ferrelli</h1>
          <h2 className="text-lg uppercase ">Front end developer</h2>
          <button className="bg-violet-400 p-4 uppercase rounded-xl mt-4 text-violet-900 hover:bg-violet-600 hover:text-violet-400">
            Contactame
          </button>
        </div>
      </div>
    );
}

export default HeroSection;
