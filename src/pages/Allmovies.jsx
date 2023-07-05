import React, { Suspense, lazy } from "react";
import { SuspenseLoading } from "../components/Loading/Loading";
import Trending from "../components/MovieType/Trending";
import Romance from "../components/MovieType/Romance";
import Comedy from "../components/MovieType/Comedy";
import Horror from "../components/MovieType/Horror";
import Latest from "../components/MovieType/Latest";

import { useSearch } from "../hooks/useSearch";
const Allmovies = () => {
  const { movieType, movieTypeHandler } = useSearch();
  let showComponent;
  switch (movieType) {
    case "comedy":
      showComponent = <Comedy />;
      break;
    case "romance":
      showComponent = <Romance />;
      break;
    case "horror":
      showComponent = <Horror />;
      break;
    case "latest":
      showComponent = <Latest />;
    default:
      showComponent = <Latest />;
  }

  return (
    <div className="overflow-x-hidden">
      <Trending />
      <h2 className="text-2xl text-center mt-5">Movie Type</h2>
      <div className="flex justify-center itmes-center gap-5">
        <div className="space-x-2">
          <input
            type="radio"
            name="type"
            id="latest"
            value="latest"
            onChange={movieTypeHandler}
            checked={movieType === "latest" ? true : false}
          />
          <label htmlFor="latest">Latest</label>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="type"
            id="comedy"
            value="comedy"
            onChange={movieTypeHandler}
            checked={movieType === "comedy" ? true : false}
          />
          <label htmlFor="comedy">Comedy</label>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="type"
            id="romance"
            value="romance"
            onChange={movieTypeHandler}
            checked={movieType === "romance" ? true : false}
          />
          <label htmlFor="romance">Romance</label>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="type"
            id="horror"
            value="horror"
            onChange={movieTypeHandler}
            checked={movieType === "horror" ? true : false}
          />
          <label htmlFor="horror">Horror</label>
        </div>
      </div>
      {showComponent}
    </div>
  );
};

export default Allmovies;
