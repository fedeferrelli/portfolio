import React from 'react';
import image from '../assets/animacion.gif';
import {BiCodeAlt, BiGridAlt/* , BiX */} from 'react-icons/bi'

function HeroSection() {
    return (
      <div className="w-full h-screen  flex flex-col justify-between items-center  bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900  sm:flex-row  sm:h-2/3">

      <div className='text-white w-full flex flex-row justify-end text-4xl p-2'> 
      
      <div><BiGridAlt
      onClick={(e)=>{console.log('click')}}/></div>    
      </div>    


        <div className="flex flex-row h-80 w-full m-auto  relative  sm:w-1/2 ">
          <img
            src={image}
            alt="hero-section"
            className="  h-[280px] z-20 m-auto sm:h-2/3"
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

        <div className="text-white text-center m-auto  sm:w-1/2">
          <h1 className="text-5xl font-bold">Fede Ferrelli</h1>
          <h2 className="text-xl uppercase ">Front end developer</h2>
          <button className="bg-pink-600 px-6 py-3 uppercase rounded-lg mt-8 text-white hover:bg-violet-600 font-sans hover:text-violet-400">
            Contactame
          </button>
          <BiCodeAlt className='m-auto text-center text-4xl mt-4'/>
        </div>
      </div>
    );
}

export default HeroSection;
