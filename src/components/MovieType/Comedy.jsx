import React, { useEffect, useState } from "react";
import { fetchMovieType } from "../../api/api";
import MovieImgeList from "../MovieImgeList";
import Loading from "../Loading/Loading";
const Comedy = () => {
  const [comedy, setComedy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let fetch = async () => {
      setIsLoading(true);
      let res = await fetchMovieType("35");
      setComedy(res);
      setIsLoading(false);
    };
    fetch();
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center mt-5">Comedy Movies</h2>
        <div className="grid grid-cols-fluid gap-5 p-5 ">
          {comedy.map((movie) => (
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

export default Comedy;
