import { Box, Container, Heading, Text, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { imageBasePath } from "../config/movie";
import type { Data } from "../types/movieType";

interface Props {
    movie: Data;
}

export default function MainMovie({ movie }: Props) {
    // const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box
            bg={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), #10121A 99%), url(${
                imageBasePath + "w1280" + movie!.backdrop_path
            })`}
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            color="white"
            p={5}
            borderRadius="5">
            <Container marginLeft="initial">
                {" "}
                {/* maxW={isMobile ? "100%" : "60%"} */}
                <Heading h="h1" textShadow="1px 1px 3px #1A1A1A" mb={2} fontSize="xxx-large">
                    {movie.title ?? movie.name}
                </Heading>
                <Text textShadow="1px 1px 2px #1A1A1A" noOfLines={3}>
                    {movie.overview}
                </Text>
                {/* <Wrap spacingX="4" spacingY="1">
                    <WrapItem>
                        <Button mt={4} size={{ base: "md", md: "lg" }} colorScheme="red">
                            Trending movies
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button
                            mt={4}
                            size={{ base: "md", md: "lg" }}
                            colorScheme="red"
                            variant="outline"
                            _hover={{ backgrondColor: "red", color: "white" }}>
                            Trending Tv Shows
                        </Button>
                    </WrapItem>
                </Wrap> */}
                <Button mt={4} size={{ base: "md", md: "lg" }} colorScheme="red">
                    Search for movie
                </Button>
            </Container>
        </Box>
    );
}
