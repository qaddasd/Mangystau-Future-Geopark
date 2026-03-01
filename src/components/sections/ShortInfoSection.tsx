'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Info, ArrowRight } from 'lucide-react';

export default function ShortInfoSection() {
    const { t } = useLanguage();

    const infoKeys = ['torysh', 'sherkala', 'tuzbair', 'airakty', 'aktau', 'aktolagay'] as const;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        {t.shortInfo.title}
                    </h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infoKeys.map((key) => {
                        const item = t.shortInfo.items[key];
                        const isAktau = key === 'aktau';

                        return (
                            <div key={key} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="inline-flex items-center space-x-1 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 shadow-sm border border-gray-100">
                                        <Info className="w-3 h-3 text-emerald-500" />
                                        <span>{item.distance}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.desc}</p>

                                {isAktau && (
                                    <div className="mb-6">
                                        <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Gallery</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {/* Placeholders for user's uploaded images */}
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-sm group/img cursor-pointer">
                                                    <Image
                                                        src={`/images/aktau-${i}.jpg`}
                                                        alt={`Aktau photo ${i}`}
                                                        fill
                                                        className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                                                        unoptimized
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-auto flex items-center p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                                    <span className="text-emerald-700 font-medium text-sm">
                                        {item.feature}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
