import React, { useState, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

import emailjs from "@emailjs/browser";

function ContactForm() {
  const [showOK, setShowOK] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ptrg1qg",
        "template_zbopz7c",
        form.current,
        "user_gbl4xl6Z4YWWGOY7je4Gb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowOK(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const AcceptAndScrollToTop = () => {
    setShowOK(false);
    scroll.scrollToTop();
  };

  return (
    <div>
      <form
        onSubmit={sendEmail}
        ref={form}
        className=" w-10/12  sm:w-3/4 sm:text-sm max-w-[600px] m-auto flex flex-col justify-center items-center p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] bg-purple-800/75 mt-10"
      >
        {showOK && (
          <div className="bg-black/50 absolute w-full h-full z-50 text-center flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center sm:w-1/2 sm:h-auto border border-pink-500 p-10 bg-purple-800 text-white">
              <h1 className="text-xl mb-4">
                <span className="text-3xl block">Gracias</span> por comunicarte
                conmigo
              </h1>
              <h2>me pondré en contacto a la brevedad</h2>
              <button
                className="bg-pink-600 w-full py-3 uppercase rounded-lg mt-8 text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)]
         sm:hover:bg-pink-700  ease-in-out duration-300"
                onClick={AcceptAndScrollToTop}
              >
                OK
              </button>
            </div>
          </div>
        )}
        <h1 className="w-full text-2xl text-center text-pink-500 bold">
          Formulario de Contacto
        </h1>

        <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
          <label
            htmlFor="nombre"
            className="w-full px-4  focus-within:text-pink-500 ease-in-out duration-300"
          >
            Nombre
          </label>

          <input
            id="nombre"
            name="nombre"
            type="mail"
            className="w-full h-8 sm:h-6 px-4 bg-transparent  outline-none border-b-pink-500 text-white font-mono"
          ></input>
        </p>

        <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
          <label
            htmlFor="mail"
            className="w-full px-4 focus-within:text-pink-500 ease-in-out duration-300"
          >
            Dirección de correo *
          </label>

          <input
            id="mail"
            name="email"
            type="email"
            required
            className="w-full h-8 px-4 bg-transparent  outline-none  text-white font-mono"
          ></input>
        </p>

        <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
          <label
            htmlFor="asunto"
            className="w-full px-4  focus-within:text-pink-500 ease-in-out duration-300"
          >
            Asunto
          </label>

          <input
            id="asunto"
            name="asunto"
            type="text"
            className="w-full h-8 px-4 bg-transparent  outline-none border-b-pink-500 text-white font-mono"
          ></input>
        </p>

        <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
          <label
            htmlFor="mensaje"
            className="w-full px-4 focus-within:text-pink-500 ease-in-out duration-300"
          >
            Mensaje *
          </label>

          <textarea
            id="mensaje"
            name="mensaje"
            rows="3"
            required
            className="w-full px-4 pt-1 bg-transparent  outline-none border-b-pink-500 text-white font-mono"
          ></textarea>
        </p>

        <input
          type="submit"
          value="enviar mensaje"
          className="bg-pink-600 w-full py-3 uppercase rounded-lg mt-8 text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)]
         sm:hover:bg-pink-700  ease-in-out duration-300"
        ></input>
      </form>
    </div>
  );
}

export default ContactForm;
