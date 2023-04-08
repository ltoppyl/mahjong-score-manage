import React, { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

import { HStack, Icon } from "@chakra-ui/react";

import { RightAddonInput } from "@/components/atoms/RightAddonInput";

export const ScoreInput = () => {
  const [isMinus, setIsMinus] = React.useState(false);
  const [inputText, setInputText] = useState<string>("");

  return (
    <>
      <HStack>
        <Icon
          boxSize={12}
          as={isMinus ? AiOutlineMinusSquare : AiOutlinePlusSquare}
          color={isMinus ? "red" : "black"}
          _hover={{ cursor: "pointer" }}
          onClick={() => setIsMinus(!isMinus)}
        />
        <RightAddonInput isMinus={isMinus} setState={setInputText} />
      </HStack>
    </>
  );
};
