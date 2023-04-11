import React from "react";
import { Bs3CircleFill, Bs4CircleFill } from "react-icons/bs";

import { Box, HStack, Icon, Text } from "@chakra-ui/react";

import { VSpacer } from "@/components/atoms/Spacer";
import { Record } from "@/types/Record";

type Props = {
  data: Record;
};
export const ResultCard = ({ data }: Props) => {
  const pointText = 0 < data.point ? `+${data.point}` : `${data.point}`;

  return (
    <>
      <Box
        bgColor="white"
        textColor="black"
        borderRadius="lg"
        borderWidth={2}
        borderColor={0 <= data.point ? "black" : "red"}
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
              as={data.gameType === 4 ? Bs4CircleFill : Bs3CircleFill}
              boxSize={6}
            />
          </Box>

          <Box w="40%" textAlign="center">
            <Text>{data.rank}着</Text>
            <VSpacer size={2} />
            <Text noOfLines={1} overflow="hidden">
              {data.rule}
            </Text>
          </Box>
          <Box w="50%" textAlign="center">
            <Text>{data.date}</Text>
            <VSpacer size={2} />
            <HStack w="100%" justifyContent="space-between">
              <Box flexGrow={1}> </Box>
              <Text>{data.score}点</Text>
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
