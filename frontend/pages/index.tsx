import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

import { NotLogin } from "@/components/templates/NotLogin";
import { ResultInput } from "@/components/templates/ResultInput";

import { loginState } from "@/stores/Recoil";

const Home: NextPage = () => {
  const login = useRecoilValue(loginState);

  return (
    <>{login.isLogin ? <ResultInput userName={login.name} /> : <NotLogin />}</>
  );
};

export default Home;
