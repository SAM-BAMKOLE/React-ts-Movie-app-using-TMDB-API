import Trending from "../components/Trending";
import useFetchMovies from "../utils/fetchMovies";

export default function Movies() {
    const { data, isLoading: loading } = useFetchMovies("/trending/movie/day");
    return <Trending title="Trending movies" options={{ loading, data }} />;
}
