import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}&language=pt-BR`;

    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="w-full h-full linear-gradient(to top, bg-background-image) bg-background-image bg-cover bg-center">
      <Navbar />
      <div
        style={{ backdropFilter: "blur(3px) opacity(90%)" }}
        className="text-white border border-gray-500 rounded-2xl m-5 sm:m-10 p-10"
      >
        <h2 className="font-semibold text-center sm:text-left">
          Resultados para: {query}
        </h2>
        <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md-custom">
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
