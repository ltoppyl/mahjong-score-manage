import React from "react";
import { Bs3CircleFill, Bs4CircleFill } from "react-icons/bs";

import { Box, HStack, Icon, Text } from "@chakra-ui/react";

import { VSpacer } from "../Spacer/index";

type Props = {
  rule: string;
  rank: number;
  score: number;
  point: number;
  date: string;
  gameType: number;
};
export const ResultCard = ({
  rule,
  rank,
  score,
  point,
  date,
  gameType,
}: Props) => {
  const pointText = 0 < point ? `+${point}` : `${point}`;

  return (
    <>
      <Box
        bgColor="white"
        textColor="black"
        borderRadius="lg"
        borderWidth={2}
        borderColor={0 < point ? "black" : "red"}
        maxW={80}
      >
        <VSpacer size={4} />
        <HStack>
          <Box
            w="10%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={gameType === 4 ? Bs4CircleFill : Bs3CircleFill}
              boxSize={6}
            />
          </Box>

          <Box w="40%" textAlign="center">
            <Text>{rank}着</Text>
            <VSpacer size={2} />
            <Text noOfLines={1} overflow="hidden">
              {rule}
            </Text>
          </Box>
          <Box w="50%" textAlign="center">
            <Text>{date}</Text>
            <VSpacer size={2} />
            <HStack w="100%" justifyContent="space-between">
              <Box flexGrow={1}> </Box>
              <Text>{score}点</Text>
              <Text>{pointText}P</Text>
              <Box flexGrow={1}> </Box>
            </HStack>
          </Box>
        </HStack>
        <VSpacer size={4} />
      </Box>
    </>
  );
};
