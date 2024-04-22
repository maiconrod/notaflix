import React from "react";
import Navbar from "../components/Navbar";
import TheTopMovies from "./TheTopMovies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full linear-gradient(to top, bg-background-image) bg-background-image bg-cover bg-center">
        <Navbar />
        <TheTopMovies />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
