import React from 'react';
import Image from 'next/image';

const photoData = [
  {
    title: "Бозжыра — Босжыра және Қызылқұп",
    views: "51,510",
    href: "/360photo/bozjyra",
    thumb: "https://www.airpano.com/files/mangyshlak2/images/image1.jpg",
    source: "AirPano",
  },
  {
    title: "Торыш — шар тастар алаңқайы",
    views: "—",
    href: "/360photo/torysh",
    thumb: "https://www.airpano.com/files/mangyshlak/images/image7.jpg",
    source: "Google",
  },
  {
    title: "Шерқала — арыстан тау",
    views: "43,759",
    href: "/360photo/sherkala",
    thumb: "https://www.airpano.com/files/mangyshlak/images/image6.jpg",
    source: "AirPano",
  },
  {
    title: "Тұзбайыр — тұз көлі",
    views: "43,759",
    href: "/360photo/tuzbair",
    thumb: "https://www.airpano.com/files/mangyshlak/images/image3.jpg",
    source: "AirPano",
  },
  {
    title: "Айрақты — Қамалдар алаңқайы",
    views: "43,759",
    href: "/360photo/ayrakty",
    thumb: "https://www.airpano.com/files/mangyshlak/images/image5.jpg",
    source: "AirPano",
  },
  {
    title: "Каспий жағалауы — Ақтау маңы",
    views: "—",
    href: "/360photo/caspian",
    thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    source: "Google",
  },
  {
    title: "Ақтолағай үстірті",
    views: "43,759",
    href: "/360photo/aktolagay",
    thumb: "https://www.airpano.com/files/mangyshlak/images/image2.jpg",
    source: "AirPano",
  },
];

const Photo360Grid = () => {
  return (
    <section className="py-[60px] bg-white">
      <div className="container px-[15px] mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-10 w-full">
          <div className="flex-grow border-t border-[#eeeeee]"></div>
          <h2 className="px-5 text-[32px] font-light text-[#333333] whitespace-nowrap">
            360° Photo
          </h2>
          <div className="flex-grow border-t border-[#eeeeee]"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px]">
          {photoData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative group block overflow-hidden aspect-square rounded-[3px] bg-[#eeeeee]"
            >
              {/* Spacer/Structure preservation */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.thumb}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* 360 Icon Badge (Top Left) */}
              <div className="absolute top-[10px] left-[10px] z-20 w-[35px] h-[35px] bg-[#5cb82c] rounded-full flex items-center justify-center shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="absolute -bottom-1 text-[8px] font-bold text-white uppercase tracking-tighter">360°</span>
              </div>

              {/* Views Badge (Top Right) */}
              <div className="absolute top-[10px] right-[10px] z-20 flex flex-col items-end gap-1">
                <div className="bg-[rgba(0,0,0,0.6)] text-white text-[10px] px-2 py-0.5 rounded-[2px] font-sans">
                  views: <span className="text-[#5cb82c]">{item.views}</span>
                </div>
                <div className={`text-white text-[9px] px-2 py-0.5 rounded-[2px] font-sans ${
                  item.source === 'AirPano' ? 'bg-blue-600/70' : 
                  item.source === 'Google' ? 'bg-green-600/70' : 'bg-purple-600/70'
                }`}>
                  {item.source}
                </div>
              </div>

              {/* Title Gradient Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-transparent z-10"></div>

              {/* Title Text (Bottom Centered) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                <p className="text-white text-center text-[13px] leading-[1.2] font-sans text-shadow-sm line-clamp-2">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/map"
            className="inline-block bg-[#5cb82c] text-white px-[25px] py-[10px] rounded-[3px] text-[14px] hover:bg-[#4ea624] transition-colors font-sans"
          >
            Барлық 360° фотосуреттерді көру ({photoData.length})
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photo360Grid;