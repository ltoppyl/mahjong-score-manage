import React, { useEffect, useState } from "react";

import {
  Box,
  Center,
  HStack,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { postRecord } from "@/api/postRecord";
import { VSpacer } from "@/components/atoms/Spacer";
import { TileButton } from "@/components/atoms/TileButton";
import { ScoreInput } from "@/components/molecules/ScoreInput";
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
  userId: string;
};
export const ScoreInputField = ({
  isFourMahjong,
  ruleOptionList,
  userId,
}: Props) => {
  const rankSelectList = isFourMahjong
    ? ["一着", "二着", "三着", "四着"]
    : ["一着", "二着", "三着"];
  const initialInput = {
    rule: undefined,
    rank: undefined,
    score: undefined,
  };
  const [input, setInput] = useState<Input>(initialInput);
  const [inputScore, setInputScore] = useState<string | undefined>(undefined);
  const [isValidate, setIsValidate] = useState<boolean>(false); // データを送信可能かどうかの状態
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resStatus, setResStatus] = useState<number>(0);
  const toast = useToast();

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

  useEffect(() => {
    // 初期値
    if (resStatus === 0) {
      return;
    }

    if (resStatus !== 200) {
      toast({
        title: "データの送信に失敗しました",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: false,
      });

      setIsLoading(false);
      return;
    }

    toast({
      title: "データの送信に成功しました！",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: false,
    });

    // フォームの初期化
    setIsLoading(false);
    setIsValidate(false);
    setInputScore(undefined);
    setInput(initialInput);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resStatus]);

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
    setIsLoading(true);

    // このような場合は isValidate で弾いてるが、以下で型を正しく推論できるように追加している
    if (!(input.rule && input.rank && input.score)) {
      return;
    }

    const data: PostRecord = {
      userId: userId,
      date: fetchTime(),
      gameType: 4, // TODO: 後に3麻も増えた場合それに対応する必要がある
      rank: input.rank,
      rule: input.rule,
      score: input.score,
    };
    postRecord(data, setResStatus);
  };

  return (
    <>
      <Center>
        <VStack>
          <Select
            bgColor="white"
            placeholder="ルールの選択"
            value={input.rule || ""}
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
          <ScoreInput value={inputScore} setState={setInputScore} />
          <VSpacer size={8} />
          <TileButton
            type="text"
            text="追加"
            isShadow={false}
            isDisabled={!isValidate}
            isLoading={isLoading}
            clickFn={handleClickAddData}
          />
        </VStack>
      </Center>
    </>
  );
};
