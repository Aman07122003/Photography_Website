import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Awards from '../components/Awards';
import Prewedding from '../components/Prewedding';

const Home = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate per-section progress
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 0.8, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

  const awardsOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.6], [0, 1, 0]);
  const awardsScale = useTransform(scrollYProgress, [0.25, 0.45], [0.9, 1]);

  const preweddingOpacity = useTransform(scrollYProgress, [0.55, 0.75, 1], [0, 1, 1]);
  const preweddingScale = useTransform(scrollYProgress, [0.25, 0.35], [0.9, 1]);

  return (
    <div ref={containerRef} className="min-h-[300vh] relative">
      {/* Hero Section */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky md:top-0 top-auto flex items-center justify-center bg-gray-900 min-h-screen md:h-screen"
      >
        <Hero />
      </motion.div>

      {/* Awards Section */}
      <motion.div
        style={{ opacity: awardsOpacity, scale: awardsScale }}
        className="min-h-screen md:h-screen flex items-center justify-center bg-black"
      >
        <Awards />
      </motion.div>

      {/* Prewedding Section */}
      <motion.div
        style={{ opacity: preweddingOpacity, scale: preweddingScale }}
        className="min-h-screen md:h-screen flex items-center justify-center bg-gray-800"
      >
        <Prewedding />
      </motion.div>
    </div>
  );
};

export default Home;
