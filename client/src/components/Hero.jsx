import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import weddingpic1 from '../assets/weddingpic1.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={weddingpic1}
          alt="Wedding"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar (absolute, full width) */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center text-center h-full px-6 md:px-16 text-white">
        <motion.h1
          className="font-bungee text-5xl md:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Capture Your Beautiful Moments
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Turning your wedding day into timeless memories with cinematic photography and creative pre-wedding shoots.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            View Gallery
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
