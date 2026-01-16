import React, { useState } from "react";
import {
  FaCertificate,
  FaDumbbell,
  FaFacebook,
  FaHeartbeat,
  FaInstagram,
  FaMedal,
  FaPlay,
  FaRunning,
  FaThumbsUp,
  FaTiktok,
  FaUsers,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bgimage from "../assets/bgrr.png";
import demoVideo from "../assets/2video.mp4";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="
          relative
          min-h-screen
          bg-black
          overflow-hidden
          pt-24        /* space for navbar */
          lg:pt-0
          flex
          flex-col
          lg:flex-row
        "
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            relative
            z-20
            w-full
            lg:w-1/2
            px-6
            sm:px-10
            lg:px-20
            flex
            flex-col
            justify-center
            text-white
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              mb-6
            "
          >
            Elevate your <span className="text-purple-500">Workout</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              mb-8
              leading-relaxed
            "
          >
            Push harder than yesterday if you want a different tomorrow.
            <br />
            No excuses. Just results.
            <br />
            Train insane or remain the same.
          </motion.p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { icon: <FaDumbbell />, text: "Strength" },
              { icon: <FaHeartbeat />, text: "Cardio" },
              { icon: <FaRunning />, text: "Endurance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-purple-500 text-3xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-400 text-black rounded-full font-semibold"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideo(true)}
              className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2"
            >
              <FaPlay /> Watch Demo
            </motion.button>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6">
            {[
              {
                Icon: FaFacebook,
                link: "https://www.facebook.com/share/1AYKuNaz7f/",
              },
              {
                Icon: FaInstagram,
                link:
                  "https://www.instagram.com/umais78626?igsh=NWFtejJsZnJvbDV1",
              },
              {
                Icon: FaTiktok,
                link:
                  "https://www.tiktok.com/@umaisyousaf13?_r=1&_t=ZS-937Is3GfTqm",
              },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-purple-500 text-3xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* IMAGE SECTION (VISIBLE ON ALL SCREENS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center items-center z-10"
        >
          <img
            src={bgimage}
            alt="gym"
            className="h-full w-full object-contain opacity-80"
          />
        </motion.div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setShowVideo(false)}
          >
            <motion.video
              controls
              autoPlay
              className="w-[90%] md:w-[70%] lg:w-[50%] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={demoVideo} type="video/mp4" />
            </motion.video>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
