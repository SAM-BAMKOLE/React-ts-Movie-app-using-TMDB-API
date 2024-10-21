import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Movie from "./Movie";
import { Data } from "../types/movieType";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { A11y, Autoplay } from "swiper/modules";

interface Props {
    title: string;
    options: {
        loading: boolean;
        data: Data[];
    };
    mediaType?: string;
}

export default function Section({ title, options: { loading, data }, mediaType = "movie" }: Props) {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box mt="3" mb={6} color="white">
            <Heading h="h3" fontSize="larger" mb={3} color="whitesmoke" textDecor="capitalize">
                {title}
            </Heading>
            <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={isMobile ? 1 : 4}
                // navigation
                autoplay={{ delay: 6 * 1000, disableOnInteraction: false }}>
                {loading
                    ? "Loading.."
                    : data.map((movie) => (
                          <SwiperSlide key={movie.id}>
                              <Movie movie={movie} mediaType={mediaType} />
                          </SwiperSlide>
                      ))}
            </Swiper>
        </Box>
    );
}
