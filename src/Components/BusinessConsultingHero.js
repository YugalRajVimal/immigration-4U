// WhyCountry.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";

const COUNTRY_CONTENT = {
  DUBAI: {
    heading: "Why Dubai?",
    description:
      "Dubai stands as a beacon of economic growth, offering a strategic location, investor-friendly environment, and a gateway to global markets. Whether it's the state-of-the-art infrastructure, tax-friendly policies, or the vibrant business community, Dubai presents an unparalleled opportunity for growth and innovation.",
    listItems: [
      {
        icon: "FaMapMarkerAlt",
        text: "Strategic Location bridging East and West",
      },
      {
        icon: "FaHandshake",
        text: "Investor-friendly policies & regulations",
      },
      {
        icon: "FaChartLine",
        text: "Gateway to global markets & business expansion",
      },
      {
        icon: "FaBuilding",
        text: "State-of-the-art infrastructure & tax benefits",
      },
    ],
    cards: [
      {
        icon: "FaChartLine",
        stat: "7.6% GDP Growth",
        description: "Strong economic expansion in 2022",
      },
      {
        icon: "FaHandshake",
        stat: "0% Income Tax",
        description: "Favourable tax policies for businesses",
      },
      {
        icon: "FaMapMarkerAlt",
        stat: "Global Hub",
        description: "Access to over 2 billion consumers regionally",
      },
      {
        icon: "FaBuilding",
        stat: "World-Class Infrastructure",
        description: "Modern transport, logistics, and tech facilities",
      },
    ],
  },
  HUNGARY: {
    heading: "Why Hungary?",
    description:
      "Hungary stands as a premier destination for residency by investment in Europe. With the EU's lowest corporate tax rate at just 9%, a 10-year renewable residency permit, and a strategic central location, Hungary offers unparalleled opportunities for business expansion and quality of life. Cost-effective living combined with business-friendly policies makes it ideal for investors and entrepreneurs.",
    listItems: [
      {
        icon: "FaChartLine",
        text: "EU's lowest corporate tax rate at 9%",
      },
      {
        icon: "FaMapMarkerAlt",
        text: "Strategic location at Europe's crossroads",
      },
      {
        icon: "FaHandshake",
        text: "Welcoming business climate with stable governance",
      },
      {
        icon: "FaBuilding",
        text: "Cost-effective living relative to Western Europe",
      },
    ],
    cards: [
      {
        icon: "FaChartLine",
        stat: "9% Corporate Tax",
        description: "EU's most competitive corporate tax rate",
      },
      {
        icon: "FaHandshake",
        stat: "€250,000 Minimum",
        description: "Golden Visa investment starting amount",
      },
      {
        icon: "FaMapMarkerAlt",
        stat: "10-Year Permit",
        description: "Renewable residency without minimum stay",
      },
      {
        icon: "FaBuilding",
        stat: "EU Gateway",
        description: "Access to 447 million consumers in EU",
      },
    ],
  },
  UK: {
    heading: "Why United Kingdom?",
    description:
      "The United Kingdom represents a world-leading destination for business, innovation, and skilled immigration. With a robust legal framework, world-class education institutions, and unparalleled access to global markets, the UK offers comprehensive pathways for entrepreneurs, skilled workers, and investors. Our expert team specializes in navigating UK immigration solutions tailored to your success.",
    listItems: [
      {
        icon: "FaChartLine",
        text: "World's largest financial center with global reach",
      },
      {
        icon: "FaHandshake",
        text: "Robust legal framework and stable governance",
      },
      {
        icon: "FaMapMarkerAlt",
        text: "Gateway to global markets and trade partnerships",
      },
      {
        icon: "FaBuilding",
        text: "World-class education and innovation hubs",
      },
    ],
    cards: [
      {
        icon: "FaChartLine",
        stat: "World's 5th Largest Economy",
        description: "Leading global economic powerhouse",
      },
      {
        icon: "FaHandshake",
        stat: "Flexible Visa Routes",
        description: "Multiple pathways for entrepreneurs & skilled workers",
      },
      {
        icon: "FaMapMarkerAlt",
        stat: "Global Business Hub",
        description: "Home to 175,000+ international businesses",
      },
      {
        icon: "FaBuilding",
        stat: "Strong Legal Framework",
        description: "Independent judiciary and property rights protection",
      },
    ],
  },
};

const ICON_MAP = {
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaBuilding: FaBuilding,
  FaHandshake: FaHandshake,
  FaChartLine: FaChartLine,
};

export default function WhyCountry() {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = COUNTRY_CONTENT[preferredCountry] || COUNTRY_CONTENT.DUBAI;

  return (
    <section className="relative px-4 py-14 md:px-16 bg-[#f8f8f9] min-h-screen flex flex-col md:flex-row items-center md:items-start gap-12 overflow-x-hidden">
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col justify-start">
        <p className="uppercase text-xs text-[#1777fa] mb-3 font-semibold tracking-wide">
          // WHY {preferredCountry}?
        </p>
        <h1 className="font-extrabold font-serif text-3xl md:text-5xl lg:text-5xl text-gray-900 mb-7 leading-tight">
          {content.heading}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-7 max-w-2xl animate-fade-in-up">
          {content.description}
        </p>
        <ul className="space-y-5 font-semibold text-[#131e35] mb-10 animate-fade-in-up">
          {content.listItems.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon];
            return (
              <li key={index} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center bg-[#eaf1fc] text-[#1777fa] rounded-full w-10 h-10 text-xl">
                  <IconComponent />
                </span>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0">
        <div className="w-full max-w-xl grid grid-cols-1 text-center md:grid-cols-2 border rounded-lg shadow-xl overflow-hidden bg-white animate-fade-in-up">
          {content.cards.map((card, index) => {
            const IconComponent = ICON_MAP[card.icon];
            return (
              <div
                key={index}
                className={`px-8 py-10 flex flex-col items-center md:items-start ${
                  index % 2 === 1 && index < 2 ? "border-b md:border-b-0" : ""
                } ${index < 2 && index !== 1 ? "md:border-r" : ""} ${
                  index >= 2 && index === 2 ? "md:border-r" : ""
                } ${index === 1 ? "border-b" : ""}`}
              >
                <span className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#eaf1fc] text-[#1777fa] text-2xl">
                  <IconComponent />
                </span>
                <p className="text-2xl font-bold text-[#131e35] mb-1">
                  {card.stat}
                </p>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Curve */}
      <div className="absolute right-8 top-14 hidden md:block pointer-events-none">
        <svg width={180} height={90}>
          <g fill="none" stroke="#c7d8fd" strokeDasharray="1,13" strokeWidth={4}>
            <path d="M30 80 Q90 -30 155 80" />
          </g>
        </svg>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(40px);
            animation: fadeInUp .8s cubic-bezier(0.19,1,0.22,1) .1s forwards;
          }
          @keyframes fadeInUp { to { opacity:1; transform:none; } }
        `}
      </style>
    </section>
  );
}