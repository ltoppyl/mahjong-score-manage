import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";

import { Icon } from "@chakra-ui/react";
export const LogoutButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Icon
        as={FiLogOut}
        boxSize={6}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        cursor={isHover ? "pointer" : "default"}
        onClick={() => {
          // ここにログアウト処理を書く
        }}
      />
    </>
  );
};
