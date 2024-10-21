import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <Box height="" textAlign="center">
            <Heading h="h1" color="white" fontSize={"45px"} fontWeight={900} textAlign="start">
                Signin
            </Heading>
            <Box mt="3">
                <form>
                    <Box
                        maxWidth={{ base: "100%", md: "50em" }}
                        alignItems={"center"}
                        justifyContent={"center"}>
                        <Input
                            color={"whitesmoke"}
                            placeholder="Email or phone number"
                            name="email"
                            maxW={"400px"}
                            mb="3"
                        />
                        <Input
                            color={"whitesmoke"}
                            placeholder="Password"
                            name="password"
                            maxW={"400px"}
                            mb="3"
                        />
                        <Button colorScheme="red" size={"md"} display="block" w="100%">
                            Sign in
                        </Button>
                    </Box>
                    <Text my="2" color="gray.400">
                        OR
                    </Text>
                    <Text color="white">Forgot password ?</Text>
                </form>
            </Box>
            <Box color="white" mt="5" textAlign={"start"}>
                <Text display="inline-flex" color="gray.400">
                    Don't have an account ?
                </Text>
                <Text
                    as={Link}
                    to="/auth/home"
                    textDecor={"underline"}
                    ml="2"
                    display="inline-flex">
                    Register
                </Text>
            </Box>
        </Box>
    );
}
