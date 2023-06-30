// FIXME: Props 型の filteringFn 関数宣言の部分の警告に対処する
/* eslint-disable no-unused-vars */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiTwotoneFilter } from "react-icons/ai";

import {
  Center,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { LogoutButton } from "@/components/atoms/LogoutButton";
import { DonutChart } from "@/components/atoms/PieChart";
import { RecordCard } from "@/components/atoms/RecordCard";
import { HSpacer, VSpacer } from "@/components/atoms/Spacer";
import { FilteringModal } from "@/components/molecules/FilteringModal";
import { Footer } from "@/components/organisms/Footer";
import { useAuth } from "@/hooks/useAuth";
import { DateRange } from "@/types/DataRange";
import { FetchRecord } from "@/types/FetchRecord";

type Props = {
  data: FetchRecord;
  filteringFn: (
    gameType: 3 | 4,
    startDate: Date | null,
    endDate: Date | null
  ) => void;
};

export const RecordBoard = ({ data, filteringFn }: Props) => {
  const router = useRouter();
  const { logout } = useAuth();
  const [isHover, setIsHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [date, setDate] = useState<DateRange>({
    start: null,
    end: null,
  });
  const [gameType, setGameType] = useState<3 | 4>(4);

  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      router.push("/");
    } else {
      // TODO: エラーメッセージが出るようにする
    }
  };

  const handlePostFilter = () => {
    filteringFn(gameType, date.start, date.end);
    onClose();

    // 絞り込みの入力の初期化
    setDate({ start: null, end: null });
    setGameType(4);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Center>
        <VStack>
          <VSpacer size={8} />
          <HStack>
            <HSpacer size={64} />
            {/* TODO: Icon の hover 周りの挙動を LogoutButton と共通化する */}
            <Icon
              as={AiTwotoneFilter}
              boxSize={6}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              cursor={isHover ? "pointer" : "default"}
              onClick={onOpen}
            />
            <FilteringModal
              isOpen={isOpen}
              onClose={onClose}
              date={date}
              setDate={setDate}
              gameType={gameType}
              setGameType={setGameType}
              clickFn={handlePostFilter}
            />
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
                <RecordCard data={record} />
                <VSpacer size={1} />
              </>
            ))
          )}
          <VSpacer size={24} />
        </VStack>
        <div style={{ position: "fixed", bottom: 0 }}>
          <Footer type="RECORD" />
        </div>
      </Center>
    </div>
  );
};
