import React from "react";

import projects from "../../assets/utils/projects";
import ShowProject from "./ShowProject";

function Projects({ language }) {
  return (
    <div id="projects" className="bg-gray-100 pt-12 flex justify-center">
      <div className="max-w-[1400px]">
      <div className="text-5xl font-extrabold text-center mb-8 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          {language === "esp" ? "Proyectos" : "Portfolio"}
        </span>
      </div>
      <div className="sm:flex sm:w-full  m-auto sm:flex-wrap">
        {projects.map((project, index) => (
          <ShowProject
            key={Math.random()
              .toString(36)
              .replace(/[^a-z]+/g, "")
              .substr(0, 5)}
            project={project}
            index={index}
            language={language}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
