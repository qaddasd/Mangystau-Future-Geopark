import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 pt-24 pb-8 px-6 md:px-12 font-sans border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto flex flex-col w-full h-full">
        {/* Huge Title Section */}
        <div className="w-full flex justify-center items-center mb-16 md:mb-24 overflow-hidden select-none">
          <h1 className="text-[13vw] font-bold tracking-tighter leading-none text-[#1a1a1a] whitespace-nowrap w-full text-center">
            Mangystau Geopark
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center text-[13px] font-medium text-gray-500 pt-6">
          <div className="font-bold text-gray-900 text-lg tracking-tighter">
            Маңғыстау – Болашақ Геопарк
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;