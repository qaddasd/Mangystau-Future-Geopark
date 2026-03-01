'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const baseLocations = [
  {
    id: 'bozjyra',
    lat: 43.419,
    lng: 54.072,
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'torysh',
    lat: 44.329,
    lng: 51.583,
    image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'sherkala',
    lat: 44.256,
    lng: 52.012,
    image: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'caspian',
    lat: 43.648,
    lng: 51.171,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'video'
  },
  {
    id: 'dunes',
    lat: 43.350,
    lng: 53.380,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'aktau',
    lat: 43.648,
    lng: 51.171,
    image: '/images/aktau-1.jpg',
    type: 'photo'
  }
];

const createIcon = (type: string) => {
  const color = type === 'video' ? '#ff6600' : '#5cb82c';
  const svg = `
    <svg viewBox="0 0 24 32" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.376 0 12c0 8.01 10.608 18.96 11.16 19.524a1.188 1.188 0 0 0 1.68 0C13.392 30.96 24 20.01 24 12c0-6.624-5.37-12-12-12z" />
      <circle cx="12" cy="11" r="5" fill="white" />
    </svg>
  `;

  return L.divIcon({
    html: `<div style="width: 24px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">${svg}</div>`,
    className: '',
    iconSize: [24, 32],
    iconAnchor: [12, 32],
    popupAnchor: [0, -32],
  });
};

export default function InteractiveMap() {
  const { t, language } = useLanguage();

  const clickToViewText = {
    kz: 'Көру үшін басыңыз: ',
    ru: 'Нажмите для просмотра: ',
    en: 'Click to view: '
  }[language] || 'Көру үшін басыңыз: ';

  useEffect(() => {
    // Fix leaflet marker icon issues with Next.js/Webpack
    // @ts-expect-error - overriding internal Leaflet method
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] z-0">
      <MapContainer
        center={[43.9, 52.3]}
        zoom={7}
        scrollWheelZoom={true}
        className="w-full h-full min-h-[500px]"
        style={{ background: '#aad3df' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {baseLocations.map((loc) => {
          // Fallback map data for Aktau using caspian dict details since they share info or Aktau isn't explicitly defined
          const dictKey = loc.id === 'aktau' ? 'caspian' : loc.id as keyof typeof t.map.locations;
          const locData = t.map.locations[dictKey];
          return (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              icon={createIcon(loc.type)}
            >
              <Popup className="custom-popup" maxWidth={400} minWidth={300}>
                <div className="flex flex-col gap-2 p-1">
                  <h3 className="font-bold text-sm mb-1">{loc.id === 'aktau' ? t.shortInfo.items.aktau.title : locData.title}</h3>
                  {loc.id === 'aktau' ? (
                    <div className="grid grid-cols-2 gap-1 w-full h-[150px] mb-2 rounded overflow-hidden">
                      <div className="relative w-full h-full col-span-2">
                        <Image src="/images/aktau-1.jpg" alt={locData.title} fill className="object-cover" unoptimized />
                      </div>
                      <div className="relative w-full h-[70px]">
                        <Image src="/images/aktau-2.jpg" alt={locData.title} fill className="object-cover" unoptimized />
                      </div>
                      <div className="relative w-full h-[70px]">
                        <Image src="/images/aktau-3.jpg" alt={locData.title} fill className="object-cover" unoptimized />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-[150px] mb-2 rounded overflow-hidden">
                      <Image
                        src={loc.image}
                        alt={locData.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <p className="text-xs text-gray-700 mb-2">{locData.description}</p>

                  {locData.infographics && (
                    <div className="bg-gray-50 border border-gray-100 rounded p-2 mb-2">
                      <ul className="text-[11px] text-gray-600 space-y-1">
                        {locData.infographics.map((info: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-500 mr-1.5">•</span>
                            {info}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="text-sm pt-2 mt-1 border-t border-gray-100">
                    <strong>{clickToViewText}</strong>
                    <Link
                      href={`/360photo/${loc.id}`}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      {loc.id === 'aktau' ? t.shortInfo.items.aktau.title : locData.title}
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  );
}
