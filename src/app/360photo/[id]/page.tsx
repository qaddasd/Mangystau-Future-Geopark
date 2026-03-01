import React from 'react';
import Navigation from '@/components/sections/Navigation';
import PannellumViewer from '@/components/PannellumViewer';
import LocationDetails from '@/components/LocationDetails';
import Footer from '@/components/sections/Footer';
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
    title: 'Каспий жағалауы (360°)',
    source: 'custom' as any,
    googleMapsUrl: 'https://www.google.com/maps/place/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA+%D0%9C%D0%B0%D1%8F%D0%BA/@43.6496352,51.1425815,3a,75y,304.42h,85.21t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDGyLmarwE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2bStzvlEQsJ2bVfBfxHN_XbDXerjha8xVB93dzxL4UCcs7J9fi2XSDDUhyy2HurdyxDO5XMEyfjd3CWqCHn2ITr0mY7_HRG4KCihvAH1H5ik3Kws4t524R32Ctmq_YRDQOlLgKLaA%3Dw900-h600-k-no-pi4.785527891979157-ya304.4156451440183-ro0-fo100!7i6080!8i3040!4m7!3m6!1s0x41b431448307c07b:0xa0944080c514d662!8m2!3d43.6496352!4d51.1425815!10e5!16s%2Fg%2F11g8zynq1f?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D',
    image: '/tours/caspian_custom_pano.jpg',
    thumb: '/tours/caspian_custom_pano.jpg'
  },
  aktau: {
    id: 'aktau',
    title: 'Ақтау қаласы — Каспий жауһары',
    source: 'google' as const,
    image: '/images/aktau-1.jpg',
    thumb: '/images/aktau-1.jpg'
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
    <main className="min-h-screen bg-[#f8fafc] flex flex-col pt-[80px]">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm">
        <Navigation />
      </div>

      {/* Hero 360 Viewer Area */}
      <div className="relative w-full h-[65vh] min-h-[500px] bg-black">
        <div className="absolute top-[20px] right-[20px] z-40 pointer-events-none">
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
          haov={(currentTour as any).haov}
          vaov={(currentTour as any).vaov}
          vOffset={(currentTour as any).vOffset}
        />

        {/* Floating Bottom Tour Selector for the 360 viewer */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl flex max-w-[90vw] overflow-hidden border border-gray-200">
          <div className="flex overflow-x-auto no-scrollbar scroll-smooth p-2 gap-2">
            {allToursList.map((tour) => (
              <Link
                key={tour.id}
                href={`/360photo/${tour.id}`}
                className={`flex-shrink-0 w-[120px] overflow-hidden rounded-xl border-2 transition-all ${tour.id === currentTour.id ? 'border-emerald-500 shadow-lg scale-100' : 'border-transparent hover:border-gray-200 scale-95 opacity-80 hover:opacity-100'
                  }`}
              >
                <div className="relative w-full h-[60px]">
                  <Image
                    src={tour.thumb}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="bg-white text-center p-1">
                  <span className="text-[9px] font-medium leading-tight line-clamp-2 text-gray-800">
                    {tour.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Detailed Info Content */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 pt-16 pb-12 z-10 relative">
        <LocationDetails id={id} />
      </div>

      <Footer />
    </main>
  );
}
