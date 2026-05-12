// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const CONTACT_CONTENT = {
//   DUBAI: {
//     heroTitle: "Contact Us",
//     heroDescription:
//       "Start your business journey today. We're here to assist with all your business setup and immigration needs in Dubai.",
//     phone: "+971 XX XXX XXXX",
//     email: "info@immigrationoptions4u.com",
//     address: "17th Floor Fahidi Heights, Bur Dubai, Dubai, UAE",
//     formIntro:
//       "Our team will get back to you promptly with tailored solutions for your business setup in Dubai.",
//     mapEmbed:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115632.87718263284!2d55.202516!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4342da52d21d%3A0x11552f4c3fb8c03!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000",
//     faqIntro: "Answers at Your Fingertips: Navigating Your Queries",
//     faqs: [
//       {
//         question: "What are the key steps for setting up a business in Dubai?",
//         answer:
//           "The process includes selecting a business activity, choosing the appropriate legal structure, registering the business name, obtaining the necessary licenses, and completing visa and immigration formalities.",
//       },
//       {
//         question: "Can foreign nationals own 100% of a business in Dubai?",
//         answer:
//           "Yes, in Dubai Free Zones and certain mainland sectors, foreign nationals can own 100% of their business.",
//       },
//       {
//         question: "What kind of visa services does Immigration Options 4 U provide?",
//         answer:
//           "We assist with obtaining investor visas, employee visas, family visas, and handle all related immigration procedures.",
//       },
//       {
//         question: "How long does it take to register a company in Dubai?",
//         answer:
//           "The timeline can vary, but typically, company registration can be completed within a few days to a few weeks, depending on the type of business and the required approvals.",
//       },
//       {
//         question:
//           "What are the differences between Mainland, Free Zone, and Offshore companies in Dubai?",
//         answer:
//           "Mainland companies can operate anywhere in the UAE and beyond, Free Zone companies benefit from tax exemptions and no currency restrictions, and Offshore companies are ideal for international business without a physical presence in the UAE.",
//       },
//     ],
//   },
//   HUNGARY: {
//     heroTitle: "Contact Us",
//     heroDescription:
//       "Start your European residency journey today. We're here to assist with all your Hungarian Golden Visa and residency needs.",
//     phone: "+36 1 XXX XXXX",
//     email: "info@immigrationoptions4u.com",
//     address: "1114 Budapest, Meszoly Utca 4.a, Hungary",
//     formIntro:
//       "Our team will get back to you promptly with tailored solutions for your Hungarian Golden Visa application.",
//     mapEmbed:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.0849901365513!2d19.039164!3d47.497912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6c7c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sBudapest!5e0!3m2!1sen!2shu!4v1700000000000",
//     faqIntro: "Answers About Hungarian Golden Visa: Your Questions Answered",
//     faqs: [
//       {
//         question:
//           "What are the minimum investment requirements for the Hungarian Golden Visa?",
//         answer:
//           "The minimum investment starts at €250,000 in Real Estate Investment Funds. Alternatively, you can invest €500,000 in direct real estate acquisition or €1 million in non-refundable public trust donations.",
//       },
//       {
//         question: "How long does the Hungarian Golden Visa application take?",
//         answer:
//           "Our fast-track service typically completes the application within 6-8 weeks, making it the fastest EU Golden Visa program available.",
//       },
//       {
//         question: "Is there a minimum stay requirement for the Hungarian Golden Visa?",
//         answer:
//           "No, there is zero minimum stay requirement. You can maintain your global business affairs while holding a 10-year renewable residency permit.",
//       },
//       {
//         question: "Can my family members be included in the Golden Visa application?",
//         answer:
//           "Yes, your spouse and dependent children can be included in your application and receive their own 10-year residency permits.",
//       },
//       {
//         question: "What are the taxation benefits of Hungarian residency?",
//         answer:
//           "Hungary offers the EU's lowest corporate tax rate at 9%, along with various tax incentives for foreign investors and favorable conditions for business expansion.",
//       },
//     ],
//   },
//   UK: {
//     heroTitle: "Contact Us",
//     heroDescription:
//       "Start your UK immigration journey today. We're here to assist with all your UK business and immigration needs.",
//     phone: "+44 20 XXXX XXXX",
//     email: "info@immigrationoptions4u.com",
//     address: "First Floor, 30 High Road, Wood Green, London N22 6BX, UK",
//     formIntro:
//       "Our team will get back to you promptly with tailored solutions for your UK immigration needs.",
//     mapEmbed:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.2834719891937!2d-0.1275469!3d51.6150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cde8c7b8c8d%3A0x8c7b8c8d8c7b8c8d!2sWood%20Green!5e0!3m2!1sen!2suk!4v1700000000000",
//     faqIntro: "Answers About UK Immigration: Your Questions Answered",
//     faqs: [
//       {
//         question: "What visa routes are available for entrepreneurs in the UK?",
//         answer:
//           "We offer multiple pathways including the New Venture Visa for startups, Advanced Innovator Visa for scaling businesses, and Traditional Investor routes for high-net-worth individuals.",
//       },
//       {
//         question: "How can I hire international staff in the UK?",
//         answer:
//           "You'll need an Employer Sponsorship Licence and must issue Certificates of Sponsorship to eligible international workers. We guide you through the entire process.",
//       },
//       {
//         question: "What are the requirements for the Skilled Worker Visa?",
//         answer:
//           "You must have a job offer, meet minimum salary thresholds (£25,600), demonstrate English language proficiency (B1 level), and accumulate 70 points through various criteria.",
//       },
//       {
//         question: "How long does it take to get UK residency through business visas?",
//         answer:
//           "Timeline varies by visa type. Business visas typically grant 2-5 years initially, with settlement possible after 5 years of continuous residency on the same visa type.",
//       },
//       {
//         question: "Can family members join me on my UK visa?",
//         answer:
//           "Yes, most work and business visas allow spouse and dependent children to accompany you. We provide full support for family visa applications and permanent residency pathways.",
//       },
//     ],
//   },
// };

// export default function ContactPage() {
//   const [preferredCountry, setPreferredCountry] = useState("DUBAI");

//   useEffect(() => {
//     const item = localStorage.getItem("preferred_country") || "DUBAI";
//     setPreferredCountry(item);
//   }, []);

//   const content = CONTACT_CONTENT[preferredCountry] || CONTACT_CONTENT.DUBAI;

//   return (
//     <div className="bg-white text-[#17223b] min-h-screen">
//       {/* HERO SECTION */}
//       <section className="pb-20 pt-10 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-6xl font-bold font-serif bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent"
//         >
//           {content.heroTitle}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-gray-500 mt-4 text-lg max-w-xl mx-auto"
//         >
//           {content.heroDescription}
//         </motion.p>
//       </section>

//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">
//         {/* CONTACT DETAILS */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-8"
//         >
//           <h2 className="text-3xl font-semibold text-blue-600 font-serif">
//             Get In Touch
//           </h2>

//           <div className="space-y-3">
//             {/* <p className="text-gray-700">
//               <span className="text-blue-600 font-semibold">Phone:</span>
//               <br />
//               {content.phone}
//             </p> */}

//             <p className="text-gray-700">
//               <span className="text-blue-600 font-semibold">Email:</span>
//               <br />
//               {content.email}
//             </p>

//             <p className="text-gray-700">
//               <span className="text-blue-600 font-semibold">Address:</span>
//               <br />
//               {content.address}
//             </p>
//           </div>

//           <p className="text-gray-500 pt-4">{content.formIntro}</p>
//         </motion.div>

//         {/* CONTACT FORM */}
//         <motion.form
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-[#f5f9ff] p-8 rounded-xl border border-blue-100 space-y-6"
//         >
//           <h3 className="text-2xl font-bold text-blue-700 font-serif">
//             Send Us a Message
//           </h3>

//           <div>
//             <label className="text-gray-700">Full Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               placeholder="Your Phone Number"
//               className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-gray-700">Message</label>
//             <textarea
//               rows="4"
//               placeholder="How can we help you?"
//               className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
//               required
//             ></textarea>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg font-semibold text-white"
//           >
//             Submit Message
//           </motion.button>
//         </motion.form>
//       </div>

//       {/* <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full h-[400px]"
//       >
//         <iframe
//           src={content.mapEmbed}
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </motion.div> */}

//       {/* FAQ SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl md:text-4xl font-bold font-serif text-center mb-4 text-blue-700"
//         >
//           Frequently Asked Questions
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-gray-600 text-lg text-center mb-10 font-semibold"
//         >
//           {content.faqIntro}
//         </motion.p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {content.faqs.map((faq, index) => (
//             <div
//               key={index}
//               className={`bg-[#f5f9ff] border border-blue-100 rounded-lg p-6 ${
//                 index === content.faqs.length - 1 && content.faqs.length % 2 === 1
//                   ? "md:col-span-2"
//                   : ""
//               }`}
//             >
//               <span className="block font-semibold text-blue-600 mb-1">
//                 Q{index + 1}: {faq.question}
//               </span>
//               <span className="block text-gray-700">
//                 <span className="text-blue-500 font-semibold">A:</span>{" "}
//                 {faq.answer}
//               </span>
//             </div>
//           ))}
//         </div>
//         <p className="text-gray-600 text-center mt-10 mb-0">
//           For more information or specific queries, feel free to contact{" "}
//           <span className="font-semibold text-blue-700">
//             Immigration Options 4 U
//           </span>{" "}
//           directly.
//         </p>
//       </section>
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

// Unified Contact Content for all countries
const CONTACT_CONTENT = {
  heroTitle: "Contact Us",
  heroDescription:
    "Start your business or immigration journey today. We're here to assist with all your business setup, immigration, and residency needs.",
  phone: "+971 XX XXX XXXX / +36 1 XXX XXXX / +44 20 XXXX XXXX",
  email: "info@immigrationoptions4u.com",
  address: "17th Floor Fahidi Heights, Bur Dubai, Dubai, UAE / 1114 Budapest, Meszoly Utca 4.a, Hungary / First Floor, 30 High Road, Wood Green, London N22 6BX, UK",
  formIntro:
    "Our team will get back to you promptly with tailored solutions for your business setup, immigration, or golden visa application.",
  // General map (can swap as needed)
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115632.87718263284!2d55.202516!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4342da52d21d%3A0x11552f4c3fb8c03!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000",
  faqIntro: "Answers to Frequently Asked Questions: Navigating Your Queries Across Dubai, Hungary, and UK Programs.",
  faqs: [
    {
      question: "What are the key steps for setting up a business or residency?",
      answer:
        "The general process includes selecting an activity or route, choosing the correct legal structure or investment, registering the business/applying for visa, obtaining necessary licenses/permits, and completing all immigration or business formalities.",
    },
    {
      question: "Can foreign nationals own 100% of a business or get residency?",
      answer:
        "In select Free Zones/sectors and through golden visa/investor programs, foreign nationals can fully own their businesses or obtain long-term residency.",
    },
    {
      question: "What kind of services does Immigration Options 4 U provide?",
      answer:
        "We assist with company formation, all types of business/investor visas, golden visa applications (EU/UK), family visas, and comprehensive immigration solutions for Dubai, Hungary, and the UK.",
    },
    {
      question: "How long does the process take for company formation or golden visa approval?",
      answer:
        "The timeline varies: Company registration in Dubai or UK may take from a few days to a few weeks, while Hungarian Golden Visa applications can be completed in 6-8 weeks through fast-track services.",
    },
    {
      question: "Can my family members be included in my visa or business application?",
      answer:
        "Yes, most business and golden visa programs allow your spouse and dependent children to be included, each receiving their own residency or dependent status.",
    },
    {
      question: "What are the benefits of Hungarian/UK residency or Dubai business setup?",
      answer:
        "Benefits include the EU's lowest corporate tax rate in Hungary (9%), tax incentives for investment, global business expansion, the ability to settle in the UK or EU, and favorable conditions for investors and entrepreneurs.",
    },
    {
      question: "What support do you offer for ongoing compliance or post-migration needs?",
      answer:
        "We offer complete support from initial application through post-setup/residency services, including renewals, compliance, and expansion or family reunification assistance.",
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white text-[#17223b] min-h-screen">
      {/* HERO SECTION */}
      <section className="pb-20 pt-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold font-serif bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent"
        >
          {CONTACT_CONTENT.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-500 mt-4 text-lg max-w-xl mx-auto"
        >
          {CONTACT_CONTENT.heroDescription}
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">
        {/* CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-blue-600 font-serif">
            Get In Touch
          </h2>

          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="text-blue-600 font-semibold">Phone:</span>
              <br />
              {CONTACT_CONTENT.phone}
            </p>

            <p className="text-gray-700">
              <span className="text-blue-600 font-semibold">Email:</span>
              <br />
              {CONTACT_CONTENT.email}
            </p>

            <p className="text-gray-700">
              <span className="text-blue-600 font-semibold">Address:</span>
              <br />
              {CONTACT_CONTENT.address}
            </p>
          </div>

          <p className="text-gray-500 pt-4">{CONTACT_CONTENT.formIntro}</p>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#f5f9ff] p-8 rounded-xl border border-blue-100 space-y-6"
        >
          <h3 className="text-2xl font-bold text-blue-700 font-serif">
            Send Us a Message
          </h3>

          <div>
            <label className="text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full mt-2 p-3 bg-white border border-blue-200 rounded-lg text-[#17223b] focus:border-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg font-semibold text-white"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[400px]"
      >
        <iframe
          src={CONTACT_CONTENT.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div> */}

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold font-serif text-center mb-4 text-blue-700"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-600 text-lg text-center mb-10 font-semibold"
        >
          {CONTACT_CONTENT.faqIntro}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONTACT_CONTENT.faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#f5f9ff] border border-blue-100 rounded-lg p-6 ${
                index === CONTACT_CONTENT.faqs.length - 1 && CONTACT_CONTENT.faqs.length % 2 === 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <span className="block font-semibold text-blue-600 mb-1">
                Q{index + 1}: {faq.question}
              </span>
              <span className="block text-gray-700">
                <span className="text-blue-500 font-semibold">A:</span>{" "}
                {faq.answer}
              </span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-center mt-10 mb-0">
          For more information or specific queries, feel free to contact{" "}
          <span className="font-semibold text-blue-700">
            Immigration Options 4 U
          </span>{" "}
          directly.
        </p>
      </section>
    </div>
  );
}