import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useSetRecoilState } from "recoil";

import { postAddUser } from "@/api/postAddUser";
import { loginState } from "@/stores/Recoil";

import { app } from "../firebase";

export const useAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const setLogin = useSetRecoilState(loginState);

  const login = () => {
    signInWithPopup(auth, provider)
      // FIXME: any 型を回避する
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((result: any) => {
        const user = result.user;
        if (user.displayName) {
          setLogin({
            isLogin: true,
            name: user.displayName,
            uid: user.uid,
          });
        } else {
          setLogin({
            isLogin: true,
            name: "",
            uid: user.uid,
          });
        }

        // DB 上に uid の追加
        postAddUser(user.uid);
      })
      // FIXME: any 型を回避する
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-console
        console.error(errorCode, errorMessage);
      });
  };

  const logout = () => {
    signOut(auth);
    setLogin({
      isLogin: false,
      name: "",
      uid: "",
    });
  };

  return { login, logout };
};
