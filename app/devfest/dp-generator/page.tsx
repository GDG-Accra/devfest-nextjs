"use client";

import { useEffect } from "react";
import { BeFirst } from "@/app/Components/BeFirst/BeFirst";
import DPBanner from "@/app/devfest/dp-generator/DPPage/DPBanner";
import DPForm from "@/app/devfest/dp-generator/DPPage/DPForm";

const DPPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DPBanner />
      <DPForm />
      <BeFirst />
    </div>
  );
};

export default DPPage;
