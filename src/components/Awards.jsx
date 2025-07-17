import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg";

const Awards = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 sm:px-8 md:px-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-2">
            <motion.span 
              className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Award-Winning Photographer
            </motion.span>
          </div>

          <motion.h1
            className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="block text-white">Abhishek</span>
            <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Yadav
            </span>
          </motion.h1>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto md:mx-0 my-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-300 text-lg md:text-xl lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Creative Photographer & Cinematographer specializing in wedding
            storytelling. Bringing your moments to life with stunning visuals,
            passion, and artistry.
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            className="space-y-3 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center gap-2">
              <span className="text-amber-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <a
                href="mailto:abhishek@example.com"
                className="hover:text-amber-300 transition-colors"
              >
                abhishek@example.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-amber-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a
                href="tel:+1234567890"
                className="hover:text-amber-300 transition-colors"
              >
                +1 234 567 890
              </a>
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book Your Session</span>
              <span className="group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(245,158,11,0.25)] group">
            <motion.img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Floating Awards */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-xl z-10"
              initial={{ scale: 0, rotate: 20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-xs">Best Wedding</div>
              <div className="text-sm">Photographer 2023</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-amber-400/30"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <span className="text-amber-400">★</span>
                <span>10+ Years Experience</span>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute -z-10 w-full h-full -right-6 -bottom-6 border-2 border-amber-400/30 rounded-3xl"
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;