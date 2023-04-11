import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button, useDisclosure } from "@chakra-ui/react";

import { CustomModal } from "./index";

const meta: Meta = {
  title: "atoms/CustomModal",
  component: CustomModal,
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const clickFn = () => {
    // 適当な処理
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <CustomModal
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        clickFn={clickFn}
      />
    </>
  );
};

Default.args = {
  title: "モーダルのテキスト",
  body: "モーダルのテキスト",
  buttonText: "ボタンのテキスト",
  bgColor: "red",
  variant: "solid",
  borderColor: "black",
};
