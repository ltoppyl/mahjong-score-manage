import axios from "axios";

import { baseURL } from "@/stores/Data";
import { PostRecord } from "@/types/PostRecord";

export const postRecord = (data: PostRecord) => {
  axios
    .post(baseURL + "/api/v1/add-record", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};
