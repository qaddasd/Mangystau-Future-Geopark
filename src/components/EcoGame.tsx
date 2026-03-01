'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Leaf, Trash2, Droplets, Trophy, TreePine, Sparkles } from 'lucide-react';

type GridCell = {
    id: number;
    type: 'empty' | 'trash' | 'seed' | 'tree';
};

export default function EcoGame() {
    const { t } = useLanguage();
    const [score, setScore] = useState(0);
    const [grid, setGrid] = useState<GridCell[]>([]);
    const [won, setWon] = useState(false);

    const gridSize = 16; // 4x4 grid

    // Initialize and spawn trash randomly
    const initializeGame = () => {
        setScore(0);
        setWon(false);
        const newGrid: GridCell[] = Array.from({ length: gridSize }).map((_, i) => ({
            id: i,
            type: Math.random() > 0.7 ? 'trash' : 'empty'
        }));
        setGrid(newGrid);
    };

    useEffect(() => {
        initializeGame();
    }, []);

    // Every few seconds, maybe add more trash if the game is active
    useEffect(() => {
        if (won) return;
        const interval = setInterval(() => {
            setGrid(currentGrid => {
                const emptyCells = currentGrid.filter(cell => cell.type === 'empty');
                if (emptyCells.length > 0 && Math.random() > 0.5) {
                    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                    return currentGrid.map(cell =>
                        cell.id === randomCell.id ? { ...cell, type: 'trash' } : cell
                    );
                }
                return currentGrid;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [won]);

    useEffect(() => {
        if (score >= 100 && !won) {
            setWon(true);
        }
    }, [score, won]);

    const handleCellClick = (cellId: number) => {
        if (won) return;

        setGrid(currentGrid =>
            currentGrid.map(cell => {
                if (cell.id !== cellId) return cell;

                // Interaction Logic
                if (cell.type === 'trash') {
                    setScore(s => s + 5);
                    return { ...cell, type: 'empty' }; // Cleaned up!
                }
                else if (cell.type === 'empty') {
                    // Plant a seed
                    return { ...cell, type: 'seed' };
                }
                else if (cell.type === 'seed') {
                    // Water the seed -> grows to tree
                    setScore(s => s + 15);
                    return { ...cell, type: 'tree' };
                }

                return cell;
            })
        );
    };

    return (
        <div className="relative min-h-[70vh] w-full flex flex-col items-center justify-center p-4">

            {/* Background Decor */}
            <div className="absolute inset-0 bg-[#f4ebd0] opacity-30 z-0 border-[20px] border-[#e2d5b6] rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800 mb-4 flex items-center justify-center gap-3">
                        <Leaf className="w-10 h-10 text-emerald-500" />
                        {t.game.title}
                    </h2>
                    <p className="text-lg text-emerald-700/80 max-w-xl mx-auto font-medium">
                        {t.game.desc}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Game Board */}
                    <div className="flex-1 w-full relative">
                        <div className="grid grid-cols-4 gap-3 bg-[#e8debe] p-4 rounded-2xl shadow-inner">
                            {grid.map(cell => (
                                <button
                                    key={cell.id}
                                    onClick={() => handleCellClick(cell.id)}
                                    className={`
                     aspect-square rounded-xl flex items-center justify-center transition-all duration-300 transform
                     ${cell.type === 'empty' ? 'bg-[#d8cda2] hover:bg-[#c9bea0] cursor-pointer' : ''}
                     ${cell.type === 'trash' ? 'bg-red-100 hover:bg-red-200 shadow-md hover:scale-105 cursor-pointer' : ''}
                     ${cell.type === 'seed' ? 'bg-[#b69f66] hover:bg-[#a68f55] shadow-sm cursor-pointer' : ''}
                     ${cell.type === 'tree' ? 'bg-emerald-100 shadow-lg scale-105 select-none' : ''}
                   `}
                                >
                                    {cell.type === 'trash' && <Trash2 className="w-8 h-8 text-black/60 animate-bounce" />}
                                    {cell.type === 'seed' && <Droplets className="w-6 h-6 text-blue-400 animate-pulse" />}
                                    {cell.type === 'tree' && <TreePine className="w-10 h-10 text-emerald-600 drop-shadow-md" />}
                                </button>
                            ))}
                        </div>
                        {/* Instructions overlay */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 text-sm font-bold text-gray-500">
                            <div className="flex items-center gap-2"><Trash2 className="w-4 h-4 text-red-400" /> +5</div>
                            <div className="flex items-center gap-2"><TreePine className="w-4 h-4 text-emerald-500" /> +15</div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="w-full md:w-64 flex flex-col gap-6">
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center shadow-sm">
                            <h3 className="text-emerald-800 font-bold uppercase tracking-wider mb-2 text-sm">
                                {t.game.score}
                            </h3>
                            <div className="text-6xl font-black text-emerald-600 mb-2 font-mono">
                                {score}
                            </div>
                            <div className="text-xs font-bold text-emerald-600/60 bg-emerald-100/50 py-1.5 px-3 rounded-full inline-block">
                                {t.game.target}
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                            <button
                                onClick={initializeGame}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-xl hover:shadow-2xl active:scale-95"
                            >
                                {t.game.playAgain}
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {/* Win Modal Overlay */}
            {won && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-500">
                    <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl transform animate-in zoom-in-95 duration-500">
                        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative">
                            <Trophy className="w-12 h-12 text-emerald-500" />
                            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin-slow" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-4">{t.game.winTitle}</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t.game.winDesc}
                        </p>
                        <button
                            onClick={initializeGame}
                            className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Leaf className="w-5 h-5" />
                            {t.game.playAgain}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
