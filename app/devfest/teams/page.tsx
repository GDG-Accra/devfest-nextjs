"use client";

import { BeFirst } from "@/app/Components/BeFirst/BeFirst";
import FAQSection from "@/app/Components/FAQSection/FAQSection";
import Team from "@/app/devfest/teams/Team";
import codeLeft from "@/app/assets/images/TeamImages/codeLeft.svg";
import codeRight from "@/app/assets/images/TeamImages/codeRight.svg";
import Image from "next/image";

const TeamPage = () => {
  return (
    <div>
      <Team />
      <div className="relative overflow-hidden">
        <Image
          src={codeLeft.src}
          alt=""
          className="absolute left-2  lg:left-10 top-[10%] z-10 h-[5%]  lg:h-[10%] w-auto"
          width={100}
          height={100}
        />
        <div className="relative z-20 mt-10">
          <FAQSection />
        </div>
        <Image
          src={codeRight.src}
          alt=""
          className="absolute right-2  lg:right-10 bottom-[10%] z-10 h-[5%] lg:h-[10%] w-auto"
          width={100}
          height={100}
        />
      </div>
      <BeFirst />
    </div>
  );
};

export default TeamPage;
