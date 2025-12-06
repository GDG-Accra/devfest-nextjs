"use client";

import { useEffect } from "react";
import { BeFirst } from "@/app/Components/BeFirst/BeFirst";
import Speakers from "@/app/devfest/speakers/Speakers";
import TalksPage from "@/app/devfest/speakers/TalksPage/TalksPage";

const SpeakerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Speakers />
      <TalksPage />
      <BeFirst />
    </div>
  );
};

export default SpeakerPage;
