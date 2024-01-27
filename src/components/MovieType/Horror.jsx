import CustomMovie from "../CustomMovie";
import { fetchMovieType } from "../../api/api";
const Horror = () => {
  return (
    <CustomMovie movieType="Horror" param="27" fetchfunType={fetchMovieType} />
  );
};

export default Horror;
