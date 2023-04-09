import { useRouter } from "next/router";
import React from "react";

import { Box, Button, Center } from "@chakra-ui/react";

import { HSpacer } from "@/components/atoms/Spacer";
type Props = {
  type: "home" | "result";
};

export const Footer = ({ type }: Props) => {
  const router = useRouter();

  return (
    <Box h={24} w="100%">
      <Center h="100%" alignItems="center">
        <Button
          bgColor="white"
          borderColor="black"
          color={type === "home" ? "#4A6F48" : "black"}
          variant="outline"
          isDisabled={type === "home"}
          onClick={() => {
            if (type !== "home") {
              router.push("/");
            }
          }}
        >
          追加画面へ
        </Button>
        <HSpacer size={14} />
        <Button
          bgColor="white"
          borderColor="black"
          color={type === "result" ? "#4A6F48" : "black"}
          variant="outline"
          isDisabled={type === "result"}
          onClick={() => {
            if (type !== "result") {
              router.push("/result");
            }
          }}
        >
          履歴画面へ
        </Button>
      </Center>
    </Box>
  );
};
