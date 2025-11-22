import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 px-4 text-center">
        <div>
          <img
            src="/footer/jobaaj-group.webp"
            alt="Jobaaj Group Logo"
            className="w-20"
            loading="lazy"
          />
        </div>

        <div className="text-sm text-gray-500 leading-tight">
          <p>All trademarks are the property of their respective owners</p>
          <p>All rights reserved © 2025 Nishtya Infotech Pvt. Ltd.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <img
            src="/Navbar/logoNew.webp"
            className="w-16"
            alt="Jobaaj Logo"
            loading="lazy"
          />
          <img
            src="/footer/jp-stories.webp"
            className="w-16"
            alt="Jobaaj Stories Logo"
            loading="lazy"
          />

          <img
            src="/footer/d-logo.webp"
            className="w-16"
            alt="Jobaaj Learnings Logo"
            loading="lazy"
          />

          <img
            src="/footer/procapitas.webp"
            className="w-12"
            alt="Procapitas Logo"
            loading="lazy"
          />

          <img
            src="/footer/eshan.webp"
            className="w-16"
            alt="Eshan Logo"
            loading="lazy"
          />

          <img
            src="/footer/jobaajcafeLogo.webp"
            className="w-12"
            alt="Jobaaj Café Logo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
