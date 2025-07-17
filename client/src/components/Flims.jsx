import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FilmWedd from "../assets/FilmWedd.mp4";

const Flims = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "-150%"]);

  const videos = [
    "https://www.youtube.com/embed/Q575Q-F-wgw",
    "https://www.youtube.com/embed/ALsMqS17dHI",
    "https://www.youtube.com/embed/jelLdvZVbQQ",
    "https://www.youtube.com/embed/33ERYHLUoro",
    "https://www.youtube.com/embed/iNUENKvSeAo",
    "https://www.youtube.com/embed/XJQrQH05uSg",
  ];

  const coupleNames = [
    "Aman & Sneha",
    "John & Emma",
    "Raj & Priya",
    "Vikram & Anjali",
    "Sam & Sarah",
    "Rahul & Nisha",
  ];

  return (
    <section ref={sectionRef} className="relative h-[300vh] w-full">
      {/* Sticky background video */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          src={FilmWedd}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ y: imageY, opacity: imageOpacity }}
        />
      </div>

      {/* Cards Section */}
      <motion.div
        style={{ y: cardsY }}
        className="absolute top-0 left-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-[100vh]"
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl group"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`${video}?rel=0&modestbranding=1`}
              title={`Wedding Film ${index + 1}`}
              className="w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            
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

export default Flims;
