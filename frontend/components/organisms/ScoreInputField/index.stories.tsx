import type { Meta, StoryObj } from "@storybook/react";

import { ScoreInputField } from "./index";

const meta: Meta<typeof ScoreInputField> = {
  title: "organisms/ScoreInputField",
  component: ScoreInputField,
};

export default meta;

// FIXME: any 型の回避
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  return (
    <>
      <ScoreInputField {...args} />
    </>
  );
};

Default.args = {
  isFourMahjong: true,
  ruleOptionList: ["Mリーグルール"],
  userId: "#####",
};
