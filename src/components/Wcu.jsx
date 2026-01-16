import React from "react";
import { motion } from "framer-motion";

import wch1 from "../assets/ababa.jpeg";
import wch2 from "../assets/WhatsApp Image 2026-01-16 at 1.17.20 AM.jpeg";
import wch3 from "../assets/WhatsApp Image 2026-01-16 at 1.39.58 AM.jpeg";

const Wcu = () => {
  // Variants for box animations
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  // Variants for image animations
  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3, type: "spring", stiffness: 100 },
    }),
    hover: { scale: 1.05 },
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-500 to-teal-300 text-transparent bg-clip-text">
            Why Choose us
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg font-light">
            Discover why we stand with your muscle, commitment and results.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8">
              {[
                {
                  title: "Expert Trainer",
                  text: "Highly qualified trainer to help you achieve your goals.",
                },
                {
                  title: "Modern Equipment",
                  text: "Access to state of the-art.",
                },
                {
                  title: "Award Winning",
                  text: "Recognized for excellence in fitness services.",
                },
                {
                  title: "Community Driven",
                  text: "A supportive community that motivate you.",
                },
              ].map((box, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={boxVariants}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex flex-col justify-center items-center p-6 bg-gradient-to-r from-purple-100 via-pink-200 to-indigo-400 text-gray-600 rounded-xl shadow-lg cursor-pointer transition-transform duration-300"
                >
                  <h4 className="font-extrabold text-lg sm:text-xl text-center">
                    {box.title}
                  </h4>
                  <p className="text-sm sm:text-md font-light text-center">
                    {box.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Two Vertical Images */}
              <div className="grid grid-rows-2 gap-6">
                {[wch1, wch2].map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`img${i + 1}`}
                    loading="lazy"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    variants={imgVariants}
                    className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 cursor-pointer"
                    viewport={{ once: true }}
                  />
                ))}
              </div>

              {/* Horizontal Image */}
              <motion.img
                src={wch3}
                alt="img3"
                loading="lazy"
                custom={2}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={imgVariants}
                viewport={{ once: true }}
                className="w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wcu;
