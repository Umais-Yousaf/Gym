import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-600 to-black text-white px-6"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl lg:max-w-5xl grid lg:grid-cols-2 gap-8"
      >
        {/* Address Section */}
        <motion.div
          className="bg-gray-600 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <MapPin className="w-6 h-6 text-blue-500" />
              <p className="text-lg font-medium">
                Ashan Plaza, Main Dhoke Gujra Road, Rawalpindi.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Phone className="w-6 h-6 text-blue-500" />
              <p className="text-lg font-medium">03365341138, 03075166158</p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Mail className="w-6 h-6 text-blue-500" />
              <p className="text-lg font-medium">ABGYM@agmail.com</p>
            </motion.div>

            {/* Embedded Map */}
            <motion.div
              className="w-full h-48 mt-4 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.123456789!2d73.047!3d33.616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9abcd1234567%3A0x123456789abcdef!2sAshan+Plaza!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AB GYM Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-600 p-6 rounded-2xl space-y-6"
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Enter Your Message"
              className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-purple-400 rounded-lg text-lg font-semibold hover:opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
