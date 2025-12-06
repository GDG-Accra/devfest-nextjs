import React from "react";
import BGImage from "@/app/assets/images/LandingPageImage/bgImage.svg";
import Navbar from "@/app/Components/Navbar/Navbar";
import Image from "next/image";

const Speakers: React.FC = () => {
  return (
    <div className="relative min-h-screens w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-opacity-90">
          <Image
            src={BGImage}
            alt="Background"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screens py-2 px-4">
        {/* Navbar placeholder */}
        <Navbar />
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-1 mt-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4">
              Get To Know Our DevFest Accra <br />
              2025 Speakers
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              From industry experts to rising tech stars, meet the brilliant
              minds ready to inspire, educate and spark conversations at this
              year&apos;s DevFest.
            </p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Speakers;