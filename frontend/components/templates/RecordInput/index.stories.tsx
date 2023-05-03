import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { RecordInput } from "./index";

const meta: Meta<typeof RecordInput> = {
  title: "templates/RecordInput",
  component: RecordInput,
};

export default meta;

// FIXME: any 型の回避
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <>
      <RecordInput {...args} flag={flag} setState={setFlag} />
    </>
  );
};

Default.args = {
  userInfo: {
    name: "適当なユーザー名",
    uid: "#####",
  },
};
