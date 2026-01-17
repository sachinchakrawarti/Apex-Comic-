import React from "react";
import {
  FaGlobe,
  FaReddit,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRegCopyright,
  FaQrcode,
  FaUserShield,
  FaDatabase,
  FaChartLine,
  FaMicrochip,
  FaBrain,
  FaShieldAlt,
} from "react-icons/fa";
import { RiShieldFill, RiGlobalLine } from "react-icons/ri";
import { HiOutlineMail, HiOutlineTerminal } from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-200 border-t-2 border-pink-500/30">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Apex Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <RiShieldFill className="text-pink-500 text-3xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                APEX OMNIVERSE
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Apex Corporation governs all realities under Quantum Mandate 7.
              Our neural networks span 47 confirmed dimensions and counting.
            </p>
            <div className="flex space-x-5">
              <FaTwitter className="text-blue-300 hover:text-pink-400 cursor-pointer transition-colors text-xl" />
              <FaInstagram className="text-pink-300 hover:text-blue-300 cursor-pointer transition-colors text-xl" />
              <FaYoutube className="text-red-300 hover:text-pink-400 cursor-pointer transition-colors text-xl" />
              <BiNetworkChart className="text-blue-400 hover:text-pink-400 cursor-pointer transition-colors text-xl" />
              <FaQrcode className="text-gray-400 hover:text-blue-300 cursor-pointer transition-colors text-xl" />
            </div>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-pink-500/20">
                Join the Network
              </button>
            </div>
          </div>

          {/* Multiverse Navigation */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg border-b border-pink-500/30 pb-3 flex items-center gap-2">
              <RiGlobalLine className="text-blue-400" />
              MULTIVERSE ACCESS
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMicrochip className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Earth-APX (Prime)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMicrochip className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Neo-Steel Reality
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMicrochip className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Quantum Wasteland
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMicrochip className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  The Fracture Zone
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMicrochip className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Boardroom Dimension
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg border-b border-blue-500/30 pb-3 flex items-center gap-2">
              <FaChartLine className="text-pink-400" />
              CORPORATE SYSTEMS
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaDatabase className="text-blue-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
                >
                  Neural Compliance
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-blue-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
                >
                  Augmentation R&D
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-blue-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
                >
                  Timeline Security
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-blue-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
                >
                  Quantum Branding
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-blue-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
                >
                  MP (Merit Points) Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg border-b border-pink-500/30 pb-3 flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              DATA SECURITY
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaUserShield className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Firewall Protocols
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Neural Encryption
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Reality Patches
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Counter-Intelligence
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-pink-400 text-sm" />
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors hover:underline underline-offset-4"
                >
                  Black ICE Deployment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg border-b border-blue-500/30 pb-3 flex items-center gap-2">
              <HiOutlineTerminal className="text-pink-400" />
              TERMINAL ACCESS
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiOutlineMail className="mt-1 text-blue-300 flex-shrink-0" />
                <span>transdimensional-comms@apex.omniverse</span>
              </div>
              <p className="text-xs text-blue-200/70 leading-relaxed">
                All communications are quantum-encrypted and monitored by the
                Apex Thought Police Division. Unauthorized access attempts will
                result in neural reset.
              </p>
              <div className="pt-2 space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                  Request Clearance
                </button>
                <button className="w-full bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                  Report Anomaly
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700/50 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <FaRegCopyright className="text-blue-300" />
              <span>2120 Apex Omniverse Corporation</span>
            </div>
            <span className="hidden md:block">|</span>
            <span className="text-pink-300">v4.7.2.1</span>
            <span className="hidden md:block">|</span>
            <span className="bg-blue-900/50 px-2 py-1 rounded text-xs">
              NETWORK STATUS: STABLE
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="#"
              className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
            >
              Terms of Existence
            </a>
            <a
              href="#"
              className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
            >
              Privacy Firewall
            </a>
            <a
              href="#"
              className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
            >
              Neural EULA
            </a>
            <a
              href="#"
              className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
            >
              Reality TOS
            </a>
            <a
              href="#"
              className="hover:text-pink-300 transition-colors hover:underline underline-offset-4"
            >
              Data Assimilation
            </a>
          </div>
        </div>

        {/* Corporate Disclaimer */}
        <div className="mt-10 text-xs text-blue-300/60 text-center leading-relaxed">
          <p>
            Apex Omniverse™ is a registered trademark under Pan-Dimensional
            Commercial Law. Any unauthorized replication, timeline alteration,
            or cognitive appropriation will be met with immediate retcon
            enforcement by the Apex Narrative Security Division.
          </p>
          <p className="mt-2">
            User activity across all realities is monitored and recorded through
            quantum-entangled neural networks in accordance with the Omniversal
            Surveillance Act of 2118.
          </p>
          <div className="mt-4 flex justify-center items-center gap-2 text-pink-400/70">
            <FaBrain className="animate-pulse" />
            <span>YOUR MIND IS A VALUABLE CORPORATE ASSET</span>
            <FaBrain className="animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
