import Navbar from "@/app/Components/Navbar/Navbar";
import BGImage from "@/app/assets/images/LandingPageImage/bgImage.svg";
import faqLinkGif from "@/app/assets/images/FAQs/link.gif";
import { Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DevFestLandingPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-opacity-90">
          <Image
            src={BGImage.src}
            alt="Background"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Navbar will be imported from existing code */}
      <Navbar />
      {/* Main Content */}
      <main className="px-4 mx-auto max-w-6xl md:mt-32 lg:mt-44 mt-12 flex flex-col justify-center">
        {/* GDG Accra Presents Badge */}
        <div className="text-center mb-10">
          <div className="inline-block px-6 py-2 bg-white rounded-full shadow-md">
            <span className="text-gray-700 tracking-wide">
              GDG ACCRA PRESENTS
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mt-6 relative">
          <h1 className="text-7xl md:text-9xl font-bold mb-2">DevFest Accra</h1>
          <div className="absolute top-0 right-[19%] md:right-[26%] lg:right-[14%] -mt-3">
            <span className="md:text-3xl text-2xl font-bold">2025</span>
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-3xl mx-auto text-center mt-8 mb-8">
          <p className="text-base sm:text-lg md:text-xl">
            Join us at DevFest Accra 2025 on 4th October 2025 for Accra&apos;s
            largest tech celebration of the year! This event is your gateway to
            the latest in AI, Android, Cloud, Web, and more. Don&apos;t miss out
            on this!
          </p>
        </div>

        <div className="lg:flex justify-center gap-10">
          <div className="flex justify-center mb-3">
            <a
              href="https://www.youtube.com/live/i6tIOV3Micc?si=dcjyGv5yDdTIg_Zg"
              className="inline-block"
            >
              <button className="border-red-500 border-2 transition-all duration-300 text-red-500 py-3 px-5 rounded-md flex items-center justify-center gap-2 shadow-md group relative overflow-hidden min-w-[200px] h-[50px]">
                <span className="text-base font-medium font-inter">
                  Day 1 Live Stream
                </span>
                {/* Live indicator with pulsing animation */}
                <div className="relative shrink-0">
                  <div className="bg-red-500 rounded-full p-1.5 w-6 h-6 flex items-center justify-center">
                    <Radio className="w-3 h-3 text-white" />
                  </div>
                  {/* Pulsing ring animation */}
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </button>
            </a>
          </div>

          {/* Join Now Button */}
          <div className="flex justify-center ">
            <Link
              href="https://gdg.community.dev/gdg-accra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md min-w-[200px] h-[50px]">
                <span className="text-base font-medium text-white font-inter">
                  Register Now
                </span>
                <div className="bg-white rounded-full p-1 w-5 h-5 shrink-0">
                  <Image
                    src={faqLinkGif.src}
                    width={20}
                    height={20}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </Link>
          </div>
          {/* live button  */}
        </div>
      </main>
    </div>
  );
};

export default DevFestLandingPage;
