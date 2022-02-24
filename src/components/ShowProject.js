import React from "react";
import { Fade } from "react-awesome-reveal";

function ShowProject({ project, index }) {
  const { name, description, link, apk, code, image, stack } = project;
 const reindex = index+1

  return (
    <div className=" sm:w-1/3 lg:1/3">
    <Fade direction={reindex%2===0 ? 'right' : 'left'} triggerOnce className="flex flex-col justify-center m-auto py-6 sm:py-4 ">

      <div className="w-10/12 m-auto bg-white rounded border border-purple-800/50 drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)] overflow-hidden  sm:hover:-translate-y-1 duration-300">
       
             
        <div className="relative w-full h-64 bg-contain bg-center center overflow-hidden border-b border-gray-400">
         
        
        <div className="absolute w-full h-full bg-white/75 duration-700 opacity-0 hover:opacity-100 flex flex-col justify-end items-center " > 
        <div className="flex flex-wrap justify-center  h-auto item-center  w-10/12 ">
        {stack.map(item => (
          <div key={Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5)}
            className="py-1 px-3 bg-purple-800 text-md shadow-md shadow-gray-400
            rounded-full border border-purple-800/25 m-1.5 text-white ">{item}</div>
        ))}
        </div>
        </div>
        
        <img
            src={require(`../assets/${image}.jpg`)}
            alt={image}
            className="w-full"
          />

          
        </div>
      
      <h1 className='text-center text-xl font-bold my-3 flex flex-row justify-center items-center'>
      <span className="w-6 h-6 mr-1 rounded-full text-white  bg-purple-800 border text-sm  text-center items-center flex flex-row justify-center">
       {reindex } 
        </span>
        { name }
      </h1>

      <p className=' px-4 py-2 font-mono sm:px-8'>
          {description}
      </p>

      <div className='w-full flex flex-row justify-evenly items-center py-4 '>

        <button className="bg-pink-600 w-2/5 px-6 py-3 uppercase rounded-lg text-white font-sans
         sm:hover:bg-pink-700  ease-in-out duration-300"><a href={link ? link : apk}>{link ? 'site' : 'apk'}</a></button>

        <button className="bg-pink-600 w-2/5 px-6 py-3 uppercase rounded-lg  text-white font-sans
         sm:hover:bg-pink-700  ease-in-out duration-300"><a href={code}>Code</a></button>

      </div>
      
      
      
      
      
      
      </div>
    </Fade>
    </div>
  );
}

export default ShowProject;
