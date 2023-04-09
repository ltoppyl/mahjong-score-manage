import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

import { HStack, Icon } from "@chakra-ui/react";

import { RightAddonInput } from "@/components/atoms/RightAddonInput";

type Props = {
  setState: Dispatch<SetStateAction<string | undefined>>;
};
export const ScoreInput = ({ setState }: Props) => {
  const [isMinus, setIsMinus] = useState(false);

  const handleClick = () => {
    setIsMinus(!isMinus);
    setState((prev) => {
      if (!prev) return prev;

      const parsed = parseInt(prev, 10);
      return isNaN(parsed) ? prev : String(parsed * -1);
    });
  };

  return (
    <>
      <HStack>
        <Icon
          boxSize={12}
          as={isMinus ? AiOutlineMinusSquare : AiOutlinePlusSquare}
          color={isMinus ? "red" : "black"}
          _hover={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <RightAddonInput isMinus={isMinus} setState={setState} />
      </HStack>
    </>
  );
};
