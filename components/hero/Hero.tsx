import React from 'react';
import SearchBox from '../helper/SearchBox';

const Hero = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715]
                    overflow-hidden relative bg-[url('/images/hero.jpg')]
                    bg-cover bg-center"
        >
            <div className='absolute bg-black inset-0 opacity-70'></div>

            <div className='flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10'>
                <h1 
                    data-aos='fade-left' 
                    data-aos-delay='200'
                    className='text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium'
                >
                    The Best Way To
                </h1>
                
                <h1 
                    data-aos='fade-up' 
                    data-aos-delay='400'
                    className='text-center font-semibold text-3xl sm:text-5xl text-white mt-5'
                >
                    Find Your Dream Home
                </h1>
                
                <p 
                    data-aos='fade-right' 
                    data-aos-delay='600'
                    className='mt-4 text-center text-sm sm:text-base text-gray-200'
                >
                    We&apos;ve more than 745,000 apartments, place & plot.
                </p>
                
                <div 
                    data-aos='zoom-in' 
                    data-aos-delay='800'
                    className='mt-12 w-full'
                >
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default Hero;
