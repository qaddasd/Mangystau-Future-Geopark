"use client";

import React, { useState } from "react";
import { Play, MapPin, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Real Mangystau location images
  const locationImages = [
    { name: t.hero.locations.bozjyra, src: "https://www.airpano.com/files/mangyshlak2/images/image1.jpg" }, // Boszhira
    { name: t.hero.locations.torysh, src: "/tours/torysh.jpg" }, // Torysh spheroids
    { name: t.hero.locations.sherkala, src: "https://www.airpano.com/files/mangyshlak/images/image6.jpg" }, // Sherkala
    { name: t.hero.locations.caspian, src: "/tours/caspian.png" }, // Sea coast
    { name: t.hero.locations.dunes, src: "https://www.airpano.com/files/mangyshlak/images/image3.jpg" }, // Tuzbair
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Content Container */}
        <div className="container relative z-10 flex flex-col w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl flex flex-col justify-center space-y-6 lg:space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-tight leading-[1.15]">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-lg">
                {t.hero.subtitle}
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 pb-4">
                {Object.values(t.hero.locations).map((loc, idx) => (
                  <span
                    key={idx}
                    className="flex items-center space-x-1 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-gray-600 text-xs font-medium"
                  >
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>

              {/* Watch Trailer Button */}
              <div>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex items-center justify-center space-x-3 bg-[#5cb82c] hover:bg-[#4a9a20] text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Play className="w-5 h-5 flex-shrink-0" fill="currentColor" />
                  <span className="text-base tracking-wide">{t.hero.watchTrailer}</span>
                </button>
              </div>
            </motion.div>

            {/* Right Side - Staggered Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[450px] sm:h-[500px] lg:h-[600px] w-full hidden sm:block"
            >
              {/* Left Image */}
              <div className="absolute top-[20%] left-0 w-[45%] h-[60%] rounded-3xl overflow-hidden shadow-xl z-20 transition-transform hover:scale-105 duration-300">
                <img src={locationImages[0].src} alt={locationImages[0].name} className="w-full h-full object-cover" />
              </div>
              {/* Top Right Image */}
              <div className="absolute top-0 right-[15%] w-[40%] h-[55%] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10 transition-transform hover:scale-105 duration-300 bg-gray-100">
                <img src={locationImages[2].src} alt={locationImages[2].name} className="w-full h-full object-cover" />
              </div>
              {/* Bottom Right Image */}
              <div className="absolute bottom-[5%] right-[5%] w-[50%] h-[50%] rounded-3xl overflow-hidden shadow-2xl z-30 transition-transform hover:scale-105 duration-300 bg-gray-100 border-[6px] border-white">
                <img src={locationImages[4].src} alt={locationImages[4].name} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 p-4 md:p-10"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl aspect-video bg-gray-900 justify-center rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                src="/videos/trailer.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;