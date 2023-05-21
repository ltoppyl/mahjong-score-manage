import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";

import { Icon, useDisclosure } from "@chakra-ui/react";

import { CustomModal } from "@/components/atoms/CustomModal";

type Props = {
  clickFn?: () => Promise<void>;
};
export const LogoutButton = ({ clickFn }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={FiLogOut}
        boxSize={6}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        cursor={isHover ? "pointer" : "default"}
        onClick={onOpen}
      />
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        clickFn={clickFn}
        title="ログアウトしますか？"
        body="お待ちしています！"
        buttonText="ログアウト"
        variant="outline"
        borderColor="black"
      />
    </>
  );
};
