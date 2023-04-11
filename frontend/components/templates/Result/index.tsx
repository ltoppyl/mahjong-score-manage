import React from "react";

import { Box, Center, HStack, VStack } from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { DonutChart } from "@/components/atoms/PieChart";
import { ResultCard } from "@/components/atoms/ResultCard";
import { HSpacer, VSpacer } from "@/components/atoms/Spacer";
import { Footer } from "@/components/organisms/Footer";

type Props = {
  data: {
    rankData: { name: string; value: number }[];
    resultDataList: {
      rule: string;
      rank: number;
      score: number;
      point: number;
      date: string;
      isFourMahjong: boolean;
    }[];
  };
};
export const Result = ({ data }: Props) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Center>
        <VStack>
          <VSpacer size={12} />
          <HStack>
            <HSpacer size={64} />
            <LogoutButton />
          </HStack>
          <VSpacer size={2} />
          <DonutChart dataList={data.rankData} />
          <VSpacer size={8} />
          {data.resultDataList.map((resultData) => (
            <>
              <ResultCard
                rule={resultData.rule}
                rank={resultData.rank}
                score={resultData.score}
                point={resultData.point}
                date={resultData.date}
                isFourMahjong={resultData.isFourMahjong}
              />
              <VSpacer size={1} />
            </>
          ))}
          <VSpacer size={16} />
        </VStack>
      </Center>
      <div style={{ width: "100%", position: "fixed", bottom: 0 }}>
        <Footer type="result" />
      </div>
    </div>
  );
};
