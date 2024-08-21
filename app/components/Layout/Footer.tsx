// app/components/Layout/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TTexts } from "../../utils/constants/textConstants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 shadow-2xl text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="mb-4">
          {TTexts.footerText.replace("{year}", currentYear.toString())}
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={TTexts.facebook}
          >
            <FaFacebook className="text-xl hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={TTexts.twitter}
          >
            <FaTwitter className="text-xl hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={TTexts.instagram}
          >
            <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
