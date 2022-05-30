import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DesktopNav } from "./DesktopNav";
import { colors } from "../../utils/colors";
import ProfileAvatar from "../ProfileAvatar";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
          direction={"row"}
        >
          <Link
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              fontWeight={"900"}
            >
              Shopka
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={colors.BLUE}
            bg={"white"}
            borderWidth={1}
            borderColor={colors.BLUE}
            _hover={{
              bg: colors.FAIR_GRAY,
            }}
          >
            Sign in
          </Button>

          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            boxShadow={"1px dark-lg"}
            fontWeight={600}
            color={colors.BLUE}
            bg={"white"}
            borderWidth={1}
            borderColor={colors.BLUE}
            _hover={{
              bg: colors.FAIR_GRAY,
            }}
          >
            My Cart
            <Badge
              bg={"red"}
              color={"white"}
              borderRadius={"full"}
              fontSize={10}
              marginLeft={2}
            >
              5
            </Badge>
          </Button>

          <ProfileAvatar />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
