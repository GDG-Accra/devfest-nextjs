"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import BGImage from "@/app/assets/images/LandingPageImage/bgImage.svg";
import Navbar from "@/app/Components/Navbar/Navbar";
import DPGenerator from "@/app/Components/DPGenerator/DPGenerator";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ = () => {
  // Initially no FAQ is open
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const api_url = "https://gdgaccra-api.uc.r.appspot.com/app/";

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${api_url}faqs/1/get`, {
          method: "GET",
          mode: "cors", // Enable CORS
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch FAQs");

        const result = await response.json();
        console.log(result, "the data this!!!");

        const newFaq = {
          question: "Is there a Code of Conduct for DevFest Accra?",
          answer: (
            <>
              DevFest Accra operates under a strict Code of Conduct to ensure a
              safe, inclusive, and welcoming environment for all participants.
              We encourage everyone to review it on our website{" "}
              <a
                href="https://developers.google.com/community/guidelines"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Code of Conduct
              </a>
              .
            </>
          ),
        };
        result.data.push(newFaq);

        setFaqs(result.data);
      } catch (err: unknown) {
        const error = err as Error;
        console.error(error.message || "An unknown error occurred");
      }
    };

    fetchFaqs();
  }, []);

  const toggleFAQ = (id: number) => {
    if (openIds.includes(id)) {
      // close faq if already opened...
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      // add faq to opened list...
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section>
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

      <Navbar />

      {/* Main FAQs Content */}
      <section className="w-full max-w-7xl mx-auto mt-20 lg:px-16 px-5 relative">
        {/* Red Background Glow... */}
        <div className="absolute w-[600px] h-[400px] top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-red-100 opacity-30 rounded-full blur-3xl z-[-1]" />

        {/* page heading... */}
        <div className="text-center mb-16">
          {/* <h2 className='max-w-xl mx-auto text-xl text-[#1E1E1E] mb-2 md:mb-4 font-sans'>
            FAQs
          </h2> */}
          <h3 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4">
            Questions We Get Asked
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers about registration, event details, and what to expect
            on the day.
          </p>
        </div>

        {/* faqs... */}
        <div className="flex flex-col lg:space-y-16 md:space-y-12 sm:space-y-8 space-y-4">
          {faqs.map((faq, id) => (
            <div
              key={id}
              className="shadow-md rounded-lg bg-white p-5 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(id)}
                aria-expanded={openIds.includes(id)}
                className="w-full flex gap-4 md:gap-6 items-center text-left"
              >
                {openIds.includes(id) ? (
                  <Minus size={24} className="text-[#52BD95] shrink-0" />
                ) : (
                  <Plus size={24} className="text-[#1B1139] shrink-0" />
                )}
                <span className="text-left md:text-lg font-semibold font-inter text-[#1B1139]">
                  {faq.question}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIds.includes(id) ? "max-h-48" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="px-10 md:px-12 py-4 md:py-6 text-[#363049] text-sm font-inter">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <DPGenerator />
    </section>
  );
};

export default FAQ;
