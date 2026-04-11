import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES_CONTENT = {
  DUBAI: {
    heading: "What We Offer",
    subheading: "Every service you need for a seamless business journey in Dubai—from setup to success.",
    cards: [
      {
        id: "01",
        title: "Complete Business Formation",
        image: "/consult1.webp",
      },
      {
        id: "02",
        title: "Visa and Immigration Assistance",
        image: "/consult2.webp",
      },
      {
        id: "03",
        title: "Corporate Compliance and Taxation Services",
        image: "/consult3.webp",
      },
      {
        id: "04",
        title: "Professional Auditing and Accounting",
        image: "/consult4.webp",
      },
      {
        id: "05",
        title: "Legal Advisory and Documentation Support",
        image: "/consult5.webp",
      },
      {
        id: "06",
        title: "PRO and Document Clearing Services",
        image: "/consult6.webp",
      },
    ],
  },
  HUNGARY: {
    heading: "What We Offer",
    subheading: "Comprehensive services to secure your Hungarian Golden Visa and European residency with ease.",
    cards: [
      {
        id: "01",
        title: "Initial Consultation & Due Diligence",
        image: "/consult1.webp",
      },
      {
        id: "02",
        title: "Investment Selection & Guidance",
        image: "/consult2.webp",
      },
      {
        id: "03",
        title: "Documentation Compilation & Preparation",
        image: "/consult3.webp",
      },
      {
        id: "04",
        title: "Comprehensive Background Screening",
        image: "/consult4.webp",
      },
      {
        id: "05",
        title: "Application Submission & Monitoring",
        image: "/consult5.webp",
      },
      {
        id: "06",
        title: "ID Issuance & Investment Finalization",
        image: "/consult6.webp",
      },
    ],
  },
  UK: {
    heading: "What We Offer",
    subheading: "Expert immigration and business services tailored to your UK success—whether settling, working, or investing.",
    cards: [
      {
        id: "01",
        title: "Business Immigration Solutions",
        image: "/consult1.webp",
      },
      {
        id: "02",
        title: "Premier Talent Visa Assistance",
        image: "/consult2.webp",
      },
      {
        id: "03",
        title: "Skilled Worker Visa Support",
        image: "/consult3.webp",
      },
      {
        id: "04",
        title: "International Business Establishment",
        image: "/consult4.webp",
      },
      {
        id: "05",
        title: "Asylum & Human Rights Applications",
        image: "/consult5.webp",
      },
      {
        id: "06",
        title: "British Citizenship & Settlement Guidance",
        image: "/consult6.webp",
      },
    ],
  },
};

export default function AlternateCards() {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = SERVICES_CONTENT[preferredCountry] || SERVICES_CONTENT.DUBAI;
  const cards = content.cards;

  return (
    <section className="bg-[#f9f9fa] py-20 px-6 md:px-16 overflow-x-hidden">
      {/* Cool "What We Offer" Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <p className="uppercase text-xs text-[#1777fa] tracking-widest font-semibold mb-2">
          // WHAT WE OFFER
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0a0e27] mb-4 relative inline-block z-10">
          {content.heading}{" "}
          <span className="text-[#1777fa] relative z-10">in {preferredCountry}</span>
          <span className="hidden md:inline absolute left-1/2 -translate-x-1/2 -bottom-3 z-0 opacity-30 pointer-events-none">
            <svg width={230} height={25}>
              <path
                d="M6 20 Q115 -10 224 20"
                stroke="#1777fa"
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          {content.subheading}
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {cards.map((card, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={card.id}
              className={`grid grid-cols-1 md:grid-cols-2 mx-auto items-stretch overflow-hidden rounded-2xl shadow-xl ${
                isReversed ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`h-fit w-full overflow-hidden ${
                  isReversed ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Section */}
              <div
                className={`flex flex-col justify-center p-10 bg-[#0a0e27] text-white ${
                  isReversed ? "md:order-1" : "md:order-2"
                }`}
              >
                <span className="text-[50px] md:text-[70px] font-extrabold text-white/10 leading-none">
                  {card.id}.
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-2 leading-snug font-serif">
                  {card.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}