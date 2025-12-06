import { useState } from "react";
import UdeshUdayakumar from "@/app/assets/images/Speakers/UdeshUdayakumar.png";
import shape from "@/app/assets/images/Speakers/shape.svg";
import Djoume from "@/app/assets/images/Speakers/Djoumé.jpg";
import chichi from "@/app/assets/images/Speakers/Dr._Chichi_Afiah_Headshot .jpeg";
import Link from "next/link";
import AniediUdoObong from "@/app/assets/images/Speakers/Aniedi.jpg";
import George from "@/app/assets/images/Speakers/George.jpg";
import ShadrackInusah from "@/app/assets/images/Speakers/ShadrackInusah.jpg";
import { RiMicLine } from "react-icons/ri";
import Image from "next/image";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const SpeakersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample speakers data
  const speakers = [
    {
      name: "Aniedi Udo-Obong",
      title: "Program Manager",
      description:
        "Experienced Program Manager with a demonstrated history of working in the technology industry. Skilled in Management, Networking, Software Development, Start-ups, and Project Management. Strong program and project management professional with a Bachelor of Engineering focused in Electrical/Electronics Engineering.",
      image: AniediUdoObong,
      color: "bg-red-100",
      textColor: "text-red-600",
      accentColor: "bg-red-500",
    },
    {
      name: "Djoume Salvetti",
      title: "Co-Founder fata.dev & fata.school",
      description:
        "I am a passionate technical leader. With 20+ years of working experience, I've developed outstanding leadership, managerial and technical skills.Key areas of my experience include leading & managing teams of software engineers; architecting, building and optimizing highly scalable & highly available software systems; writing technical specifications and documentations; managing complex live deployment and migrations.",
      image: Djoume,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      accentColor: "bg-blue-500",
    },
    {
      name: "Dr.Chichi Afiah",
      title: "Product Coach",
      description:
        "Dr. Chichi Afiah is a trusted authority in leadership coaching, keynote speaking, and organizational transformation, delivering bold insights that inspire action and drive results. As the founder of Lead with Dr. Chichi Afiah, she combines her expertise as an internationally recognized Business Agility leader, systems coach, and dynamic speaker and host to empower leaders and transform organizations.",
      image: chichi,
      color: "bg-red-100",
      textColor: "text-red-600",
      accentColor: "bg-red-500",
    },
    {
      name: "Udesh Udayakumar",
      title: "Training Manager",
      description:
        "I am a Google Developer Expert in Angular and a Senior Frontend Engineer dedicated to mastering best practices for architecting software with a focus on scalability, maintainability, and user needs. As an Angular trainer, I also provide software engineering training, equipping professionals with the technical skills to build robust web applications using Angular.",
      image: UdeshUdayakumar,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      accentColor: "bg-purple-500",
    },
    {
      name: "George Plange",
      title: "Lead, Intelligent Automation",
      description:
        "AI researcher and Google Developer Expert with over 8 years of experience in software development. I specialize in artificial intelligence, machine learning, and cutting-edge software solutions. My research focuses on AI accessibility, programming education, and ethical AI development.",
      image: George,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      accentColor: "bg-yellow-500",
    },
    {
      name: "Shadrack Inusah",
      title: "Community Manager",
      description:
        "Shadrack Inusah is a passionate developer advocate and community manager with over 5 years of experience in the tech industry. He has a strong background in software development and a deep understanding of developer needs and challenges. Shadrack is dedicated to fostering vibrant developer communities, organizing events, and creating engaging content to support developers in their learning journeys.",
      image: ShadrackInusah,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      accentColor: "bg-purple-500",
    },
  ];

  // Function to navigate to previous speaker
  const prevSpeaker = () => {
    setActiveIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  };

  // Function to navigate to next speaker
  const nextSpeaker = () => {
    setActiveIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
  };

  // Function to directly select a speaker
  const selectSpeaker = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full py-10 px-2 sm:p-4 md:px-8 relative overflow-hidden mt-10 lg:mt-0">
      {/* Header section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold  mb-4 flex items-center justify-center">
          Our Inspiring Speakers
          <span className="lg:ml-4 ">
            <div className="flex">
              <Image src={shape.src} alt="" width={24} height={24} />
            </div>
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600  max-w-xl mx-auto">
          Introducing the innivators and Visionaries leading the charge in
          development and technology
        </p>
      </div>

      {/* Speakers carousel */}
      <div className=" max-w-4xl mx-auto relative lg:gap-20">
        {/* Navigation arrows and active speaker info */}
        <div
          className={`relative w-full h-[460px] ${
            speakers[activeIndex]?.color || "bg-gray-100"
          } rounded-3xl p-6`}
        >
          <div className="z-50 absolute left-0 right-4 flex items-center mb-0 w-full mx-auto justify-between top-1/2 transform -translate-y-1/2">
            <button
              onClick={prevSpeaker}
              className="p-2 border rounded-full bg-white shrink-0 w-10 h-10 flex items-center justify-center mx-0 md:mx-2"
              aria-label="Previous speaker"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSpeaker}
              className="p-2 border rounded-full bg-white shrink-0 w-10 h-10 flex items-center justify-center mx-0 md:mx-2"
              aria-label="Next speaker"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex items-center mb-0 w-full justify-start">
            {/* Active speaker name */}
            <h3 className="text-2xl font-bold flex-1 text-center">
              {speakers[activeIndex]?.name || "Speaker"}
            </h3>
          </div>

          {/* Image carousel */}
          <div className="flex h-full items-center justify-center">
            {speakers &&
              speakers.length > 0 &&
              [-1, 0, 1].map((offset) => {
                const speakerIndex =
                  (activeIndex + offset + speakers.length) % speakers.length;

                // IMPROVED POSITIONING LOGIC
                let positionClasses = "";
                let scaleClass = "";
                let zIndex = "";

                if (offset === -1) {
                  positionClasses = "absolute left-8 transform";
                  scaleClass = "scale-75 opacity-70";
                  zIndex = "z-10";
                } else if (offset === 0) {
                  positionClasses =
                    "absolute left-1/2 transform -translate-x-1/2";
                  scaleClass = "scale-100";
                  zIndex = "z-20";
                } else if (offset === 1) {
                  positionClasses = "absolute right-8 transform";
                  scaleClass = "scale-75 opacity-70";
                  zIndex = "z-10";
                }

                return (
                  <div
                    key={speakerIndex}
                    className={`${positionClasses} ${scaleClass} ${zIndex} transition-all duration-300 ease-in-out`}
                  >
                    <div className="w-72 h-72 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={
                          speakers[speakerIndex]?.image.src ||
                          "https://via.placeholder.com/200"
                        }
                        alt={`${speakers[speakerIndex]?.name || "Speaker"}`}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {speakers &&
              speakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectSpeaker(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? speakers[activeIndex].accentColor
                      : "bg-white"
                  }`}
                  aria-label={`Go to speaker ${index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/devfest/speakers">
          <button className="bg-blue-300 hover:bg-blue-500 text-gray-800 hover:text-white p-3 rounded-lg flex gap-2 items-center">
            See all Speakers
            <RiMicLine className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpeakersSection;
