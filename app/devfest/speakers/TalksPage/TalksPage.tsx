import React, { useState } from "react";
import {
  day1Talks,
  day2Talks,
} from "@/app/devfest/speakers/TalksPage/talksData";
import TalkCard from "@/app/devfest/speakers/TalksPage/TalksCard";

const TalkSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");
  const currentTalks = selectedDay === "day1" ? day1Talks : day2Talks;

  return (
    <section className="min-h-screens overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 md:py-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 mt-10">
          <p className=" text-gray-600 max-w-2xl mx-auto">
            At DevFest Accra 2025, we&apos;re serving up a full menu of talks
            and session to match every taste. No matter what you&apos;re into,
            there&apos;s something for you.
          </p>
        </div>

        {/* Day selector */}
        <div className="flex sm:flex-row gap-4 justify-center mb-12 md:mb-16">
          <button
            onClick={() => setSelectedDay("day1")}
            className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-lg font-medium transition-all duration-200 ${
              selectedDay === "day1"
                ? "bg-blue-500 hover:bg-blue-600 transition-colors text-white shadow-lg"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400"
            }`}
          >
            Day 1 - Virtual Speakers
          </button>
          <button
            onClick={() => setSelectedDay("day2")}
            className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-lg font-medium transition-all duration-200 ${
              selectedDay === "day2"
                ? "bg-blue-500 hover:bg-blue-600 transition-colors text-white shadow-lg"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400"
            }`}
          >
            Day 2 - In-Person Speakers
          </button>
        </div>

        {/* Talks list */}
        <div className="bg-white mb-8 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {currentTalks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="https://drive.google.com/file/d/1LC_R62C0iqWCDHz4Dni6d4pd6yxoT1SD/view?usp=sharing"
            target="_blank"
            className="inline-block px-6 py-3 rounded-2xl text-lg bg-blue-500 text-white hover:bg-blue-600 text-center"
          >
            Download Programme
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalkSchedule;
