'use client';

import React, { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import EcoGame from '@/components/EcoGame';
import TreeSimulatorGame from '@/components/TreeSimulatorGame';
import { useLanguage } from '@/i18n/LanguageContext';
import { Trash2, TreePine } from 'lucide-react';

export default function GamePage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'clean' | 'tree'>('clean');

    return (
        <main className="min-h-screen bg-white font-inter flex flex-col">
            <Navigation />

            {/* Spacer for fixed nav */}
            <div className="h-[72px]" />

            {/* Game Section Wrapper */}
            <div className="flex-1 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 flex flex-col items-center justify-start p-4 py-8 relative w-full">

                {/* Tabs container */}
                <div className="w-full max-w-lg mb-8 bg-white/60 p-2 rounded-2xl shadow-sm border border-gray-100 backdrop-blur-md flex gap-2 z-20">
                    <button
                        onClick={() => setActiveTab('clean')}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${activeTab === 'clean' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-500 hover:bg-white hover:text-emerald-700'
                            }`}
                    >
                        <Trash2 className="w-5 h-5" />
                        <span>{t.treeGame?.tab1 || "Clean Trash"}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('tree')}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${activeTab === 'tree' ? 'bg-sky-500 text-white shadow-md' : 'text-gray-500 hover:bg-white hover:text-sky-600'
                            }`}
                    >
                        <TreePine className="w-5 h-5" />
                        <span>{t.treeGame?.tab2 || "Grow a Tree"}</span>
                    </button>
                </div>

                {/* Render active game */}
                <div className="w-full h-full flex flex-col items-center justify-center animate-in fade-in duration-500">
                    {activeTab === 'clean' ? <EcoGame /> : <TreeSimulatorGame />}
                </div>
            </div>

            <Footer />
        </main>
    );
}
