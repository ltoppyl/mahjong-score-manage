import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { RightAddonInput } from "./index";

const meta: Meta<typeof RightAddonInput> = {
  title: "atoms/RightAddonInput",
  component: RightAddonInput,
};

export default meta;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  const [text, setText] = useState(undefined);
  return (
    <>
      <RightAddonInput {...args} value={text} setState={setText} />

      <p>--------------------</p>
      <p>入力された数字: {text}</p>
    </>
  );
};

Default.args = {
  isMinus: false,
};
