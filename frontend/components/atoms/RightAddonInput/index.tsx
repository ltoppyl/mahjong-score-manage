import React, { Dispatch, SetStateAction } from "react";

import {
  HStack,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";

type Props = {
  isMinus: boolean;
  value: string | undefined;
  setState: Dispatch<SetStateAction<string | undefined>>;
};

export const RightAddonInput = ({ isMinus, value, setState }: Props) => {
  return (
    <>
      <InputGroup size="md" maxW={48} textColor={isMinus ? "red" : "black"}>
        <NumberInput value={value || ""}>
          <HStack spacing={0}>
            <NumberInputField
              bgColor="white"
              textAlign="center"
              placeholder="250"
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <InputRightAddon>
              <Text fontSize="lg">00</Text>
            </InputRightAddon>
          </HStack>
        </NumberInput>
      </InputGroup>
    </>
  );
};
