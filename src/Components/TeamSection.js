import React from "react";
import { Users, Briefcase, TrendingUp, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "A Team of Pioneers",
      description:
        "At Immigration Options 4 U, our team is our greatest asset. Comprising seasoned professionals with extensive knowledge and experience, our experts are well-versed in the nuances of Dubai’s business environment.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Diverse Expertise for Comprehensive Support",
      description:
        "From legal mavens and financial wizards to strategic consultants and compliance specialists, our team brings a diverse range of expertise—ensuring every aspect of your business setup is meticulously managed.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Dedicated Advisors at Your Service",
      description:
        "Each team member is committed to providing personalized guidance, ensuring that your business setup journey is smooth, efficient, and tailored to your specific needs.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Staying Ahead with Continuous Learning",
      description:
        "Our team stays updated with the latest trends and regulations in Dubai’s business landscape, ensuring that our clients always receive the most current and effective advice.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f9fa] to-[#eef3ff] relative overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 font-semibold tracking-wide mb-3"
        >
          // OUR EXPERT TEAM
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-[#0a0e27] mb-5"
        >
          Meet Your Guides to Business Success
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl mb-14"
        >
          Navigating Dubai's Business Terrain with Expertise
        </motion.p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0a0e27] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-16 bg-blue-600 text-white p-8 rounded-2xl shadow-md"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            With{" "}
            <span className="font-semibold">Immigration Options 4 U's</span>{" "}
            expert team at your helm, you can confidently navigate the path to
            establishing a successful business in Dubai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
