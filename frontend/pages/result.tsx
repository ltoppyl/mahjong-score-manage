import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

import { Result } from "@/components/templates/Result";

import { loginState } from "@/stores/Recoil";

const ResultPage: NextPage = () => {
  const login = useRecoilValue(loginState);
  const data = {
    rankData: [
      { name: "1", value: 10 },
      { name: "2", value: 20 },
      { name: "3", value: 30 },
      { name: "4", value: 40 },
    ],
    resultDataList: [
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 12:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 13000,
        point: -10.3,
        date: "2023/4/1 13:00",
        isFourMahjong: false,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 14:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        isFourMahjong: true,
      },
    ],
  };
  return (
    <>
      <Result data={data} />
    </>
  );
};

export default ResultPage;
