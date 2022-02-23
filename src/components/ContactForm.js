import React from 'react'

function ContactForm() {

    return (
      <div>
        <form className=" w-10/12  sm:w-3/4 sm:text-sm max-w-[600px] m-auto flex flex-col justify-center items-center p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] bg-purple-800/75 mt-10">
         
          <h1 className="w-full text-2xl text-center text-pink-500 bold">Formulario de Contacto</h1>

          <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
            <label htmlFor="nombre" className="w-full px-4  focus-within:text-pink-500 ease-in-out duration-300">
              Nombre
            </label>

            <input id="nombre" type="mail" className="w-full h-8 sm:h-6 px-4 bg-transparent  outline-none border-b-pink-500 text-white font-mono"></input>
          </p>



          <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
            <label htmlFor="mail" className="w-full px-4 focus-within:text-pink-500 ease-in-out duration-300">
              Dirección de correo *
            </label>

            <input id="mail" type="email" required className="w-full h-8 px-4 bg-transparent  outline-none  text-white font-mono"></input>
          </p>


          <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
            <label htmlFor="asunto" className="w-full px-4  focus-within:text-pink-500 ease-in-out duration-300">
              Asunto
            </label>

            <input id="asunto" type="text" className="w-full h-8 px-4 bg-transparent  outline-none border-b-pink-500 text-white font-mono"></input>
          </p>


          <p className="mt-8 w-full text-white focus-within:text-pink-500 border border-t-transparent border-pink-500 ">
            <label htmlFor="mensaje" className="w-full px-4 focus-within:text-pink-500 ease-in-out duration-300">
              Mensaje *
            </label>

            <textarea id="mensaje" rows="3" required className="w-full px-4 pt-1 bg-transparent  outline-none border-b-pink-500 text-white font-mono"></textarea>
          </p>

<input type="submit" value="enviar mensaje" className="bg-pink-600 w-full py-3 uppercase rounded-lg mt-8 text-white font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)]
         sm:hover:bg-pink-700  ease-in-out duration-300" ></input>

        </form>
      </div>
    );
}

export default ContactForm
