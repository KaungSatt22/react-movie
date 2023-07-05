import { SearchContext } from "../Context/SearchContext";
import { useContext } from "react";

export const useSearch = () => {
  const { search, movieType, movieTypeHandler, searchHandler } =
    useContext(SearchContext);
  return { search, movieType, movieTypeHandler, searchHandler };
};
