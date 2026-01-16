import React from "react";
import { motion } from "framer-motion";

import Mot1 from "../assets/9045d15c0bcb7cdfbe1b2eb7010ee4f6(1)(1).png";
import Mot2 from "../assets/WhatsApp Image 2025-10-13 at 03.23.14_b5cc66de.jpg";
import Mot3 from "../assets/banner.png";
import Mot4 from "../assets/IMG-20250125-WA0001.jpg";
import Mot5 from "../assets/IMG-20250125-WA0002.jpg";
import Mot6 from "../assets/IMG-20250125-WA0004.jpg";

const trainer = [Mot1, Mot2, Mot3, Mot4, Mot5, Mot6];

const Mt = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.05, rotate: 1 },
  };

  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black py-12"
      id="trainer"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-sky-300">
            Meet Our Trainer
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Our professional trainers are dedicated to helping you reach your fitness goals with expert guidance and motivation, ensuring you achieve your goals.
        </p>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-4 md:px-10 lg:px-20 mt-6"
      >
        {trainer.map((imgSrc, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            whileHover="hover"
            className="relative"
          >
            <motion.img
              src={imgSrc}
              alt={`Trainer ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent flex flex-col justify-end p-4 rounded-xl transition-opacity duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                Trainer {index + 1}
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                Certified Fitness & Wellness Coach
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Mt;
