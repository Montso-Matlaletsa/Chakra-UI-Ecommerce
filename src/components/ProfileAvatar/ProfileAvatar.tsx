import {
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { images } from "../../utils/images";

export const ProfileAvatar = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"sm"} src={images.MALE} />
      </MenuButton>

      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar size={"2xl"} src={images.MALE} />
        </Center>
        <br />
        <Center>
          <p>John Doe</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
