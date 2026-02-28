"use client";

import React from "react";
import Navigation from "@/components/sections/Navigation";
import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";
import { Layers, MapPin } from "lucide-react";

// Use dynamic import for the map component to avoid SSR issues
const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl animate-pulse">
      <span className="text-gray-400 text-xl font-medium">Жүктелуде... / Loading...</span>
    </div>
  ),
});

export default function FullMapPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />

      {/* Page Header */}
      <div className="pt-32 pb-6 px-6 relative z-10 w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 md:mb-0 hidden md:block border-l-4 border-emerald-500 pl-4 py-1">
            {t.nav.map}
          </h1>
          <h1 className="md:hidden text-2xl font-extrabold text-gray-900 mb-4">
            {t.nav.map}
          </h1>

          <div className="flex gap-4">
            <button className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full border border-gray-200 transition-all font-medium text-sm">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>{t.map.layers}</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full border border-gray-200 transition-all font-medium text-sm">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>{t.map.points}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 h-full flex flex-col pt-8" style={{ minHeight: "calc(100vh - 150px)" }}>
        <div className="w-full h-full relative bg-gray-50 shadow-md rounded-2xl overflow-hidden border border-gray-200 flex-1 min-h-[500px]">
          <InteractiveMap />
        </div>
      </div>
    </main>
  );
}
