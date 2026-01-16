import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-700 to-black text-white font-poppins">
      <motion.div
        className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Brand Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 font-extrabold tracking-wider">
            AB GYM
          </h1>
          <p className="text-gray-300 leading-relaxed mt-4">
            Empowering lives through fitness. Join us on a journey to achieve a healthier you.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 font-extrabold">
            Quick Links
          </h2>
          <motion.ul
            className="mt-4 space-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {["home", "about", "opinions", "trainer", "contact"].map((section, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="cursor-pointer hover:underline hover:text-gray-400"
              >
                <Link to={section} smooth={true} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 font-semibold">
            Follow Us
          </h2>
          <motion.div
            className="flex mt-4 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: <Facebook className="w-6 h-6" />, link: "https://www.facebook.com/share/1AF79UidTp/", hover: "hover:bg-blue-700" },
              { icon: <FaTiktok className="w-6 h-6" />, link: "https://www.tiktok.com/@ameer__804?_t=ZS-90VlRiRx75h&_r=1", hover: "hover:bg-blue-700" },
              { icon: <Instagram className="w-6 h-6" />, link: "https://www.instagram.com/ame_erkhan804?utm_source=qr&igsh=MWVnMWdycHFkNzN4Mg==", hover: "hover:bg-red-700" },
            ].map(({ icon, link, hover }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-gray-700 rounded-full transition ${hover}`}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="bg-gray-950 text-gray-300 text-center py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>© 2026 AB GYM. All rights reserved</p>
        <p className="text-white hover:text-gray-700 cursor-pointer mt-1">
          Nextgen Web Services
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
