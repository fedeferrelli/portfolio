import React from "react";

function Language({ language, setLanguage }) {
  return (
    <div className="flex flex-row justify-center items-center text-pink-500 w-auto pl-2 cursor-pointer">
      <h1 className={language === "eng" ? "opacity-70" : "opacity-100"}>ESP</h1>

      <div className="rounded-full bg-gray-300 flex flex-row mx-1">
        <div
          className={
            language === "esp"
              ? "w-4 h-4 m-1 bg-gradient-to-r from-purple-500/75 to-pink-500/75 border border-pink-400/25 shadow-sm shadow-gray-500/50 rounded-full"
              : "w-4 h-4 m-1 bg-transparent rounded-full"
          }
          onClick={() => setLanguage("esp")}
        ></div>

        <div
          className={
            language === "eng"
              ? "w-4 h-4 m-1 bg-gradient-to-r from-purple-500/75 to-pink-500/75 border border-pink-400/25 shadow-sm shadow-gray-500/50 rounded-full"
              : "w-4 h-4 m-1 bg-transparent rounded-full"
          }
          onClick={() => setLanguage("eng")}
        ></div>
      </div>
      <h1 className={language === "esp" ? "opacity-70" : "opacity-100"}>ENG</h1>
    </div>
  );
}

export default Language;
