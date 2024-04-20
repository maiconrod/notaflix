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
      style={{ backdropFilter: "blur(3px) opacity(90%)" }}
      className="text-white border border-gray-500 rounded-2xl m-5 sm:m-10 p-10"
    >
      <h2 className="font-semibold text-center sm:text-left">Melhores Filmes:</h2>
      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md-custom">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
};

export default TheTopMovies;
