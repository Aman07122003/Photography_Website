import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg";

const Awards = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16 py-12 flex flex-col md:flex-row items-center md:justify-between gap-12">
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-bungee text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Abhishek <span className="text-amber-400">Yadav</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
          Creative Photographer & Cinematographer specializing in wedding
          storytelling. Bringing your moments to life with stunning visuals,
          passion, and artistry.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold text-amber-400">Email:</span>{" "}
            <a
              href="mailto:abhishek@example.com"
              className="hover:text-amber-300 transition-colors"
            >
              abhishek@example.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-amber-400">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-amber-300 transition-colors"
            >
              +1 234 567 890
            </a>
          </p>
        </div>

        {/* Call to Action */}
        <motion.a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 bg-amber-500 text-black font-semibold rounded-xl shadow-lg hover:bg-amber-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Book Your Session →
        </motion.a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] group">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          {/* Floating Tag */}
          <div className="absolute bottom-4 left-4 bg-amber-500 text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
            Award-Winning
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;

