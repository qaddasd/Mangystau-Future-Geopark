import React from 'react';
import Image from 'next/image';

interface VideoItemProps {
  href: string;
  thumbSrc: string;
  views: string;
  title: string;
}

const VideoItem = ({ href, thumbSrc, views, title }: VideoItemProps) => {
  return (
    <a 
      href={href} 
      className="group relative block overflow-hidden rounded-[3px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Aspect Ratio Container (3:2) */}
      <div className="relative aspect-[3/2] w-full bg-[#eeeeee]">
        <Image
          src={thumbSrc}
          alt={title}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Top Right Views Badge */}
        <div className="absolute top-[8px] right-[8px] z-10 bg-[rgba(0,0,0,0.6)] px-[6px] py-[2px] rounded-[2px] text-white text-[11px] font-body">
          views: <span className="text-[#5cb82c] font-bold">{views}</span>
        </div>

        {/* Top Left Video Type Icon (Orange Play Circle) */}
        <div className="absolute top-[8px] left-[8px] z-10 w-[35px] h-[35px] bg-[#fb8c00] rounded-full flex items-center justify-center shadow-md">
           <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="m10 8 6 4-6 4V8z" fill="white"/>
          </svg>
          <div className="absolute -bottom-1 text-[8px] text-white font-bold leading-none bg-[#fb8c00] px-0.5 rounded-sm">360°</div>
        </div>

        {/* Bottom Title Overlay with Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 p-[10px] text-white">
          <h3 className="text-[14px] font-normal leading-[1.2] text-shadow-sm line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};

const Video360Grid = () => {
  const videos = [
    {
      href: "360video/vr-sunny-sandbank/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/sunny_sandbank_01-12.jpg",
      views: "0",
      title: "Sunny Sandbank. VR Relaxation"
    },
    {
      href: "360video/vr-baikal-full/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-baikal-full-01-13.jpg",
      views: "15,780",
      title: "Baikal Lake, World's Deepest Lake"
    },
    {
      href: "360video/vr-snowy-forest/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-snowy-forest-01-14.jpg",
      views: "1,578",
      title: "360 Virtual Tour №7. Winter, Snowy Forest"
    },
    {
      href: "360video/vr-winter-forest/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-winter-forest-01-15.jpg",
      views: "2,077",
      title: "Winter forest, VR relaxation"
    },
    {
      href: "360video/vr-porto-2/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-porto2-16.jpg",
      views: "17,369",
      title: "Porto, Portugal. 360° 6K aerial video"
    },
    {
      href: "360video/fenghuang/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/fenghuang_02-17.jpg",
      views: "24,251",
      title: "Ancient town of Fenghuang, China"
    },
    {
      href: "360video/vr-moscow-new-year-01/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-moscow-new-year-01-18.jpg",
      views: "24,406",
      title: "New Year in Moscow"
    },
    {
      href: "360video/vr-great-wall-full_01/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-great-wall-full_01-19.jpg",
      views: "17,722",
      title: "Great Wall of China"
    },
    {
      href: "360video/vr-egypt-2025/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-egypt-2025-20.jpg",
      views: "7,935",
      title: "360 Virtual Tour №6. Egypt, Pyramids of Giza"
    },
    {
      href: "360video/vr-autumn-relax-01/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-autumn-relax-01-21.jpg",
      views: "3,372",
      title: "Autumn city, VR medetation"
    },
    {
      href: "360video/vr-neush-2025-01/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-neush-2025-01-22.jpg",
      views: "4,729",
      title: "360 Virtual Tour №5. Neuschwanstein Castle"
    },
    {
      href: "360video/vr-kuril-abandoned-01/",
      thumbSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/vr-kuril-abandoned-01-23.jpg",
      views: "57,287",
      title: "Abandoned Kuril Islands"
    }
  ];

  return (
    <section className="py-[60px] bg-white">
      <div className="container px-[15px]">
        {/* Section Header */}
        <div className="relative mb-[40px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[#eeeeee]"></div>
          </div>
          <div className="relative bg-white px-6">
            <h2 className="text-[32px] font-light text-[#333333] tracking-tight uppercase">
              360° Video
            </h2>
          </div>
        </div>

        {/* Content Description */}
        <div className="max-w-[1200px] mx-auto mb-10 text-[#333333] hidden lg:block">
           <p className="text-[14px] leading-[1.6] mb-4 text-center">
            We create high-quality stabilized video having 8k and 4k resolution, 48 or 24 frames per second together with high-quality post-processing.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]">
          {videos.map((video, index) => (
            <VideoItem 
              key={index}
              href={video.href}
              thumbSrc={video.thumbSrc}
              views={video.views}
              title={video.title}
            />
          ))}
        </div>

        {/* Footer Link / Button */}
        <div className="mt-[40px] text-center">
          <a
            href="/map"
            className="inline-block bg-[#5cb82c] text-white px-[30px] py-[10px] rounded-[3px] text-[14px] font-normal hover:bg-[#4ea125] transition-colors"
          >
            See all 360° Video (276)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video360Grid;