import React, { useEffect, useState } from "react";
import { fetchTrendingMovie } from "../../api/api";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let fetch = async () => {
      setIsLoading(true);
      let res = await fetchTrendingMovie();
      setTrending(res);
      setIsLoading(false);
    };
    fetch();
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center my-5">Trending Movies</h2>
        <div className="flex scroller whitespace-nowrap gap-5 ">
          {trending.map((movie) => (
            <div key={movie.id}>
              {isLoading ? (
                <SkeletonTheme baseColor="#f5f4f4" highlightColor="#e9e8e8">
                  <div>
                    <Skeleton className="h-[10rem] w-[10rem]" />
                  </div>
                </SkeletonTheme>
              ) : (
                <NavLink
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  className="cursor-pointer"
                >
                  <div className="w-[10rem]">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="trending Movie"
                      className="hover:scale-[1.5]"
                    />
                  </div>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
