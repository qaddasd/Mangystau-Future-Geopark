import React from 'react';
import Navigation from '@/components/sections/Navigation';
import PannellumViewer from '@/components/PannellumViewer';
import Image from 'next/image';
import Link from 'next/link';

// Sources: AirPano, 360Cities, Google Street View
const tours = {
  bozjyra: {
    id: 'bozjyra',
    title: 'Бозжыра — Босжыра және Қызылқұп (360° аэро)',
    source: 'airpano' as const,
    iframeUrl: 'https://www.airpano.com/embed.php?3D=mangyshlak2',
    fallbackIframeUrl: 'https://www.360cities.net/embed_iframe/bozjira-mangistau-kazakhstan',
    googleMapsUrl: 'https://www.google.com/maps/@43.354717,54.071899,3a,75y,0h,90t/data=!3m8!1e1!3m6!1sAF1QipOdPj0-hVm1fnXa4Gqxcv4K0y_G8AhdUqjDZ6dO!2e10!3e11!7i5376!8i2688',
    image: 'https://www.airpano.com/files/mangyshlak2/images/image1.jpg',
    thumb: 'https://www.airpano.com/files/mangyshlak2/images/image1.jpg'
  },
  torysh: {
    id: 'torysh',
    title: 'Торыш — шар тастар алаңқайы (360°)',
    source: 'google' as const,
    image: '/tours/torysh.jpg',
    thumb: 'https://www.airpano.com/files/mangyshlak/images/image7.jpg'
  },
  sherkala: {
    id: 'sherkala',
    title: 'Шерқала — арыстан тау (360° аэро)',
    source: 'airpano' as const,
    iframeUrl: 'https://www.airpano.com/embed.php?3D=mangyshlak',
    fallbackIframeUrl: 'https://www.360cities.net/embed_iframe/sherkala-mountain-mangystau',
    googleMapsUrl: 'https://www.google.com/maps/@43.711,52.095,3a,75y,0h,90t/data=!3m8!1e1!3m6!1sAF1QipMvzL_kLJxjr4PwZ5m3bN_QO9GpT8U0F6_cGLzA!2e10!3e11!7i5376!8i2688',
    image: 'https://www.airpano.com/files/mangyshlak/images/image6.jpg',
    thumb: 'https://www.airpano.com/files/mangyshlak/images/image6.jpg'
  },
  tuzbair: {
    id: 'tuzbair',
    title: 'Тұзбайыр — тұз көлі (360° аэро)',
    source: 'airpano' as const,
    iframeUrl: 'https://www.airpano.com/embed.php?3D=mangyshlak',
    fallbackIframeUrl: 'https://www.360cities.net/embed_iframe/tuzbair-mangystau-kazakhstan',
    googleMapsUrl: 'https://www.google.com/maps/@43.55,53.5,3a,75y,0h,90t/data=!3m8!1e1!3m6!1sAF1QipOVs_h5jPJj6L8s6g2jS_A3IzB-d_5bN4gUqyF2!2e10!3e11!7i5376!8i2688',
    image: 'https://www.airpano.com/files/mangyshlak/images/image3.jpg',
    thumb: 'https://www.airpano.com/files/mangyshlak/images/image3.jpg'
  },
  ayrakty: {
    id: 'ayrakty',
    title: 'Айрақты — Қамалдар алаңқайы (360° аэро)',
    source: 'airpano' as const,
    iframeUrl: 'https://www.airpano.com/embed.php?3D=mangyshlak',
    fallbackIframeUrl: 'https://www.360cities.net/embed_iframe/ayrakty-valley-castles-mangystau',
    googleMapsUrl: 'https://www.google.com/maps/@43.4,53.8,3a,75y,0h,90t/data=!3m8!1e1!3m6!1sAF1QipM_bHS3qZ9BxCy5ThR_r_Nk40ygd_a6xJbmLq6L!2e10!3e11!7i5376!8i2688',
    image: 'https://www.airpano.com/files/mangyshlak/images/image5.jpg',
    thumb: 'https://www.airpano.com/files/mangyshlak/images/image5.jpg'
  },
  caspian: {
    id: 'caspian',
    title: 'Каспий жағалауы — Ақтау маңы (360°)',
    source: 'google' as const,
    image: '/tours/caspian.png',
    thumb: '/tours/caspian.png'
  },
  aktolagay: {
    id: 'aktolagay',
    title: 'Ақтолағай үстірті (360° аэро)',
    source: 'airpano' as const,
    iframeUrl: 'https://www.airpano.com/embed.php?3D=mangyshlak',
    fallbackIframeUrl: 'https://www.360cities.net/embed_iframe/aktolagay-plateau-mangystau',
    googleMapsUrl: 'https://www.google.com/maps/@44.0,54.5,3a,75y,0h,90t/data=!3m8!1e1!3m6!1sAF1QipPZCAq-wXrJ6q_w3L_K7mGJ3xz-AZ4FGLq-r_lR!2e10!3e11!7i5376!8i2688',
    image: 'https://www.airpano.com/files/mangyshlak/images/image2.jpg',
    thumb: 'https://www.airpano.com/files/mangyshlak/images/image2.jpg'
  }
};

const allToursList = Object.values(tours);

// Source badge labels
const sourceLabels: Record<string, { label: string; color: string }> = {
  airpano: { label: 'AirPano', color: 'bg-blue-600' },
  google: { label: 'Google Street View', color: 'bg-green-600' },
  '360cities': { label: '360Cities', color: 'bg-purple-600' },
};

export default async function TourPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Fallback to the first tour if not found
  const currentTour = tours[id as keyof typeof tours] || tours.bozjyra;
  const sourceBadge = sourceLabels[currentTour.source] || sourceLabels.airpano;

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black flex flex-col">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* 360 Viewer */}
      <div className="flex-1 w-full h-full relative">
        {/* Source badge in top right */}
        <div className="absolute top-[70px] right-[20px] z-40 pointer-events-none">
          <span className={`${sourceBadge.color} text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm bg-opacity-80`}>
            📷 {sourceBadge.label}
          </span>
        </div>

        <PannellumViewer
          image={currentTour.image}
          title={currentTour.title}
          iframeUrl={(currentTour as any).iframeUrl}
          fallbackIframeUrl={(currentTour as any).fallbackIframeUrl}
          googleMapsUrl={(currentTour as any).googleMapsUrl}
          source={(currentTour as any).source}
        />
      </div>

      {/* Bottom Carousel Container */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="relative max-w-[1200px] mx-auto py-2 px-10 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {allToursList.map((tour) => (
            <Link
              key={tour.id}
              href={`/360photo/${tour.id}`}
              className={`flex-shrink-0 w-[140px] border-2 transition-all ${tour.id === currentTour.id ? 'border-[#5cb82c]' : 'border-transparent hover:border-gray-300'
                }`}
            >
              <div className="relative w-full h-[70px]">
                <Image
                  src={tour.thumb}
                  alt={tour.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-white text-center p-1">
                <span className="text-[10px] leading-tight line-clamp-2 text-gray-700">
                  {tour.title}
                </span>
              </div>
            </Link>
          ))}

          {/* Close / Hide Button placeholder (from screenshot) */}
          <button className="absolute top-2 right-2 text-gray-400 hover:text-black">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Scroll Right Arrow */}
          <button className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-black/70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
