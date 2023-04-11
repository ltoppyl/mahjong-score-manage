import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { fetchRecordList } from "@/api/fetchRecordList";
import { Result } from "@/components/templates/Result";
import { loginState } from "@/stores/Recoil";
import { FetchRecord } from "@/types/FetchRecord";

const ResultPage: NextPage = () => {
  const login = useRecoilValue(loginState);

  const [data, setData] = useState<FetchRecord | undefined>(undefined);

  useEffect(() => {
    fetchRecordList(login.uid, setData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{data && <Result data={data} />}</>;
};

export default ResultPage;
