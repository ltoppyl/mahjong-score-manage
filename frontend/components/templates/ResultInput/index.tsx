import React, { Dispatch, SetStateAction } from "react";

import { Center, HStack, Text } from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { VSpacer } from "@/components/atoms/Spacer";
import { Footer } from "@/components/organisms/Footer";
import { ScoreInputField } from "@/components/organisms/ScoreInputField";
import { useAuth } from "@/hooks/useAuth";
import { UserInfo } from "@/types/UserInfo";

type Props = {
  userInfo: UserInfo;
  flag: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};
export const ResultInput = ({ userInfo, flag, setState }: Props) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      setState(!flag);
    } else {
      // TODO: エラーメッセージが出るようにする
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <VSpacer size={8} />
      <HStack justifyContent="space-between">
        <Text as="b">{userInfo.name}さんこんにちは</Text>
        <LogoutButton clickFn={handleLogout} />
      </HStack>
      <VSpacer size={8} />
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
