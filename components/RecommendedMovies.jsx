// Recommended.jsx
import React from "react";
import { movies } from "../src/data/Movies.js"; // Ensure this path is correct

// Select movies whose id starts with "Trend" followed by a number, then sort numerically
const recommendedMovies = movies
  .filter(m => /^Trend\d+$/.test(m.id))
  .sort((a, b) => {
    const numA = parseInt(a.id.replace("Trend", ""), 10);
    const numB = parseInt(b.id.replace("Trend", ""), 10);
    return numA - numB;
  });

function Recommended() {
  return (
    <div className="p-4">
      <h2 className="text-white text-xl font-bold mb-4">
        Recommended Movies For You
      </h2>

      {/* Scrollable section */}
      <div className="w-[520px] h-[650px] overflow-y-scroll scrollbar-hide">
        <div className="grid grid-cols-2 gap-4">
          {recommendedMovies.map((movie) => (
            <a
              key={movie.id}
              
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full h-full flex-shrink-0 rounded-lg overflow-hidden"
            >
              {/* Normal Image */}
              <img
                src={movie.imgNormal}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={movie.imgHover}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Title + Info (on hover) */}
              <div className="absolute w-full opacity-0 bottom-13 text-center bg-white group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-black text-sm font-semibold">{movie.title}</h3>
                <p className="text-red-500 text-xs">2h 15m • Drama</p>
              </div>

              {/* Buttons on Hover */}
              <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-2 pb-2 pt-2 duration-300 bg-white z-20">
                <button className="bg-cyan-200 text-black text-sm px-3 py-1 rounded">
                  Watch
                </button>
                <button className="bg-yellow-300 text-black text-sm px-3 py-1 rounded">
                  Share
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommended;
