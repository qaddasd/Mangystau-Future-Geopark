import React from 'react';
import { Video, Camera, Glasses, Box, Globe, Image as ImageIcon, Smartphone, Monitor, View, MapPin } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "360° Panoramic Creations:",
      items: [
        {
          name: "360° VIDEO",
          icon: <Video className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/everest_2022_01.jpg",
        },
        {
          name: "360° PHOTOGRAPHY",
          icon: <Camera className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/ingushetia_2025_01.jpg",
        },
        {
          name: "360° GIGAPANORAMA",
          icon: <View className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/mexico_2022_01.jpg",
        },
        {
          name: "360° TIMELAPSE",
          icon: <Box className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/vr-winter-forest-01.jpg",
        }
      ]
    },
    {
      title: "Content sales:",
      items: [
        {
          name: "VIRTUAL TOURS",
          icon: <MapPin className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/iran-desert_01.jpg",
        },
        {
          name: "STOCK PHOTOS",
          icon: <ImageIcon className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/falls_eng.jpg",
        },
        {
          name: "STOCK 360° VIDEOS",
          icon: <Video className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/vr-baikal-full-01.jpg",
        },
        {
          name: "APPLICATIONS",
          icon: <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/isfahan_part_1.jpg",
        }
      ]
    },
    {
      title: "Exhibition installations:",
      items: [
        {
          name: "EXHIBITION INSTALLATIONS",
          icon: <Monitor className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/iran_citadel_02.jpg",
        },
        {
          name: "TOUCH SCREENS",
          icon: <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/iran-red-village-01.jpg",
        },
        {
          name: "VR HEADSETS",
          icon: <Glasses className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/sunny_sandbank_01.jpg",
        },
        {
          name: "BINOCULARS",
          icon: <View className="w-10 h-10 text-white" strokeWidth={1.5} />,
          bgImage: "https://www.airpano.com/files/r_450/vr-snowy-forest-01.jpg",
        }
      ]
    }
  ];

  return (
    <section className="bg-[#f7f7f7] py-[60px]">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-10 w-full">
          <div className="flex-grow border-t border-[#EEEEEE]"></div>
          <h2 className="px-6 text-[32px] font-light text-[#333333] uppercase tracking-wider">Services</h2>
          <div className="flex-grow border-t border-[#EEEEEE]"></div>
        </div>

        {serviceCategories.map((category, idx) => (
          <div key={idx} className="mb-10 last:mb-0">
            <h3 className="text-[18px] text-[#006699] font-normal mb-4">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
              {category.items.map((item, itemIdx) => (
                <a 
                  key={itemIdx}
                  href="#"
                  className="group relative block aspect-[3/2] overflow-hidden bg-black rounded-[3px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  
                  {/* Central Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/20 rounded-full p-4 backdrop-blur-sm border border-white/20">
                      {item.icon}
                    </div>
                  </div>

                  {/* Bottom Text Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-[#000000]/60 flex items-center justify-center px-4">
                    <span className="text-white text-[11px] font-normal uppercase tracking-[0.05em] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.name}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;