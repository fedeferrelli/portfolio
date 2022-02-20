import React from "react";


function About() {
  return (
    <div className="bg-gray-100 pt-12 pb-8 w-full sm:w-3/4">
    
      <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          Quién Soy
        </span>
      </div>
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
        Apasionado por el desarrollo Front End, disfruto de resolver problemas con {" "}
        <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
          {" "}soluciones creativas y robustas
        </span>
        .
      </p>
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose sm:w-2/3 sm:text-center">
        Estoy siempre en búsqueda de oportunidades que me permitan {" "}
        <span className=" bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50 font-display font-bold ">
          {" "}
          seguir aprendiendo, enseñando y disfrutando
        </span>
        .
      </p>
    </div>
  );
}

export default About;
