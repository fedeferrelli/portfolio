import React from "react";
import stack, { stack_to_come } from "../assets/stack";
import DisplayStacks from "./DisplayStacks";

function Stack() {
  return (
    <>
      {/* <div className=" h-4 bg-gradient-to-b from-white to-purple-800"></div> */}
      <div className="bg-gray-100 pb-8 pt-12 ">
        {/* <div className="text-5xl font-extrabold text-center mt-8">
          <h1 className="text-purple-800">Mi Stack</h1>
        </div> */}

        <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          mi Stack
        </span>
      </div>

        <div className="flex flex-wrap justify-center my-4">
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

        <h2 className="text-purple-800 text-center mt-4">Coming soon ...</h2>
        <div className="flex flex-wrap justify-center my-3">
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
      </div>
      {/* <div className=" h-4 bg-gradient-to-b from-purple-800"></div> */}
    </>
  );
}

export default Stack;
