import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MovieLoading = () => {
  return (
    <SkeletonTheme baseColor="#f5f4f4" highlightColor="#e9e8e8">
      <div>
        <Skeleton className="h-[60vh]" />
      </div>
      <div className="container mx-auto text-center">
        <h2>
          <Skeleton count={2} className="h-5 w-52 " />
        </h2>
        <p>
          <Skeleton count={3} className="h-5 " />
        </p>
        <div>
          <Skeleton className="h-10 w-52" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default MovieLoading;
