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

  const [isFourMahjong, setIsFourMahjong] = useState(true);
  const GameTypeToggle = ({ gameType }: { gameType: 3 | 4 }) => {
    return (
      <Button
        colorScheme={
          (gameType === 4) === isFourMahjong ? "black" : "blackAlpha"
        }
        variant="link"
        onClick={() => setIsFourMahjong(gameType === 4 ? true : false)}
      >
        {gameType === 4 ? "4麻" : "3麻"}
      </Button>
    );
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <VSpacer size={8} />
      <HStack justifyContent="space-between">
        <Text as="b">{userInfo.name}さんこんにちは</Text>
        <LogoutButton clickFn={handleLogout} />
      </HStack>
      <VSpacer size={6} />
      <HStack spacing={5} justify="center">
        <GameTypeToggle gameType={4} />
        <GameTypeToggle gameType={3} />
      </HStack>
      <VSpacer size={6} />
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
