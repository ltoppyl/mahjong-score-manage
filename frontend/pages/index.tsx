import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { NotLogin } from "@/components/templates/NotLogin";
import { ResultInput } from "@/components/templates/ResultInput";
import { UserInfo } from "@/types/UserInfo";
import { IsLoggedIn } from "@/utils/isLoggedIn";

const Home: NextPage = () => {
  const [loginInfo, setLoginInfo] = useState<UserInfo | null>(null);
  const [loginFlag, setLoginFlag] = useState<boolean>(false);

  useEffect(() => {
    setLoginInfo(IsLoggedIn());
  }, [loginFlag]);

  return (
    <>
      {loginInfo ? (
        <ResultInput
          flag={loginFlag}
          setState={setLoginFlag}
          userInfo={loginInfo}
        />
      ) : (
        <NotLogin flag={loginFlag} setState={setLoginFlag} />
      )}
    </>
  );
};

export default Home;
