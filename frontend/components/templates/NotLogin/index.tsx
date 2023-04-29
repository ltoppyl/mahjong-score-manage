import React, { Dispatch, SetStateAction, useState } from "react";

import { Center, HStack, Text, VStack } from "@chakra-ui/react";

import { HSpacer, VSpacer } from "@/components/atoms/Spacer";
import { TileButton } from "@/components/atoms/TileButton";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  flag: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export const NotLogin = ({ flag, setState }: Props) => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const res = await login();
    if (res) {
      setState(!flag);
    } else {
      // TODO: エラーメッセージが出るようにする
      setIsLoading(false);
    }
  };

  return (
    <>
      <Center>
        <VStack>
          <VSpacer size={24} />
          <Text fontSize={36}>麻雀成績管理くん</Text>
          <HStack>
            <HSpacer size={32} />
            <Text fontSize={18}>ver1.0</Text>
          </HStack>
          <VSpacer size={24} />
          <TileButton
            type="google-icon"
            text=""
            isShadow={false}
            isLoading={isLoading}
            clickFn={handleClick}
          />
        </VStack>
      </Center>
    </>
  );
};
