import React from 'react'

function Language({language, setLanguage}) {


    return (
      <div className="flex flex-row justify-center items-center text-white w-auto bg-indigo-900 pl-2 cursor-pointer">
        <h1 className={language === "eng" ? "opacity-50" : "opacity-100"}>
          ESP
        </h1>

        <div className="rounded-full bg-white flex flex-row mx-1">
          <div
            className={
              language === "esp"
                ? "w-4 h-4 m-1 bg-purple-800 rounded-full"
                : "w-4 h-4 m-1 bg-transparent rounded-full"
            }
            onClick={() => setLanguage("esp")}
          ></div>

          <div
            className={
              language === "eng"
                ? "w-4 h-4 m-1 bg-purple-800 rounded-full"
                : "w-4 h-4 m-1 bg-transparent rounded-full"
            }
            onClick={() => setLanguage("eng")}
          ></div>
        </div>
        <h1 className={language === "esp" ? "opacity-50" : "opacity-100"}>
          ENG
        </h1>
      </div>
    );
}

export default Language;
