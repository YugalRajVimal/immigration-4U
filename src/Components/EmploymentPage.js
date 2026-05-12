import React from "react";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

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

function BlueDivider() {
  return (
    <div
      className="mx-auto my-3 rounded h-[4px] w-14"
      style={{ background: COLORS.primary, opacity: 0.20 }}
    />
  );
}

// Hero Section - Employment Focused
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
          <SectionLabel>Employment Opportunities Abroad</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-[1.07]" style={{ color: COLORS.textHeading, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Germany Residency for Job Seekers
          </h1>
          <BlueDivider />
          <p className="max-w-xl mx-auto text-[1.18rem] md:text-lg text-[#3a5677] opacity-90" style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            lineHeight: 1.7,
          }}>
            Germany welcomes highly qualified individuals to live there for six months to search for employment opportunities. As the only EU country to officially provide this pathway, we can arrange for our professionally qualified clients to experience Germany and seek a new career. Our Immigration Specialists can also assist you throughout your job search process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Germany Employment Card
function EmploymentCard() {
  const program = {
    country: "Germany",
    title: "Residence Permit for Job Seekers",
    flag: "🇩🇪",
    summary:
      "Live in Germany for up to six months and search for qualified employment. Open doors to a vibrant economy and new work opportunities in the heart of Europe.",
    criteria: [
      "Stay in Germany for up to 6 months to look for work",
      "Available to highly-qualified non-EU nationals",
      "Must hold a recognized university degree or equivalent qualification",
      "Proof of sufficient funds for living expenses",
      "Health insurance required",
      "No requirement to secure employment before arrival",
      "Our team can provide professional assistance with the job search process"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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

export default function EmploymentPage() {
  return (
    <div style={{ background: COLORS.cardBg, minHeight: "100vh", fontFamily: "'Georgia', serif" }}>
      {/* Hero */}
      <HeroSection />

      {/* Germany Employment Program */}
      <section className="py-20 px-3 bg-[#f6faff]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-center mb-14">
              <SectionLabel>Germany Employment</SectionLabel>
              <h2 className="text-[2.1rem] md:text-[2.6rem] font-bold mb-1 leading-tight text-[#19365a] font-serif">
                Residency for Job Seekers
              </h2>
              <div className="mx-auto mt-2 mb-0 rounded h-[4px] w-14 bg-[#1777fa]"></div>
            </div>
          </motion.div>
          <EmploymentCard />
        </div>
      </section>

    </div>
  );
}