import { Container, Heading, Text, Box, Button } from "@chakra-ui/react";
// import { AspectRatio } from "@chakra-ui/react";
import { imageBasePath } from "../config/movie";
import type { Data } from "../types/movieType";
import { Link } from "react-router-dom";

interface Props {
    movie: Data;
    mediaType?: string;
}

export default function MainMovie({ movie, mediaType = "movie" }: Props) {
    // const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box
            bg={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), #10121A 99%), url(${
                imageBasePath + "w1280" + movie!.backdrop_path
            })`}
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            maxW={{ base: "19rem", md: "20rem" }}
            h="25rem"
            display="flex"
            alignItems="end"
            color="white"
            p={2}
            borderRadius="10">
            <Container marginLeft="initial">
                <Heading h="h5" fontSize="large" textShadow="1px 1px 3px #1A1A1A" mb={2}>
                    {movie.title ?? movie.name}
                </Heading>
                <Text textShadow="1px 1px 2px #1A1A1A" noOfLines={2}>
                    {movie.overview}
                </Text>
                <Button
                    as={Link}
                    to={`/${mediaType}/${movie.id}`}
                    ml="auto"
                    mt="2"
                    variant="link"
                    size="sm">
                    View movie
                </Button>
            </Container>
        </Box>
    );
}
