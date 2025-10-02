import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../src/data/Movies.js";
import RecommendedMovies from "../components/RecommendedMovies.jsx";
import Trending2 from '../components/Trending2.jsx';
import Trending from '../components/Trending1.jsx';
import '../src/index.css';

function MovieWatch() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <div className="text-white p-8 text-xl">Movie not found.</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Trailer Section */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6">
          <iframe
            src={movie.trailerUrl}
            title={movie.name}
            className="w-full h-120 border border-yellow-300 rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{movie.name}</h1>
            <p className="mt-2 text-gray-300">
              {movie.releaseDate} • {movie.duration} • {movie.languages.join(", ")}
            </p>
            <div className="flex gap-2 flex-wrap mt-3">
              {movie.genres.map((g) => (
                <span key={g} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {g}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-300">{movie.description}</p>
          </div>
          <h3 className="mt-6 text-xl font-semibold">Director: {movie.director}</h3>
        </div>

        {/* Sidebar as separate part */}
        <RecommendedMovies />
      </div>

      {/* Cast Section */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Cast</h3>
        <div className="flex gap-6 flex-wrap">
          {movie.cast.map((actor) => (
            <div key={actor.name} className="text-center w-24">
              <img
                src={actor.img}
                alt={actor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <p className="mt-2 text-sm">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Trending/>
      <Trending2/>
    </div>
  );
}

export default MovieWatch;
