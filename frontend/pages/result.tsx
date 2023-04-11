import type { NextPage } from "next";

import { Result } from "@/components/templates/Result";

const ResultPage: NextPage = () => {
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
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 13000,
        point: -10.3,
        date: "2023/4/1 13:00",
        gameType: 3,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 14:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
      },
      {
        rule: "Mリーグルール",
        rank: 2,
        score: 25000,
        point: 4.3,
        date: "2023/4/1 15:00",
        gameType: 4,
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
