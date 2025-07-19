import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import weddingpic1 from '../assets/weddingpic1.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  
  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Fluid Animation Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 75% 30%, rgba(251, 191, 36, 0.4) 0%, transparent 30%),
              radial-gradient(circle at 25% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 30%)
            `,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Main Background Image */}
      <motion.div className="absolute inset-0 z-10">
        <img
          src={weddingpic1}
          alt="Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 backdrop-blur-sm bg-black/30">
        <Navbar />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-20 flex flex-col justify-center items-center text-center h-full px-2 sm:px-4 md:px-16 text-white"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="font-bold leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              <span className="block text-amber-400">Capture Your</span>
              Beautiful Moments
            </motion.h1>
            
            <motion.div
              className="w-24 h-1 bg-amber-400 mx-auto my-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
          >
            Turning your wedding day into timeless memories with cinematic photography and creative pre-wedding shoots.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl z-30 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Book Now</span>
            </motion.a>
            
            <motion.a
              href="#portfolio"
              className="relative overflow-hidden border-2 border-white hover:border-amber-400 hover:bg-white/10 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl z-30 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Gallery</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;