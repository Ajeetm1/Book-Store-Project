import React from 'react';
import { IoBookSharp } from "react-icons/io5";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-purple-900/40">
      <div className="mx-auto w-full max-w-screen-xl p-6 py-8 lg:py-12">
        
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          
          {/* Brand/Logo Section */}
          <div className="md:col-span-1 space-y-4">
            <a href="/" className="flex items-center gap-2 group">
              <div className="bg-purple-600 p-2 rounded-lg text-xl text-white shadow-lg shadow-purple-600/30 transition-transform group-hover:scale-105">
                <IoBookSharp />
              </div>
              <span className="self-center text-2xl font-bold tracking-tight text-white">
                My<span className="text-purple-500">Book</span>House
              </span>
            </a>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Your ultimate destination for discovering, reading, and sharing your favorite books online.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:col-span-3">
            {/* Explore Column */}
            <div>
              <h2 className="mb-4 text-xs font-bold text-purple-400 uppercase tracking-widest">
                Explore
              </h2>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <a href="/genres" className="hover:text-white transition-colors">All Genres</a>
                </li>
                <li>
                  <a href="/best-sellers" className="hover:text-white transition-colors">Best Sellers</a>
                </li>
                <li>
                  <a href="/new-releases" className="hover:text-white transition-colors">New Releases</a>
                </li>
              </ul>
            </div>

            {/* Platform Column */}
            <div>
              <h2 className="mb-4 text-xs font-bold text-purple-400 uppercase tracking-widest">
                Platform
              </h2>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <a href="/authors" className="hover:text-white transition-colors">Our Authors</a>
                </li>
                <li>
                  <a href="/membership" className="hover:text-white transition-colors">Membership</a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">Book Blog</a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-4 text-xs font-bold text-purple-400 uppercase tracking-widest">
                Legal
              </h2>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="my-8 border-zinc-800 lg:my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-zinc-500 order-2 sm:order-1">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline text-zinc-400">
              MyBookHouse™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons with Premium Purple Hover effect */}
          <div className="flex space-x-5 order-1 sm:order-2 text-xl text-zinc-400">
            <a href="#" className="hover:text-purple-500 transition-colors" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;