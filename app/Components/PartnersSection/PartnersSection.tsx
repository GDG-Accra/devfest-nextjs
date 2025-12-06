import React from "react";
import googledevs from "@/app/assets/images/Partners/logos/googledevs.png";
import hash from "@/app/assets/images/Partners/logos/hash.svg";
import kraado from "@/app/assets/images/Partners/logos/kraado-logo.png";
import mest from "@/app/assets/images/Partners/logos/mest.png";
import slash from "@/app/assets/DPTemplate/slash.svg";
import sprynix from "@/app/assets/images/Partners/logos/sprynix.png";
import Cleva from "@/app/assets/images/Partners/logos/Cleva_ZKGKMBB.webp";
import UncutLoft from "@/app/assets/images/Partners/logos/UncutLoft_yU1TSMx.webp";
import AmaliTech from "@/app/assets/images/Partners/logos/AmaliTech2_koUiMAO.webp";
import Fata from "@/app/assets/images/Partners/logos/fata.png";
import Cadana from "@/app/assets/images/Partners/logos/cadana.png";
import Image, { StaticImageData } from "next/image";

const ListOfPartners: StaticImageData[] = [
  googledevs,
  kraado,
  mest,
  sprynix,
  Cleva,
  UncutLoft,
  AmaliTech,
  Fata,
  Cadana,
];

const PartnersSection: React.FC = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className="max-w-xl mx-auto text-gray-700 mb-2 md:mb-4 uppercase">
        Sponsors | Partners
      </h2>
      <div className="relative max-w-5xl mx-auto mb-4">
        <Image
          src={hash.src}
          alt="Hash Logo"
          className="absolute md:-left-16 lg:-left-32 top-[40%] -translate-y-1/2
               h-10 lg:h-24 md:ml-20"
          width={100}
          height={100}
        />

        <h1 className="text-4xl lg:text-5xl font-bold  text-center">
          Powered by the Ones Who Believe
          <br />
          Our Sponsors and Partners.
        </h1>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10">
        DevFest Accra 2024 set the stage; but in 2025, we&apos;re turning it all
        the way up, thanks to their incredible support.
      </p>

      {/* Logos section with responsive grid */}
      <section className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden py-4">
          <div
            className="flex slide-animation"
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.animationPlayState = "running";
            }}
            onTouchStart={(e) => {
              (e.target as HTMLElement).style.animationPlayState = "paused";
            }}
            onTouchEnd={(e) => {
              (e.target as HTMLElement).style.animationPlayState = "running";
            }}
          >
            {/* First set of logos */}
            {[...ListOfPartners, ...ListOfPartners].map((partner) => (
              <div
                key={partner.src}
                className="flex items-center justify-center shrink-0 mx-2 sm:mx-4 md:mx-8"
              >
                <Image
                  src={partner.src}
                  alt="GDG"
                  className="h-8 w-20 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain"
                  width={80}
                  height={32}
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-20 h-full bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-20 h-full bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      <div className="lg:w-full  flex justify-end mt-6 ">
        {/* md:mt-[-110px] */}
        <Image
          src={slash}
          alt="Slash Logo"
          className="h-10 md:h-16 m-0 lg:mr-20"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default PartnersSection;
