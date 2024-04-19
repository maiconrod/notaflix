import React from "react";
import { useState, useEffect } from "react";

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
    <div>{topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}</div>
  );
};

export default TheTopMovies;
