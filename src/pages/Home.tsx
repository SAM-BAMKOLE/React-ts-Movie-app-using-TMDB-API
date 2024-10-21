import { Box } from "@chakra-ui/react";
// import { imageBasePath } from "../config/movie";
import MainMovie from "../components/MainMovie";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import MovieSection from "../components/MovieSection";
import TvSection from "../components/TvSection";
import useFetchMovies from "../utils/fetchMovies";

export default function Home() {
    const { data, isLoading } = useFetchMovies("/movie/now_playing");

    return (
        <Box>
            <Box w="100%" h="90dvh">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    // navigation
                    autoplay={{ delay: 6 * 1000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    style={{ width: "100%", height: "90dvh" }}>
                    {isLoading
                        ? "Loading"
                        : data.map((movie) => (
                              <SwiperSlide
                                  style={{ width: "100%", height: "90dvh" }}
                                  key={movie.id}>
                                  <MainMovie movie={movie} />
                              </SwiperSlide>
                          ))}
                </Swiper>
            </Box>
            <Box p={{ base: "4", md: "0" }}>
                <MovieSection />
                <TvSection />
            </Box>
        </Box>
    );
}
