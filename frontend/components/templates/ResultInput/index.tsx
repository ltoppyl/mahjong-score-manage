import React from "react";

import { Center, HStack, Text } from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { VSpacer } from "@/components/atoms/Spacer";
import { Footer } from "@/components/organisms/Footer";
import { ScoreInputField } from "@/components/organisms/ScoreInputField";

type Props = {
  userName: string;
};
export const ResultInput = ({ userName }: Props) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <VSpacer size={12} />
      <HStack justifyContent="space-between">
        <Text as="b">{userName}さんこんにちは</Text>
        <LogoutButton />
      </HStack>
      <VSpacer size={4} />
      <Center>
        <ScoreInputField
          isFourMahjong={true}
          ruleOptionList={["Mリーグルール"]}
        />
      </Center>
      <div style={{ width: "100%", position: "fixed", bottom: 0 }}>
        <Footer type="home" />
      </div>
    </div>
  );
};
