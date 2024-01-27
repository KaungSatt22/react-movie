import React, { useEffect, useState } from "react";
import MovieImgeList from "./MovieImgeList";
import Loading from "./Loading/Loading";

const CustomMovie = ({ movieType, param, fetchfunType }) => {
  console.log(fetchfunType);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let fetch = async () => {
      setIsLoading(true);
      let res = await fetchfunType(param);
      setMovies(res);
      setIsLoading(false);
    };
    fetch();
  }, [param]);

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center mt-5">
          {movieType} Movies
        </h2>
        <div className="grid grid-cols-fluid gap-5 p-5 ">
          {movies.map((movie) => (
            <div key={movie.id}>
              {isLoading ? (
                <Loading />
              ) : (
                <MovieImgeList key={movie.id} {...movie} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomMovie;
