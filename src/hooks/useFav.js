import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

export const useFav = () => {
  const { favMovie, addFavMovie, removeMovie } = useContext(FavoriteContext);

  return { favMovie, addFavMovie, removeMovie };
};
