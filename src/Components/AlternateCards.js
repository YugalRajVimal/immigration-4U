import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: "01",
    title: "Complete Business Formation",
    image: "/consult1.webp",
  },
  {
    id: "02",
    title: "Visa and Immigration Assistance",
    image: "/consult2.webp",
  },
  {
    id: "03",
    title: "Corporate Compliance and Taxation Services",
    image: "/consult3.webp",
  },
  {
    id: "04",
    title: "Professional Auditing and Accounting",
    image: "/consult4.webp",
  },
  {
    id: "05",
    title: "Legal Advisory and Documentation Support",
    image: "/consult5.webp",
  },
  {
    id: "06",
    title: "PRO and Document Clearing Services",
    image: "/consult6.webp",
  },
];

export default function AlternateCards() {
  return (
    <section className="bg-[#f9f9fa] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {cards.map((card, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={card.id}
              className={`grid grid-cols-1 md:grid-cols-2  mx-auto items-stretch overflow-hidden rounded-2xl shadow-xl ${
                isReversed ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`h-fit w-full overflow-hidden ${
                  isReversed ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Section */}
              <div
                className={`flex flex-col justify-center p-10 bg-[#0a0e27] text-white ${
                  isReversed ? "md:order-1" : "md:order-2"
                }`}
              >
                <span className="text-[50px] md:text-[70px] font-extrabold text-white/10 leading-none">
                  {card.id}.
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 mt-2 leading-snug">
                  {card.title}
                </h3>
            
              
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
