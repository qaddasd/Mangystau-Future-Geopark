import React from 'react';
import Image from 'next/image';

/**
 * Photogallery section: A masonry-style image grid displaying various high-quality 
 * landscape photographs with a distinct green "See all photo" button.
 */
const Photogallery: React.FC = () => {
  // Assets provided in the prompt's <assets> section
  const galleryImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_429603-24.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_194487-25.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_775193-26.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_865945_ThebestAirPanophotos-27.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_927815-28.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_196941-29.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_493232_ThebestAirPanophotos-30.jpg",
    // Adding fallbacks based on visual density in screenshots to maintain layout
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_429603-24.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_194487-25.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_775193-26.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_927815-28.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_196941-29.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/576b3c29-90b5-4452-85e5-5ee6b2822d5d-airpano-com/assets/images/36_493232_ThebestAirPanophotos-30.jpg",
  ];

  return (
    <section className="bg-white py-[60px]" id="photogalleries">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        {/* Section Title with Horizontal Rules */}
        <div className="flex items-center justify-center mb-[40px] relative text-center">
          <div className="absolute left-0 right-0 top-1/2 border-t border-[#EEEEEE] -z-10"></div>
          <h2 className="bg-white px-[20px] text-[32px] font-light text-[#333333] tracking-wide">
            Photogallery
          </h2>
        </div>

        {/* Masonry-Style Tiled Grid */}
        {/* Note: The exact layout in screenshots appears to be a multi-column grid that shifts items. 
            We'll use a CSS grid with specific spans to mimic the look of the provided screenshot. */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[8px] mb-[40px]">
          {galleryImages.map((src, index) => {
            // Logic to vary sizes based on index to simulate the specific grid in the screenshot
            const isWide = index === 2 || index === 8;
            const isVWide = index === 5;
            
            return (
              <div 
                key={index} 
                className={`relative overflow-hidden cursor-pointer group rounded-[3px] 
                  ${isWide ? 'md:col-span-2' : ''} 
                  ${isVWide ? 'md:col-span-2 lg:col-span-2' : ''}
                `}
              >
                <div className="aspect-[3/2] relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Landscape photograph ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href="/photogalleries.php"
            className="inline-block bg-[#5CB82C] text-white px-[25px] py-[10px] text-[14px] font-normal rounded-[3px] hover:bg-[#6ed135] transition-colors duration-200 no-underline"
          >
            See all photo (15440)
          </a>
        </div>
      </div>

    </section>
  );
};

export default Photogallery;