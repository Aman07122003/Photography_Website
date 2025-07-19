import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PreWedd from "../assets/PreWedd.png";
import first from "../assets/PreWedding_Pics/first.jpg";
import second from "../assets/PreWedding_Pics/second.jpg";
import third from "../assets/PreWedding_Pics/third.avif";
import fourth from "../assets/PreWedding_Pics/fourth.webp";
import fifth from "../assets/PreWedding_Pics/fifth.jpg";
import six from "../assets/PreWedding_Pics/six.jpg";
import Wedding from "./Wedding";

const Prewedding = () => {
  const sectionRef = useRef(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const imageY = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "-150%"]);

  // Images and Couple Names
  const images = [first, second, third, fourth, fifth, six];
  const coupleNames = [
    "Aman & Sneha",
    "John & Emma",
    "Raj & Priya",
    "Vikram & Anjali",
    "Sam & Sarah",
    "Rahul & Nisha"
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] w-full">
      {/* Sticky background */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={PreWedd}
          alt="Pre-wedding"
          className="absolute top-0  left-0 w-full h-full object-cover"
          style={{ y: imageY, opacity: imageOpacity }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Cards Section */}
      <motion.div
        style={{ y: cardsY }}
        className="absolute top-0 left-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-6 mt-[100vh]"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-full h-56 sm:h-80 rounded-xl overflow-hidden shadow-xl group cursor-pointer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <a href={img} target="_blank" rel="noopener noreferrer">
              {/* Image */}
              <img
                src={img}
                alt={`Prewedding ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-base sm:text-xl py-2">
                    {coupleNames[index]}
                </div>

              {/* Overlay with Couple Name */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Next Section */}
      <div className="absolute top-[200vh] w-full h-screen flex items-center justify-center text-white text-4xl">
        <Wedding />
      </div>
    </section>
  );
};

export default Prewedding;
