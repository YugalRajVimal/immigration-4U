// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const SERVICES_BY_COUNTRY = {
//   DUBAI: {
//     heading: "Our Premium Services",
//     description:
//       "Delivering seamless business setup, compliance, and financial solutions in Dubai.",
//     services: [
//       {
//         title: "Complete Business Formation",
//         description:
//           "End-to-end support for Mainland, Free Zone, and Offshore business setup. From choosing the right jurisdiction to handling all government procedures.",
//         features: [
//           "Mainland, Free Zone & Offshore Setup",
//           "Trade License Assistance",
//           "Jurisdiction Selection Guidance",
//           "Complete Admin & Legal Processing",
//         ],
//       },
//       {
//         title: "Visa & Immigration Services",
//         description:
//           "Simplifying visa processes for entrepreneurs, employees, and families to ensure a seamless transition into Dubai.",
//         features: [
//           "Investor & Partner Visas",
//           "Employee Visa Processing",
//           "Family Visa Support",
//           "Immigration Formalities Management",
//         ],
//       },
//       {
//         title: "Corporate Compliance & Taxation",
//         description:
//           "Ensure your business stays compliant with UAE regulations including VAT, ESR, and the newly implemented Corporate Tax.",
//         features: [
//           "Corporate Tax Registration",
//           "Corporate Tax Filing & Advisory",
//           "ESR Compliance",
//           "VAT Registration & Returns",
//         ],
//       },
//       {
//         title: "Auditing & Accounting",
//         description:
//           "Accurate financial reporting with internal & external audit services to meet UAE regulatory standards.",
//         features: [
//           "Internal & External Audits",
//           "Bookkeeping & Financial Records",
//           "Financial Planning & Forecasting",
//           "Business Valuation",
//         ],
//       },
//       {
//         title: "Legal Advisory & Documentation",
//         description:
//           "Full legal support including MOA drafting, trade license documentation, and regulatory compliance.",
//         features: [
//           "MOA / AOA Drafting",
//           "Trade License Documentation",
//           "Legal Structuring Advice",
//           "Regulatory Document Submission",
//         ],
//       },
//       {
//         title: "PRO & Document Clearing",
//         description:
//           "Fast, efficient document clearing services handled by expert PRO officers.",
//         features: [
//           "Government Document Processing",
//           "Labor & Immigration Handling",
//           "Notary & Attestation Assistance",
//           "Full PRO Support",
//         ],
//       },
//       {
//         title: "Financial & Tax Consulting",
//         description:
//           "Advanced UAE tax consultancy including transfer pricing, international taxation, and corporate tax planning.",
//         features: [
//           "Corporate Tax Impact Assessment",
//           "Transfer Pricing Compliance",
//           "Tax Residency Advisory",
//           "Foreign Tax Credit Optimization",
//         ],
//       },
//     ],
//   },
//   HUNGARY: {
//     heading: "Our Golden Visa Services",
//     description:
//       "Complete support for securing your Hungarian Golden Visa and European residency with expert guidance.",
//     services: [
//       {
//         title: "Initial Consultation & Due Diligence",
//         description:
//           "Personalized consultation to assess your eligibility and explore the best investment pathway for your business goals.",
//         features: [
//           "Free Discovery Call",
//           "Eligibility Assessment",
//           "Strategic Alignment Review",
//           "Investment Options Overview",
//         ],
//       },
//       {
//         title: "Investment Selection & Guidance",
//         description:
//           "Expert guidance in choosing the right investment option from real estate funds, direct property, or public trust donations.",
//         features: [
//           "Real Estate Investment Funds (€250,000)",
//           "Direct Property Acquisition (€500,000)",
//           "Public Trust Donations (€1M)",
//           "Investment Risk Assessment",
//         ],
//       },
//       {
//         title: "Documentation Compilation",
//         description:
//           "Comprehensive support in gathering and preparing all necessary documents for your application.",
//         features: [
//           "Document Preparation Guidance",
//           "Dedicated Case Advisor Support",
//           "All Required Paperwork Assembly",
//           "Legal Formalities Handling",
//         ],
//       },
//       {
//         title: "Comprehensive Screening & Verification",
//         description:
//           "Thorough background checks and due diligence to safeguard your investment and application.",
//         features: [
//           "Background Check Processing",
//           "Financial Verification",
//           "Eligibility Confirmation",
//           "Investment Safeguarding Measures",
//         ],
//       },
//       {
//         title: "Application Submission & Monitoring",
//         description:
//           "Professional submission of your application with close monitoring throughout the approval process.",
//         features: [
//           "Professional Application Submission",
//           "Approval Process Monitoring",
//           "Regular Status Updates",
//           " 6-8 Week Fast-Track Processing",
//         ],
//       },
//       {
//         title: "Biometrics & ID Card Issuance",
//         description:
//           "Completion of biometrics appointment and issuance of Hungarian residency ID cards for you and dependents.",
//         features: [
//           "Biometrics Appointment Coordination",
//           "ID Card Issuance",
//           "Dependent ID Processing",
//           "Residency Documentation",
//         ],
//       },
//       {
//         title: "Investment Completion & Support",
//         description:
//           "Final investment transaction processing and ongoing support for your European residency journey.",
//         features: [
//           "90-Day Investment Completion",
//           "Residency Status Activation",
//           "Corporate Tax Benefit Guidance",
//           "Ongoing Immigration Support",
//         ],
//       },
//     ],
//   },
//   UK: {
//     heading: "Our Premium UK Immigration Services",
//     description:
//       "Expert guidance for business immigration, skilled workers, entrepreneurs, and family reunification in the UK.",
//     services: [
//       {
//         title: "Business Immigration Solutions",
//         description:
//           "Comprehensive pathways for international business professionals to establish and expand operations in the UK.",
//         features: [
//           "Executive & Specialist Personnel Transfer",
//           "Graduate Trainee Pathway",
//           "UK Business Establishment Route",
//           "International Service Provider Support",
//         ],
//       },
//       {
//         title: "Premier Talent Visa Support",
//         description:
//           "Assistance for recognized leaders and emerging talents across diverse sectors to secure UK residency.",
//         features: [
//           "Endorsement Coordination",
//           "Visa Application Preparation",
//           "Leadership Path Guidance",
//           "Research Fellowship Support",
//         ],
//       },
//       {
//         title: "Skilled Worker Visa",
//         description:
//           "Streamlined support for UK employers to recruit international talent in specialized roles.",
//         features: [
//           "Occupational Classification",
//           "Salary Threshold Guidance",
//           "English Language Support",
//           "Certificate of Sponsorship Assistance",
//         ],
//       },
//       {
//         title: "Employer Sponsorship Licence",
//         description:
//           "Full support for businesses to obtain sponsorship licenses and hire international talent legally.",
//         features: [
//           "Licence Application Support",
//           "Certificate Assignment Management",
//           "Visa Application Coordination",
//           "Compliance & Monitoring Setup",
//         ],
//       },
//       {
//         title: "Entrepreneur Visa Routes",
//         description:
//           "Guidance for innovative entrepreneurs to launch new ventures or scale existing businesses in the UK.",
//         features: [
//           "New Venture Visa Support",
//           "Advanced Innovator Visa Pathway",
//           "Endorsement Securing",
//           "Business Plan Optimization",
//         ],
//       },
//       {
//         title: "Partner & Family Visas",
//         description:
//           "Complete support for spouses, fiancés, and dependents to join their loved ones in the UK.",
//         features: [
//           "Spouse Visa Guidance",
//           "Fiancé Visa Support",
//           "Financial Requirements Planning",
//           "Permanent Residency Path",
//         ],
//       },
//       {
//         title: "Asylum & Human Rights Applications",
//         description:
//           "Compassionate support for those seeking refuge and protection under human rights provisions.",
//         features: [
//           "Asylum Application Support",
//           "Fresh Claims Preparation",
//           "Human Rights Applications",
//           "Appeal Representation",
//         ],
//       },
//     ],
//   },
// };

// export default function ServicesSection() {
//   const [preferredCountry, setPreferredCountry] = useState("DUBAI");

//   useEffect(() => {
//     const item = localStorage.getItem("preferred_country") || "HUNGARY";
//     setPreferredCountry(item);
//   }, []);

//   const content = SERVICES_BY_COUNTRY[preferredCountry] || SERVICES_BY_COUNTRY.DUBAI;
//   const services = content.services;

//   return (
//     <section className="w-full bg-white pb-20 pt-10 text-gray-900">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-wide">
//             {content.heading}
//           </h2>
//           <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
//             {content.description}
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 bg-white border border-gray-200 rounded-xl hover:border-yellow-500 transition-all group shadow-sm"
//             >
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-yellow-600 transition text-gray-900 font-serif">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 mb-6">{service.description}</p>

//               <ul className="space-y-2 text-gray-800">
//                 {service.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <span className="text-yellow-500 mt-1">✔</span> {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import { motion } from "framer-motion";

// Universal Services Data (not country-specific)
const SERVICES = {
  heading: "Our Premium Services",
  description:
    "Delivering seamless business setup, compliance, legal, tax, and immigration solutions tailored to your global needs.",
  services: [
    {
      title: "Complete Business Formation",
      description:
        "End-to-end support for Mainland, Free Zone, and Offshore business setup. From choosing the right jurisdiction to handling all government procedures.",
      features: [
        "Mainland, Free Zone & Offshore Setup",
        "Trade License Assistance",
        "Jurisdiction Selection Guidance",
        "Complete Admin & Legal Processing",
      ],
    },
    {
      title: "Visa & Immigration Services",
      description:
        "Simplifying visa processes for entrepreneurs, employees, and families to ensure a seamless transition.",
      features: [
        "Investor & Partner Visas",
        "Employee Visa Processing",
        "Family Visa Support",
        "Immigration Formalities Management",
      ],
    },
    {
      title: "Corporate Compliance & Taxation",
      description:
        "Ensure your business stays compliant with regulations including VAT, ESR, corporate tax and more.",
      features: [
        "Corporate Tax Registration",
        "Corporate Tax Filing & Advisory",
        "ESR Compliance",
        "VAT Registration & Returns",
      ],
    },
    {
      title: "Auditing & Accounting",
      description:
        "Accurate financial reporting with internal & external audit services to meet regulatory standards.",
      features: [
        "Internal & External Audits",
        "Bookkeeping & Financial Records",
        "Financial Planning & Forecasting",
        "Business Valuation",
      ],
    },
    {
      title: "Legal Advisory & Documentation",
      description:
        "Full legal support including entity formation, documentation, and regulatory compliance.",
      features: [
        "MOA / AOA Drafting",
        "Trade License Documentation",
        "Legal Structuring Advice",
        "Regulatory Document Submission",
      ],
    },
    {
      title: "PRO & Document Clearing",
      description:
        "Fast, efficient document clearing services handled by expert PRO officers.",
      features: [
        "Government Document Processing",
        "Labor & Immigration Handling",
        "Notary & Attestation Assistance",
        "Full PRO Support",
      ],
    },
    {
      title: "Financial & Tax Consulting",
      description:
        "Advanced tax consultancy including transfer pricing, international taxation, and corporate tax planning.",
      features: [
        "Corporate Tax Impact Assessment",
        "Transfer Pricing Compliance",
        "Tax Residency Advisory",
        "Foreign Tax Credit Optimization",
      ],
    },
  ],
};

export default function ServicesSection() {
  const { heading, description, services } = SERVICES;

  return (
    <section className="w-full bg-white pb-20 pt-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-wide">
            {heading}
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white border border-gray-200 rounded-xl hover:border-yellow-500 transition-all group shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-yellow-600 transition text-gray-900 font-serif">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 text-gray-800">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}