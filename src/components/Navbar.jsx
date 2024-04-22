import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbHexagonLetterN } from "react-icons/tb";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (ev) => {
    ev.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }


  return (
    <div className=" p-3">
      <nav className="m-6">
        <div className="justify-center items-center md:flex md:justify-between">
          <div className="flex items-center justify-center">
            <Link to="/" className="flex p-1 text-4xl sm:text-7xl font-bold  text-primary hover:text-red-800 sm:ml-5">
              <TbHexagonLetterN /> NOTAFLIX
            </Link>
          </div>
          <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center p-5">
            <input
              type="text"
              placeholder="Buscar filme"
              onChange={(ev) => setSearch(ev.target.value)}
              value={search}
              className="px-2 py-1 rounded-sm w-36 sm:w-40 lg:w-60 lg:h-12 transition-all duration-300 bg-gray-600 opacity-50 border border-gray-400 mr-1 hover:bg-transparent custom-input text-white outline-none"
            />
            <button className="flex justify-center py-2 px-3 text-white bg-primary border border-primary rounded-sm hover:bg-red-800  lg:h-12 lg:text-4xl hover:border-red-800 transition-all"><IoSearch /></button>
          </form>
        </div>
          <div className="flex items-center justify-center md:justify-start w-full pt-10">
            <p className="font-bold text-sm sm:text-xl md:text-2xl text-center md:text-start sm:ml-7 text-white tracking-wider animate-bounce">
              Saiba sobre as curiosidades e avaliações dos seus filmes
              preferidos!
            </p>
          </div>
          <div className="flex items-center sm:justify-end justify-center cmy-3 transition-all duration-300"></div>
      </nav>
    </div>
  );
};

export default Navbar;
