import React from "react";

function NavBarLaptop({ setShowNavBar }) {
  return (
   
    <div      
     
      className="hidden w-full sm:flex sm:flex-row justify-end z-50  p-2 bg-indigo-900"
    >
      <div className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>Quien soy</div>
      <div className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'> Mi Stack</div>
      <div className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>Proyectos</div>
      <div className='mx-4 text-white text-xl cursor-pointer hover:text-pink-500 ease-in-out duration-300'>Contacto</div>
    </div>
  
  );
}

export default NavBarLaptop;
