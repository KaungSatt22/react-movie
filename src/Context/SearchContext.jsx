import { createContext, useState } from "react";

export const SearchContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movieType, setMovieType] = useState("Latest");
  const movieTypeHandler = (e) => {
    setMovieType(e.target.value);
  };
  const searchHandler = (movie) => {
    setSearch(movie);
    setMovieType("Latest");
  };
  return (
    <SearchContext.Provider
      value={{ search, searchHandler, movieType, movieTypeHandler }}
    >
      {children}
    </SearchContext.Provider>
  );
};
