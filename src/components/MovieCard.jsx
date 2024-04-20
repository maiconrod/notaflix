import React from "react";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import Button from "./Button";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="p-1 pb-4 mx-3 grid  rounded-lg bg-gradient-to-t from-gray-600 via-gray-800 to-transparent">
        <img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          className="mb-3 m-2 max-w-60 sm:max-w-48 md:max-w-48 lg:max-w-64"
        />
        <h2 className="flex justify-center">{movie.title}</h2>
        <p className="flex items-center gap-2 p-3 justify-center">
          <FaStar className="text-yellow-300"/> {movie.vote_average}
        </p>

        {showLink && (
          <Link to={`/movie/${movie.id}`} className="flex justify-center items-center w-full">
            <Button btnText={"Detalhes"} />
          </Link>
        )}
    </div>
  );
};

export default MovieCard;
