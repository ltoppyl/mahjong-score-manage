import { atom } from "recoil";

export const loginState = atom({
  key: "login",
  default: {
    isLogin: false,
    name: "",
    uid: "",
  },
});

// --------------------

// 値の取得

// --------------------
// import { useRecoilValue } from "recoil";
// import { ### } from "@/stores/Recoil";

// export const Function = () => {
//   const _ = useRecoilValue(###);
// }

// --------------------

// 値の更新

// --------------------
// import { useSetRecoilState } from "recoil";
// import { ### } from "@/stores/Recoil";

// export const Function = () => {
//   const set### = useSetRecoilState(###);

//   set###($$$)
// }
