import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { baseURL } from "@/stores/Data";
import { PostRecord } from "@/types/PostRecord";

export const postRecord = (
  data: PostRecord,
  setState: Dispatch<SetStateAction<number>>
) => {
  axios
    .post(baseURL + "/api/v1/add-record", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setState(res.status);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      setState(-1); // セットする値は 200 以外であれば何でも良い
    });
};
