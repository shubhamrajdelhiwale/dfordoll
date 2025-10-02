import React from "react";
import Test from '/components/Test.jsx';
import Trending1 from '/components/Trending1.jsx';
import Trending2 from '/components/Trending2.jsx';
import TrendingSlider from '/components/TrendingSlider.jsx';

const languages = [
  { name: "Hindi", label: "हिंदी" },
  { name: "Bhojpuri", label: "भोजपुरी" },
  { name: "Punjabi", label: "ਪੰਜਾਬੀ" },
  { name: "Marathi", label: "मराठी" },
  { name: "Tamil", label: "தமிழ்" },
  { name: "Telugu", label: "తెలుగు" },
];

const genres = [
  { name: "Crime", img: "/images/crime.jpg" },
  { name: "Thriller", img: "/images/thriller.jpg" },
  { name: "Comedy", img: "/images/comedy.jpg" },
  { name: "Romantic", img: "/images/romantic.jpg" },
  { name: "Action", img: "/images/action.jpg" },
  { name: "Suspense", img: "/images/suspense.jpg" },
];

function WebSeries() {
  return (
    
    <div className="bg-black text-white  space-y-8">
        <Test/>

      {/* Browse by Language */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Browse by Language</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform"
            >
              <p className="text-2xl font-bold">{lang.label}</p>
              <p className="mt-2 text-gray-300">{lang.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Trending1/>

      {/* Browse by Genre */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Browse by Genre</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className="relative rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform"
            >
              <img
                src={genre.img}
                alt={genre.name}
                className="w-full h-28 object-cover brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
                <p className="text-xl mb-9  text-center font-bold uppercase">{genre.name}</p>
              </div>
              <p className="text-center mt-2">{genre.name}</p>
            </div>
          ))}
        </div>
      </div>
     <Trending2/>
     <TrendingSlider/>
    </div>
  );
}

export default WebSeries;
