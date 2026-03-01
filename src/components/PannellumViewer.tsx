'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Pannellum relies heavily on window and DOM, so we import it dynamically
const Pannellum = dynamic(
  () => import('pannellum-react').then((mod) => mod.Pannellum),
  { ssr: false }
);

interface PannellumViewerProps {
  image?: string;
  title: string;
  iframeUrl?: string;
  fallbackIframeUrl?: string;
  googleMapsUrl?: string;
  source?: 'airpano' | 'google' | '360cities' | 'custom';
  haov?: number;
  vaov?: number;
  vOffset?: number;
}

export default function PannellumViewer({ image, title, iframeUrl, fallbackIframeUrl, googleMapsUrl, source, haov, vaov, vOffset }: PannellumViewerProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(iframeUrl);
  const [iframeError, setIframeError] = useState(false);
  const [activeFallback, setActiveFallback] = useState<'primary' | 'fallback' | 'google'>('primary');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Reset state when iframeUrl changes
  useEffect(() => {
    setCurrentUrl(iframeUrl);
    setIframeError(false);
    setActiveFallback('primary');
  }, [iframeUrl]);

  const handleIframeError = useCallback(() => {
    if (activeFallback === 'primary' && fallbackIframeUrl) {
      setCurrentUrl(fallbackIframeUrl);
      setActiveFallback('fallback');
    } else if (activeFallback !== 'google' && googleMapsUrl) {
      setCurrentUrl(googleMapsUrl);
      setActiveFallback('google');
    } else {
      setIframeError(true);
    }
  }, [activeFallback, fallbackIframeUrl, googleMapsUrl]);

  // Switch to alternate source
  const switchSource = useCallback((target: 'primary' | 'fallback' | 'google') => {
    if (target === 'primary' && iframeUrl) {
      setCurrentUrl(iframeUrl);
      setActiveFallback('primary');
    } else if (target === 'fallback' && fallbackIframeUrl) {
      setCurrentUrl(fallbackIframeUrl);
      setActiveFallback('fallback');
    } else if (target === 'google' && googleMapsUrl) {
      setCurrentUrl(googleMapsUrl);
      setActiveFallback('google');
    }
    setIframeError(false);
  }, [iframeUrl, fallbackIframeUrl, googleMapsUrl]);

  if (currentUrl) {
    return (
      <div className="relative w-full h-screen bg-black">
        {!iframeError ? (
          <iframe
            src={currentUrl}
            className="w-full h-full border-none"
            allowFullScreen
            loading="lazy"
            allow="accelerometer; gyroscope; fullscreen"
            onError={handleIframeError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center space-y-4">
              <p className="text-xl opacity-60">Панорама қолжетімсіз / Panorama unavailable</p>
              <p className="text-sm opacity-40">Сыртқы серверлерден жүктелмеді</p>
              {googleMapsUrl && activeFallback !== 'google' && (
                <button
                  onClick={() => switchSource('google')}
                  className="mt-4 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  🗺️ Google Maps ашу
                </button>
              )}
            </div>
          </div>
        )}

        {/* Top Left Title Overlay */}
        <div className="absolute top-4 left-4 z-40 bg-black/60 px-4 py-2 rounded-lg text-white pointer-events-none backdrop-blur-md border border-white/10">
          <h1 className="text-xl font-medium tracking-wide">{title}</h1>
        </div>

        {/* Source switcher buttons (bottom right) */}
        <div className="absolute bottom-[90px] right-4 z-40 flex flex-col gap-2">
          {iframeUrl && activeFallback !== 'primary' && (
            <button
              onClick={() => switchSource('primary')}
              className="px-3 py-1.5 bg-blue-600/80 text-white text-xs rounded-full hover:bg-blue-600 transition-colors backdrop-blur-sm shadow-lg"
            >
              {source === 'airpano' ? '📷 AirPano' : source === 'google' ? '🗺️ Google' : '🌐 360Cities'}
            </button>
          )}
          {fallbackIframeUrl && activeFallback !== 'fallback' && (
            <button
              onClick={() => switchSource('fallback')}
              className="px-3 py-1.5 bg-purple-600/80 text-white text-xs rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm shadow-lg"
            >
              🌐 360Cities
            </button>
          )}
          {googleMapsUrl && activeFallback !== 'google' && (
            <button
              onClick={() => switchSource('google')}
              className="px-3 py-1.5 bg-green-600/80 text-white text-xs rounded-full hover:bg-green-600 transition-colors backdrop-blur-sm shadow-lg"
            >
              🗺️ Google Maps
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black">
      {image && (
        <Pannellum
          width="100%"
          height="100%"
          image={image}
          pitch={10}
          yaw={180}
          hfov={110}
          haov={haov || 360}
          vaov={vaov || 180}
          vOffset={vOffset || 0}
          autoLoad
          onLoad={() => {
            console.log("panorama loaded");
          }}
        >
        </Pannellum>
      )}

      {/* Overlay Instructions */}
      {showOverlay && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 transition-opacity duration-1000"
          style={{ opacity: showOverlay ? 1 : 0 }}
        >
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white text-center border border-white/10 shadow-2xl max-w-lg mx-auto">
            <h3 className="text-xl mb-6 font-light">Use mouse or keyboard to control panorama</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-80">
              <div className="flex flex-col items-center">
                <svg width="64" height="100" viewBox="0 0 64 100" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 1 C15 1 2 15 2 40 C2 70 15 99 32 99 C49 99 62 70 62 40 C62 15 49 1 32 1 Z" />
                  <path d="M2 40 L62 40" />
                  <path d="M32 1 L32 40" />
                  <circle cx="32" cy="20" r="4" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-4">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 C10 20 40 10 60 10 C80 10 110 20 110 50" />
                  <circle cx="60" cy="10" r="4" fill="white" />
                  <path d="M50 0 L60 10 L70 0" />
                  <path d="M10 50 L110 50" />
                </svg>
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <div className="w-10 h-10 border border-white rounded flex items-center justify-center">↑</div>
                  <div></div>
                  <div className="w-10 h-10 border border-white rounded flex items-center justify-center">←</div>
                  <div className="w-10 h-10 border border-white rounded flex items-center justify-center">↓</div>
                  <div className="w-10 h-10 border border-white rounded flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Left Title Overlay */}
      <div className="absolute top-4 left-4 z-40 bg-black/40 px-4 py-2 rounded text-white pointer-events-none backdrop-blur-sm">
        <h1 className="text-xl font-light">{title}</h1>
      </div>
    </div>
  );
}
