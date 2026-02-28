"use client";

import React from "react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Compass, Camera, Route } from "lucide-react";
import { motion } from "framer-motion";

const toursData = [
    { img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", key: "bozjyra" },
    { img: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", key: "torysh" },
    { img: "https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", key: "sherkala" },
];

export default function VirtualToursPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans">
            <Navigation />

            {/* Header */}
            <div className="pt-36 pb-16 px-6 relative bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <Compass className="w-16 h-16 text-emerald-500 mb-6" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
                        {t.nav.tours}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light">
                        {t.hero.subtitle}
                    </p>
                </div>
            </div>

            {/* Grid Content */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {toursData.map((tour, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Top Image Section */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${tour.img}')` }}
                                    />
                                    {/* Video/360 Badge */}
                                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                                        <Camera className="w-4 h-4 text-emerald-500" />
                                        <span className="text-xs font-bold text-gray-900 tracking-wider uppercase">
                                            360° Photo
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Info Section */}
                                <div className="p-8 flex flex-col flex-grow text-left">
                                    <div className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                                        {t.tours.items[tour.key as keyof typeof t.tours.items].badge}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                                        {t.hero.locations[tour.key as keyof typeof t.hero.locations]}
                                    </h3>
                                    <div className="mt-auto pt-4">
                                        <button className="flex items-center space-x-2 text-[#5cb82c] group-hover:text-[#4a9a20] text-sm font-semibold transition-colors mt-2">
                                            <Route className="w-4 h-4" />
                                            <span>{t.tours.items[tour.key as keyof typeof t.tours.items].viewRoute}</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
