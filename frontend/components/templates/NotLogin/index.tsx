import React from "react";

import { Center, HStack, Text, VStack } from "@chakra-ui/react";

import { HSpacer, VSpacer } from "@/components/atoms/Spacer";
import { TileButton } from "@/components/atoms/TileButton";
export const NotLogin = () => {
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
          <TileButton type="google-icon" text="" isShadow={false} />
        </VStack>
      </Center>
    </>
  );
};