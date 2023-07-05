import React, { useState, useEffect } from "react";
import { fetchAllMovie } from "../../api/api";
import { useSearch } from "../../hooks/useSearch";
import MovieImgeList from "../MovieImgeList";
import Loading from "../Loading/Loading";

const Latest = () => {
  const [movieDb, setMovieDb] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { search } = useSearch();
  useEffect(() => {
    let fetch = async () => {
      setIsLoading(true);
      let data = await fetchAllMovie(search);
      setMovieDb(data);
      setIsLoading(false);
    };
    fetch();
  }, [search]);
  return (
    <div>
      <div>
        <h2 className="text-center text-2xl mt-5 font-bold">Lastest Movies</h2>
        <div className="grid grid-cols-fluid gap-5 p-5">
          {movieDb.length > 0 ? (
            movieDb.map((movie) => (
              <div key={movie.id}>
                {isLoading ? <Loading /> : <MovieImgeList {...movie} />}
              </div>
            ))
          ) : (
            <div>
              <h2 className="text-center text-4xl font-bold mt-10 lg:mt-20">
                No Movie Found !
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Latest;
