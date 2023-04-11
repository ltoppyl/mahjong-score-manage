import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useSetRecoilState } from "recoil";

import { loginState } from "@/stores/Recoil";

import { app } from "../firebase";

export const useAuth = () => {
  const provider = new GoogleAuthProvider();
  console.log(app);
  const auth = getAuth(app);
  const setLogin = useSetRecoilState(loginState);

  const login = () => {
    signInWithPopup(auth, provider)
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
      })
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
