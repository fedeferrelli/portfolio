import React from "react";

function DisplayStacks({ stack }) {
  return (
    <div
      className="py-2 px-3 bg-purple-800/75 shadow-md shadow-gray-900 backdrop-blur
        rounded-full border-2 border-white/25 m-1.5 text-white "
    >
      {stack}
    </div>
  );
}

export default DisplayStacks;
