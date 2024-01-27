import CustomMovie from "../CustomMovie";
import { fetchMovieType } from "../../api/api";

const Romance = () => {
  return (
    <CustomMovie
      movieType="Romance"
      param="10749"
      fetchfunType={fetchMovieType}
    />
  );
};

export default Romance;
