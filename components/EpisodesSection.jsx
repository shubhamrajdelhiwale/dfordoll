import React from "react";
import { FaRupeeSign, FaClock, FaBell, FaTv, FaSyncAlt, FaHeart, FaFire, FaFilm, FaPlay,FaLaugh,FaGift, } from "react-icons/fa";

const features = [
  {
    icon: <FaRupeeSign className="text-3xl text-yellow-400" />,
    title: "FREE Episodes",
    subtitle: "Free",
  },
  {
    icon: <FaClock className="text-3xl text-yellow-400" />,
    title: "QUICK Preview",
    subtitle: "Spoilers",
  },
  {
    icon: <FaBell className="text-3xl text-yellow-400" />,
    title: "NEW Episodes",
    subtitle: "Latest",
  },
  {
    icon: <FaTv className="text-3xl text-yellow-400" />,
    title: "Watch LIVE",
    subtitle: "Live TV",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-yellow-400" />,
    title: "Weekly RECAP",
    subtitle: "Webisodes",
  },
  {
    icon: <FaHeart className="text-3xl text-yellow-400" />,
    title: "BEST Scenes",
    subtitle: "Best Scenes",
  },
  {
    icon: <FaFire className="text-3xl text-yellow-400" />,
    title: "Hot Picks",
    subtitle: "Popular",
  },
  {
    icon: <FaFilm className="text-3xl text-yellow-400" />,
    title: "Movies",
    subtitle: "Bollywood",
  },
  {
    icon: <FaPlay className="text-3xl text-yellow-400" />,
    title: "Clips",
    subtitle: "Highlights",
  },
  {
    icon: <FaGift className="text-3xl text-yellow-400" />,
    title: "Clips",
    subtitle: "Highlights",
  },
  
];

function EpisodesSection() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl  px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-amber-300   mb-4">
          Episodes, Spoilers & More
        </h2>

        {/* Features Grid */}
        <div className="flex w-full  justify-between gap-11">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32 cursor-pointer"
            >
              {/* Circle with icon */}
              <div className="flex flex-col justify-center items-center bg-black border border-red-600 rounded-full w-27 h-27 mb-3 hover:bg-white hover:text-black transition-colors duration-300">
                {item.icon}
                <p className="text-xs font-medium mt-2">{item.title}</p>
              </div>
              {/* Subtitle */}
              <p className="text-sm text-gray-300">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EpisodesSection;
