import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { fetchRecordList } from "@/api/fetchRecordList";
import { Result } from "@/components/templates/Result";
import { FetchRecord } from "@/types/FetchRecord";
import { IsLoggedIn } from "@/utils/isLoggedIn";

const ResultPage: NextPage = () => {
  const router = useRouter();

  const [data, setData] = useState<FetchRecord | undefined>(undefined);

  useEffect(() => {
    const data = IsLoggedIn();
    if (!data) {
      router.push("/");
      return;
    }

    fetchRecordList(data.uid, setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{data && <Result data={data} />}</>;
};

export default ResultPage;
