import { createContext, useState } from "react";

export const SearchContext = createContext({
  search: "",
  movieType: "latest",
  movieTypeHandler: () => {},
  searchHandler: () => {},
});

export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movieType, setMovieType] = useState("latest");
  const movieTypeHandler = (e) => {
    setMovieType(e.target.value);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    setMovieType("latest");
  };
  return (
    <SearchContext.Provider
      value={{ search, searchHandler, movieType, movieTypeHandler }}
    >
      {children}
    </SearchContext.Provider>
  );
};
