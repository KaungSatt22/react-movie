import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allmovies from "./pages/Allmovies";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";
import Favorite from "./pages/Favorite";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Allmovies />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
