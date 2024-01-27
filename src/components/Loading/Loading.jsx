import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loading = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#f5f4f4" highlightColor="#e9e8e8">
        <div>
          <Skeleton className="w-[20rem] h-[20rem] " />
        </div>
        <div>
          <Skeleton className="h-10 w-[20rem]" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export const SuspenseLoading = () => {
  let newArr = new Array(10).fill("loading");
  return (
    <div className="grid grid-cols-fluid gap-[5rem] p-5">
      {newArr.map((_, i) => (
        <Loading key={i} />
      ))}
    </div>
  );
};
export default Loading;
