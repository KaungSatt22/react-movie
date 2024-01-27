import CustomMovie from "../CustomMovie";
import { fetchMovieType } from "../../api/api";

const Comedy = () => {
  return (
    <CustomMovie movieType="Comedy" param="35" fetchfunType={fetchMovieType} />
  );
};

export default Comedy;
