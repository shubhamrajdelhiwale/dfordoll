import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0514] w-full  text-white py-6 px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Download Apps</h3>
          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a131f] rounded-full p-3 hover:bg-gray-700 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a131f] rounded-full p-3 hover:bg-gray-700 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a131f] rounded-full p-3 hover:bg-gray-700 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a131f] rounded-full p-3 hover:bg-gray-700 transition"
            >
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Links */}
      <div className="flex flex-wrap justify-center gap-8 text-sm text-white text-center">
        {[
          { label: "Channels", href: "/channels" },
          { label: "About Us", href: "/about" },
          { label: "Help Center", href: "/help" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
          { label: "Preferences", href: "/preferences" },
          { label: "Do not Sell or Share my Personal Information", href: "/privacy-options" },
        ].map((item, idx, arr) => (
          <React.Fragment key={item.label}>
            <a
              href={item.href}
              className="hover:underline hover:text-gray-300 transition"
            >
              {item.label}
            </a>
            {idx < arr.length - 1 && <span className="text-gray-600">|</span>}
          </React.Fragment>
        ))}
      </div>

    </footer>
  );
};

export default Footer;
