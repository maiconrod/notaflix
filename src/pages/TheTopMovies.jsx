import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";


const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const TheTopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div
      a
      style={{ backdropFilter: "blur(3px) opacity(100%)" }}
      className="text-white border border-gray-500 rounded-2xl m-5 sm:m-11 p-2 sm:p-10"
    >
      <h2 className="font-semibold text-center md:text-left pb-4">
        Melhores Filmes:
      </h2>
      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md-custom overflow-auto">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default TheTopMovies;
