import axios from "axios";

import { baseURL } from "@/stores/Data";
export const postAddUser = (userId: string) => {
  axios.post(baseURL + "/api/v1/add-user?userId=" + userId).catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
};
