import { motion } from "framer-motion";
import aboutBg from "../assets/back.webp";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🔹 Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(6px) brightness(0.6)", // slightly darken + blur
        }}
      />

      {/* 🔹 Optional Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 🔹 Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl px-6 sm:px-10 text-center text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6"
        >
          About <span className="text-purple-500">AB GYM</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200"
        >
          <strong>AB GYM</strong> is more than just a fitness center — it’s a
          community built on discipline, strength, and transformation. Our
          mission is to help you unlock your true potential through expert
          training, modern equipment, and a motivating environment.
          <br />
          <br />
          Whether your goal is muscle building, fat loss, endurance, or overall
          wellness, AB GYM provides personalized guidance and a supportive
          atmosphere that pushes you beyond limits and turns effort into
          results.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
