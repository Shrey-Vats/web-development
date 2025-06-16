import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Allen Premier</h2>
          <p className="text-sm text-indigo-200">
            India’s leading coaching institute for NEET, JEE & Olympiads.
            Empowering future toppers with the best mentorship and resources.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-indigo-200">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Courses</h3>
          <ul className="space-y-2 text-sm text-indigo-200">
            <li>
              <Link
                to="/neet/online-coaching-class-12"
                className="hover:underline"
              >
                NEET Class 12
              </Link>
            </li>
            <li>
              <Link
                to="/jee/online-coaching-class-11"
                className="hover:underline"
              >
                JEE Class 11
              </Link>
            </li>
            <li>
              <Link to="/foundation" className="hover:underline">
                Foundation (Class 9–10)
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-indigo-200 mb-2">
            Email: support@allenpremier.in
          </p>
          <p className="text-sm text-indigo-200 mb-2">Phone: +91-98765-43210</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-indigo-400">
              🌐
            </a>
            <a href="#" className="hover:text-indigo-400">
              🐦
            </a>
            <a href="#" className="hover:text-indigo-400">
              📘
            </a>
            <a href="#" className="hover:text-indigo-400">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-indigo-700 pt-6 text-center text-sm text-indigo-300">
        © {new Date().getFullYear()} Allen Premier Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
