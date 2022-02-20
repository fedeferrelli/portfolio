import React from "react";
import { Fade } from "react-awesome-reveal";

function ShowProject({ project, index }) {
  const { name, description, link, apk, code, image } = project;
 const reindex = index+1

  return (
    <Fade direction={reindex%2===0 ? 'right' : 'left'} triggerOnce  className="flex flex-col justify-center m-auto w-full my-10 sm:w-1/2 ">

      <div className="w-10/12 m-auto bg-white rounded-lg border border-gray-400 shadow-sm shadow-gray-400  overflow-hidden">
        
        <div className="w-full h-32 bg-contain bg-center center overflow-hidden border-b border-gray-400">
          <img
            src={require(`../assets/${image}.jpg`)}
            alt={image}
            className="w-full"
          />
        </div>
      
      <h1 className='text-center text-xl my-3'>
      <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
       {"  "}{ name } 
        </span>
         
      </h1>

      <p className=' px-4 py-2 '>
          {description}
      </p>

      <div className='w-full flex flex-row justify-evenly items-center py-4 '>

        <button className="bg-pink-600 w-2/5 px-6 py-3 uppercase rounded-lg  text-white sm:hover:bg-violet-600 font-sans sm:hover:text-violet-400"><a href={link ? link : apk}>{link ? 'site' : 'apk'}</a></button>

        <button className="bg-pink-600 w-2/5 px-6 py-3 uppercase rounded-lg  text-white sm:hover:bg-violet-600 font-sans sm:hover:text-violet-400"><a href={code}>Code</a></button>

      </div>
      
      
      
      
      
      
      </div>
    </Fade>
  );
}

export default ShowProject;
