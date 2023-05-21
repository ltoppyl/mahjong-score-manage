import { useRouter } from "next/router";
import React from "react";

import { Box, Button, Center } from "@chakra-ui/react";

import { HSpacer } from "@/components/atoms/Spacer";
type Props = {
  type: "INPUT" | "RECORD";
};

export const Footer = ({ type }: Props) => {
  const router = useRouter();

  return (
    <Box h={24} w="100%" bgColor="#4A6F48">
      <Center h="100%" alignItems="center">
        <HSpacer size={14} />
        <Button
          bgColor="white"
          borderColor="black"
          color={type === "INPUT" ? "#4A6F48" : "black"}
          variant="outline"
          isDisabled={type === "INPUT"}
          onClick={() => {
            if (type !== "INPUT") {
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
          color={type === "RECORD" ? "#4A6F48" : "black"}
          variant="outline"
          isDisabled={type === "RECORD"}
          onClick={() => {
            if (type !== "RECORD") {
              router.push("/records");
            }
          }}
        >
          履歴画面へ
        </Button>
        <HSpacer size={14} />
      </Center>
    </Box>
  );
};
