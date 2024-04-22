import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  return (
    <div
    style={{ backdropFilter: "blur(3px) opacity(100%)" }}
    className="p-2 pb-4 mx-3 grid justify-items-center items-center rounded-lg bg-gradient-to-t border border-gray-500 mb-3 min-w-72 max-w-72 sm:max-w-80">
        <img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          className="m-2 max-w-60 sm:max-w-48 md:max-w-48 lg:max-w-64 rounded-lg"
        />
        <h2 className="text-center">{movie.title}</h2>
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
