import { Link, Stack } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../constants";
import { NavItem } from "../../Interface";
import InputV2 from "../InputV2";
import NavLink from "../Navlink";

export const navLink: NavItem = {
  label: "Customer Electronics",
  href: "#",
};
export const DesktopNav = () => {
  return (
    <Stack
      direction={"row"}
      spacing={5}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {NAV_ITEMS.map((navItem) => (
        <NavLink navItem={navItem} />
      ))}

      <Link
        _hover={{
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <InputV2 />
      </Link>
      <NavLink navItem={navLink} />
    </Stack>
  );
};
