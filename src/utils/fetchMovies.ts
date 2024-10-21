import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "../types/movieType";

interface ReturnType {
    data: Data[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
}

const useFetchMovies = (endpoint: string): ReturnType => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["movies", endpoint],
        queryFn: async () => {
            const response = await axios.get(`https://api.themoviedb.org/3${endpoint}`, {
                params: {
                    // api_key: import.meta.env.API_KEY,
                    api_key: "a08cb67c187dce856bd0017be31728f7",
                },
            });
            return response.data.results;
        },
    });

    return { data, isLoading, isError, error };
};

export default useFetchMovies;
