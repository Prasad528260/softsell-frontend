import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/enterprise.png";

const Navbar = () => {
  // Initialize state checking localStorage and system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    console.log('Dark mode changed to:', darkMode); // Debug log
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-6 md:px-12 h-16 bg-white/80 dark:bg-neutral-900/90 backdrop-blur border-b border-gray-200 dark:border-neutral-800 transition-colors"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div className="flex items-center gap-3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <motion.img src={logo} alt="SoftSell logo" className="w-9 h-9 object-contain" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} />
        <motion.span className="text-xl font-bold tracking-wide text-blue-700 dark:text-white select-none" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          SoftSell
        </motion.span>
      </motion.div>
      <motion.button
        aria-label="Toggle dark mode"
        className="text-blue-700 dark:text-white text-2xl p-2 rounded-full hover:bg-blue-100 dark:hover:bg-neutral-800 transition"
        onClick={() => setDarkMode((d) => !d)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;