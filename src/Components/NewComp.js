import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiGlobe, FiTrendingUp, FiShield, FiUsers, FiBriefcase,
  FiHome, FiCheckCircle, FiArrowRight, FiMapPin, FiAward,
  FiStar, FiChevronDown, FiChevronRight
} from "react-icons/fi";

// ─── COMPONENT 1: HERO SECTION ────────────────────────────────────────────────
export function HeroSection2() {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Residency", "Business", "Freedom", "Future"];

  useEffect(() => {
    const t = setInterval(() => setActiveWord((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { value: "26", label: "EU Nations", icon: <FiGlobe /> },
    { value: "450M+", label: "Single Market", icon: <FiTrendingUp /> },
    { value: "100%", label: "Success Rate", icon: <FiShield /> },
  ];

  return (
    <section className="relative min-h-screen bg-[#f9f9fa] overflow-hidden flex items-center">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dotted blue decorative circle */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
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
        {/* Dotted blue decorative circle right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1777fa]/30 bg-[#1777fa]/5 mb-8"
          >
            <FiMapPin className="text-[#1777fa] text-sm" />
            <span className="text-[#1777fa] text-sm tracking-widest uppercase font-medium">
              Europe's Premier Migration Advisors
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#181c2a",
              fontSize: "clamp(3rem, 5vw, 5rem)",
            }}
          >
            Your European
            <br />
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWord}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#1777fa] block"
                  style={{ borderBottom: "5px solid #1777fa" }}
                >
                  {words[activeWord]}
                </motion.span>
              </AnimatePresence>
            </span>
            Awaits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#363d4c] text-lg leading-relaxed mb-10 max-w-lg"
          >
            The European Union offers unmatched stability, a single market of 26 nations,&nbsp;
            and the freedom to live, work, and thrive across the continent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-3 bg-[#1777fa] text-[#fff] font-semibold px-8 py-4 rounded-full hover:bg-[#4096fa] transition-all duration-300 shadow-md">
              Begin Your Journey
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 border border-[#1777fa]/40 text-[#1777fa] px-8 py-4 rounded-full hover:bg-[#1777fa]/10 transition-all duration-300">
              Explore Options
            </button>
          </motion.div>
        </div>

        {/* Right — Stats card cluster */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-[#1777fa]/10 bg-[#0a0e27] p-8 overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06] rounded-full bg-[#1777fa] blur-3xl" />
            <p className="text-[#363d4c] text-sm uppercase tracking-widest mb-6">Why Europe Leads</p>

            <div className="space-y-5">
              {[
                { icon: <FiShield />, title: "Political & Financial Stability", desc: "Robust democratic institutions with decades of proven economic resilience." },
                { icon: <FiGlobe />, title: "Freedom of Movement", desc: "Live, work, and travel across 26 member states with a single status." },
                { icon: <FiTrendingUp />, title: "Unified Single Market", desc: "Access to 450M+ consumers and the world's largest trading bloc." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-[#1777fa]/20 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1777fa]/10 border border-[#1777fa]/20 flex items-center justify-center text-[#1777fa] shrink-0 group-hover:bg-[#1777fa]/20 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                    <p className="text-[#696d78] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-[#1777fa] text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</p>
                  <p className="text-[#363d4c] text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── COMPONENT 2: EU ADVANTAGES ───────────────────────────────────────────────
export function EUAdvantages2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: <FiShield size={28} />,
      title: "Political & Financial Stability",
      desc: "The EU's institutional framework delivers decades of proven democratic governance and economic resilience, securing your family's future.",
      color: "#1777fa", // Primary Blue
      bg: "from-[#1777fa]/10 to-transparent",
    },
    {
      icon: <FiGlobe size={28} />,
      title: "Single Market of 26 Nations",
      desc: "One membership unlocks access to the largest unified market on earth — trade, invest, and operate across borders without restriction.",
      color: "#181c2a", // Main heading color as highlight
      bg: "from-[#181c2a]/10 to-transparent",
    },
    {
      icon: <FiHome size={28} />,
      title: "Freedom of Movement",
      desc: "Enjoy the continent's breathtaking cultural diversity and geography. Live in Paris, work in Berlin, retire in Lisbon — all under one status.",
      color: "#363d4c", // Subheading text
      bg: "from-[#363d4c]/10 to-transparent",
    },
    {
      icon: <FiAward size={28} />,
      title: "Shared Political Status",
      desc: "EU citizenship confers rights, representation, and protections recognized by every member state — a passport to the continent itself.",
      color: "#696d78", // Description text
      bg: "from-[#696d78]/10 to-transparent",
    },
  ];

  return (
    <section ref={ref} className="bg-[#f9f9fa] py-28 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left label column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="sticky top-28">
              <span className="text-[#1777fa] text-sm uppercase tracking-[0.2em] font-medium block mb-4">
                Why Choose the EU
              </span>
              <h2
                className="leading-tight mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#0a0e27",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 600,
                }}
              >
                Advantages Over Every Other Destination
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-8">
                No other destination combines democratic values, economic scale, cultural richness,&nbsp;
                and freedom of movement into a single, cohesive membership.
              </p>
              <div className="h-1 w-16 bg-[#1777fa] rounded-full" />
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative bg-white rounded-2xl p-7 border border-[#1777fa] border-opacity-10 hover:border-[#1777fa] hover:shadow-xl transition-all duration-400 overflow-hidden cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${adv.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: adv.color + "15",
                      color: adv.color,
                      border: `1px solid ${adv.color}30`,
                    }}
                  >
                    {adv.icon}
                  </div>
                  <h3
                    className="font-semibold text-lg mb-3 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#181c2a" }}
                  >
                    {adv.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{adv.desc}</p>
                  <div
                    className="flex items-center gap-2 mt-5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: adv.color }}
                  >
                    Learn more <FiChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT 3: OUR CONTRIBUTION / SERVICES ─────────────────────────────────
export function OurContribution2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const services = [
    {
      num: "01",
      title: "Visa & Residency Applications",
      desc: "Our teams of specialists across Europe have vast experience helping high-net-worth clients apply for visas and set up residency with clarity and precision.",
      icon: <FiCheckCircle />,
    },
    {
      num: "02",
      title: "Business Setup & Incorporation",
      desc: "Our Business Consultants help you choose the right opportunity, incorporate in any EU nation, and move there to run your business through curated residency programs.",
      icon: <FiBriefcase />,
    },
    {
      num: "03",
      title: "Entrepreneur Investment Programs",
      desc: "Access extremely lucrative entrepreneur programs. We organize your residency, execute research, establish your business, or connect you to existing profitable opportunities.",
      icon: <FiTrendingUp />,
    },
    {
      num: "04",
      title: "Permanent Residency Pathways",
      desc: "Specialist visa programs serve as a direct route to permanent residency — either through strategic investment or by independent financial means.",
      icon: <FiAward />,
    },
  ];

  return (
    <section ref={ref} className="bg-[#f9f9fa] py-28 px-6 lg:px-12 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231777fa' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#1777fa] text-sm uppercase tracking-[0.2em] font-medium block mb-4">
            Expert Guidance
          </span>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#181c2a",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 600,
            }}
          >
            Our Contribution to Your Dreams
          </h2>
          <p className="text-[#363d4c] max-w-2xl mx-auto leading-relaxed">
            Basis your aim and objective in Europe, our team ensures you achieve optimal results 
            — with complete clarity throughout every step of the journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
          {/* Tab list */}
          <div className="space-y-3">
            {services.map((s, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 group ${
                  active === i
                    ? "border-[#1777fa]/40 bg-[#e7f0fd]"
                    : "border-[#d3e2fa] bg-white hover:border-[#1777fa]/60 hover:bg-[#e9f2fd]"
                }`}
              >
                <span
                  className={`text-sm font-mono mt-0.5 shrink-0 transition-colors ${
                    active === i ? "text-[#1777fa]" : "text-[#6b7280]"
                  }`}
                >
                  {s.num}
                </span>
                <div>
                  <p className={`font-semibold text-sm mb-1 transition-colors ${active === i ? "text-[#181c2a]" : "text-[#5a5f69]"}`}>
                    {s.title}
                  </p>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-[#363d4c] text-sm leading-relaxed"
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </div>
                <FiChevronDown
                  className={`ml-auto shrink-0 text-[#1777fa] transition-transform duration-300 ${active === i ? "rotate-180" : ""}`}
                  size={16}
                />
              </motion.button>
            ))}
          </div>

          {/* Feature display panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl border border-[#d3e2fa] bg-white p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.07] rounded-full bg-[#1777fa] blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#e7f0fd] border border-[#d3e2fa] flex items-center justify-center text-[#1777fa] text-2xl mb-6">
                    {services[active].icon}
                  </div>
                  <h3
                    className="text-[#181c2a] text-2xl font-semibold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {services[active].title}
                  </h3>
                  <p className="text-[#363d4c] leading-relaxed mb-8">{services[active].desc}</p>
                </motion.div>
              </AnimatePresence>

              {/* Client promise card */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#d3e2fa]">
                {[
                  { val: "500+", label: "Clients Served" },
                  { val: "26", label: "Countries" },
                  { val: "15+", label: "Years Experience" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-[#f4f8fd]">
                    <p className="text-[#1777fa] text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.val}</p>
                    <p className="text-[#5a5f69] text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT 4: TESTIMONIALS / PATHWAYS SLIDER ──────────────────────────────
export function PathwaysSlider2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const pathways = [
    {
      category: "Investment Route",
      title: "Golden Visa Programs",
      desc: "Strategic investment in qualifying assets grants you and your family permanent residency across select EU member states.",
      countries: ["Portugal", "Greece", "Malta"],
      icon: <FiStar />,
      color: "#1777fa",
    },
    {
      category: "Business Route",
      title: "Entrepreneur Visas",
      desc: "Establish or acquire a qualifying business in Europe. Our team researches, advises, and facilitates the entire incorporation journey.",
      countries: ["Ireland", "Netherlands", "Germany"],
      icon: <FiBriefcase />,
      color: "#181c2a",
    },
    {
      category: "Passive Income Route",
      title: "Financial Independence Visas",
      desc: "Demonstrate sufficient financial means without active employment. A direct path to residency for high-net-worth individuals.",
      countries: ["Spain", "France", "Italy"],
      icon: <FiShield />,
      color: "#363d4c",
    },
    {
      category: "Talent Route",
      title: "Skilled Professional Programs",
      desc: "EU Blue Card and equivalent programs fast-track residency for qualified professionals in high-demand sectors.",
      countries: ["Germany", "Austria", "Belgium"],
      icon: <FiAward />,
      color: "#696d78",
    },
    {
      category: "Startup Route",
      title: "Startup Visa Programs",
      desc: "Innovative entrepreneurs can obtain residency by registering scalable startups under special incubator-backed visa tracks.",
      countries: ["Estonia", "Lithuania", "Denmark"],
      icon: <FiTrendingUp />,
      color: "#2e88ff",
    },
  ];

  // Simple manual carousel navigation
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + pathways.length) % pathways.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % pathways.length);
  };

  // Show 1, 2, or 3 cards depending on screen width
  const [cardsToShow, setCardsToShow] = useState(3);
  useEffect(() => {
    function updateCards() {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    }
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Generate visible pathways indexes
  const getVisiblePathways = () => {
    let visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push((current + i) % pathways.length);
    }
    return visible;
  };

  return (
    <section ref={ref} className="bg-[#f9f9fa] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-[#1777fa] text-sm uppercase tracking-[0.2em] font-medium block mb-3">
              Residency Pathways
            </span>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#0a0e27",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 600,
              }}
            >
              Find Your Route to Europe
            </h2>
          </div>
          <p className="text-[#6b7280] max-w-sm text-sm leading-relaxed">
            Every client is unique. Our specialists identify the optimal pathway tailored to your financial profile and objectives.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="px-6 lg:px-12"
      >
        <div className="relative">
          {/* Carousel navigation */}
          <div className="flex justify-end mb-6 gap-2">
            <button
              aria-label="Previous Pathway"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#1777fa]/20 flex items-center justify-center transition hover:bg-[#1777fa]/10 text-[#1777fa] disabled:opacity-50"
              style={{ fontSize: 20 }}
            >
              <FiChevronLeft />
            </button>
            <button
              aria-label="Next Pathway"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#1777fa]/20 flex items-center justify-center transition hover:bg-[#1777fa]/10 text-[#1777fa] disabled:opacity-50"
              style={{ fontSize: 20 }}
            >
              <FiChevronRight />
            </button>
          </div>
          {/* Carousel cards */}
          <div className="flex gap-6 overflow-x-hidden">
            {getVisiblePathways().map((idx, i) => {
              const p = pathways[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group bg-white rounded-2xl border border-[#1777fa] border-opacity-10 p-7 hover:shadow-2xl hover:border-[#1777fa] transition-all duration-400 flex-1 flex flex-col overflow-hidden relative min-w-0"
                  style={{
                    maxWidth: cardsToShow === 1 ? "100%" : cardsToShow === 2 ? "50%" : "33%",
                    flexBasis: cardsToShow === 1 ? "100%" : cardsToShow === 2 ? "50%" : "33.3%",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-1 w-full transition-all duration-400"
                    style={{ background: p.color }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: p.color + "15",
                      color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    {p.icon}
                  </div>

                  <span
                    className="text-xs uppercase tracking-widest font-medium mb-2"
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </span>

                  <h3
                    className="font-semibold text-xl mb-3 leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#181c2a"
                    }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-[#6b7280] text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>

                  <div className="border-t border-[#1777fa]/10 pt-5">
                    <p className="text-xs text-[#696d78] uppercase tracking-wider mb-3">Available in</p>
                    <div className="flex flex-wrap gap-2">
                      {p.countries.map((c, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-full border font-medium"
                          style={{
                            borderColor: p.color + "30",
                            color: p.color,
                            background: p.color + "08",
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="mt-5 flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3 transition-all duration-300"
                    style={{ color: p.color }}
                  >
                    Explore pathway <FiArrowRight size={14} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Add missing FiChevronLeft import
function FiChevronLeft(props) {
  return <FiChevronRight style={{ transform: "rotate(180deg)" }} {...props} />;
}
