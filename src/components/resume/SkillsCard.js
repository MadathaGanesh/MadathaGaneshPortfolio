// src/components/Card.js
import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ title, items }) => {
  return (
    <motion.div
      className="bg-gray-700 text-white shadow-lg rounded-lg p-6 m-4 max-w-sm w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillsCard;
