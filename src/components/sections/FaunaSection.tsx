'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { Bird, ShieldAlert } from 'lucide-react';

export default function FaunaSection() {
    const { t } = useLanguage();

    const faunaList = [
        {
            id: 'seal',
            image: '/images/тюлень.jpg',
            icon: ShieldAlert,
        },
        {
            id: 'flamingo',
            image: '/images/flamingo.jpeg',
            icon: Bird,
        },
        {
            id: 'swan',
            image: '/images/Лебедь.jpg',
            icon: Bird,
        }
    ];

    return (
        <section className="py-24 bg-emerald-50 relative border-y border-emerald-100/50">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        {t.fauna.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t.fauna.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {faunaList.map((fauna) => {
                        const data = t.fauna.items[fauna.id as keyof typeof t.fauna.items];
                        const Icon = fauna.icon;

                        return (
                            <div key={fauna.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/5 border border-emerald-100 hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={fauna.image}
                                        alt={data.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-emerald-600 shadow-sm">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.name}</h3>
                                    <p className="text-gray-600 leading-relaxed m-0 flex-1">{data.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
