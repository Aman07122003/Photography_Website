import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PreWedd from "../assets/prewedd.jpg"; // Your image

const Prewedding = () => {
  const sectionRef = useRef(null);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Image animation (slide up + fade in)
  const imageY = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Cards move upward
  const cardsY = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "-150%"]);

  // Dummy images
  const images = [
    "https://source.unsplash.com/400x500/?couple,wedding",
    "https://source.unsplash.com/400x500/?love,prewedding",
    "https://source.unsplash.com/400x500/?romantic,couple",
    "https://source.unsplash.com/400x500/?engagement,shoot",
    "https://source.unsplash.com/400x500/?bride,groom",
    "https://source.unsplash.com/400x500/?wedding,shoot"
  ];

  return (
    <section ref={sectionRef} className="relative h-[300vh] w-full">
      {/* Sticky background container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Fullscreen Motion Image */}
        <motion.img
          src={PreWedd}
          alt="Pre-wedding"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ y: imageY, opacity: imageOpacity }}
        />

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Cards Section */}
      <motion.div
        style={{ y: cardsY }}
        className="absolute top-0 left-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-[100vh]"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="w-full h-80 bg-white rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              src={img}
              alt={`Prewedding ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Next Section */}
      <div className="absolute top-[200vh] w-full h-screen bg-blue-600 flex items-center justify-center text-white text-4xl">
        Next Section
      </div>
    </section>
  );
};

export default Prewedding;
