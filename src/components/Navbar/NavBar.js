import React from 'react';
import {BiX} from 'react-icons/bi';
import { Fade } from "react-awesome-reveal";

function NavBar({setShowNavBar}) {
    return (
      <Fade direction='down' duration='500' className="w-full h-80 absolute bg-gray-300 z-50 rounded-b-lg shadow-md shadow-gray-700">
        <div className="w-full flex flex-row justify-end p-2">
          <BiX
            className="text-purple-900 border  border-purple-800 rounded-full  text-4xl"
            onClick={(e) => {
              setShowNavBar(false);
            }}
          />
        </div>
      </Fade>
    );
}

export default NavBar;
