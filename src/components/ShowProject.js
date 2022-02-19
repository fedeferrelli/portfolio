import React from "react";

function ShowProject({ project }) {
  const { name, description, link, apk, code, image } = project;
  const Image = '../assets/js.svg'
  return (
    <div className="flex flex-col justify-center m-auto w-full my-3 ">

      <div className="w-10/12 m-auto bg-white rounded-sm border border-gray-400 shadow-sm shadow-gray-400">
        
        <div className="w-full h-16 bg-contain bg-center center overflow-hidden">
          <img
            src={require(`../assets/${image}.jpg`)}
            alt={image}
            className="w-full"
          />
        </div>
      
      <h1 className='text-center text-lg my-3'>
      <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
      {name}
        </span>
         
      </h1>

      <p className=' px-4 py-2 '>
          {description}
      </p>

      <div className='w-full flex flex-row justify-evenly items-center py-4 '>

        <button className="bg-pink-600 w-2/5 px-6 py-3 uppercase rounded-lg  text-white hover:bg-violet-600 font-sans hover:text-violet-400"><a href={link ? link : apk}>Site</a></button>

        <button className="bg-pink-600 w-2/5 px-6 py-3 uppercase rounded-lg  text-white hover:bg-violet-600 font-sans hover:text-violet-400"><a href={code}>Code</a></button>

      </div>
      
      
      
      
      
      
      </div>
    </div>
  );
}

export default ShowProject;
