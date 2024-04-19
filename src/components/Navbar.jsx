import React from "react";
import { Link } from "react-router-dom";
import { TbHexagonLetterN } from "react-icons/tb";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-black p-3">
      <nav className="m-6">
        <div className="flex items-center justify-center sm:justify-start">
          <h2 className="flex items-center p-3">
            <Link className="p-1 text-4xl text-primary"><TbHexagonLetterN /></Link>
            <Link to="/" className="font-bold text-4xl text-primary">
              NOTAFLIX
            </Link>
          </h2>
        </div>
        <div className="sm:grid sm:grid-cols-2">
          <div className="flex items-center sm:justify-start justify-center">
            <p className="font-bebas sm:text-left text-sm sm:text-sm text-center p-3 m-2 text-white">
              Saiba sobre as curiosidades e avaliações dos seus filmes
              preferidos!
            </p>
          </div>
          <div className="flex items-center sm:justify-end justify-center cmy-3 transition-all duration-300">
            <form className="flex items-center justify-center w-44 sm:mr-10 p-5">
              <input type="text" placeholder="Buscar filme" className="px-2 py-1 rounded-sm w-40 sm:w-48 transition-all duration-500"/>
              <Button btnText={<IoSearch />}/>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
