import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const YourOpinion = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.05, rotate: 1 },
  };

  return (
    <motion.div
      id="opinions"
      className="bg-gradient-to-b from-white via-gray-700 to-black min-h-screen py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Community Opinions
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          What people think about us
        </motion.p>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
      >
        {[
          {
            name: "Nexgen",
            text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended for anyone seeking top-notch service.",
            stars: 4.5,
            color: "text-blue-500",
          },
          {
            name: "Web",
            text: "Incredible experience! Highly recommend to everyone. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            stars: 4,
            color: "text-purple-500",
          },
          {
            name: "Services",
            text: "Great platform with some room for improvement. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 3.5,
            color: "text-green-500",
          },
          {
            name: "Momentum",
            text: "Amazing facilities and trainers. They truly care about your fitness journey.",
            stars: 5,
            color: "text-yellow-500",
          },
          {
            name: "Pulse",
            text: "Fantastic support system and modern equipment. I couldn’t ask for more!",
            stars: 4.5,
            color: "text-red-500",
          },
          {
            name: "Zenith",
            text: "The community atmosphere is truly inspiring! A perfect place to grow.",
            stars: 4.8,
            color: "text-indigo-500",
          },
        ].map((review, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-500 rounded-xl p-6 shadow-lg cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <FaQuoteLeft className={`${review.color} text-3xl`} />
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-white mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {review.name}
            </motion.h3>
            <motion.p
              className="text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {review.text}
            </motion.p>
            <motion.div
              className="flex items-center mt-4 mb-2 text-purple-400 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {Array.from({ length: Math.floor(review.stars) }).map((_, i) => (
                <FaStar key={i} />
              ))}
              {review.stars % 1 !== 0 && <FaStarHalfAlt />}
            </motion.div>
            <motion.p
              className="text-gray-400 text-sm italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {review.text}
            </motion.p>
            <motion.div
              className="float-right mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FaQuoteRight className={`${review.color} text-3xl`} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation + Add Button */}
      <motion.div
        className="mt-10 flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div className="flex items-center space-x-4">
          <motion.button
            className="p-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 transition-transform duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <CircleChevronLeft />
          </motion.button>
          <motion.button
            className="p-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 transition-transform duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <CircleChevronRight />
          </motion.button>
        </motion.div>
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-xl hover:from-pink-400 hover:to-pink-600 transform hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          +Add your feedback
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default YourOpinion;
