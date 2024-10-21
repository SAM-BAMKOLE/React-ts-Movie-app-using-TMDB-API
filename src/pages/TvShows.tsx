import Trending from "../components/Trending";
import useFetchMovies from "../utils/fetchMovies";

export default function TvShows() {
    const { data, isLoading: loading } = useFetchMovies("/trending/tv/day");
    return <Trending title="Trending Tv Shows" options={{ loading, data }} />;
}
