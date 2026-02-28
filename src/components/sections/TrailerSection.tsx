"use client";

import React from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TrailerSection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center justify-center border-t border-gray-100">
            {/* Soft Background glow instead of dark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">

                <div className="text-center mb-12 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        {t.hero.watchTrailer}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                </div>

                {/* Video Player Placeholder */}
                <div className="relative w-full max-w-5xl aspect-[21/9] bg-gray-900 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 group ring-1 ring-white/10 hover:ring-emerald-500/50 transition-all duration-500">

                    {/* Cover Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 blur-[2px] group-hover:blur-0"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button */}
                    <button className="absolute inset-0 flex items-center justify-center group/btn">
                        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/80 backdrop-blur-md text-white group-hover/btn:scale-110 group-hover/btn:bg-emerald-500 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                            <Play className="w-10 h-10 ml-2" fill="currentColor" />
                        </div>
                    </button>

                    {/* Labels Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-3">
                        {Object.values(t.hero.locations).map((loc, idx) => (
                            <span
                                key={idx}
                                className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white/90 text-sm font-medium"
                            >
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrailerSection;
