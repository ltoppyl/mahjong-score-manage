import { useRouter } from "next/router";
import React from "react";

import { Center, HStack, Text, VStack } from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { DonutChart } from "@/components/atoms/PieChart";
import { ResultCard } from "@/components/atoms/ResultCard";
import { HSpacer, VSpacer } from "@/components/atoms/Spacer";
import { Footer } from "@/components/organisms/Footer";
import { useAuth } from "@/hooks/useAuth";
import { FetchRecord } from "@/types/FetchRecord";

type Props = {
  data: FetchRecord;
};
export const RecordBoard = ({ data }: Props) => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      router.push("/");
    } else {
      // TODO: エラーメッセージが出るようにする
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Center>
        <VStack>
          <VSpacer size={8} />
          <HStack>
            <HSpacer size={64} />
            <LogoutButton clickFn={handleLogout} />
          </HStack>
          <VSpacer size={2} />
          <DonutChart dataList={data.rankData} />
          <VSpacer size={8} />
          {data.recordList.length === 0 ? (
            <Text>成績データがありません</Text>
          ) : (
            data.recordList.map((record) => (
              <>
                <ResultCard data={record} />
                <VSpacer size={1} />
              </>
            ))
          )}
          <VSpacer size={24} />
        </VStack>
        <div style={{ position: "fixed", bottom: 0 }}>
          <Footer type="result" />
        </div>
      </Center>
    </div>
  );
};
