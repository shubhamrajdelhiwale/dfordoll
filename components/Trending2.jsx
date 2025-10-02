import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const movies = [
    {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend12.webp",
    imgHover: '/images/trend12.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend13.webp",
    imgHover: '/images/trend13.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend14.webp",
    imgHover: '/images/trend14.webp',
  },
  {
    title: 'Babe Bhangra Paunde Ne',
    link: '#',
    imgNormal: "/images/trend1.webp",
    imgHover: '/images/trend1.webp',
  },
  {
    title: 'Gol Gappe',
    link: '#',
    imgNormal: "/images/trend2.webp",
    imgHover: '/images/trend2.webp',
  },
  {
    title: 'Sohreyan Da Pind Aa Gaya',
    link: '#',
    imgNormal: "/images/trend3.webp",
    imgHover: '/images/trend3.webp',
  },
  {
    title: 'Puaada',
    link: '#',
    imgNormal: "/images/trend4.webp",
    imgHover: '/images/trend4.webp',
  },
    {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend12.webp",
    imgHover: '/images/trend12.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend13.webp",
    imgHover: '/images/trend13.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend14.webp",
    imgHover: '/images/trend14.webp',
  },
  {
    title: 'Beautiful Billo',
    link: '#',
    imgNormal: "/images/trend5.webp",
    imgHover: '/images/trend5.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend6.webp",
    imgHover: '/images/trend6.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend7.webp",
    imgHover: '/images/trend7.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend8.webp",
    imgHover: '/images/trend8.webp'
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend9.webp",
    imgHover: '/images/trend9.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend10.webp",
    imgHover: '/images/trend10.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend12.webp",
    imgHover: '/images/trend12.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend13.webp",
    imgHover: '/images/trend13.webp',
  },
  {
    title: 'Main Viyah Nahi Karona Tere Naal',
    link: '#',
    imgNormal: "/images/trend14.webp",
    imgHover: '/images/trend14.webp',
  },
];

const Trending2 = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 300;

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      <h2 className="text-3xl font-bold text-amber-300 mx-3 mt-5 mb-6">Best Rated Movies</h2>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 mx-3 scrollbar-hide scroll-smooth"
      >
        {movies.map((movie, index) => (
          <a
            key={index}
            href={movie.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[200px] flex-shrink-0"
          >
            {/* Normal Image */}
            <img
              src={movie.imgNormal}
              alt={movie.title}
              className="w-full h-auto rounded-lg transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Hover Image */}
            <img
              src={movie.imgHover}
              alt={movie.title}
              className="w-full h-auto rounded-lg absolute border-white border-5 top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Title + Info (hidden on hover) */}
            <div className="absolute w-full opacity-0 bottom-13 text-center bg-white group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h3 className="text-black text-sm font-semibold">{movie.title}</h3>
              <p className="text-red-500 text-xs">2h 15m • Drama</p>
            </div>

            {/* Buttons on Hover */}
            <div className="absolute bottom-2 left-1  flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-2 pb-2 pt-2 duration-300 bg-white pr-7 pl-7 z-20">
              <button className="bg-cyan-200 text-black text-sm px-3 py-1 rounded mr-2">Watch</button>
              <button className="bg-yellow-300 text-black text-sm px-3 py-1 rounded">Share</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Trending2;
