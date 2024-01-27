import React, { createContext, useState } from "react";

const FavoriteContext = createContext({});

export const FavoriteProvider = ({ children }) => {
  const [favMovie, setFavMoive] = useState([]);
  const addFavMovie = (movie) => {
    let findIdx = favMovie.findIndex((favmovie) => favmovie.id === movie.id);
    if (findIdx === -1) {
      setFavMoive((prev) => [...prev, movie]);
    }
  };
  const removeMovie = (id) => {
    setFavMoive((prev) => prev.filter((movie) => movie.id !== id));
  };
  return (
    <FavoriteContext.Provider value={{ favMovie, addFavMovie, removeMovie }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;
