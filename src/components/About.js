import React from "react";

function About() {
  return (
    <div className="bg-gray-100 mt-0 overflow-hidden mb-8">
      <div className=" h-4 bg-gradient-to-b from-purple-800 to-gray-100 mb-8"></div>

      <div className="text-5xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
          Quién Soy
        </span>
      </div>
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose">
        Apasionado por el desarrollo Front End, disfruto de resolver problemas con {" "}
        <span className="bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50  font-bold">
          {" "}soluciones creativas y robustas
        </span>
        .
      </p>
      <p className="w-10/12 m-auto mt-4 font-mono leading-loose">
        Estoy siempre en búsqueda de oportunidades que me permitan {" "}
        <strong className=" bg-gradient-to-r from-violet-900/50 via-purple-800/50 to-pink-500/50 font-display font-bold ">
          {" "}
          seguir aprendiendo, enseñando y disfrutando
        </strong>
        .
      </p>
    </div>
  );
}

export default About;
