'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('../InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-[#aad3df]">
      Loading Map...
    </div>
  )
});

import { useLanguage } from "@/i18n/LanguageContext";

export default function ShootingLocationsMap() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {t.nav.map}
          </h2>
        </div>

        {/* Interactive Map Container */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 z-0">
          <InteractiveMap />
        </div>

        {/* Supporting text */}
        <div className="mt-8 text-center">
          <a
            href="/map"
            className="inline-flex items-center text-[#5cb82c] hover:text-[#4a9a20] font-medium transition-colors"
          >
            Толық картаны ашу →
          </a>
        </div>
      </div>
    </section>
  );
}
