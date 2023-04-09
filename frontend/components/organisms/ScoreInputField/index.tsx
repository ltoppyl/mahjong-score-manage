import React, { useEffect, useState } from "react";

import { Box, Center, HStack, Select, VStack } from "@chakra-ui/react";

import { VSpacer } from "@/components/atoms/Spacer";
import { TileButton } from "@/components/atoms/TileButton";
import { ScoreInput } from "@/components/molecules/ScoreInput";

type Input = {
  rule: string | undefined;
  rank: number | undefined;
  score: number | undefined;
};

type Props = {
  isFourMahjong: boolean;
  ruleOptionList: string[];
};
export const ScoreInputField = ({ isFourMahjong, ruleOptionList }: Props) => {
  const rankSelectList = isFourMahjong
    ? ["一着", "二着", "三着", "四着"]
    : ["一着", "二着", "三着"];
  const [input, setInput] = useState<Input>({
    rule: undefined,
    rank: undefined,
    score: undefined,
  });
  const [inputScore, setInputScore] = useState<string | undefined>(undefined);
  const [isValidate, setIsValidate] = useState<boolean>(false); // データを送信可能かどうかの状態

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        score: inputScore ? Number(inputScore) * 100 : undefined,
      };
    });
  }, [inputScore]);

  useEffect(() => {
    // バリデーションの処理を追加
    setIsValidate(() => {
      return input.rule && input.rank && input.score ? true : false;
    });
  }, [input]);

  const handleRuleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setInput((prevInput) => {
      return {
        ...prevInput,
        rule: value === "" ? undefined : value,
      };
    });
  };

  const handleClickRank = (index: number) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        rank: index + 1,
      };
    });
  };

  const handleClickAddData = () => {
    // データを送信する処理を追加
  };

  return (
    <>
      <Center>
        <VStack>
          <Select placeholder="ルールの選択" onChange={handleRuleSelect}>
            {ruleOptionList.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </Select>
          <VSpacer size={8} />
          <HStack>
            {rankSelectList.map((rank, index) => {
              return (
                <Box
                  key={index}
                  onClick={() => {
                    handleClickRank(index);
                  }}
                >
                  <TileButton
                    type="rank"
                    text={rank}
                    isShadow={input.rank === index + 1}
                  />
                </Box>
              );
            })}
          </HStack>
          <VSpacer size={8} />
          <ScoreInput setState={setInputScore} />
          <VSpacer size={8} />
          <TileButton
            type="text"
            text="追加"
            isShadow={false}
            isDisabled={!isValidate}
            clickFn={handleClickAddData}
          />
        </VStack>
      </Center>
    </>
  );
};
