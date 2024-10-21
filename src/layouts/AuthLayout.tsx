import { Box, useBreakpointValue, Image, Container, Button } from "@chakra-ui/react";
import bgImageMd from "../assets/Movie-tmb-md.jpg";
import bgImageSm from "../assets/Movie-tmb-sm.jpg";
import logo from "../assets/netflix-logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const route = useLocation();

    return (
        <Box
            bg={`linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), 
        url(${isMobile ? bgImageSm : bgImageMd})`}
            backgroundSize="cover"
            backgroundPosition="center"
            p="3"
            minH="100vh">
            <Container maxWidth={{ base: "100%", md: "80%" }}>
                <Box as="nav" display="flex" alignItems="center" justifyContent="space-between">
                    <Image width={{ base: 40, md: "200px" }} src={logo} alt="netflix logo" />
                    {route.pathname !== "/auth/signin" && (
                        <Button
                            as={Link}
                            to="/auth/signin"
                            colorScheme="red"
                            size={{ base: "sm", md: "md" }}>
                            Sign in
                        </Button>
                    )}
                </Box>
                <Box
                    as="main"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    minH={"70dvh"}>
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
}
