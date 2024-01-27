import { fetchAllMovie } from "../../api/api";
import { useSearch } from "../../hooks/useSearch";
import CustomMovie from "../CustomMovie";

const Latest = () => {
  const { search } = useSearch();
  return (
    <CustomMovie
      movieType="Latest"
      fetchfunType={fetchAllMovie}
      param={search}
    />
  );
};

export default Latest;
