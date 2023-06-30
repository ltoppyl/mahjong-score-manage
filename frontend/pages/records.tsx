import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { fetchRecordList } from "@/api/fetchRecordList";
import { RecordBoard } from "@/components/templates/RecordBoard";
import { FetchRecord } from "@/types/FetchRecord";
import { IsLoggedIn } from "@/utils/isLoggedIn";

const Record: NextPage = () => {
  const router = useRouter();

  const [data, setData] = useState<FetchRecord | undefined>(undefined);

  useEffect(() => {
    const data = IsLoggedIn();
    if (!data) {
      router.push("/");
      return;
    }

    fetchRecordList(data.uid, 4, null, null, setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePostFiltering = (
    gameType: 3 | 4,
    startDate: Date | null,
    endDate: Date | null
  ) => {
    const data = IsLoggedIn();
    if (!data) {
      router.push("/");
      return;
    }

    fetchRecordList(data.uid, gameType, startDate, endDate, setData);
  };

  return (
    <>{data && <RecordBoard data={data} filteringFn={handlePostFiltering} />}</>
  );
};

export default Record;
