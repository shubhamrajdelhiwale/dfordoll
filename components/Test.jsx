import React, { useState, useEffect } from "react";
import { movies } from "../src/data/Movies.js"; // 👈 import movies

const Test = () => {
  // sirf posters array nikal liya
  const images = movies.map((m) => m.poster);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 3 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 p-2">
            <div className="w-full h-64 flex items-center justify-center bg-black">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
