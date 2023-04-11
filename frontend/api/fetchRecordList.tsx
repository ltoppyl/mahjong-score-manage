import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { baseURL } from "@/stores/Data";
import { FetchRecord } from "@/types/FetchRecord";

export const fetchRecordList = (
  uid: string,
  setState: Dispatch<SetStateAction<FetchRecord | undefined>>
) => {
  axios
    .get(baseURL + "/api/v1/get-records?userId=" + uid)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
