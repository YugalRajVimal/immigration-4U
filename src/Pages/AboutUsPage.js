// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   FiGlobe, FiTrendingUp, FiShield, FiUsers, FiBriefcase,
//   FiHome, FiCheckCircle, FiArrowRight, FiMapPin, FiAward,
//   FiStar, FiChevronDown, FiChevronRight
// } from "react-icons/fi";

// // ─── Design Tokens ──────────────
// const COLORS = {
//   primary: "#1777fa",
//   primaryLight: "#e3f0ffbb",
//   bgLight: "#f2f5fa",
//   bgDark: "#ffffff",
//   heading: "#232a35",
//   subheading: "#43607c",
//   desc: "#244260",
//   muted: "#8c9ab3",
//   white: "#fff"
// };

// const FONTS = {
//   display: "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif",
//   body: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
//   accent: "'Cormorant SC', 'Palatino Linotype', Georgia, serif",
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
// };
// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } }
// };
// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.6 } }
// };

// const COUNTRIES = ["DUBAI", "HUNGARY", "UK"];

// const ABOUT_CONTENT = {
//   ...JSON.parse(JSON.stringify({
//     ...{
//       DUBAI: {},
//       HUNGARY: {},
//       UK: {},
//     },
//     ...{
//       DUBAI: {
//         ...{
//           heroTitle: "Immigration Options 4 U",
//           heroSubtitle: "Your Gateway to Seamless Business Setup in Dubai",
//           heroTag: "Dubai · UAE",
//           introTitle: "Empowering Entrepreneurs in the Heart of the Middle East",
//           introDescription: "At Immigration Options 4 U, we help visionaries, entrepreneurs, and global investors bring their business ambitions to life in Dubai. With expertise in company formation, compliance, and strategic business setup, we simplify complexities — so you can focus on building your success.",
//           leftSectionTitle: "Why Dubai?",
//           leftSectionDescription: "Dubai is a global business powerhouse offering world-class infrastructure, tax-friendly laws, and unmatched opportunities for growth.",
//           leftPoints: [
//             "Strategic global location",
//             "Investor-friendly regulations",
//             "Thriving business ecosystem",
//             "Zero income tax & competitive benefits",
//           ],
//           rightSectionTitle: "What We Do",
//           rightSectionDescription: "We guide you from idea to execution with end-to-end business setup services.",
//           rightPoints: [
//             "Business formation (Mainland, Free Zone, Offshore)",
//             "Visa & immigration assistance",
//             "Corporate compliance & taxation",
//             "Accounting & auditing support",
//             "Legal documentation & PRO services",
//           ],
//           whyChooseTitle: "Why Choose Immigration Options 4 U?",
//           whyChooseFeatures: [
//             { title: "Commitment to Excellence", icon: "◆" },
//             { title: "Customer-Centric Approach", icon: "◆" },
//             { title: "Proven Track Record", icon: "◆" },
//             { title: "Innovative Business Solutions", icon: "◆" },
//             { title: "Transparent & Ethical Processes", icon: "◆" },
//             { title: "Specialized Industry Expertise", icon: "◆" },
//           ],
//           commitmentTitle: "Your Success, Our Commitment",
//           commitmentDescription: "At Immigration Options 4 U, your business aspirations are at the heart of our operations. We pride ourselves on our ability to offer personalized solutions, ensuring that each client receives the attention and expertise necessary to flourish in Dubai's thriving business landscape.",
//           joinTitle: "Join the Immigration Options 4 U Family",
//           joinDescription: "Embark on your business journey with Immigration Options 4 U and experience the ease, efficiency, and excellence that come with our partnership. Connect with us today to learn more about how we can assist in making your business ambitions a reality in Dubai.",
//           ctaTitle: "Ready to Start Your Business Journey in Dubai?",
//           ctaDescription: "Our experts are here to guide you every step of the way.",
//           stat: [{ value: "10+", label: "Years Experience" }, { value: "500+", label: "Businesses Formed" }, { value: "98%", label: "Success Rate" }],
//         }
//       },
//       HUNGARY: {
//         ...{
//           heroTitle: "Immigration Options 4 U",
//           heroSubtitle: "Your Gateway to European Residency in Hungary",
//           heroTag: "Hungary · Europe",
//           introTitle: "Empowering Investors and Global Citizens Seeking European Residency",
//           introDescription: "At Immigration Options 4 U, we help ambitious investors and global citizens achieve their European dreams through Hungary's Golden Visa program. With expertise in investment guidance, residency application, and EU integration, we simplify the pathway to secure, long-term European residency.",
//           leftSectionTitle: "Why Hungary?",
//           leftSectionDescription: "Hungary offers a premier pathway to European residency with the EU's lowest corporate tax rate, strategic central location, and stable business environment.",
//           leftPoints: [
//             "EU's lowest 9% corporate tax rate",
//             "Strategic location at Europe's crossroads",
//             "Welcoming business climate and governance",
//             "Cost-effective living relative to Western Europe",
//           ],
//           rightSectionTitle: "What We Do",
//           rightSectionDescription: "We guide you from consultation to residency activation with comprehensive Golden Visa services.",
//           rightPoints: [
//             "Investment consultation & selection guidance",
//             "Documentation compilation & preparation",
//             "Comprehensive due diligence & screening",
//             "Application submission & approval monitoring",
//             "Biometrics coordination & ID issuance",
//             "Ongoing integration & support services",
//           ],
//           whyChooseTitle: "Why Choose Immigration Options 4 U?",
//           whyChooseFeatures: [
//             { title: "European Investment Expertise", icon: "◆" },
//             { title: "Client-Focused Service Approach", icon: "◆" },
//             { title: "Proven Success Record", icon: "◆" },
//             { title: "Innovative Residency Solutions", icon: "◆" },
//             { title: "Transparent & Compliant Processes", icon: "◆" },
//             { title: "Specialized EU Immigration Knowledge", icon: "◆" },
//           ],
//           commitmentTitle: "Your European Dream, Our Commitment",
//           commitmentDescription: "At Immigration Options 4 U, your European residency goals are at the heart of our operations. We offer personalized guidance, ensuring that each client receives the expertise and support necessary to successfully secure their Hungarian Golden Visa and flourish in European life.",
//           joinTitle: "Join the Immigration Options 4 U Family",
//           joinDescription: "Embark on your European residency journey with Immigration Options 4 U and experience the professionalism, expertise, and excellence that come with our partnership.",
//           ctaTitle: "Ready to Secure Your European Residency?",
//           ctaDescription: "Our experts are here to guide you to your European dream.",
//           stat: [{ value: "5+", label: "Years in EU Immigration" }, { value: "200+", label: "Residencies Secured" }, { value: "100%", label: "Compliance Rate" }],
//         }
//       },
//       UK: {
//         ...{
//           heroTitle: "Immigration Options 4 U",
//           heroSubtitle: "Your Gateway to UK Success and Residency",
//           heroTag: "United Kingdom",
//           introTitle: "Empowering Professionals, Entrepreneurs, and Families in the United Kingdom",
//           introDescription: "At Immigration Options 4 U, we help ambitious professionals, entrepreneurs, and families achieve their UK dreams. With expertise in business immigration, skilled worker visas, family reunification, and investment pathways, we simplify the complexity — so you can focus on building your future in the UK.",
//           leftSectionTitle: "Why the United Kingdom?",
//           leftSectionDescription: "The UK offers a world-leading destination for business, innovation, and quality of life with strong legal frameworks and global opportunities.",
//           leftPoints: [
//             "World's 5th largest economy",
//             "World-class legal and governance framework",
//             "Gateway to global markets and partnerships",
//             "World-class education and innovation hubs",
//           ],
//           rightSectionTitle: "What We Do",
//           rightSectionDescription: "We guide you from initial consultation to settlement with comprehensive UK immigration services.",
//           rightPoints: [
//             "Business immigration & entrepreneurship pathways",
//             "Skilled worker visa & talent recruitment support",
//             "Family & partner visa assistance",
//             "Sponsor license & corporate compliance",
//             "Investment visa & high-net-worth solutions",
//             "Asylum, appeals & human rights applications",
//           ],
//           whyChooseTitle: "Why Choose Immigration Options 4 U?",
//           whyChooseFeatures: [
//             { title: "UK Immigration Law Expertise", icon: "◆" },
//             { title: "Client-Focused Service Approach", icon: "◆" },
//             { title: "Proven Success Track Record", icon: "◆" },
//             { title: "Innovative Immigration Solutions", icon: "◆" },
//             { title: "Transparent & Ethical Practices", icon: "◆" },
//             { title: "Specialized Home Office Knowledge", icon: "◆" },
//           ],
//           commitmentTitle: "Your UK Success, Our Commitment",
//           commitmentDescription: "At Immigration Options 4 U, your UK immigration aspirations are at the heart of our operations. We offer personalized solutions, ensuring that each client receives the expertise and attention necessary to successfully navigate UK immigration and build their future.",
//           joinTitle: "Join the Immigration Options 4 U Family",
//           joinDescription: "Embark on your UK immigration journey with Immigration Options 4 U and experience the professionalism, expertise, and excellence that come with our partnership.",
//           ctaTitle: "Ready to Start Your UK Immigration Journey?",
//           ctaDescription: "Our experts are here to guide you every step of the way.",
//           stat: [{ value: "15+", label: "Years Experience" }, { value: "1000+", label: "Cases Won" }, { value: "99%", label: "Visa Success Rate" }],
//         }
//       },
//     }
//   }))
// };

// const ABOUT_US_TEXT = [
//   "Immigrate2EU.com was setup to offer our clients a set of immigration services that they could trust. Our ethos is to provide a fully inclusive package of services tailor made to the needs of each client — from a visa and accompanying business plan, to the formation of a company in Europe with bookkeeping and a virtual office, or introductions to investment programs which will support your immigration requirements.",
//   "Our extensive knowledge of Europe, alongside the relationships with our specialists located throughout the continent means that we can give you first-hand assurance of their expertise, professionalism and attention to detail. We recognize that no company can be an expert in every area; therefore we have built business relationships with lawyers, tax experts, and real estate developers across the continent.",
//   "We will, wherever possible, provide you with a fully inclusive quote based upon your requirements so that you know exactly how much you will need to budget. We understand that moving to a new country is a significant undertaking, and we deliver a service which shoulders the burden of the immigration application so that you don't have to.",
// ];

// function BlueDivider() {
//   return (
//     <div className="mx-auto flex items-center gap-3 max-w-[180px] my-8">
//       <div className="flex-1 h-[2px] bg-[#1777fa]" />
//       <div className="w-3 h-3 rounded-[2px] bg-[#1777fa] rotate-45 flex-shrink-0" />
//       <div className="flex-1 h-[2px] bg-[#1777fa]" />
//     </div>
//   );
// }
// function SectionLabel({ children }) {
//   return (
//     <div className="uppercase tracking-[.19em] text-[#1777fa] font-semibold mb-2 text-xs" style={{ fontFamily: FONTS.accent }}>
//       {children}
//     </div>
//   );
// }
// function InViewMotion({ children, variants = fadeUp, className = "", style = {} }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });
//   return (
//     <motion.div
//       ref={ref}
//       variants={variants}
//       initial="hidden"
//       animate={inView ? "show" : "hidden"}
//       className={className}
//       style={style}
//     >
//       {children}
//     </motion.div>
//   );
// }
// function StatCard({ value, label }) {
//   return (
//     <div className="px-2 sm:px-8 py-9 text-center border-l border-[#aad8fa] bg-[#f5fafd] first:border-l-0">
//       <div className="font-bold text-[2.5rem] text-[#123770] drop-shadow" style={{ fontFamily: FONTS.display, lineHeight: 1 }}>
//         {value}
//       </div>
//       <div className="text-xs uppercase text-[#6a7da0] tracking-wider mt-2" style={{ fontFamily: FONTS.body }}>
//         {label}
//       </div>
//     </div>
//   );
// }
// function FeatureCard({ title }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.div
//       variants={fadeUp}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className={`transition-all rounded-lg cursor-pointer border group
//         ${hovered ? "border-[#1777fa] bg-[#e6f1fd]" : "border-[#c1d6ed] bg-[#f3f7fb]"}`}
//       style={{
//         padding: "28px 24px",
//         boxShadow: hovered ? `0 2px 16px 0 #a7cfff` : undefined,
//         transition: "all 0.35s"
//       }}
//     >
//       <div className={`${hovered ? "text-[#005bb3]" : "text-[#1777fa]"} text-xs tracking-wider mb-2`}>◆</div>
//       <div
//         className={`font-bold text-lg mb-1 ${hovered ? "text-[#182a41]" : "text-[#244260]"} drop-shadow font-serif`}
//         style={{ transition: "color 0.35s" }}
//       >
//         {title}
//       </div>
//       <div className={`text-xs ${hovered ? "text-[#244260]" : "text-[#627591]"}`} style={{ fontFamily: FONTS.body }}>
//         Excellence, reliability, and modern strategies tailored to your journey.
//       </div>
//     </motion.div>
//   );
// }
// function CountrySwitcher({ active, onChange }) {
//   const LABELS = { DUBAI: "Dubai", HUNGARY: "Hungary", UK: "United Kingdom" };
//   return (
//     <div className="mx-auto flex bg-[#f1f7fd] border rounded-full px-2 py-1 gap-1 mb-20"
//       style={{ borderColor: "#aad8fa", width: "fit-content", backdropFilter: "blur(6px)" }}>
//       {COUNTRIES.map((c) =>
//         <button
//           key={c}
//           type="button"
//           className={
//             (active === c
//               ? "bg-[#1777fa] text-white"
//               : "text-[#1777fa] bg-transparent hover:bg-[#e7f2fd]"
//             ) +
//             " transition-all rounded-full px-5 py-2 font-medium text-xs tracking-wide outline-none focus:outline-none"}
//           style={{ fontFamily: FONTS.body, letterSpacing: ".03em" }}
//           onClick={() => onChange(c)}
//         >
//           {LABELS[c]}
//         </button>
//       )}
//     </div>
//   );
// }

// // ─── Main AboutUs Page ──────────────────────────────────
// export default function AboutUs() {
//   const [country, setCountry] = useState("DUBAI");
//   useEffect(() => {
//     const stored = localStorage.getItem("preferred_country");
//     if (stored && ABOUT_CONTENT[stored]) setCountry(stored);
//   }, []);
//   const handleCountryChange = (c) => {
//     setCountry(c);
//     localStorage.setItem("preferred_country", c);
//   };
//   const content = ABOUT_CONTENT[country];

//   return (
//     <div className="min-h-screen w-full bg-[#f3f8fd] overflow-x-hidden" style={{ fontFamily: FONTS.body }}>
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Cormorant+SC:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');
//         *, *::before, *::after { box-sizing: border-box; }
//         body { margin: 0; background: #f3f8fd !important; color: #25416a; }
//         `}
//       </style>
//       {/* Hero */}
//       <section className="relative min-h-[80vh] flex items-center bg-[#eaf5ff] py-24 overflow-hidden">
//         {/* Background Dots Pattern */}
//         <div className="absolute z-0 inset-0 pointer-events-none" aria-hidden>
//           <svg width="100%" height="100%">
//             <defs>
//               <pattern id="pattern-dots" width="80" height="80" patternUnits="userSpaceOnUse">
//                 <circle cx="16" cy="16" r="2" fill="#53a5f6" fillOpacity={.13} />
//                 <circle cx="56" cy="56" r="2" fill="#53a5f6" fillOpacity={.13} />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#pattern-dots)" />
//           </svg>
//         </div>
//         {/* Decorative Circles (left/right) */}
//         <div className="absolute top-[-80px] left-[-80px] w-[340px] h-[340px] bg-[#1b83f350] rounded-full blur-[3px] pointer-events-none z-0"></div>
//         <div className="absolute bottom-[-90px] right-[-80px] w-[320px] h-[320px] bg-[#1b83f324] rounded-full blur-[3px] pointer-events-none z-0"></div>
//         <div className="z-10 relative w-full">
//           {/* Content */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={country}
//               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="text-center max-w-3xl mx-auto"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.05 }}
//                 className="mb-6 uppercase text-[#2261ae] tracking-[0.3em] text-xs font-semibold"
//                 style={{ fontFamily: FONTS.accent, opacity: 0.86 }}
//               >
//                 {content.heroTag}
//               </motion.div>

//               <h1 className="inline-block  text-[#142f59] mb-6 rounded-lg px-8 py-2  font-serif font-bold"
//                 style={{
//                   fontSize: "clamp(36px,8vw,72px)",
//                   lineHeight: 1.07,
//                   letterSpacing: "-0.01em"
//                 }}>
//                 {content.heroTitle}
//               </h1>
//               <div className="mx-auto mb-8 mt-4 rounded h-[4px] w-16 bg-[#2261ae]/80"></div>
//               <p className="mx-auto mb-10 max-w-2xl text-[18px] md:text-[22px] font-normal text-[#18549f]" style={{
//                 fontFamily: FONTS.body,
//                 lineHeight: 1.7,
//                 letterSpacing: "0.01em"
//               }}>
//                 {content.heroSubtitle}
//               </p>
//               <CountrySwitcher active={country} onChange={handleCountryChange} />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//         {/* Stats */}
//         <div className="absolute left-0 right-0 bottom-0 grid sm:grid-cols-3 bg-[#f4f9fd] border-t border-[#bce6ff] shadow-[0_-2px_10px_0_rgba(134,199,255,0.09)] z-20">
//           {content.stat.map((s, i) => <StatCard key={i} {...s} />)}
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="bg-[#fcfeff] py-20 px-3">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
//           <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: -56 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
//             <SectionLabel>About Us</SectionLabel>
//             <h2 className="text-[2.4rem] md:text-[3.2rem] font-bold mb-4 leading-tight text-[#19365a] font-serif">
//               Who We <span className="italic text-[#1777fa]">Really</span> Are
//             </h2>
//             <div className="w-14 h-1.5 rounded bg-[#1777fa] mb-1"></div>
//           </InViewMotion>
//           <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: 56 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
//             <div>
//               {ABOUT_US_TEXT.map((t, i) =>
//                 <p key={i} className="mb-6 text-base leading-8 text-[#316094]" style={{ fontFamily: FONTS.body }}>{t}</p>
//               )}
//             </div>
//           </InViewMotion>
//         </div>
//       </section>

//       {/* Country Intro */}
//       <section className="relative py-20 bg-[#e8f4fc] overflow-hidden px-4">
//         <div className="absolute left-0 right-0 top-0 h-[4px] bg-gradient-to-r from-transparent via-[#c5defd] to-transparent opacity-90"></div>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={country + "-intro"}
//             initial="hidden" animate="show" exit="hidden"
//             variants={fadeIn}
//             className="max-w-2xl mx-auto text-center relative z-10"
//           >
//             <SectionLabel>Our Mission</SectionLabel>
//             <h2 className="text-[2rem] md:text-[2.9rem] font-bold mb-6 leading-tight text-[#1c3860] font-serif">
//               {content.introTitle}
//             </h2>
//             <BlueDivider />
//             <div className="mb-2 text-base md:text-lg text-[#32609a] font-normal" style={{
//               fontFamily: FONTS.body,
//               lineHeight: 1.8,
//             }}>{content.introDescription}</div>
//           </motion.div>
//         </AnimatePresence>
//       </section>
//       {/* Why & What We Do */}
//       <section className="bg-[#f6faff] py-20 px-3">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
//           {/* Left: Location */}
//           <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: -44 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
//             <SectionLabel>Location</SectionLabel>
//             <h3 className="text-[1.8rem] md:text-[2.3rem] font-bold mb-4 text-[#263552] font-serif">
//               {content.leftSectionTitle}
//             </h3>
//             <p className="mb-8 text-base text-[#4774ba]" style={{ fontFamily: FONTS.body, lineHeight: "2" }}>
//               {content.leftSectionDescription}
//             </p>
//             <ul className="flex flex-col gap-4 pl-0 list-none">
//               {content.leftPoints.map((pt, i) =>
//                 <li key={i} className="flex items-start text-[#27518f] text-sm font-normal gap-2">
//                   <span className="text-[#1777fa] text-xs mt-1.5">◆</span>
//                   {pt}
//                 </li>
//               )}
//             </ul>
//           </InViewMotion>
//           {/* Right: Services */}
//           <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
//             <SectionLabel>Services</SectionLabel>
//             <h3 className="text-[1.8rem] md:text-[2.3rem] font-bold mb-4 text-[#263552] font-serif">
//               {content.rightSectionTitle}
//             </h3>
//             <p className="mb-8 text-base text-[#4774ba]" style={{ fontFamily: FONTS.body, lineHeight: "2" }}>
//               {content.rightSectionDescription}
//             </p>
//             <ul className="flex flex-col gap-4 pl-0 list-none">
//               {content.rightPoints.map((pt, i) =>
//                 <li key={i} className={`flex items-start text-[#27518f] text-sm font-normal gap-2 pb-3 ${i < content.rightPoints.length - 1 ? "border-b border-[#bce6ff]" : ""}`}>
//                   <span className="text-[#1777fa] text-xs mt-1.5">◆</span>
//                   {pt}
//                 </li>
//               )}
//             </ul>
//           </InViewMotion>
//         </div>
//       </section>

//       {/* Why Choose */}
//       <section className="py-20 px-3 bg-[#f8fbff]">
//         <div className="max-w-6xl mx-auto">
//           <InViewMotion>
//             <div className="text-center mb-12">
//               <SectionLabel>Our Edge</SectionLabel>
//               <h2 className="text-[2.5rem] md:text-[3.3rem] font-bold mb-1 leading-tight text-[#19365a] font-serif">
//                 {content.whyChooseTitle}
//               </h2>
//               <div className="mx-auto mt-2 mb-0 rounded h-[4px] w-16 bg-[#1777fa]"></div>
//             </div>
//           </InViewMotion>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={country + "-features"}
//               initial="hidden" animate="show" exit="hidden" variants={fadeIn}
//             >
//               <motion.div
//                 variants={stagger}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="grid sm:grid-cols-3 gap-5"
//               >
//                 {content.whyChooseFeatures.map((f, i) => (
//                   <FeatureCard key={i} title={f.title} />
//                 ))}
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Commitment */}
//       <section className="relative py-20 bg-[#e6f2fa] overflow-hidden px-4">
//         <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#b1dbf8] rounded-full blur-md pointer-events-none"></div>
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
//           <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: -42 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
//             <SectionLabel>Commitment</SectionLabel>
//             <h2 className="text-[2.1rem] md:text-[2.8rem] font-bold mb-4 text-[#173763] italic font-serif">
//               "{content.commitmentTitle}"
//             </h2>
//             <div className="w-10 h-1.5 rounded bg-[#1777fa] mb-6"></div>
//             <div className="mb-0 text-base text-[#1d406a] font-normal" style={{ fontFamily: FONTS.body, lineHeight: "2" }}>
//               {content.commitmentDescription}
//             </div>
//           </InViewMotion>
//           <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: 35 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
//             <div className="bg-[#f5fafd] rounded-lg shadow-lg border border-[#c2e6fd] p-10">
//               <div className="text-[#1777fa] text-4xl mb-2" style={{ fontFamily: FONTS.display }}>"</div>
//               <h3 className="text-xl mb-2 font-bold text-[#153054] font-serif">{content.joinTitle}</h3>
//               <div className="text-sm text-[#4774ba]" style={{ fontFamily: FONTS.body }}>
//                 {content.joinDescription}
//               </div>
//             </div>
//           </InViewMotion>
//         </div>
//       </section>
//       {/* CTA */}
//       <section className="py-14 px-3 bg-[#f1f7fd] text-center relative overflow-hidden">
//         <InViewMotion>
//           <SectionLabel>Get Started</SectionLabel>
//           <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold mb-2 text-[#183d62] font-serif">
//             {content.ctaTitle}
//           </h2>
//           <div className="mb-5 text-base md:text-lg text-[#2568b0] font-normal opacity-90" style={{ fontFamily: FONTS.body }}>
//             {content.ctaDescription}
//           </div>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.99 }}
//             className="inline-block px-12 py-4 bg-[#1777fa] text-white font-medium uppercase text-sm rounded-lg border border-[#1777fa] mr-3 shadow"
//             style={{
//               fontFamily: FONTS.body,
//               letterSpacing: "0.13em"
//             }}
//           >Contact Us</motion.a>
//           <motion.a
//             href="#services"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.99 }}
//             className="inline-block px-12 py-4 bg-transparent text-[#1777fa] font-medium uppercase text-sm rounded-lg border border-[#1777fa] hover:bg-[#eaf2fc]"
//             style={{
//               fontFamily: FONTS.body,
//               letterSpacing: "0.13em"
//             }}
//           >Our Services</motion.a>
//           <div className="mx-auto mt-12 rounded-full bg-[#1777fa]/20 w-[2px] h-[60px]"></div>
//         </InViewMotion>
//       </section>
//     </div>
//   );
// }


import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Design Tokens ──────────────
const COLORS = {
  primary: "#1777fa",
  primaryLight: "#e3f0ffbb",
  bgLight: "#f2f5fa",
  bgDark: "#ffffff",
  heading: "#232a35",
  subheading: "#43607c",
  desc: "#244260",
  muted: "#8c9ab3",
  white: "#fff"
};

const FONTS = {
  display: "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif",
  body: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
  accent: "'Cormorant SC', 'Palatino Linotype', Georgia, serif",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};

// --- Unified About Us Content ---
const ABOUT_UNIFIED = {
  heroTitle: "Immigration Options 4 U",
  heroSubtitle: "Your Gateway to Global Success: One Team. Multiple Destinations. Limitless Possibilities.",
  heroTag: "Global · Dubai · Hungary · UK · More",
  introTitle: "Empowering Ambitions, Building Futures – Worldwide",
  introDescription:
    "At Immigration Options 4 U, we turn international dreams into tangible realities for entrepreneurs, investors, families, and professionals. Our expertise spans business setup, legal compliance, investment migration, and residency or citizenship across the world's leading jurisdictions. One proven team—serving you, wherever you want to grow.",
  leftSectionTitle: "Why Work With Us?",
  leftSectionDescription:
    "A single, trusted partner for all your business, investment, and immigration aspirations.",
  leftPoints: [
    "Decades of global expertise and local insight",
    "Personalized pathways for all major destinations",
    "Transparent, ethical, and client-centric approach",
    "Comprehensive support: company setup to family relocation"
  ],
  rightSectionTitle: "What We Do",
  rightSectionDescription:
    "From idea to integration—tailored, end-to-end services for your entire international journey.",
  rightPoints: [
    "Business formation (Mainland, Free Zone, Offshore)",
    "Visa, residency & citizenship options",
    "Investment and Golden Visa guidance",
    "Corporate compliance & tax advisory",
    "Banking, PRO services & legal documentation",
    "Relocation, family & post-approval support"
  ],
  whyChooseTitle: "Why Choose Immigration Options 4 U?",
  whyChooseFeatures: [
    { title: "Commitment to Excellence", icon: "◆" },
    { title: "Global Expertise, Local Insight", icon: "◆" },
    { title: "End-to-End Solutions", icon: "◆" },
    { title: "Transparent & Ethical Processes", icon: "◆" },
    { title: "Dedicated Client Support", icon: "◆" },
    { title: "Proven Track Record", icon: "◆" },
  ],
  commitmentTitle: "Your Goals, Our Commitment",
  commitmentDescription:
    "At Immigration Options 4 U, your global ambitions drive everything we do. Our team delivers personalized service, updated expertise, and unwavering support—so you reach your business or residency destination with confidence and clarity.",
  joinTitle: "Join the Immigration Options 4 U Family",
  joinDescription:
    "Start your international journey with our trusted team and discover a smarter, simpler path to success—no matter where you want to go.",
  ctaTitle: "Ready to Start Your Journey?",
  ctaDescription: "Your dedicated global partners are here to guide you. One team—many destinations—endless possibilities.",
  stat: [
    { value: "15+", label: "Years Experience" },
    { value: "1700+", label: "Clients Served" },
    { value: "98%", label: "Success Rate" }
  ]
};

const ABOUT_US_TEXT = [
  "Immigration Options 4 U was established to offer our clients immigration and business services they can truly trust. Our ethos: provide fully inclusive, custom-crafted solutions for every client—covering everything from visas and business plans to company formation, compliance, tax, and relocation support.",
  "Our international team’s extensive experience and relationships with specialists, lawyers, and consultants worldwide mean you benefit from up-to-date expertise, true professionalism, and a seamless process wherever your journey leads.",
  "We believe transparency and support are vital—so you always receive clear guidance and up-front costs. Moving to a new country or expanding your business can be daunting. With Immigration Options 4 U at your side, you focus on your future while we expertly handle each step of your application."
];

function BlueDivider() {
  return (
    <div className="mx-auto flex items-center gap-3 max-w-[180px] my-8">
      <div className="flex-1 h-[2px] bg-[#1777fa]" />
      <div className="w-3 h-3 rounded-[2px] bg-[#1777fa] rotate-45 flex-shrink-0" />
      <div className="flex-1 h-[2px] bg-[#1777fa]" />
    </div>
  );
}
function SectionLabel({ children }) {
  return (
    <div className="uppercase tracking-[.19em] text-[#1777fa] font-semibold mb-2 text-xs" style={{ fontFamily: FONTS.accent }}>
      {children}
    </div>
  );
}
function InViewMotion({ children, variants = fadeUp, className = "", style = {} }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
function StatCard({ value, label }) {
  return (
    <div className="px-2 sm:px-8 py-9 text-center border-l border-[#aad8fa] bg-[#f5fafd] first:border-l-0">
      <div className="font-bold text-[2.5rem] text-[#123770] drop-shadow" style={{ fontFamily: FONTS.display, lineHeight: 1 }}>
        {value}
      </div>
      <div className="text-xs uppercase text-[#6a7da0] tracking-wider mt-2" style={{ fontFamily: FONTS.body }}>
        {label}
      </div>
    </div>
  );
}
function FeatureCard({ title }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-all rounded-lg cursor-pointer border group
        ${hovered ? "border-[#1777fa] bg-[#e6f1fd]" : "border-[#c1d6ed] bg-[#f3f7fb]"}`}
      style={{
        padding: "28px 24px",
        boxShadow: hovered ? `0 2px 16px 0 #a7cfff` : undefined,
        transition: "all 0.35s"
      }}
    >
      <div className={`${hovered ? "text-[#005bb3]" : "text-[#1777fa]"} text-xs tracking-wider mb-2`}>◆</div>
      <div
        className={`font-bold text-lg mb-1 ${hovered ? "text-[#182a41]" : "text-[#244260]"} drop-shadow font-serif`}
        style={{ transition: "color 0.35s" }}
      >
        {title}
      </div>
      <div className={`text-xs ${hovered ? "text-[#244260]" : "text-[#627591]"}`} style={{ fontFamily: FONTS.body }}>
        Excellence, reliability, and modern strategies tailored to your journey.
      </div>
    </motion.div>
  );
}

// ─── Main AboutUs Page ──────────────────────────────────
export default function AboutUs() {
  const content = ABOUT_UNIFIED;
  return (
    <div className="min-h-screen w-full bg-[#f3f8fd] overflow-x-hidden" style={{ fontFamily: FONTS.body }}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Cormorant+SC:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; background: #f3f8fd !important; color: #25416a; }
        `}
      </style>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-[#eaf5ff] py-24 overflow-hidden">
        {/* Background Dots Pattern */}
        <div className="absolute z-0 inset-0 pointer-events-none" aria-hidden>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="pattern-dots" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="2" fill="#53a5f6" fillOpacity={.13} />
                <circle cx="56" cy="56" r="2" fill="#53a5f6" fillOpacity={.13} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-dots)" />
          </svg>
        </div>
        {/* Decorative Circles (left/right) */}
        <div className="absolute top-[-80px] left-[-80px] w-[340px] h-[340px] bg-[#1b83f350] rounded-full blur-[3px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-90px] right-[-80px] w-[320px] h-[320px] bg-[#1b83f324] rounded-full blur-[3px] pointer-events-none z-0"></div>
        <div className="z-10 relative w-full">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              // no country switching: keep unified
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mb-6 uppercase text-[#2261ae] tracking-[0.3em] text-xs font-semibold"
                style={{ fontFamily: FONTS.accent, opacity: 0.86 }}
              >
                {content.heroTag}
              </motion.div>

              <h1 className="inline-block  text-[#142f59] mb-6 rounded-lg px-8 py-2  font-serif font-bold"
                style={{
                  fontSize: "clamp(36px,8vw,72px)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.01em"
                }}>
                {content.heroTitle}
              </h1>
              <div className="mx-auto mb-8 mt-4 rounded h-[4px] w-16 bg-[#2261ae]/80"></div>
              <p className="mx-auto mb-10 max-w-2xl text-[18px] md:text-[22px] font-normal text-[#18549f]" style={{
                fontFamily: FONTS.body,
                lineHeight: 1.7,
                letterSpacing: "0.01em"
              }}>
                {content.heroSubtitle}
              </p>
              {/* No country switcher */}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Stats */}
        <div className="absolute left-0 right-0 bottom-0 grid sm:grid-cols-3 bg-[#f4f9fd] border-t border-[#bce6ff] shadow-[0_-2px_10px_0_rgba(134,199,255,0.09)] z-20">
          {content.stat.map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#fcfeff] py-20 px-3">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: -56 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-[2.4rem] md:text-[3.2rem] font-bold mb-4 leading-tight text-[#19365a] font-serif">
              Who We <span className="italic text-[#1777fa]">Really</span> Are
            </h2>
            <div className="w-14 h-1.5 rounded bg-[#1777fa] mb-1"></div>
          </InViewMotion>
          <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: 56 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <div>
              {ABOUT_US_TEXT.map((t, i) =>
                <p key={i} className="mb-6 text-base leading-8 text-[#316094]" style={{ fontFamily: FONTS.body }}>{t}</p>
              )}
            </div>
          </InViewMotion>
        </div>
      </section>

      {/* Unified Intro/Mission */}
      <section className="relative py-20 bg-[#e8f4fc] overflow-hidden px-4">
        <div className="absolute left-0 right-0 top-0 h-[4px] bg-gradient-to-r from-transparent via-[#c5defd] to-transparent opacity-90"></div>
        <AnimatePresence mode="wait">
          <motion.div
            initial="hidden" animate="show" exit="hidden"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center relative z-10"
          >
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="text-[2rem] md:text-[2.9rem] font-bold mb-6 leading-tight text-[#1c3860] font-serif">
              {content.introTitle}
            </h2>
            <BlueDivider />
            <div className="mb-2 text-base md:text-lg text-[#32609a] font-normal" style={{
              fontFamily: FONTS.body,
              lineHeight: 1.8,
            }}>{content.introDescription}</div>
          </motion.div>
        </AnimatePresence>
      </section>
      {/* Why & What We Do */}
      <section className="bg-[#f6faff] py-20 px-3">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          {/* Left: Why Work With Us */}
          <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: -44 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h3 className="text-[1.8rem] md:text-[2.3rem] font-bold mb-4 text-[#263552] font-serif">
              {content.leftSectionTitle}
            </h3>
            <p className="mb-8 text-base text-[#4774ba]" style={{ fontFamily: FONTS.body, lineHeight: "2" }}>
              {content.leftSectionDescription}
            </p>
            <ul className="flex flex-col gap-4 pl-0 list-none">
              {content.leftPoints.map((pt, i) =>
                <li key={i} className="flex items-start text-[#27518f] text-sm font-normal gap-2">
                  <span className="text-[#1777fa] text-xs mt-1.5">◆</span>
                  {pt}
                </li>
              )}
            </ul>
          </InViewMotion>
          {/* Right: Services */}
          <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <SectionLabel>Services</SectionLabel>
            <h3 className="text-[1.8rem] md:text-[2.3rem] font-bold mb-4 text-[#263552] font-serif">
              {content.rightSectionTitle}
            </h3>
            <p className="mb-8 text-base text-[#4774ba]" style={{ fontFamily: FONTS.body, lineHeight: "2" }}>
              {content.rightSectionDescription}
            </p>
            <ul className="flex flex-col gap-4 pl-0 list-none">
              {content.rightPoints.map((pt, i) =>
                <li key={i} className={`flex items-start text-[#27518f] text-sm font-normal gap-2 pb-3 ${i < content.rightPoints.length - 1 ? "border-b border-[#bce6ff]" : ""}`}>
                  <span className="text-[#1777fa] text-xs mt-1.5">◆</span>
                  {pt}
                </li>
              )}
            </ul>
          </InViewMotion>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-3 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto">
          <InViewMotion>
            <div className="text-center mb-12">
              <SectionLabel>Our Edge</SectionLabel>
              <h2 className="text-[2.5rem] md:text-[3.3rem] font-bold mb-1 leading-tight text-[#19365a] font-serif">
                {content.whyChooseTitle}
              </h2>
              <div className="mx-auto mt-2 mb-0 rounded h-[4px] w-16 bg-[#1777fa]"></div>
            </div>
          </InViewMotion>
          <AnimatePresence mode="wait">
            <motion.div
              initial="hidden" animate="show" exit="hidden" variants={fadeIn}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-3 gap-5"
              >
                {content.whyChooseFeatures.map((f, i) => (
                  <FeatureCard key={i} title={f.title} />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative py-20 bg-[#e6f2fa] overflow-hidden px-4">
        <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#b1dbf8] rounded-full blur-md pointer-events-none"></div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: -42 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <SectionLabel>Commitment</SectionLabel>
            <h2 className="text-[2.1rem] md:text-[2.8rem] font-bold mb-4 text-[#173763] italic font-serif">
              "{content.commitmentTitle}"
            </h2>
            <div className="w-10 h-1.5 rounded bg-[#1777fa] mb-6"></div>
            <div className="mb-0 text-base text-[#1d406a] font-normal" style={{ fontFamily: FONTS.body, lineHeight: "2" }}>
              {content.commitmentDescription}
            </div>
          </InViewMotion>
          <InViewMotion variants={{ ...fadeUp, hidden: { opacity: 0, x: 35 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <div className="bg-[#f5fafd] rounded-lg shadow-lg border border-[#c2e6fd] p-10">
              <div className="text-[#1777fa] text-4xl mb-2" style={{ fontFamily: FONTS.display }}>"</div>
              <h3 className="text-xl mb-2 font-bold text-[#153054] font-serif">{content.joinTitle}</h3>
              <div className="text-sm text-[#4774ba]" style={{ fontFamily: FONTS.body }}>
                {content.joinDescription}
              </div>
            </div>
          </InViewMotion>
        </div>
      </section>
      {/* CTA */}
      <section className="py-14 px-3 bg-[#f1f7fd] text-center relative overflow-hidden">
        <InViewMotion>
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold mb-2 text-[#183d62] font-serif">
            {content.ctaTitle}
          </h2>
          <div className="mb-5 text-base md:text-lg text-[#2568b0] font-normal opacity-90" style={{ fontFamily: FONTS.body }}>
            {content.ctaDescription}
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.99 }}
            className="inline-block px-12 py-4 bg-[#1777fa] text-white font-medium uppercase text-sm rounded-lg border border-[#1777fa] mr-3 shadow"
            style={{
              fontFamily: FONTS.body,
              letterSpacing: "0.13em"
            }}
          >Contact Us</motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            className="inline-block px-12 py-4 bg-transparent text-[#1777fa] font-medium uppercase text-sm rounded-lg border border-[#1777fa] hover:bg-[#eaf2fc]"
            style={{
              fontFamily: FONTS.body,
              letterSpacing: "0.13em"
            }}
          >Our Services</motion.a>
          <div className="mx-auto mt-12 rounded-full bg-[#1777fa]/20 w-[2px] h-[60px]"></div>
        </InViewMotion>
      </section>
    </div>
  );
}