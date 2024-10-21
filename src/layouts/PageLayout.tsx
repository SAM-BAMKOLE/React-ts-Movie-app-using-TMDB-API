import {
    Box,
    CloseButton,
    Flex,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image,
    Button,
} from "@chakra-ui/react";
import Logo from "../assets/netflix-logo.png";
import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import { LockIcon } from "@chakra-ui/icons";

interface LinkItemProps {
    name: string;
    link: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Home", link: "/" },
    { name: "Search", link: "#" },
    { name: "Trending movies", link: "/trending/movies" },
    { name: "Trending shows", link: "/trending/tv-shows" },
];

export default function PageLayout() {
    const { isOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={"gray.900"}>
            <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            {/* <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} /> */}
            <Box ml={{ base: 0, md: 60 }} p={{ md: "4" }}>
                <Outlet />
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={"gray.900"}
            borderRight="1px"
            borderRightColor={"gray.700"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            color="whitesmoke"
            px="8"
            {...rest}>
            <Flex
                direction="column"
                justifyContent="space-between"
                h="full"
                pb="4"
                alignItems="start">
                <Box>
                    <Flex h="20" alignItems="center" justifyContent="space-between">
                        <Image src={Logo} w="8rem" />
                        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
                    </Flex>
                    <Text fontWeight={700} color="white" mb="2" mx="4" fontSize="large">
                        Genre
                    </Text>
                    {LinkItems.map((link) => (
                        <NavItem key={link.name} link={link.link}>
                            {link.name}
                        </NavItem>
                    ))}
                </Box>
                <Button rightIcon={<LockIcon />} variant="ghost" colorScheme="whitesmoke">
                    Log out
                </Button>
            </Flex>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    link: string;
    children: ReactNode;
}
const NavItem = ({ link, children, ...rest }: NavItemProps) => {
    return (
        <Box as={Link} to={link} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
            <Box
                px="4"
                py="3"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "gray.800",
                    color: "white",
                }}
                {...rest}>
                {children}
            </Box>
        </Box>
    );
};
