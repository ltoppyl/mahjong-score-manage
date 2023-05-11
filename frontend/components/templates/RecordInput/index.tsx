import React, { Dispatch, SetStateAction, useState } from "react";

import { Button, Center, HStack, Text } from "@chakra-ui/react";

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
export const RecordInput = ({ userInfo, flag, setState }: Props) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      setState(!flag);
    } else {
      // TODO: エラーメッセージが出るようにする
    }
  };

  const [isFourMahjong, setFourMahjong] = useState(true);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <VSpacer size={8} />
      <HStack justifyContent="space-between">
        <Text as="b">{userInfo.name}さんこんにちは</Text>
        <LogoutButton clickFn={handleLogout} />
      </HStack>
      <VSpacer size={12} />
      <HStack spacing={5} justify="center">
        <Button
          colorScheme={isFourMahjong ? "Black" : "blackAlpha"}
          variant="link"
          onClick={() => setFourMahjong(true)}
        >
          4麻
        </Button>
        <Button
          colorScheme={isFourMahjong ? "blackAlpha" : "Black"}
          variant="link"
          onClick={() => setFourMahjong(false)}
        >
          3麻
        </Button>
      </HStack>
      <VSpacer size={12} />
      <Center>
        <ScoreInputField
          isFourMahjong={isFourMahjong}
          ruleOptionList={["Mリーグルール"]}
          userId={userInfo.uid}
        />
      </Center>
      <Center>
        <div style={{ position: "fixed", bottom: 0 }}>
          <Footer type="INPUT" />
        </div>
      </Center>
    </div>
  );
};
