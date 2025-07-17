import React, { useEffect, useRef, useState } from "react";
import introVideo from "../assets/intro.mp4";

const Loader = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsStarted(true);
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
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={introVideo}
        playsInline
        controls={false}
        onEnded={() => setIsVideoEnded(true)}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      {/* If not started, show overlay */}
      {!isStarted && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Story, Our Lens</h1>
          <button
            onClick={handleStart}
            className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
          >
            Enter Website
          </button>
        </div>
      )}

      {/* Loader Text when video is playing */}
      {isStarted && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
            Your Story, Our Lens
          </h1>
          <p className="text-gray-300 mt-4 text-lg md:text-2xl italic">
            Creating timeless memories with every click
          </p>
        </div>
      )}
    </div>
  );
};

export default Loader;
