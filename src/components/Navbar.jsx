import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaCommentDots,
  FaEnvelope,
  FaHome,
  FaUserTie,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

/* 🔹 Navbar floating motion (SAFE) */
const navbarFloat = {
  animate: {
    y: [0, -4, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* 🔹 Logo breathing */
const logoMotion = {
  animate: {
    scale: [1, 1.05, 1],
    rotateY: [0, 10, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* 🔹 Nav item motion */
const navItemMotion = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  whileHover: {
    scale: 1.15,
    rotateX: 15,
    rotateY: -15,
    textShadow: "0px 0px 15px rgba(59,130,246,0.9)",
  },
  whileTap: { scale: 0.92 },
};

/* 🔹 Mobile menu motion */
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
  exit: { opacity: 0, y: -20 },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-white via-gray-900 to-black backdrop-blur-md shadow-lg z-50"
      style={{ perspective: 1200 }}
    >
      {/* Floating wrapper (prevents hiding bug) */}
      <motion.div {...navbarFloat}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          
          {/* LOGO */}
          <motion.div
            {...logoMotion}
            className="cursor-pointer text-2xl font-bold text-black cursor[Caveat]"
          >
            AB GYM
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 items-center text-white font-semibold">
            {[
              { to: "home", icon: <FaHome />, label: "Home" },
              { to: "about", icon: <FaInfoCircle />, label: "About" },
              { to: "trainer", icon: <FaUserTie />, label: "Trainer" },
              { to: "opinions", icon: <FaCommentDots />, label: "Opinion" },
              { to: "contact", icon: <FaEnvelope />, label: "Contact" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...navItemMotion}
                transition={{ delay: i * 0.1 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <motion.button
            whileHover={{ scale: 1.15, rotateZ: 10 }}
            whileTap={{ scale: 0.85 }}
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </motion.button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4"
            >
              {["home", "about", "trainer", "opinions", "contact"].map(
                (item, i) => (
                  <motion.div
                    key={i}
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
