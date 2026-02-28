import React from 'react';

const Partners = () => {
    const logos = [
        { name: "UNESCO", subtitle: "Global Geoparks" },
        { name: "Ecology KZ", subtitle: "Ministry of Ecology" },
        { name: "KazakhTourism", subtitle: "National Company" },
        { name: "AirPano", subtitle: "Interactive Tours" },
        { name: "WWF", subtitle: "Nature Conservation" },
    ];

    return (
        <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center cursor-default">
                            <span className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tighter">{logo.name}</span>
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">{logo.subtitle}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
