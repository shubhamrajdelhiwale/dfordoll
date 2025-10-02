import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../src/data/Movies.js";


const trendingMovies = movies.filter(m =>
  Array.from({ length: 16 }, (_, i) => `Trend${i + 1}`).includes(m.id)
);

const Trending1 = () => {
  return ( <div className="relative w-full">
        <h2 className="text-3xl font-bold text-amber-300 mx-3 mt-5 mb-2">Trending Near You</h2>
    <div className="flex gap-5 mt-1  scrollbar-hide bg-black overflow-x-auto p-3">
      
      {trendingMovies.map((movie, index) => (
        <div
          key={index}
          className="group flex-none relative bg-transparent transition-all duration-300"
          style={{ width: "180px" }}
        >
          <div className="rounded-md overflow-hidden  border-transparent  bg-black transition-all duration-300 group-hover:scale-108">
            <div className="transition-all duration-300">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-auto transition-all duration-300  rounded"
              />
            </div>
            <div className="opacity-100  text-center py-2 transition-all duration-300">
              {/* <h3 className="text-white font-semibold">{movie.name}</h3> */}
              <Link to={`/watch/${movie.id}`} className="inline-block px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded">
  Watch Now
</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Trending1;
