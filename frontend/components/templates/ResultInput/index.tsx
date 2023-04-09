import React from "react";

import { Center, HStack, Text } from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { VSpacer } from "@/components/atoms/Spacer";
import { ScoreInputField } from "@/components/organisms/ScoreInputField";

type Props = {
  userName: string;
};
export const ResultInput = ({ userName }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between">
        <Text>{userName}さんこんにちは</Text>
        <LogoutButton />
      </HStack>
      <VSpacer size={4} />
      <Center>
        <ScoreInputField
          isFourMahjong={true}
          ruleOptionList={["Mリーグルール"]}
        />
      </Center>
    </>
  );
};
