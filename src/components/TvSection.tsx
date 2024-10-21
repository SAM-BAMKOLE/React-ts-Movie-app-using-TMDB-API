import { Box, Heading } from "@chakra-ui/react";
import Section from "./Section";
import useFetchMovies from "../utils/fetchMovies";

// type Props = {};

export default function TvSection() {
    const { data: airingToday, isLoading: airingTodayLoading } = useFetchMovies("/tv/airing_today");
    const { data: onTheAir, isLoading: onTheAirLoading } = useFetchMovies("/tv/on_the_air");
    const { data: popular, isLoading: popularLoading } = useFetchMovies("/tv/popular");
    const { data: topRatedShow, isLoading: topRatedShowLoading } = useFetchMovies("/tv/top_rated");

    // useEffect(() => {
    //     if (airingTodayLoading) console.log("Loading", airingToday);
    //     else console.log(airingToday);
    // }, [airingToday, airingTodayLoading]);
    // [airingToday, onTheAir, popular, topRatedShow].forEach((show) => (show.mediaType = "tv"));

    return (
        <Box mt="4">
            <Heading as="h2" color="white">
                Tv Shows
            </Heading>
            <Section
                title="Airing today"
                options={{ loading: airingTodayLoading, data: airingToday }}
                mediaType="tv"
            />
            <Section
                title="On the air"
                options={{ loading: onTheAirLoading, data: onTheAir }}
                mediaType="tv"
            />
            <Section
                title="Popular shows"
                options={{ loading: popularLoading, data: popular }}
                mediaType="tv"
            />
            <Section
                title="Top Rated Shows"
                options={{ loading: topRatedShowLoading, data: topRatedShow }}
                mediaType="tv"
            />
        </Box>
    );
}
