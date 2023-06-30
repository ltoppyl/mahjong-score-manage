import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { baseURL } from "@/stores/Data";
import { FetchRecord } from "@/types/FetchRecord";

export const fetchRecordList = (
  uid: string,
  gameType: 3 | 4,
  startDate: Date | null,
  endDate: Date | null,
  setState: Dispatch<SetStateAction<FetchRecord | undefined>>
) => {
  const url =
    startDate !== null && endDate !== null
      ? `${baseURL}/api/v1/get-records?userId=${uid}&gameType=${gameType}&startDate=${startDate.toLocaleDateString()}&endDate=${endDate.toLocaleDateString()}`
      : `${baseURL}/api/v1/get-records?userId=${uid}&gameType=${gameType}`;

  axios
    .get(url)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
