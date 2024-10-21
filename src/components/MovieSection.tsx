import { Box, Heading } from "@chakra-ui/react";
import Section from "./Section";
import useFetchMovies from "../utils/fetchMovies";

// type Props = {};

export default function MovieSection() {
    const { data: popularMovies, isLoading: popularMoviesLoading } =
        useFetchMovies("/movie/popular");
    const { data: topRatedMovies, isLoading: topRatedLoading } = useFetchMovies("/movie/top_rated");
    const { data: upcomingMovies, isLoading: upcomingLoading } = useFetchMovies("/movie/upcoming");

    return (
        <Box mt="4">
            <Heading as="h2" color="white">
                Movies
            </Heading>
            <Section
                title="Popular Movies"
                options={{ loading: popularMoviesLoading, data: popularMovies }}
            />
            <Section
                title="Top Rated Movies"
                options={{ loading: topRatedLoading, data: topRatedMovies }}
            />
            <Section
                title="Upcoming Movies"
                options={{ loading: upcomingLoading, data: upcomingMovies }}
            />
        </Box>
    );
}
