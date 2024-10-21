import { Box } from "@chakra-ui/react";
import MainMovie from "../components/MainMovie";
import useFetchMovie from "../utils/fetchMovie";
import { useParams } from "react-router-dom";

export default function Movie() {
    const { movieId } = useParams();
    const { data, isLoading } = useFetchMovie(`/movie/${movieId}`);

    return (
        <>
            {isLoading ? (
                "Loading.."
            ) : (
                <Box h="90dvh">
                    <MainMovie movie={data} />
                </Box>
            )}
        </>
    );
}
