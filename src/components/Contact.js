import React from 'react';
import { Fade } from 'react-awesome-reveal';

import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'

function Contact() {
    return (
      <div className="bg-gray-100 pt-10 pb-10">
        <div className="text-5xl font-extrabold text-center mb-8 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 via-purple-800 to-pink-500">
            Contacto
          </span>
        </div>
<Fade direction="up" duration="1000" triggerOnce>
        <div className="flex flex-row justify-evenly">
          <a href="https://twitter.com/Fe__Dev__">
            <BsTwitter className="text-purple-800 text-4xl" />
          </a>

          <a href=" https://github.com/fedeferrelli">
            <BsGithub className="text-purple-800 text-4xl" />
          </a>

          <a href="https://www.linkedin.com/in/federico-mazza-75ab00231/">
            <BsLinkedin className="text-purple-800 text-4xl" />
          </a>

        </div>
        </Fade>
      </div>
    );
}

export default Contact;
