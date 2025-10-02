import React, { useRef } from "react";
import { movies } from "../src/data/Movies.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TrendingSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };
const topMovies = movies.slice(0, 9);

  return (
    <div className="relative w-full bg-black pb-7">
      <h2 className="text-3xl font-bold text-white mx-3 mt-2 mb-4">
        India's Fav Originals
      </h2>

      {/* Left Scroll Button */}
      <button 
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Right Scroll Button */}
      <button 
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <FaChevronRight />
      </button>

      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide px-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {movies.slice(0, 9).map((movie, index) => (
  <div key={movie.id} className="flex-shrink-0 flex items-center">
    {/* Number */}
    <div className="text-8xl font-extrabold text-white w-16 text-center">
      {index + 1}
    </div>
    {/* Poster */}
    <img 
      src={movie.image} 
      alt={movie.name} 
      className="rounded-lg w-48 h-72 object-cover" 
    />
  </div>
))}

      </div>
    </div>
  );
};

export default TrendingSlider;
