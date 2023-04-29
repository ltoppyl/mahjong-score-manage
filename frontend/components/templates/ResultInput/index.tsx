import React from "react";

import { Center, HStack, Text, useBreakpointValue } from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { VSpacer } from "@/components/atoms/Spacer";
import { Footer } from "@/components/organisms/Footer";
import { ScoreInputField } from "@/components/organisms/ScoreInputField";
import { UserInfo } from "@/types/UserInfo";

type Props = {
  userInfo: UserInfo;
};
export const ResultInput = ({ userInfo }: Props) => {
  const mediaType = useBreakpointValue({ base: "phone", md: "pc" });

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <VSpacer size={mediaType === "phone" ? 16 : 12} />
      <HStack justifyContent="space-between">
        <Text as="b">{userInfo.name}さんこんにちは</Text>
        <LogoutButton />
      </HStack>
      <VSpacer size={mediaType === "phone" ? 24 : 4} />
      <Center>
        <ScoreInputField
          isFourMahjong={true}
          ruleOptionList={["Mリーグルール"]}
          userId={userInfo.uid}
        />
      </Center>
      <Center>
        <div style={{ position: "fixed", bottom: 0 }}>
          <Footer type="home" />
        </div>
      </Center>
    </div>
  );
};
