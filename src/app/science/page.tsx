"use client";

import React from "react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Microscope, Leaf, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function SciencePage() {
    const { t } = useLanguage();

    const cards = [
        {
            icon: <Microscope className="w-12 h-12 text-emerald-500 mb-6" />,
            key: "geology",
            bg: "bg-[#f4f6f8]"
        },
        {
            icon: <Leaf className="w-12 h-12 text-blue-500 mb-6" />,
            key: "ecosystem",
            bg: "bg-[#f4f6f8]"
        },
        {
            icon: <ShieldAlert className="w-12 h-12 text-orange-500 mb-6" />,
            key: "risks",
            bg: "bg-[#f4f6f8]"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans">
            <Navigation />

            <div className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-gray-900">
                    {t.nav.science}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl font-light mb-16 leading-relaxed">
                    {t.science.description}
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {cards.map((card, i) => {
                        const dictData = t.science[card.key as keyof typeof t.science] as { title: string, desc: string };
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className={`relative ${card.bg} rounded-3xl p-10 flex flex-col items-start text-left shadow-sm border border-transparent hover:border-gray-200 transition-all group`}
                            >
                                {card.icon}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                                    {dictData.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base">
                                    {dictData.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </main>
    );
}
