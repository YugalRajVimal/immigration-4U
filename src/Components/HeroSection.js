// HeroSection.jsx
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const HERO_CONTENT = {
  DUBAI: {
    title: "Your Pathway to Business Success in Dubai",
    subtitle: "Empowering Your Business Dreams in the Heart of the Middle East",
    description:
      "At Immigration Options 4 U, we understand that the journey of establishing a business in Dubai is not just about legal formalities; it's about realizing your entrepreneurial dreams in one of the world's most dynamic commercial hubs. With our comprehensive expertise in company registration and business setup, we are dedicated to transforming your business vision into reality.",
  },
  HUNGARY: {
    title: "Secure Your European Future with the Hungarian Golden Visa",
    subtitle: "Your Gateway to European Residency Starting at €250,000",
    description:
      "Discover the advantages of the Hungarian Golden Visa, officially launched on January 1, 2024. Immigration Options 4 U proudly offers a streamlined, cost-effective path to European residency. With a 10-year Residency Permit and flexible investment options, this program positions your enterprise to benefit from Hungary's favourable corporate tax environment and business-friendly policies.",
  },
  UK: {
    title: "Your Immigration Journey Starts Here in the United Kingdom",
    subtitle: "Expert Guidance for Your UK Business & Immigration Success",
    description:
      "At Immigration Options 4 U, we specialize in consulting on UK Immigration options and are dedicated to assisting clients both within the UK and worldwide. As specialists in immigration law, our firm is committed to delivering expert legal advice, assistance, and comprehensive immigration services with a professional touch. Whether you're establishing a business or seeking residency, we guide you every step of the way.",
  },
};

export default function HeroSection() {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = HERO_CONTENT[preferredCountry] || HERO_CONTENT.DUBAI;

  return (
    <>
      <section className="relative bg-[#f9f9fa] flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Dots BG Left */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
          <svg width="180" height="180">
            <circle
              cx="90"
              cy="90"
              r="80"
              fill="none"
              stroke="#2e88ff33"
              strokeDasharray="2,12"
              strokeWidth="4"
            />
          </svg>
        </div>
        {/* Dots BG Right */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
          <svg width="180" height="180">
            <circle
              cx="90"
              cy="90"
              r="80"
              fill="none"
              stroke="#2e88ff33"
              strokeDasharray="2,12"
              strokeWidth="4"
            />
          </svg>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center pt-20">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#181c2a] text-center mb-4 leading-tight animate-fadeIn">
            Welcome to{" "}
            <span className="text-[#1777fa]">Immigration Options 4 U</span>
            <br className="hidden md:block" />
            <span className="block text-xl md:text-2xl font-semibold text-[#181c2a] mt-3 font-serif">
              {content.title}
            </span>
          </h1>
          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#363d4c] text-center mb-3 max-w-2xl font-semibold animate-fadeIn delay-100">
            {content.subtitle}
          </p>
          {/* Info / About */}
          <p className="text-base md:text-lg text-[#696d78] text-center mb-8 max-w-2xl animate-fadeIn delay-200">
            <span className="font-bold text-[#1777fa]">
              Immigration Options 4 U
            </span>{" "}
            -{" "}
            {content.description}
          </p>
        </div>
        {/* Fade-in animations */}
        <style>
          {`
          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 0.7s forwards;
          }
          .animate-fadeIn.delay-100 {
            animation-delay: 0.1s;
          }
          .animate-fadeIn.delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
        </style>
      </section>
    </>
  );
}