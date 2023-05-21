export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://mahjongbe-1-j0155660.deta.app"
    : "http://localhost:8000";

// ログインしているユーザ情報を保持するための key
export const LOCAL_STORAGE_KEY = "userInfo";
