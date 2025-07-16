import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-shadow ${
        scrolled
          ? "hidden"
          : "visible"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-ketika font-bold tracking-tight text-white"
            style={{ letterSpacing: "0.02em" }}
          >
            YourName <span className="font-ketika">Photography</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white dark:text-gray-200 hover:text-blue-500 dark:hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="ml-4 px-5 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold shadow hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-6 h-6">
              {/* Hamburger icon */}
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {MENU_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="px-8 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold shadow hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-200 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;