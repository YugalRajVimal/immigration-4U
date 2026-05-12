import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const COLORS = {
  primary: "#224187",
  accent: "#4169E1",
  highlight: "#FCB22C",
  cardBg: "#F8FAFC",
  textHeading: "#224187",
  textSubtle: "#6b7280",
  border: "#E0E7EF",
};

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};

const PROGRAMS = [
  {
    country: "United Kingdom",
    title: "Tier 1 Investor Visa",
    summary:
      "For those who make a substantial financial investment into the UK in order to live there, with fast track incentives depending on the level of investment capital.",
    flag: "🇬🇧",
    criteria: [
      "Minimum investment amount: £2,000,000",
      "Eligible to apply for Indefinite Leave to Remain after 2–5 years",
      "Invest in share capital or loan capital in active UK companies",
      "No English requirement for the main applicant"
    ]
  },
  {
    country: "Austria",
    title: "Residency for Private Purposes",
    summary:
      "A unique route to EU permanent residency for those without the need of employment, with no required investment.",
    flag: "🇦🇹",
    criteria: [
      "No investment required",
      "Must demonstrate sufficient financial means",
      "EU residency, travel within Schengen",
      "Health insurance mandatory"
    ]
  },
  {
    country: "Bulgaria",
    title: "Permanent Residency through Property Investment",
    summary:
      "Invest in property and receive automatic Permanent Residency in Bulgaria, a country receiving its Schengen status in the near future.",
    flag: "🇧🇬",
    criteria: [
      "Property investment from €300,000",
      "Automatic Permanent Residency upon approval",
      "Schengen access expected soon",
      "No minimum stay requirement"
    ]
  },
  {
    country: "Portugal",
    title: "Golden Permanent Residency for Investors",
    summary:
      "Invest in a business or a property to take advantage of a direct route to PR in Portugal.",
    flag: "🇵🇹",
    criteria: [
      "Investment options: real estate, business, or funds",
      "Minimum investment from €280,000 (low density areas)",
      "Permanent residency after 5 years",
      "Visa-free travel in Schengen"
    ]
  },
];

// Section label component
function SectionLabel({ children }) {
  return (
    <span
      className="uppercase tracking-widest text-[0.78rem] font-semibold mb-2 inline-block"
      style={{
        letterSpacing: "0.15em",
        color: COLORS.primary,
        fontFamily: "'DM Sans', Arial, sans-serif"
      }}
    >
      {children}
    </span>
  );
}

// Divider
function BlueDivider() {
  return (
    <div
      className="mx-auto my-3 rounded h-[4px] w-14"
      style={{ background: COLORS.primary, opacity: 0.20 }}
    />
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      className="relative min-h-[40vh] flex items-center overflow-hidden"
      style={{
        // background: "radial-gradient(ellipse at 60% 40%, #FDFCEE 0%, #F8FAFC 75%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Soft grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
        //   backgroundImage: `linear-gradient(${COLORS.highlight} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.highlight} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(252,178,44,0.11) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <SectionLabel>Global Investment Pathways</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-[1.07]" style={{ color: COLORS.textHeading, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Residency and Citizenship by Investment
          </h1>
          <BlueDivider />
          <p className="max-w-xl mx-auto text-[1.18rem] md:text-lg text-[#3a5677] opacity-90" style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            lineHeight: 1.7,
          }}>
            Secure your future and expand your horizons with our global investment migration options for individuals, families, and entrepreneurs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Program Card
function ProgramCard({ program, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.11 }}
      className="rounded-2xl overflow-hidden shadow-sm bg-white border border-[#E0E7EF] p-7 md:p-8 flex flex-col gap-4"
      style={{ background: COLORS.cardBg }}
    >
      <div className="flex items-center gap-4 mb-2">
        <span className="text-3xl">{program.flag}</span>
        <span className="font-semibold text-base" style={{ color: COLORS.textHeading }}>
          {program.country}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-1" style={{
        color: COLORS.primary,
        fontFamily: "'Cormorant Garamond', Georgia, serif"
      }}>
        {program.title}
      </h3>
      <p className="text-[.97rem] text-[#244260] opacity-85 font-sans mb-2" style={{
        lineHeight: 1.7
      }}>
        {program.summary}
      </p>
      <ul className="flex flex-col gap-2 pl-0 mb-2 list-none">
        {program.criteria && program.criteria.map((pt, idx) =>
          <li key={idx} className="flex items-start text-[#27518f] text-sm font-normal gap-2">
            <span className="text-[#1777fa] text-xs mt-1.5">◆</span>
            {pt}
          </li>
        )}
      </ul>
      <div className="mt-auto pt-2">
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#1777fa] text-white shadow hover:bg-[#195abf] transition-all"
          style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            letterSpacing: '0.04em'
          }}
        >
          Learn More <FiArrowRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}



export default function InvestmentPage() {
  return (
    <div style={{ background: COLORS.cardBg, minHeight: "100vh", fontFamily: "'Georgia', serif" }}>
      {/* Hero */}
      <HeroSection />

      {/* Investment Programs */}
      <section className="py-20 px-3 bg-[#f6faff]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-center mb-14">
              <SectionLabel>Residency Options</SectionLabel>
              <h2 className="text-[2.1rem] md:text-[2.6rem] font-bold mb-1 leading-tight text-[#19365a] font-serif">
                Choose Your Investment Destination
              </h2>
              <div className="mx-auto mt-2 mb-0 rounded h-[4px] w-14 bg-[#1777fa]"></div>
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-9 sm:grid-cols-2 md:grid-cols-2"
          >
            {PROGRAMS.map((program, i) => (
              <ProgramCard program={program} key={program.country} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

    
    </div>
  );
}