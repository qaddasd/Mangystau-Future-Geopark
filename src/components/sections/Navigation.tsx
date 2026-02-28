"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/dictionaries";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const currentLangLabel = {
    kz: "ҚАЗ",
    ru: "РУС",
    en: "ENG"
  }[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[10000] h-[72px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-gray-100">
      <div className="container h-full flex items-center justify-between px-6 xl:px-8 max-w-7xl mx-auto">
        {/* Left Side: Logo/Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 text-gray-900 font-bold text-xl tracking-tight hover:text-emerald-600 transition-colors">
            <Globe className="w-6 h-6 text-emerald-500" />
            <span className="hidden sm:inline-block">Mangystau Geopark</span>
          </Link>
        </div>

        {/* Center: Main Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 text-[15px] font-medium hover:text-emerald-600 transition-colors">
            {t.nav.home}
          </Link>
          <Link href="/map" className="active:scale-95 bg-[#5cb82c] text-white hover:bg-[#4a9a20] text-[15px] font-medium py-2 px-5 rounded-full shadow-sm transition-all duration-300">
            {t.nav.map}
          </Link>
        </div>

        {/* Right Side: Language & Mobile Toggle */}
        <div className="flex items-center space-x-4">

          {/* Custom Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all text-sm font-medium border border-gray-200"
            >
              <span>{currentLangLabel}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2">
                {(['kz', 'ru', 'en'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${language === lang
                      ? "bg-gray-50 text-emerald-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    {lang === 'kz' ? 'Қазақша' : lang === 'ru' ? 'Русский' : 'English'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[320px] bg-white border-l border-gray-100 shadow-2xl transform transition-transform duration-300 ease-in-out z-[10001] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-gray-900 font-bold text-lg">Мәзір</span>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-900 bg-gray-50 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <Link href="/" onClick={toggleMobileMenu} className="text-gray-700 text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/map" onClick={toggleMobileMenu} className="text-white bg-[#5cb82c] text-center text-lg font-medium py-3 px-4 rounded-xl hover:bg-[#4a9a20] transition-colors mt-4 shadow-sm">
              {t.nav.map}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;