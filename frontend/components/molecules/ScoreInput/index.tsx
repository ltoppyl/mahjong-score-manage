import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

import { HStack, Icon } from "@chakra-ui/react";

import { RightAddonInput } from "@/components/atoms/RightAddonInput";

type Props = {
  isScoreMinus: boolean;
  setIsScoreMinus: Dispatch<SetStateAction<boolean>>;
  value: string | undefined;
  setState: Dispatch<SetStateAction<string | undefined>>;
};
export const ScoreInput = ({
  isScoreMinus,
  setIsScoreMinus,
  value,
  setState,
}: Props) => {
  const handleClick = () => {
    setIsScoreMinus(!isScoreMinus);
  };

  return (
    <>
      <HStack>
        <Icon
          boxSize={12}
          as={isScoreMinus ? AiOutlineMinusSquare : AiOutlinePlusSquare}
          color={isScoreMinus ? "red" : "black"}
          _hover={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <RightAddonInput
          isMinus={isScoreMinus}
          value={value}
          setState={setState}
        />
      </HStack>
    </>
  );
};
