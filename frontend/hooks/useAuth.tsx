import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { postAddUser } from "@/api/postAddUser";
import { LOCAL_STORAGE_KEY } from "@/stores/Data";

import { app } from "../firebase";

export const useAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const data = {
        name: user.displayName ? user.displayName : "",
        uid: user.uid,
      };

      // DB 上に uid の追加
      postAddUser(user.uid);

      // localStorage にログイン情報の追加
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

      return true;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return false;
    }
  };

  const logout = () => {
    signOut(auth);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return { login, logout };
};
