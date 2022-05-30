import { Flex, Link, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NAV_ITEMS } from "../../constants";
import { NavItem } from "../../Interface";

interface NavLinkProps {
  navItem: NavItem;
}

export const navLink: NavItem = {
  label: "Customer Electronics",
  href: "#",
};
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} navItem={navItem} />
      ))}
      <MobileNavItem navItem={navLink} />
    </Stack>
  );
};

const MobileNavItem: FC<NavLinkProps> = ({ navItem }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={navItem.href ?? "#"}
        justifyContent={"space-between"}
        align={"center"}
        _hover={{ textDecoration: "none" }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {navItem.label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNav;
