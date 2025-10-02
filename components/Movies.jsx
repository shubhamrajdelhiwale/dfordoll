import React from "react";
import Test from '/components/Test.jsx';
import Trending1 from '/components/Trending1.jsx';
import Trending2 from '/components/Trending2.jsx';


const languages = [
  { name: "Hindi", label: "हिंदी" },
  { name: "Bhojpuri", label: "भोजपुरी" },
  { name: "Punjabi", label: "ਪੰਜਾਬੀ" },
  { name: "Marathi", label: "मराठी" },
  { name: "Tamil", label: "தமிழ்" },
  { name: "Telugu", label: "తెలుగు" },
];

const series = [
  { name: "Bakaiti", img: "/images/movie1.webp" },
  { name: "Saunkan", img: "/images/movie2.webp" },
  { name: "Tumm Tak", img: "/images/movie3.webp" },
  { name: "Bhootni", img: "/images/movie4.webp" },
  { name: "Kalidhar", img: "/images/movie5.webp" },
  { name: "Suspense", img: "/images/movie6.webp" },
];

function Movies() {
  return (
    
    <div className="bg-black text-white  space-y-8">
        {/* Browse by series */}
      <div>
        <h2 className="text-3xl font-bold text-cyan-100 mx-3 mt-5 mb-6">Free Movies To Watch</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {series.map((series) => (
            <div
              key={series.name}
              className="relative rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform"
            >
              <img
                src={series.img}
                alt={series.name}
                className="w-full h-28 object-cover brightness-75 group-hover:brightness-90"
              />
              <p className="text-center mt-2">{series.name}</p>
            </div>
          ))}
        </div>
        </div>
        <Trending1/>
        <Trending2/>
        <Test/>

      {/* Browse by Language */}
      <div>
        <h2 className="text-3xl font-bold text-red-300 mx-3 mt-5 mb-2">Browse by Language</h2>
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

      {/* Browse by series */}
      <div>
        <h2 className="text-3xl font-bold text-red-300 mx-3 mt-5 mb-2">Free Web Series</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {series.map((series) => (
            <div
              key={series.name}
              className="relative rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform"
            >
              <img
                src={series.img}
                alt={series.name}
                className="w-full h-28 object-cover brightness-75 group-hover:brightness-90"
              />
              <p className="text-center mt-2">{series.name}</p>
            </div>
          ))}
        </div>
      </div>
     <Trending2/>
    </div>
  );
}

export default Movies;
