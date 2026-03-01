'use client';

import React, { useState, useEffect } from 'react';
import { Droplets, Sprout, TreeDeciduous, TreePine, Sun, Award, RefreshCcw } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const MAX_RESOURCE = 120; // Internal max to catch overwatering
const DRAIN_RATE = 3; // Resource drain per tick
const TICK_MS = 2500; // Faster ticks for better pacing

export default function TreeSimulatorGame() {
    const { t } = useLanguage();
    const [isMounted, setIsMounted] = useState(false);

    // Game State
    const [level, setLevel] = useState(0); // 0 to 6
    const [water, setWater] = useState(50);
    const [sunlight, setSunlight] = useState(50);
    const [isGameOver, setIsGameOver] = useState(false);
    const [deathReason, setDeathReason] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem('ecoTreeState');
        if (saved) {
            try {
                const state = JSON.parse(saved);
                setLevel(state.level ?? 0);
                setWater(state.water ?? 50);
                setSunlight(state.sunlight ?? 50);
                setIsGameOver(state.isGameOver ?? false);
                setDeathReason(state.deathReason ?? null);
            } catch (e) { }
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('ecoTreeState', JSON.stringify({ level, water, sunlight, isGameOver, deathReason }));
        }
    }, [level, water, sunlight, isGameOver, deathReason, isMounted]);

    useEffect(() => {
        if (!isMounted || isGameOver || level >= 6) return;

        const interval = setInterval(() => {
            setWater(w => {
                const newW = Math.max(0, w - DRAIN_RATE);
                if (newW === 0) {
                    setIsGameOver(true);
                    setDeathReason("too_dry");
                }
                return newW;
            });
            setSunlight(s => {
                const newS = Math.max(0, s - DRAIN_RATE);
                if (newS === 0) {
                    setIsGameOver(true);
                    setDeathReason("too_dark");
                }
                return newS;
            });
        }, TICK_MS);

        return () => clearInterval(interval);
    }, [isMounted, isGameOver, level]);

    useEffect(() => {
        if (isGameOver) return;

        // Die from overwatering / too much sun (>100)
        if (water > 100) {
            setIsGameOver(true);
            setDeathReason("overwatered");
            return;
        }
        if (sunlight > 100) {
            setIsGameOver(true);
            setDeathReason("sunburn");
            return;
        }

        // Level up if in the sweet spot (>85)
        if (water >= 85 && sunlight >= 85 && level < 6) {
            setLevel(l => l + 1);
            // Reset slightly so they have to work for the next level
            setWater(40);
            setSunlight(40);
        }
    }, [water, sunlight, level, isGameOver]);

    const handleWater = () => {
        if (isGameOver || level >= 6) return;
        setWater(w => Math.min(MAX_RESOURCE, w + 15));
    };

    const handleSunlight = () => {
        if (isGameOver || level >= 6) return;
        setSunlight(s => Math.min(MAX_RESOURCE, s + 15));
    };

    const handleReset = () => {
        setLevel(0);
        setWater(50);
        setSunlight(50);
        setIsGameOver(false);
        setDeathReason(null);
    };

    if (!isMounted) return null;

    const renderTree = () => {
        const iconProps = { className: "drop-shadow-2xl transition-all duration-1000 ease-in-out" };
        switch (level) {
            case 0: return <div className="w-16 h-16 bg-[#8b5a2b] rounded-full flex items-center justify-center border-4 border-[#6b4521]"><div className="w-6 h-6 bg-[#d2b48c] rounded-full" /></div>; // Seed
            case 1: return <Sprout size={60} color="#86efac" {...iconProps} />;
            case 2: return <Sprout size={100} color="#4ade80" {...iconProps} />;
            case 3: return <TreeDeciduous size={130} color="#22c55e" {...iconProps} />;
            case 4: return <TreeDeciduous size={180} color="#16a34a" {...iconProps} />;
            case 5: return <TreePine size={230} color="#15803d" {...iconProps} />;
            case 6: return <TreePine size={300} color="#166534" className="drop-shadow-[0_20px_20px_rgba(21,128,61,0.5)] transition-all duration-1000" />;
            default: return null;
        }
    };

    const getStatusText = () => {
        if (isGameOver) {
            if (deathReason === "too_dry") return t.treeGame?.died || "Ағаш қурап қалды (Су жетіспеді)...";
            if (deathReason === "too_dark") return t.treeGame?.died || "Ағаш күнсіз солды...";
            if (deathReason === "overwatered") return "Ағаш суға тұншықты (Су тым көп)...";
            if (deathReason === "sunburn") return "Ағаш күнге күйіп кетті...";
            return t.treeGame?.died || "Ағаш өліп қалды...";
        }
        if (level >= 6) return t.treeGame?.win || "Ағаш толық өсті! Эко-қаһармансыз!";
        return `${t.treeGame?.growing || "Ағаш өсіп келеді..."} (Кезең: ${level}/6)`;
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-gradient-to-b from-sky-400 to-sky-100 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
            <div className="text-center mb-8 relative z-10 text-white">
                <h2 className="text-3xl font-black drop-shadow-md mb-2">{t.treeGame?.title || "Ағаш өсіру"}</h2>
                <p className="text-sky-50 font-medium">{getStatusText()}</p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 mb-4 relative z-10 bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <div>
                    <div className="flex justify-between text-sm text-sky-900 font-bold mb-1">
                        <span className="flex items-center gap-1"><Droplets size={16} /> {t.treeGame?.water || "Су"}</span>
                        <span>{water}% / 100% {water > 100 ? "⚠️" : ""}</span>
                    </div>
                    <div className="w-full bg-black/10 rounded-full h-3">
                        <div className={`h-3 rounded-full transition-all duration-300 ${water > 100 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${Math.min(100, water)}%` }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm text-sky-900 font-bold mb-1">
                        <span className="flex items-center gap-1"><Sun size={16} /> {t.treeGame?.sun || "Күн"}</span>
                        <span>{sunlight}% / 100% {sunlight > 100 ? "⚠️" : ""}</span>
                    </div>
                    <div className="w-full bg-black/10 rounded-full h-3">
                        <div className={`h-3 rounded-full transition-all duration-300 ${sunlight > 100 ? 'bg-red-500' : 'bg-yellow-400'}`} style={{ width: `${Math.min(100, sunlight)}%` }}></div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-sky-800 text-center mb-6 font-semibold bg-white/20 py-2 rounded-xl backdrop-blur-sm px-2">Ағаш өсу үшін су мен күнді 85%-дан асыру керек. 100%-дан асып кетсе ағаш өледі!</p>

            {/* Tree Display Area */}
            <div className="relative h-64 flex flex-col items-center justify-end mb-8 pt-8">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <Sun size={200} color="#fff" className="animate-spin-slow" />
                </div>
                <div className="relative z-10 mb-4 animate-bounce-slow">
                    {renderTree()}
                </div>
                {/* Ground */}
                <div className="absolute bottom-0 w-[150%] h-16 bg-[#8b5a2b] rounded-[100%] shadow-[inset_0_10px_20px_rgba(0,0,0,0.3)]"></div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 relative z-10">
                <button
                    onClick={handleWater}
                    disabled={isGameOver || level >= 6}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold py-4 px-2 rounded-2xl shadow-lg transition-all disabled:opacity-50 disabled:active:scale-100 flex flex-col items-center gap-2"
                >
                    <Droplets size={24} />
                    {t.treeGame?.addWater || "Су құю"}
                </button>
                <button
                    onClick={handleSunlight}
                    disabled={isGameOver || level >= 6}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-yellow-900 font-bold py-4 px-2 rounded-2xl shadow-lg transition-all disabled:opacity-50 disabled:active:scale-100 flex flex-col items-center gap-2"
                >
                    <Sun size={24} />
                    {t.treeGame?.addSun || "Күн түсіру"}
                </button>
            </div>

            {/* Game Over / Reset Overlay */}
            {(isGameOver || level >= 6) && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center">
                    {level >= 6 ? (
                        <div className="bg-emerald-100 text-emerald-800 p-6 rounded-3xl shadow-2xl border-4 border-emerald-500 mb-6">
                            <Award size={64} className="mx-auto mb-4 text-yellow-500" />
                            <h3 className="text-2xl font-black mb-2">{t.treeGame?.winTitle || "Жеңіс!"}</h3>
                            <p className="font-bold opacity-80">{t.treeGame?.winDesc || "Ағаш өздігінен өсе алады!"}</p>
                        </div>
                    ) : (
                        <div className="bg-red-50 text-red-800 p-6 rounded-3xl shadow-2xl border-4 border-red-400 mb-6">
                            <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-4 opacity-50 flex items-center justify-center"><TreeDeciduous size={32} color="#fff" /></div>
                            <h3 className="text-2xl font-black mb-2">{t.treeGame?.loseTitle || "Қап..."}</h3>
                            <p className="font-bold opacity-80">{t.treeGame?.loseDesc || (deathReason?.includes('too') ? "Ағашты күтуді ұмытпаңыз." : "Сіз шектен шығып кеттіңіз.")}</p>
                        </div>
                    )}

                    <button
                        onClick={handleReset}
                        className="bg-gray-900 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                    >
                        <RefreshCcw size={20} />
                        {t.treeGame?.restart || "Қайта бастау"}
                    </button>
                </div>
            )}

        </div>
    );
}
