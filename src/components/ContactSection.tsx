import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-12">
            Bridging the Gap Between Challenges and Solutions for Public Projects
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">
                109/421, 80 Feet Road,<br />
                Kanpur (U.P.), India
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">msspl.mspl@gmail.com</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91-9336652601<br />
                +91-9519510543
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}