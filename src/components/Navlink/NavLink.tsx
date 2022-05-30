import {
  Box,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { NavItem } from "../../Interface";
import { colors } from "../../utils/colors";

interface NavLinkProps {
  navItem: NavItem;
}
export const NavLink: FC<NavLinkProps> = ({ navItem }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue(colors.BLUE, "white");
  return (
    <Box key={navItem.label}>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </PopoverTrigger>
      </Popover>
    </Box>
  );
};
