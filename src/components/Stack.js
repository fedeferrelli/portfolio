import React from "react";
import stack, { stack_to_come } from "../assets/stack";
import DisplayStacks from "./DisplayStacks";

function Stack() {
  return (
    <>
      <div className=" h-4 bg-gradient-to-b from-white to-purple-800"></div>
      <div className="bg-purple-800 pb-8 overflow-hidden">
        <div className="text-5xl font-extrabold text-center mt-8">
          <h1 className="text-white">Mi Stack</h1>
        </div>

        <div className="flex flex-wrap justify-center my-3">
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

        <h2 className="text-white text-center mt-4">Coming soon ...</h2>
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
      <div className=" h-4 bg-gradient-to-b from-purple-800"></div>
    </>
  );
}

export default Stack;
