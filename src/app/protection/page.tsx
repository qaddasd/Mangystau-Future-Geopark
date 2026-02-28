"use client";

import React from "react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sprout, CheckCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function ProtectionPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
            <Navigation />

            {/* Hero Header */}
            <section className="relative pt-36 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-gray-100">
                <Sprout className="w-16 h-16 text-emerald-500 mb-6" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-gray-900">
                    {t.nav.protection}
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
                    {t.protection.heroDesc}
                </p>
            </section>

            {/* Rules and Solutions Grid */}
            <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">

                {/* Left Column: Ecological Rules */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col space-y-6"
                >
                    <div className="flex items-center space-x-4 mb-2">
                        <h2 className="text-3xl font-bold border-l-4 border-emerald-500 pl-4 py-1 text-gray-900">
                            {t.protection.rules.title}
                        </h2>
                    </div>

                    {t.protection.rules.items.map((rule, idx) => (
                        <div key={idx} className="flex items-start space-x-4 bg-[#f4f6f8] border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed text-base">
                                {rule}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Right Column: Local Solutions */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col space-y-8"
                >
                    <div className="flex items-center space-x-4 mb-2">
                        <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-4 py-1 text-gray-900">
                            {t.protection.solutions.title}
                        </h2>
                    </div>

                    <div className="bg-[#f4f6f8] border border-gray-100 p-8 rounded-[2rem] shadow-sm">
                        <Lightbulb className="w-10 h-10 text-blue-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.protection.solutions.guides.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-base mb-6">
                            {t.protection.solutions.guides.desc}
                        </p>

                        <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-900">{t.protection.solutions.infrastructure.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-base">
                            {t.protection.solutions.infrastructure.desc}
                        </p>
                    </div>
                </motion.div>

            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center max-w-4xl mx-auto bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{t.protection.cta.title}</h2>
                <button className="bg-[#5cb82c] hover:bg-[#4a9a20] text-white font-bold py-3.5 px-10 rounded-full transition-all text-lg shadow-md hover:shadow-lg">
                    {t.protection.cta.button}
                </button>
            </section>

            <Footer />
        </main>
    );
}
