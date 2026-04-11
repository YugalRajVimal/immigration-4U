import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EXPERIENCES_CONTENT = {
  DUBAI: {
    heading: "Client Experiences",
    subtitle:
      "Stories of Success: Real entrepreneurs and business owners who built their Dubai dreams with Immigration Options 4 U.",
    testimonials: [
      {
        name: "Client Testimonial 1",
        message:
          "Immigration Options 4 U was instrumental in turning my business idea into a reality. Their expert guidance and efficient service made the entire process seamless.",
      },
      {
        name: "Client Testimonial 2",
        message:
          "I was amazed at how smoothly my company registration went with Immigration Options 4 U. Their team's professionalism and attention to detail were exceptional.",
      },
      {
        name: "Client Testimonial 3",
        message:
          "From visa processing to legal advice, Immigration Options 4 U provided comprehensive support. They were a crucial part of my successful business setup in Dubai.",
      },
    ],
  },
  HUNGARY: {
    heading: "Client Experiences",
    subtitle:
      "Stories of Success: Real investors and entrepreneurs who secured their European residency with Immigration Options 4 U's Hungarian Golden Visa support.",
    testimonials: [
      {
        name: "European Investor",
        message:
          "The entire Golden Visa process was remarkably smooth thanks to Immigration Options 4 U. Their professional guidance and fast 6-8 week processing exceeded my expectations. I'm now a proud Hungarian resident!",
      },
      {
        name: "International Entrepreneur",
        message:
          "I was impressed by how Immigration Options 4 U simplified the entire investment and documentation process. Their dedicated case advisor provided personalized support at every step, making my residency application stress-free.",
      },
      {
        name: "Family Relocating to Europe",
        message:
          "Immigration Options 4 U made our family's transition to Hungary seamless. From investment selection to obtaining our family residency permits, their comprehensive support and expertise were invaluable in achieving our European dream.",
      },
    ],
  },
  UK: {
    heading: "Client Experiences",
    subtitle:
      "Stories of Success: Real entrepreneurs, professionals, and families who achieved their UK immigration goals with Immigration Options 4 U.",
    testimonials: [
      {
        name: "Business Entrepreneur",
        message:
          "Immigration Options 4 U guided me through establishing my business in the UK seamlessly. Their expertise in business immigration pathways and legal support was instrumental in securing my visa and launching my venture successfully.",
      },
      {
        name: "Skilled Professional",
        message:
          "The team's professionalism and thorough understanding of UK Skilled Worker visas made my application process straightforward. They handled everything from sponsorship coordination to documentation with remarkable efficiency and attention to detail.",
      },
      {
        name: "Family Reunification Success",
        message:
          "After years of separation, Immigration Options 4 U helped us navigate the family visa process successfully. Their compassionate approach, combined with expert legal guidance, reunited us in the UK and set us on the path to permanent residency.",
      },
    ],
  },
};

export default function ClientExperiences() {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = EXPERIENCES_CONTENT[preferredCountry] || EXPERIENCES_CONTENT.DUBAI;
  const testimonials = content.testimonials;

  return (
    <section className="w-full bg-[#f5f9ff] py-20 text-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-blue-100 p-8 rounded-xl 
                         hover:border-blue-500 transition-all shadow-xl"
            >
              <p className="text-[#4b5563] italic leading-relaxed">
                "{item.message}"
              </p>

              <h4 className="mt-6 text-blue-600 font-semibold text-lg">
                — {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}