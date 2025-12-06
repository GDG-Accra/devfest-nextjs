import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import BGImage from "@/app/assets/images/LandingPageImage/bgImage.svg";
import Image from "next/image";

const DPBanner: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Navigation - Fixed positioning with higher z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Background Image - Centered with max width */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <Image
          src={BGImage.src}
          alt="Background"
          className="object-cover w-full h-full max-w-4xl"
          width={1000}
          height={1000}
        />
        {/* Optional subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        {" "}
        {/*pb-8 sm:pb-12 md:pb-16 */}
        {/* Content Overlay */}
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-10 min-h-[70vh] sm:min-h-[75vh] md:min-h-[70vh] lg:min-h-[80vh]">
          <p className="max-w-xs mb-3 text-base font-medium tracking-wide text-gray-800 sm:mb-4 md:mb-5 sm:text-lg md:text-2xl lg:text-xl sm:max-w-sm md:max-w-2xl lg:max-w-none drop-shadow-sm">
            Let everyone know you&apos;re coming!
          </p>
          <h1 className="max-w-xs mb-6 text-5xl font-black leading-tight text-black sm:text-3xl md:text-8xl lg:text-6xl xl:text-7xl sm:mb-8 md:mb-10 sm:max-w-md md:max-w-5xl lg:max-w-6xl drop-shadow-sm">
            Create your custom DevFest display photo
          </h1>
          <a
            href="#dp-container"
            className="z-10 cursor-pointer px-6 py-3 text-base font-bold text-white transition-all duration-300 transform bg-black shadow-lg sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:text-lg md:text-xl hover:bg-gray-800 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Time To Get Cooking!
          </a>
        </div>
        {/* Photo Frames Only - No Background Shapes */}
        {/* <div className='relative w-full max-w-7xl h-[500px] mx-auto overflow-hidden'> */}
        {/* Photo Frames without Colored Outlines */}
        {/* Photo 1 - Left side */}
        {/* <div className='absolute top-16 left-8 md:left-16 transform -rotate-8 hover:rotate-2 hover:scale-105 transition-all duration-300 z-30'>
            <div className='relative'>
              <div className='w-36 h-48 md:w-44 md:h-56 bg-white p-1 shadow-lg'>
                <img
                  src={DP1}
                  alt='DevFest participant'
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </div>
          </div> */}
        {/* Photo 2 - Center-left */}
        {/* <div className='absolute top-8 left-32 md:left-48 transform rotate-12 hover:-rotate-3 hover:scale-105 transition-all duration-300 z-40'>
            <div className='relative'>
              <div className='w-32 h-44 md:w-40 md:h-52 bg-white p-1 shadow-lg'>
                <img
                  src={DP2}
                  alt='DevFest participant'
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </div>
          </div> */}
        {/* Photo 3 - Center */}
        {/* <div className='absolute top-12 left-1/2 transform -translate-x-1/2 -rotate-4 hover:rotate-1 hover:scale-105 transition-all duration-300 z-50'>
            <div className='relative'>
              <div className='w-40 h-52 md:w-48 md:h-60 bg-white p-1 shadow-xl'>
                <img
                  src={DP3}
                  alt='DevFest participant'
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </div>
          </div> */}
        {/* Photo 4 - Center-right */}
        {/* <div className='absolute top-20 right-32 md:right-48 transform rotate-8 hover:-rotate-2 hover:scale-105 transition-all duration-300 z-35'>
            <div className='relative'>
              <div className='w-34 h-46 md:w-42 md:h-54 bg-white p-1 shadow-lg'>
                <img
                  src={DP4}
                  alt='DevFest participant'
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </div>
          </div> */}
        {/* Photo 5 - Right side */}
        {/* <div className='absolute top-8 right-8 md:right-16 transform -rotate-12 hover:rotate-4 hover:scale-105 transition-all duration-300 z-30'>
            <div className='relative'>
              <div className='w-36 h-48 md:w-44 md:h-56 bg-white p-1 shadow-lg'>
                <img
                  src={DP7}
                  alt='DevFest participant'
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </div>
          </div> */}
        {/* </div> */}
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce animation-delay-[1s] z-30 drop-shadow-md"></div>
        <div className="absolute top-32 right-16 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-pink-400 animate-pulse animation-delay-[2s] z-30 drop-shadow-md"></div>
        <div className="absolute bottom-32 left-8 w-6 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-[500ms] z-30 drop-shadow-md"></div>
        <div className="absolute bottom-40 right-12 w-4 h-4 bg-green-400 transform rotate-45 animate-spin animation-duration-[6s] z-30 drop-shadow-md"></div>
      </div>
    </div>
  );
};

export default DPBanner;
