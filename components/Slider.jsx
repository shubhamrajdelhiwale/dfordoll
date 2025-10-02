import React, { useState, useEffect } from "react";

import movie1 from "/images/movie1.webp";
import movie2 from "/images/movie2.webp";
import movie3 from "/images/movie3.webp";
import movie4 from "/images/movie4.webp";
import movie5 from "/images/movie5.webp";
import movie6 from "/images/movie6.webp";
import movie7 from "/images/movie7.webp";

const images = [
  { src: movie1, title: "Bakaiti" },
  { src: movie2, title: "Saunkan Saunkanay 2" },
  { src: movie3, title: "Tumm Se Tumm Tak" },
  { src: movie4, title: "The Bhootni" },
  { src: movie5, title: "Kaalidhar Laapata" },
  { src: movie6, title: "Movie Three" },
  { src: movie7, title: "Movie Three" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ✅ FIXED AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, [images.length]);
  
  const getPositionStyle = (index) => {
    const total = images.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    if (index === currentIndex) {
      return "z-10 scale-100 translate-x-0  opacity-100";
    }
    if (index === prevIndex) {
      return "z-10 scale-100 -translate-x-[81%] opacity-80% ";
    }
    if (index === nextIndex) {
      return "z-10 scale-100 translate-x-[81%] opacity-80%";
    }
    return "hidden";
  };

  return (
    <div className="relative w-full h-[340px] content-center mt-7  mb-5 overflow-hidden bg-black">
      <div className="relative w-full h-[360px]  flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out transform w-3/4 h-full ${getPositionStyle(index)}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-contain  shadow-lg"
            />
            {index === currentIndex && (
              <div className="absolute bottom-7 left-33 text-white z-30">
                <h2 className="text-3xl font-bold">{image.title}</h2>
                <div className="mt-4 flex gap-4">
                  <button className="bg-white text-black px-4 py-2 rounded">▶ Watch</button>
                  <button className="bg-purple-600 px-4 py-2 rounded">👑 Buy Plan</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-62 top-1/2 -translate-y-1/2 bg-white  text-black p-3 rounded-full z-40"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-62 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full z-40"
      >
        ›
      </button>
    </div>
  );
};

export default Slider;
