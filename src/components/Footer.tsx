import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-bold text-xl md:text-2xl text-white mb-2">
            Tech is not just what I do—it's how I think
          </p>
          <p className="text-gray-500 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-gray-400" /> by Mohammed Shoaib
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;