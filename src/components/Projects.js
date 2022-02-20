import React from 'react';
import projects from '../assets/projects';
import ShowProject from './ShowProject';

function Projects() {
    return (
      <div className="bg-gray-100 pt-10">
        <div className="text-5xl font-extrabold text-center mb-8 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
            Proyectos
          </span>
        </div>

        {projects.map((project) => (
          <ShowProject
            key={Math.random()
              .toString(36)
              .replace(/[^a-z]+/g, "")
              .substr(0, 5)}
            project={project}
          />
        ))}
      </div>
    );
}

export default Projects;
