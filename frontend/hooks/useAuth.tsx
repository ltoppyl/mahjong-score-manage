import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useSetRecoilState } from "recoil";

import { app } from "../firebase";
import { loginState } from "../stores/Recoil";

export const useAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const setLogin = useSetRecoilState(loginState);

  const login = () => {
    console.log(provider, auth);
    signInWithPopup(auth, provider)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
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
