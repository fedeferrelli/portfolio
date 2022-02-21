import React from "react";
import { Fade } from "react-awesome-reveal";

function ShowProject({ project, index }) {
  const { name, description, link, apk, code, image } = project;
 const reindex = index+1

  return (
    <div className="sm:w-1/2">
    <Fade direction={reindex%2===0 ? 'right' : 'left'} triggerOnce className="flex flex-col justify-center m-auto py-10 ">

      <div className="w-10/12 m-auto bg-white rounded-lg border border-purple-800/50 drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)]  overflow-hidden sm:max-w-[375px] sm:hover:-translate-y-1 duration-300">
        
        <div className="w-full h-32 bg-contain bg-center center overflow-hidden border-b border-gray-400">
          <img
            src={require(`../assets/${image}.jpg`)}
            alt={image}
            className="w-full sm:hover:scale-110 sm:hover:opacity-80 ease-in-out duration-700"
          />
        </div>
      
      <h1 className='text-center text-xl my-3'>
      <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
       {"  "}{ name } 
        </span>
         
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
