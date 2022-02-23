import React from 'react';
import { Fade } from 'react-awesome-reveal';

import ContactForm from './ContactForm';

import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md';

function Contact() {
    return (
      <div id="contact" className=" bg-gradient-to-b from-purple-800 via-violet-900 to-indigo-900 pt-10 pb-10">
        <div className="text-5xl font-extrabold text-center mb-8 ">
          <span className="bg-clip-text text-white">
            Contacto
          </span>
        </div>
        <Fade direction="up" duration="1000" triggerOnce className="max-w-[400px] m-auto">
          <div className="flex flex-row justify-evenly">

          <a href="https://www.linkedin.com/in/federico-mazza-75ab00231/" rel="noreferrer" target="_blank">
              <BsLinkedin className="text-pink-500/75 text-4xl" />
            </a>


            
            <a href="https://twitter.com/Fe__Dev__"  rel="noreferrer" target="_blank">
              <BsTwitter className="text-pink-500/75 text-4xl" />
            </a>

            <a href="mailto:ferrelli.mazza@gmail.com" rel="noreferrer" target="_blank">
              <MdEmail className="text-pink-500/75 text-4xl" />
            </a>


            <a href=" https://github.com/fedeferrelli" rel="noreferrer" target="_blank">
              <BsGithub className="text-pink-500/75 text-4xl" />
            </a>

          </div>
        </Fade>
        <ContactForm/>
      </div>
    );
}

export default Contact;
