import React from "react";

function DisplayStacks({ stack }) {
  return (
    <div
      className="py-1 px-3 bg-transparent text-sm shadow-md shadow-gray-400
        rounded-full border border-purple-800/25 m-1.5 text-purple-800 "
    >
      {stack}
    </div>
  );
}

export default DisplayStacks;
