// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const JOURNEY_CONTENT = {
//   DUBAI: {
//     heading: "The Registration Journey",
//     subtitle:
//       "Your Path to Business Success in Dubai. A simple, transparent, and expertly guided setup process.",
//     steps: [
//       {
//         step: "Initial Consultation",
//         description:
//           "Begin with a personalized consultation to understand your business vision and requirements.",
//       },
//       {
//         step: "Business Plan & Activity Selection",
//         description:
//           "We refine your business plan and help select compliant business activities as per Dubai regulations.",
//       },
//       {
//         step: "Choosing the Right Jurisdiction",
//         description:
//           "Select from Mainland, Free Zone, or Offshore with expert guidance on which suits your business best.",
//       },
//       {
//         step: "Legal Structuring & Documentation",
//         description:
//           "We prepare all legal documents, determine your structure, and handle every submission flawlessly.",
//       },
//       {
//         step: "Trade Name Registration & Licensing",
//         description:
//           "We help you choose a unique trade name and obtain all required licenses for your company.",
//       },
//       {
//         step: "Visa Processing & Immigration",
//         description:
//           "End-to-end visa support for you, your employees, and families—handled with absolute precision.",
//       },
//       {
//         step: "Banking & Financial Setup",
//         description:
//           "Assistance with opening your corporate bank account and establishing financial operations.",
//       },
//       {
//         step: "Final Approval & Setup",
//         description:
//           "We ensure everything is approved and guide you through your official business launch in Dubai.",
//       },
//     ],
//   },
//   HUNGARY: {
//     heading: "The Golden Visa Application Journey",
//     subtitle:
//       "Your Path to European Residency in Hungary. A streamlined, transparent, and expertly managed process.",
//     steps: [
//       {
//         step: "Initial Consultation",
//         description:
//           "Begin with a complimentary, all-inclusive consultation to understand your investment goals and eligibility.",
//       },
//       {
//         step: "High-Level Due Diligence",
//         description:
//           "We conduct preliminary checks to ensure eligibility and strategic alignment with your business objectives.",
//       },
//       {
//         step: "Investment Selection & Guidance",
//         description:
//           "Choose from flexible investment options starting at €250,000 with expert guidance on best fit for your needs.",
//       },
//       {
//         step: "Power of Attorney & Documentation",
//         description:
//           "Facilitate transactions and legal processes remotely by granting POA, or arrange your personal visit to Hungary.",
//       },
//       {
//         step: "Comprehensive Documentation Compilation",
//         description:
//           "Collaborate with your dedicated case advisor to gather and prepare all necessary application documents.",
//       },
//       {
//         step: "Comprehensive Screening & Verification",
//         description:
//           "Undergo thorough due diligence and background verification to safeguard your investment and application.",
//       },
//       {
//         step: "Application Submission & Approval Monitoring",
//         description:
//           "We handle the professional submission and closely monitor your application with typical 6-8 week processing.",
//       },
//       {
//         step: "Biometrics, ID Issuance & Investment Completion",
//         description:
//           "Complete biometrics appointment in Hungary, receive your residency ID card, and finalize your investment within 90 days.",
//       },
//     ],
//   },
//   UK: {
//     heading: "Your UK Immigration Journey",
//     subtitle:
//       "Your Path to Business Success and Residency in the United Kingdom. A professional, transparent, and expertly guided process.",
//     steps: [
//       {
//         step: "Initial Consultation & Assessment",
//         description:
//           "Begin with a personalized consultation to understand your UK immigration goals and eligibility options.",
//       },
//       {
//         step: "Visa Route Selection & Planning",
//         description:
//           "We help you identify the right visa pathway—from business visas to skilled worker routes to investment visas.",
//       },
//       {
//         step: "Endorsement & Sponsorship Coordination",
//         description:
//           "Secure necessary endorsements from recognized bodies or coordinate with UK-based sponsors for your visa application.",
//       },
//       {
//         step: "Documentation Preparation & Submission",
//         description:
//           "We compile all required documents, prepare your application, and ensure flawless submission to the Home Office.",
//       },
//       {
//         step: "Application Review & Processing",
//         description:
//           "Your application is carefully reviewed while we maintain regular communication with immigration authorities.",
//       },
//       {
//         step: "Biometrics & Interviews",
//         description:
//           "Complete mandatory biometrics appointments and any required interviews with full support and preparation.",
//       },
//       {
//         step: "Approval & Status Notification",
//         description:
//           "Receive your visa approval notification and obtain your immigration status documentation from the Home Office.",
//       },
//       {
//         step: "Settlement & Integration Support",
//         description:
//           "We guide you through your final settlement process and provide resources for successful integration into UK life.",
//       },
//     ],
//   },
// };

// export default function RegistrationJourney() {
//   const [preferredCountry, setPreferredCountry] = useState("DUBAI");

//   useEffect(() => {
//     const item = localStorage.getItem("preferred_country") || "DUBAI";
//     setPreferredCountry(item);
//   }, []);

//   const content = JOURNEY_CONTENT[preferredCountry] || JOURNEY_CONTENT.DUBAI;
//   const registrationSteps = content.steps;

//   return (
//     <section className="w-full bg-white py-20 text-[#17223b]">
//       <div className="max-w-3xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-serif">
//             {content.heading}
//           </h2>

//           <p className="text-[#4973B7] mt-4 max-w-2xl mx-auto text-lg">
//             {content.subtitle}
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative border-l border-blue-200 ml-4">
//           {registrationSteps.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="mb-10 ml-6"
//             >
//               {/* Blue Dot */}
//               <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"></span>

//               <h3 className="text-xl font-semibold text-blue-600 tracking-wide">
//                 {index + 1}. {item.step}
//               </h3>

//               <p className="text-[#4b5563] mt-2 leading-relaxed">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

// Unified registration journey content for all countries (no country-wise variation)
const REGISTRATION_JOURNEY = {
  heading: "The Registration Journey",
  subtitle:
    "Your path to business or residency success. A simple, transparent, and expertly guided process—no matter where you're headed.",
  steps: [
    {
      step: "Initial Consultation",
      description:
        "Begin with a personalized consultation to understand your business, investment, or migration vision and requirements.",
    },
    {
      step: "Solution & Pathway Selection",
      description:
        "We help you select the right route—company type, investment, visa, or jurisdiction—based on your goals and eligibility.",
    },
    {
      step: "Documentation & Due Diligence",
      description:
        "All paperwork professionally prepared, and due diligence conducted to ensure compliance and hassle-free approval.",
    },
    {
      step: "Application Submission & Liaison",
      description:
        "We handle every submission step: licenses, investments, government filings, and immigration applications.",
    },
    {
      step: "Approval, Registration & Setup",
      description:
        "Receive approvals, incorporation/visa documents, and we assist you with banking, financial, and legal setup.",
    },
    {
      step: "Post-Approval Support & Integration",
      description:
        "Settle in confidently—activate IDs, fulfill local requirements, and access ongoing support for compliance or growth.",
    },
  ],
};

export default function RegistrationJourney() {
  const content = REGISTRATION_JOURNEY;
  const registrationSteps = content.steps;

  return (
    <section className="w-full bg-white py-20 text-[#17223b]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-serif">
            {content.heading}
          </h2>
          <p className="text-[#4973B7] mt-4 max-w-2xl mx-auto text-lg">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-blue-200 ml-4">
          {registrationSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-6"
            >
              {/* Blue Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"></span>
              <h3 className="text-xl font-semibold text-blue-600 tracking-wide">
                {index + 1}. {item.step}
              </h3>
              <p className="text-[#4b5563] mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}