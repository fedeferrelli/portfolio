import React from "react";

import {Fade } from 'react-awesome-reveal'

import stack, { stack_to_come } from "../../assets/utils/stack";
import DisplayStacks from "./DisplayStacks";


function Stack({language}) {
  return (
    <div id="stack" className="bg-gray-100 pt-12 m-auto pb-8 w-full sm:w-10/12 sm:h-[450px] flex flex-col justify-center sm:justify-start">

<div >
        <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          {language === 'esp' ? 'mi Stack' : 'my Stack'}
        </span>
      </div>

      <div className="flex flex-col justify-center items-center w-full" >

      <Fade /* direction="up"*/ duration="1250"  triggerOnce>

<Fade>
        <div className="flex flex-wrap justify-center m-auto my-4 sm:w-full">
          {stack.map((stack) => (
            <DisplayStacks
              key={Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substr(0, 5)}
              stack={stack}
            />
          ))}
        </div>

        <h2 className="text-purple-800 text-center mt-4 ">{language === 'esp' ? "Proximamente ..." : 'Coming soon ...'}</h2>
        <div className="flex flex-wrap justify-center m-auto my-4 sm:w-2/3">
          {stack_to_come.map((stack) => (
            <DisplayStacks
              key={Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substr(0, 5)}
              stack={stack}
            />
          ))}
        </div>
        </Fade>
        </Fade>
        </div>
      {/* </div> */}
      
      {/* <div className=" h-4 bg-gradient-to-b from-purple-800"></div> */}
    </div>
    </div>
  );
}

export default Stack;
