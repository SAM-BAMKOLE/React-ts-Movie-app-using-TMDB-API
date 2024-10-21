import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Movie from "./Movie";
import { Data } from "../types/movieType";

interface Props {
    title: string;
    options: {
        loading: boolean;
        data: Data[];
    };
}

export default function Trending({ title, options: { loading, data } }: Props) {
    return (
        <Box mt="3" mb={6} color="white">
            <Heading as="h1" mb={5} color="whitesmoke" textDecor="capitalize">
                {title}
            </Heading>
            <SimpleGrid columns={4} spacing="4">
                {loading
                    ? "Loading.."
                    : data.map((movie) => (
                          <Box key={movie.id}>
                              <Movie movie={movie} />
                          </Box>
                      ))}
            </SimpleGrid>
        </Box>
    );
}
