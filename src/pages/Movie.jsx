import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "../api/api";
import MovieLoading from "../components/Loading/MovieLoading";
import { useFav } from "../hooks/useFav";
import Youtube from "../components/Youtube";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [isPlay, setIsPlay] = useState(false);
  const [video, setVideo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addFavMovie, removeMovie, favMovie } = useFav();
  const { id } = useParams();
  const playHandler = () => {
    setIsPlay(!isPlay);
  };
  let findItem = favMovie.findIndex((movie) => movie.id === +id);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      let res = await fetchSingleMovie(id);
      setIsLoading(false);
      setMovie(res);
      let findOFFVideo = res.videos.results?.find(
        (video) => video.name === "Official Trailer"
      );
      if (findOFFVideo) {
        setVideo(findOFFVideo.key);
      }
    };
    fetch();
  }, [id]);
  useEffect(() => {
    document.title = movie.title;
    return () => (document.title = "React Movie");
  }, [movie.title]);
  let genres = movie?.genres?.map((gen) => gen.name);
  return (
    <div>
      {isLoading ? (
        <MovieLoading />
      ) : (
        <div>
          <div
            className="h-[60vh] relative bg-center "
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}")`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              {isPlay ? (
                <div className="flex">
                  <Youtube title={movie.title} videoId={video} />
                  <div className="absolute right-0">
                    <button
                      className="p-3 bg-red-500 text-white rounded-lg"
                      onClick={playHandler}
                    >
                      X
                    </button>
                  </div>
                </div>
              ) : (
                <div className=" absolute bottom-0 lg:left-20 bg-slate-50 p-5 h-45 w-full max-w-lg ">
                  <h2 className="text-3xl">{movie.title} Movie Trailer</h2>
                  <div className="flex items-center justify-between">
                    <button
                      className="mt-5 p-3 bg-red-500 text-white rounded-lg "
                      onClick={playHandler}
                    >
                      Watch Trailer
                    </button>
                    {findItem === -1 ? (
                      <button
                        className="mt-5 p-3 bg-blue-500 text-white rounded-lg "
                        onClick={() => addFavMovie(movie)}
                      >
                        Add Favorite
                      </button>
                    ) : (
                      <button
                        className="mt-5 p-3 bg-blue-500 text-white rounded-lg "
                        onClick={() => removeMovie(movie.id)}
                      >
                        Remove Favorite
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 container mx-auto text-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
              <h2 className="text-4xl text-center font-bold">Movie OverView</h2>
              <h3 className="text-2xl">
                (Rating : {movie?.vote_average?.toFixed(1)})
              </h3>
            </div>
            <h2 className="my-5 text-3xl font-bold">{movie.original_title}</h2>
            <p className="text-xl p-2">{movie.overview}</p>

            <ul className="flex items-center gap-5 justify-center my-5 flex-wrap">
              <div className="text-xl">Genres:</div>
              {genres?.length > 0 &&
                genres.map((gen, idx) => (
                  <li
                    key={idx}
                    className="p-2 bg-blue-500 rounded-lg text-white"
                  >
                    {gen}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
