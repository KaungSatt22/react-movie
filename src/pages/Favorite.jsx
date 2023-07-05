import React from "react";
import { useFav } from "../hooks/useFav";

const Favorite = () => {
  const { favMovie, removeMovie } = useFav();

  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-10 text-4xl font-bold">
        Your Favorite Movie List
      </h2>
      {favMovie.length <= 0 ? (
        <div className="text-center mt-24 font-bold text-2xl">
          <h2>You don't have any favorite movies</h2>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-5 mt-10">
          {favMovie.map((movie) => (
            <div
              className="flex flex-col lg:flex-row items-start gap-5"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className=" h-[15rem] w-full object-contain lg:h-[25rem]"
              />
              <div>
                <h2 className="text-2xl font-bold text-center">
                  {movie.title}
                </h2>
                <p className="mt-5 text-xl p-2">{movie.overview}</p>
                <button
                  className="p-2 text-xl bg-red-500 rounded-lg text-white mt-2 lg:mt-5 block mx-auto"
                  onClick={() => removeMovie(movie.id)}
                >
                  Remove Fav
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
