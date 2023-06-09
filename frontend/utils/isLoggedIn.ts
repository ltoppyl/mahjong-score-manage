import { LOCAL_STORAGE_KEY } from "@/stores/Data";
import { UserInfo } from "@/types/UserInfo";

export const IsLoggedIn = (): UserInfo | null => {
  // Next.js はクライアントサイドとサーバーサイドの両方で実行され、サーバーサイドで実行された場合に localStorage がブラウザ環境になくエラーとなるため localStorage の存在をチェックする必要がある
  if (!window || !("localStorage" in window) || !window.localStorage) {
    return null;
  }

  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) {
    return null;
  }

  const parsed = JSON.parse(data);
  if (!parsed.name || !parsed.uid) {
    return null;
  }

  return parsed;
};
