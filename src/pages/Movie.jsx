import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="w-full h-full linear-gradient(to top, bg-background-image) bg-background-image bg-cover bg-center">
      <Navbar />
      {movie && (
        <div className="text-white pb-16 flex-auto p-4">
          <h1 className="text-center font-bold text-3xl pb-10">
            {movie.title}
          </h1>
          <div className="flex justify-center">
            <MovieCard movie={movie} showLink={false} className="movie-card" />
          </div>
          <div
            style={{ backdropFilter: "blur(3px) opacity(100%)" }}
            className="grid grid-cols-1 space-y-5 text-white border border-gray-500 rounded-2xl m-5 sm:m-11 p-2 sm:p-10"
          >
            <div>
              <p className="text-center mt-4 mb-6 text-lg sm:text-2xl">{movie.tagline}</p>
              <h3 className="flex items-center justify-center text-lg sm:text-2xl font-semibold mb-2">
                <BsWallet2 className="text-primary text-lg sm:text-2xl mr-3" /> Orçamento:
              </h3>
              <p className="flex items-center justify-center mb-6">
                {formatCurrency(movie.budget)}
              </p>
              <h3 className="flex items-center justify-center text-lg sm:text-2xl font-semibold mb-2">
                <BsGraphUp className="text-primary text-lg sm:text-2xl mr-3" />{" "}
                Faturamento:
              </h3>
              <p className="flex items-center justify-center mb-6">
                {formatCurrency(movie.revenue)}
              </p>
              <h3 className="flex items-center justify-center text-lg sm:text-2xl font-semibold mb-2">
                <BsHourglassSplit className="text-primary text-lg sm:text-2xl mr-3" />{" "}
                Duração:
              </h3>
              <p className="flex items-center justify-center mb-6">
                {movie.runtime} minutos
              </p>
              <h3 className="flex items-center justify-center text-lg sm:text-2xl font-semibold">
                <BsFillFileEarmarkTextFill className="text-primary text-lg sm:text-2xl mr-3" />{" "}
                Descrição:
              </h3>
            </div>
            <p
            style={{ backgroundColor: "rgba(1, 1, 1, 0.5)" }}
            className="flex items-center justify-center text-center xl:mx-32 sm:text-justify border  border-gray-500 px-3 sm:px-10 py-4 pb-7 rounded-lg">
              {movie.overview}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Movie;
