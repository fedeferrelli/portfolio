import React from "react";
import { Fade } from "react-awesome-reveal";

function ShowProject({ project, index, language }) {
  const {
    name,
    description_esp,
    description_eng,
    link,
    apk,
    code,
    image,
    stack,
  } = project;
  const reindex = index + 1;

  return (
    <div className=" sm:w-1/3 lg:1/3">
      <Fade
        direction={reindex % 2 === 0 ? "right" : "left"}
        triggerOnce
        className="flex flex-col justify-center m-auto py-6 sm:py-4 "
      >
        <div className="w-10/12  m-auto bg-white rounded border drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)] h-auto  sm:hover:-translate-y-1 duration-300">
          <div className="relative w-full h-96 overflow-hidden">
            <div className="absolute w-full h-full bg-white duration-700 opacity-0 hover:opacity-95 flex flex-col justify-between items-center ">
              <div className="flex flex-wrap justify-center  h-auto item-center pt-4 w-10/12 ">
                {stack.map((item) => (
                  <div
                    key={Math.random()
                      .toString(36)
                      .replace(/[^a-z]+/g, "")
                      .substr(0, 5)}
                    className="py-0.5 px-3 bg-purple-800 text-md shadow-md shadow-gray-400
            rounded-full border border-purple-800/25 m-1.5 text-white "
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className=" px-4 py-2 font-mono sm:px-8 text-center">
                {language === "esp" ? description_esp : description_eng}
              </p>
            </div>

            <div className="w-full p-2 border-transparent">
              <img
                src={require(`../../assets/images_projects/${image}.jpg`)}
                alt={image}
                className="w-full"
              />
            </div>
          </div>

          <h1 className="text-center text-xl font-bold my-3 flex flex-row justify-center items-center">
            <span className="w-6 h-6 mr-1 rounded-full text-white  bg-purple-800 border text-sm  text-center items-center flex flex-row justify-center">
              {reindex}
            </span>
            {name}
          </h1>

          <div className="w-full flex flex-row justify-evenly items-center py-4 ">
            <a
              href={link ? link : apk}
              rel="noreferrer"
              target="_blank"
              className="bg-pink-600  px-6 py-3  rounded-lg text-white font-sans
         sm:hover:bg-pink-700  ease-in-out duration-300 w-2/5"
            >
              {" "}
              <button className="uppercase text-center w-full">
                {link ? "site" : "apk"}
              </button>
            </a>

            <a
              href={code}
              rel="noreferrer"
              target="_blank"
              className="bg-pink-600  px-6 py-3  rounded-lg text-white font-sans
         sm:hover:bg-pink-700  ease-in-out duration-300 w-2/5"
            >
              {" "}
              <button className="uppercase text-center w-full">Code</button>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ShowProject;
