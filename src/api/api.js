import axios from "axios";

export const fetchAllMovie = async (search) => {
  const type = search ? "search/movie" : "discover/movie";
  let req = await axios.get(`https://api.themoviedb.org/3/${type}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      query: search,
    },
  });
  let res = await req.data;
  return res.results;
};

export const fetchSingleMovie = async (movieId) => {
  let req = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      append_to_response: "videos",
    },
  });
  let res = await req.data;
  return res;
};

export const fetchTrendingMovie = async () => {
  let req = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  let res = await req.data;
  return res.results;
};

export const fetchMovieType = async (genres_id) => {
  let req = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&with_genres=${genres_id}`
  );
  let res = await req.data;
  return res.results;
};
