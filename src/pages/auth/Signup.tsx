import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

export default function Signup() {
    return (
        <Box height="" textAlign="center">
            <Heading h="h1" color="white" fontSize={"45px"} fontWeight={900}>
                Unlimited movies, TV shows, and more
            </Heading>
            <Text color="white" fontWeight={"medium"} fontSize={"20px"} mt="2">
                Watch anywhere. Cancel anytime.
            </Text>
            <Box mt="3">
                <Text
                    textAlign="center"
                    color="white"
                    fontWeight={"medium"}
                    fontSize={"18px"}
                    mb="4">
                    Ready to watch? Enter your email to create or restart your membership.
                </Text>
                <form>
                    <Box
                        display="flex"
                        maxWidth={{ base: "100%", md: "50em" }}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={"10px"}>
                        <Input color={"whitesmoke"} placeholder="Email address" maxW={"400px"} />
                        <Button colorScheme="red" size={"md"}>
                            Get started
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
