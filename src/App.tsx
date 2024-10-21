import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";

const router = createBrowserRouter([
    {
        path: "",
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "trending/",
                children: [
                    {
                        path: "movies",
                        element: <Movies />,
                    },
                    {
                        path: "tv-shows",
                        element: <TvShows />,
                    },
                ],
            },
            {
                path: "movie/:movieId",
                element: <Movie />,
            },
            {
                path: "tv/:movieId",
                element: <TvShow />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "home",
                element: <Signup />,
            },
            {
                path: "signin",
                element: <Signin />,
            },
        ],
    },
]);

export default router;
