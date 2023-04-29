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

  // TODO: data を parse する前に型チェックを行い UserInfo 型であることを確認する
  return JSON.parse(data);
};
