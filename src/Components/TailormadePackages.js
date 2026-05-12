// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const PACKAGES_CONTENT = {
//   DUBAI: {
//     heading: "Tailormade Business Packages",
//     description:
//       "Bespoke business solutions designed for entrepreneurs and investors in Dubai. Choose the package that aligns with your vision and business objectives.",
//     packages: [
//       {
//         title: "Startup Essentials",
//         description:
//           "Perfect for new entrepreneurs. A cost-effective package covering basic registration, licensing, and PRO services to launch your new business smoothly.",
//       },
//       {
//         title: "Growth Accelerator",
//         description:
//           "Ideal for rapidly scaling businesses. Includes advanced compliance, legal support, detailed market analysis, and strategic planning services.",
//       },
//       {
//         title: "Free Zone Innovator",
//         description:
//           "Designed for Dubai Free Zone businesses with benefits like 100% foreign ownership, tax exemptions, and customized visa assistance.",
//       },
//       {
//         title: "Mainland Master",
//         description:
//           "Tailored for companies establishing themselves in Dubai Mainland. Includes legal advisory, local market integration, and business networking support.",
//       },
//       {
//         title: "Offshore Pioneer",
//         description:
//           "Suitable for international businesses seeking offshore advantages. Includes tax-efficient jurisdiction setup, banking assistance, and global advisory.",
//       },
//       {
//         title: "Elite Corporate",
//         description:
//           "A premium end-to-end solution for established corporations. Includes VIP legal services, financial auditing, accounting, and high-level consulting.",
//       },
//     ],
//   },
//   HUNGARY: {
//     heading: "Golden Visa Investment Packages",
//     description:
//       "Flexible and tailored packages designed to secure your Hungarian Golden Visa and European residency. Choose the investment option and support level that fits your needs.",
//     packages: [
//       {
//         title: "Discovery & Consultation",
//         description:
//           "Perfect for explorers. Includes free discovery call, comprehensive eligibility assessment, investment option overview, and strategic guidance on European residency planning.",
//       },
//       {
//         title: "Real Estate Investor",
//         description:
//           "Ideal for passive investors. €250,000 investment in Real Estate Investment Funds with steady returns, diversified portfolio exposure, and minimal management requirements.",
//       },
//       {
//         title: "Property Acquisition",
//         description:
//           "For hands-on investors. €500,000 direct real estate investment in Hungary's robust property market with appreciation potential, rental income opportunities, and tangible asset ownership.",
//       },
//       {
//         title: "Philanthropic Investor",
//         description:
//           "Premium charitable investment. €1 million non-refundable public trust donation with substantial tax incentives, community impact, and enhanced residency benefits.",
//       },
//       {
//         title: "Express Processing",
//         description:
//           "Fast-track service for time-sensitive investors. Priority application handling with 6-8 weeks processing, dedicated case management, and expedited approvals.",
//       },
//       {
//         title: "Family Residency Elite",
//         description:
//           "Comprehensive family solution. Complete 10-year family residency permit for you, spouse, and dependents with zero minimum stay requirements and renewal options.",
//       },
//     ],
//   },
//   UK: {
//     heading: "Tailormade UK Immigration Packages",
//     description:
//       "Comprehensive immigration solutions designed for entrepreneurs, professionals, and investors in the United Kingdom. Select the package that aligns with your UK objectives.",
//     packages: [
//       {
//         title: "Business Establishment",
//         description:
//           "Perfect for entrepreneurs establishing UK operations. Includes business immigration pathway guidance, visa support, legal documentation, and compliance management.",
//       },
//       {
//         title: "Skilled Talent Package",
//         description:
//           "Ideal for specialized professionals. Covers Skilled Worker visa support, sponsorship license assistance, English language certification, and employment documentation.",
//       },
//       {
//         title: "Entrepreneur Accelerator",
//         description:
//           "For innovative startups and scaling businesses. Includes New Venture Visa support, Advanced Innovator pathway, endorsement coordination, and business planning assistance.",
//       },
//       {
//         title: "Corporate Solutions",
//         description:
//           "Tailored for multinational corporations. Covers international business mobility solutions, executive personnel transfer, corporate secondment, and global talent mobility.",
//       },
//       {
//         title: "Family & Settlement",
//         description:
//           "Complete family reunification solution. Includes spouse visas, family visas, permanent residency guidance, and British citizenship naturalization support.",
//       },
//       {
//         title: "Investment & Prestige",
//         description:
//           "Premium solution for high-net-worth individuals. Premier Investment Visa support for £2 million+ investments, priority processing, and settlement fast-track pathways.",
//       },
//     ],
//   },
// };

// export default function TailormadePackages() {
//   const [preferredCountry, setPreferredCountry] = useState("DUBAI");

//   useEffect(() => {
//     const item = localStorage.getItem("preferred_country") || "DUBAI";
//     setPreferredCountry(item);
//   }, []);

//   const content = PACKAGES_CONTENT[preferredCountry] || PACKAGES_CONTENT.DUBAI;
//   const businessPackages = content.packages;

//   return (
//     <section className="w-full bg-[#f5f9ff] py-20 text-[#17223b]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* SECTION HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent tracking-wide font-serif">
//             {content.heading}
//           </h2>

//           <p className="text-[#4b5563] mt-4 max-w-2xl mx-auto text-lg">
//             {content.description}
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {businessPackages.map((pkg, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 bg-white border border-blue-100 rounded-xl 
//                          hover:shadow-xl hover:border-blue-600 transition-all group"
//             >
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors font-serif">
//                 {pkg.title}
//               </h3>

//               <p className="text-[#4b5563] leading-relaxed">{pkg.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

// Unified, non-country-specific packages content
const PACKAGES_CONTENT = {
  heading: "Tailormade Business & Immigration Packages",
  description:
    "Versatile, bespoke solutions for entrepreneurs, investors, and professionals worldwide. Pick the package that fits your vision, growth plans, or relocation needs—no matter your destination.",
  packages: [
    {
      title: "Startup Essentials",
      description:
        "Perfect for new entrepreneurs. A cost-effective package covering basic registration, licensing, and PRO services to launch your new business smoothly.",
    },
    {
      title: "Growth Accelerator",
      description:
        "Ideal for rapidly scaling businesses. Includes advanced compliance, legal support, detailed market analysis, and strategic planning services.",
    },
    {
      title: "Free Zone or International Innovator",
      description:
        "Designed for Free Zone or similar jurisdiction businesses, offering benefits like 100% foreign ownership, tax exemptions, and customized visa assistance.",
    },
    {
      title: "Mainland or Onshore Master",
      description:
        "Tailored for businesses establishing themselves in the local market. Includes legal advisory, market integration, and networking support.",
    },
    {
      title: "Offshore Pioneer",
      description:
        "Suitable for international/offshore ventures. Benefit from tax-efficient setups, banking assistance, and global business advisory.",
    },
    {
      title: "Elite Corporate",
      description:
        "Premium end-to-end solutions for established organizations. Includes VIP legal services, financial auditing, accounting, and high-level consulting.",
    },
    {
      title: "Investor & Migration Pathways",
      description:
        "Flexible options for global investment migration: real estate, funds, philanthropy, or business routes, with comprehensive residency, relocation, or family unification support.",
    },
    {
      title: "Express & Premium Service",
      description:
        "For those needing fast-track processing: priority handling, expedited approvals, dedicated case management, and white-glove service.",
    },
    {
      title: "Family & Settlement Solutions",
      description:
        "Dedicated packages for dependents and family reunification, including long-term residency, partner/spouse visas, and citizenship guidance.",
    },
  ],
};

export default function TailormadePackages() {
  const content = PACKAGES_CONTENT;
  const businessPackages = content.packages;

  return (
    <section className="w-full bg-[#f5f9ff] py-20 text-[#17223b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent tracking-wide font-serif">
            {content.heading}
          </h2>
          <p className="text-[#4b5563] mt-4 max-w-2xl mx-auto text-lg">
            {content.description}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {businessPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white border border-blue-100 rounded-xl 
                         hover:shadow-xl hover:border-blue-600 transition-all group"
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors font-serif">
                {pkg.title}
              </h3>
              <p className="text-[#4b5563] leading-relaxed">{pkg.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}