import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ResultInput } from "./index";

const meta: Meta<typeof ResultInput> = {
  title: "templates/ResultInput",
  component: ResultInput,
};

export default meta;

// FIXME: any 型の回避
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <>
      <ResultInput {...args} flag={flag} setState={setFlag} />
    </>
  );
};

Default.args = {
  userInfo: {
    name: "適当なユーザー名",
    uid: "#####",
  },
};
