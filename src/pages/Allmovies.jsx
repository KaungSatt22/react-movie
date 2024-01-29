import React, { Suspense, lazy } from "react";

const Trending = lazy(() => import("../components/MovieType/Trending"));
const Romance = lazy(() => import("../components/MovieType/Romance"));
const Comedy = lazy(() => import("../components/MovieType/Comedy"));
const Horror = lazy(() => import("../components/MovieType/Horror"));
const Latest = lazy(() => import("../components/MovieType/Latest"));

import { useSearch } from "../hooks/useSearch";
import { SuspenseLoading } from "../components/Loading/Loading";
import InputRadio from "../components/InputRadio";

const Allmovies = () => {
  const { movieType, movieTypeHandler } = useSearch();
  let showComponent;
  switch (movieType) {
    case "Comedy":
      showComponent = <Comedy />;
      break;
    case "Romance":
      showComponent = <Romance />;
      break;
    case "Horror":
      showComponent = <Horror />;
      break;
    case "Latest":
      showComponent = <Latest />;
    default:
      showComponent = <Latest />;
  }

  return (
    <div className="overflow-x-hidden">
      <Trending />
      <h2 className="text-2xl text-center mt-5">Movie Type</h2>
      <div className="flex justify-center itmes-center gap-5 mt-5">
        <InputRadio
          onChange={movieTypeHandler}
          radioType="Latest"
          movieType={movieType}
        />
        <InputRadio
          onChange={movieTypeHandler}
          radioType="Comedy"
          movieType={movieType}
        />
        <InputRadio
          onChange={movieTypeHandler}
          radioType="Romance"
          movieType={movieType}
        />

        <InputRadio
          onChange={movieTypeHandler}
          radioType="Horror"
          movieType={movieType}
        />
      </div>
      <Suspense fallback={<SuspenseLoading />}>{showComponent}</Suspense>
    </div>
  );
};

export default Allmovies;
