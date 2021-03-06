import React from "react";

import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

import ContactForm from "./ContactForm";


function Contact({ language }) {
  return (
    <div
      id="contact"
      className=" bg-gradient-to-b from-indigo-900 via-violet-900 to-purple-800 pt-12 pb-10"
    >
      <div className="text-5xl font-extrabold text-center mb-8 ">
        <span className="bg-clip-text text-white">
          {language === "esp" ? "Contacto" : "Contact"}
        </span>
      </div>
      <Fade
        direction="up"
        duration="1000"
        triggerOnce
        className="max-w-[400px] m-auto"
      >
        <div className="flex flex-row justify-evenly">
          <a
            href="https://www.linkedin.com/in/fede-mazza-75ab00231/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin className="text-pink-500/75 text-4xl sm:hover:-translate-y-2 duration-300" />
          </a>

          <a
            href="https://twitter.com/Fe__Dev__"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitter className="text-pink-500/75 text-4xl sm:hover:-translate-y-2 duration-300" />
          </a>

          <a
            href="mailto:ferrelli.mazza@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <MdEmail className="text-pink-500/75 text-4xl sm:hover:-translate-y-2 duration-300" />
          </a>

          <a
            href=" https://github.com/fedeferrelli"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub className="text-pink-500/75 text-4xl sm:hover:-translate-y-2 duration-300" />
          </a>
        </div>
      </Fade>
      <ContactForm language={language} />
    </div>
  );
}

export default Contact;
