import React, { useState } from "react";
import { movies } from "../src/data/Movies.js";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [recent, setRecent] = useState([]);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = movies.filter((movie) => {
      const text = `${movie.name || ""} ${movie.title || ""}`.toLowerCase();
      return text.includes(value.toLowerCase());
    });

    setFiltered(results);
  };

  const handleSelect = (movie) => {
    // Save recent searches
    setRecent((prev) => {
      const updated = [movie.name || movie.title, ...prev.filter((r) => r !== (movie.name || movie.title))];
      return updated.slice(0, 5);
    });

    setQuery("");
    setFiltered([]);
    navigate(`/watch/${movie.id}`);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Search input */}
      <div className="flex items-center bg-white text-black border border-yellow-400 px-4 py-2 rounded-lg">
        <FaSearch className="mr-2 text-black" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search for Movies, Shows, Channels etc."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Recent Searches */}
      {recent.length > 0 && query === "" && focused && (
        <div className="absolute bg-[#140028] text-white mt-2 p-4 rounded-lg w-full z-50">
          <h4 className="text-sm mb-2 font-bold">Recent Searches</h4>
          <div className="flex flex-wrap gap-2">
            {recent.map((item) => (
              <span
                key={item}
                className="bg-purple-800 px-3 py-1 rounded-full cursor-pointer text-sm"
                onMouseDown={() => {
                  const movie = movies.find(
                    (m) => (m.name || m.title) === item
                  );
                  if (movie) handleSelect(movie);
                  else setQuery(item); // fallback if movie not found
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {filtered.length > 0 && focused && (
        <div className="absolute bg-[#140028] text-white mt-2 rounded-lg w-full shadow-lg max-h-80 overflow-y-auto scrollbar-hide z-50">
          {filtered.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-3 p-2 hover:bg-purple-900 cursor-pointer"
              onMouseDown={() => handleSelect(movie)}
            >
              <img
                src={movie.poster || movie.image}
                alt={movie.name || movie.title}
                className="w-12 h-16 object-cover rounded"
              />
              <span>{movie.name || movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
