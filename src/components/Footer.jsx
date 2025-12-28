import React from "react";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] 
                       text-gray-300 py-12 px-6 md:px-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand / Tagline */}
        <div className="flex flex-col gap-3 md:w-1/3">
          <h2 className="text-indigo-400 text-2xl font-bold">DevOrbits</h2>
          <p className="text-sm text-gray-400">
            Crafting reliable web experiences that feel cinematic, scalable, and future‑proof.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 md:w-1/3">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#services" className="hover:text-indigo-400 transition">Services</a></li>
            <li><a href="#whychooseus" className="hover:text-indigo-400 transition">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3 md:w-1/3">
          <h3 className="text-white font-semibold text-lg">Connect</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/pathaksanchit25-coder" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg">
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg">
              <FaInstagram size={22} />
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
              <FaYoutube size={22} />
              <span>YouTube</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-between w-40 px-4 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md text-gray-200 font-semibold 
                          hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DevOrbits. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;