import React from 'react'

function HeroSection() {
    return (
        <div className='w-full h-96 flex bg-gradient-to-b bg-violet-800 relative'>

            <div className='m-auto w-10/12 h-2/3 p-4 bg-white/25 backdrop-blur-sm shadow-xl shadow-[#1f2687]/25 rounded-xl border-2 border-white/25 z-10
            
           


            
            ' >
                <h1 className='text-white text-4xl'>
                    Fede Ferrelli
                </h1>

                <p className='text-white'>
                    Web Developer
                </p>

                <div className='w-20 h-20 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 border border-white/25 shadow shadow-gray-500 absolute -bottom-10 right-4 -z-0'></div>
                <div className='w-8 h-8 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 border border-white/25 absolute top-40 right-24 -z-0 shadow-inner-xl shadow-gray-500' ></div>
            </div>

            <div className='w-40 h-40 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 border border-white/25 absolute top-1 right-2 -z-0 shadow-inner-xl shadow-gray-500' ></div>

            <div className='w-10 h-10 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 border border-white/25 absolute top-48 right-20 -z-0 shadow-inner-xl shadow-gray-500' ></div>
            <div className='w-12 h-12 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 border border-white/25 absolute top-56 right-2 -z-0 shadow-inner-xl shadow-gray-500' ></div>
            

            <div className='w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border border-white/25 absolute bottom-10 left-10 shadow-xl shadow-[#1f2687]/25' ></div>

            
        </div>
    )
}

export default HeroSection;
