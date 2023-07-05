import React from "react";
import { Link } from "react-router-dom";

const MovieImgeList = ({ poster_path, title, id, vote_average }) => {
  return (
    <Link to={`/movie/${id}`} key={id}>
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className=" rounded-md"
            alt="movie_poster"
          />
        ) : (
          <div className="h-[34rem] flex justify-center items-center">
            <h2 className="font-bold text-xl">No Image Found</h2>
          </div>
        )}
      </div>
      <div className="bg-slate-50 p-3 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>Rating :{vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieImgeList;
