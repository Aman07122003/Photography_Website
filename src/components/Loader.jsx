import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introVideo from "../assets/intro.mp4";

const Loader = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsStarted(true);
      
      const interval = setInterval(() => {
        if (videoRef.current) {
          const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
          setProgress(currentProgress);
          if (currentProgress >= 100) {
            clearInterval(interval);
          }
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (isVideoEnded) {
      setTimeout(() => {
        onFinish();
      }, 500);
    }
  }, [isVideoEnded, onFinish]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Responsive video */}
      <motion.video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={introVideo}
        playsInline
        muted
        controls={false}
        onEnded={() => setIsVideoEnded(true)}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />

      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Pre-start screen - mobile responsive */}
      <AnimatePresence>
        {!isStarted && (
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-center space-y-4 md:space-y-8 w-full max-w-md md:max-w-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-200 px-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% auto"
                }}
              >
                Your Story, Our Lens
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl italic mb-6 md:mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Capturing moments that last forever
              </motion.p>
              
              <motion.button
                onClick={handleStart}
                className="relative overflow-hidden px-8 py-3 sm:px-10 sm:py-3 md:px-12 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-wide bg-transparent text-white border border-white/80 w-full max-w-xs mx-auto"
                whileHover={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Begin the Journey</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-amber-200 to-white opacity-0"
                  animate={{
                    opacity: [0, 0.2, 0],
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </motion.button>
            </motion.div>
            
            {/* Floating particles - fewer on mobile */}
            {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * (window.innerWidth < 768 ? 4 : 6) + 2}px`,
                  height: `${Math.random() * (window.innerWidth < 768 ? 4 : 6) + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -1000],
                  x: [0, (Math.random() - 0.5) * (window.innerWidth < 768 ? 100 : 200)],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* During video playback - mobile responsive */}
      {isStarted && (
        <motion.div 
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="relative w-full px-2"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [1, 0.9, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide drop-shadow-2xl">
              Your Story, Our Lens
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-white to-amber-200 opacity-30 blur-xl rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-gray-300 mt-4 sm:mt-6 md:mt-8 text-base sm:text-xl md:text-2xl lg:text-3xl italic"
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            Creating timeless memories with every click
          </motion.p>
          
          {/* Loading bar - responsive width */}
          <div className="w-48 sm:w-56 md:w-64 h-1 sm:h-1.5 bg-white/20 rounded-full mt-6 sm:mt-8 md:mt-12 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-amber-200 to-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: videoRef.current?.duration || 5,
                ease: "linear" 
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Loader;