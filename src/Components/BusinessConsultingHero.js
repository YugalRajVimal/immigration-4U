// WhyDubai.jsx
import React from "react";
import { FaMapMarkerAlt, FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";

export default function WhyDubai() {
  return (
    <section className="relative px-4 py-14 md:px-16 bg-[#f8f8f9] min-h-screen flex flex-col md:flex-row items-center md:items-start gap-12 overflow-x-hidden">
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col justify-start">
        <p className="uppercase text-xs text-[#1777fa] mb-3 font-semibold tracking-wide">// WHY DUBAI?</p>
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-5xl text-gray-900 mb-7 leading-tight">
          Why Dubai?
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-7 max-w-2xl animate-fade-in-up">
          Dubai stands as a beacon of economic growth, offering a strategic location, investor-friendly environment, and a gateway to global markets. Whether it's the state-of-the-art infrastructure, tax-friendly policies, or the vibrant business community, Dubai presents an unparalleled opportunity for growth and innovation.
        </p>
        <ul className="space-y-5 font-semibold text-[#131e35] mb-10 animate-fade-in-up">
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center bg-[#eaf1fc] text-[#1777fa] rounded-full w-10 h-10 text-xl">
              <FaMapMarkerAlt />
            </span>
            Strategic Location bridging East and West
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center bg-[#eaf1fc] text-[#1777fa] rounded-full w-10 h-10 text-xl">
              <FaHandshake />
            </span>
            Investor-friendly policies & regulations
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center bg-[#eaf1fc] text-[#1777fa] rounded-full w-10 h-10 text-xl">
              <FaChartLine />
            </span>
            Gateway to global markets & business expansion
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center bg-[#eaf1fc] text-[#1777fa] rounded-full w-10 h-10 text-xl">
              <FaBuilding />
            </span>
            State-of-the-art infrastructure & tax benefits
          </li>
        </ul>
      </div>
      {/* RIGHT COLUMN */}
      <div className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0">
        <div className="w-full max-w-xl grid grid-cols-1 text-center md:grid-cols-2 border rounded-lg shadow-xl overflow-hidden bg-white animate-fade-in-up">
          {/* CARD 1 */}
          <div className="px-8 py-10 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r">
            <span className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#eaf1fc] text-[#1777fa] text-2xl"><FaChartLine /></span>
            <p className="text-2xl font-bold text-[#131e35] mb-1">7.6% GDP Growth</p>
            <p className="text-sm text-gray-600">Strong economic expansion in 2022</p>
          </div>
          {/* CARD 2 */}
          <div className="px-8 py-10 flex flex-col items-center md:items-start border-b">
            <span className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#eaf1fc] text-[#1777fa] text-2xl"><FaHandshake /></span>
            <p className="text-2xl font-bold text-[#131e35] mb-1">0% Income Tax</p>
            <p className="text-sm text-gray-600">Favourable tax policies for businesses</p>
          </div>
          {/* CARD 3 */}
          <div className="px-8 py-10 flex flex-col items-center md:items-start border-r">
            <span className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#eaf1fc] text-[#1777fa] text-2xl"><FaMapMarkerAlt /></span>
            <p className="text-2xl font-bold text-[#131e35] mb-1">Global Hub</p>
            <p className="text-sm text-gray-600">Access to over 2 billion consumers regionally</p>
          </div>
          {/* CARD 4 */}
          <div className="px-8 py-10 flex flex-col items-center md:items-start">
            <span className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#eaf1fc] text-[#1777fa] text-2xl"><FaBuilding /></span>
            <p className="text-2xl font-bold text-[#131e35] mb-1">World-Class Infrastructure</p>
            <p className="text-sm text-gray-600">Modern transport, logistics, and tech facilities</p>
          </div>
        </div>
      </div>
      {/* Decorative Curve */}
      <div className="absolute right-8 top-14 hidden md:block pointer-events-none">
        <svg width={180} height={90}><g fill="none" stroke="#c7d8fd" strokeDasharray="1,13" strokeWidth={4}><path d="M30 80 Q90 -30 155 80"/></g></svg>
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
