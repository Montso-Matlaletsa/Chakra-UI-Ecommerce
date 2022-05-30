import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { colors } from "../../utils/colors";

export const InputV2 = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onSearch = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(event.target.value);
  };

  const onCancel = () => {
    setSearchValue("");
  };

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents={"none"}
        children={<SearchIcon color={"gray.300"} />}
      />
      <Input
        type="text"
        placeholder="Search Items"
        borderRadius={"full"}
        width={"200%"}
        backgroundColor={colors.FAIR_GRAY}
        value={searchValue}
        onChange={onSearch}
      />
      {searchValue && (
        <InputRightElement>
          <CloseIcon fontSize={10} color={colors.BLUE} onClick={onCancel} />
        </InputRightElement>
      )}
    </InputGroup>
  );
};
