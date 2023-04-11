import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { Box, Center, HStack, Select, VStack } from "@chakra-ui/react";

import { postRecord } from "@/api/postRecord";
import { VSpacer } from "@/components/atoms/Spacer";
import { TileButton } from "@/components/atoms/TileButton";
import { ScoreInput } from "@/components/molecules/ScoreInput";
import { loginState } from "@/stores/Recoil";
import { PostRecord } from "@/types/PostRecord";
import { fetchTime } from "@/utils/fetchTime";

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
  const login = useRecoilValue(loginState);
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
    // このような場合は isValidate で弾いてるが、以下で型を正しく推論できるように追加している
    if (!(input.rule && input.rank && input.score)) {
      return;
    }

    const data: PostRecord = {
      userId: login.uid,
      date: fetchTime(),
      gameType: 4, // TODO: 後に3麻も増えた場合それに対応する必要がある
      rank: input.rank,
      rule: input.rule,
      score: input.score,
    };
    postRecord(data);
  };

  return (
    <>
      <Center>
        <VStack>
          <Select
            bgColor="white"
            placeholder="ルールの選択"
            onChange={handleRuleSelect}
          >
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
