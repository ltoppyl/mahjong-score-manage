import type { Meta, StoryObj } from "@storybook/react";

import { ScoreInputField } from "./index";

const meta: Meta<typeof ScoreInputField> = {
  title: "organisms/ScoreInputField",
  component: ScoreInputField,
};

export default meta;
type Story = StoryObj<typeof ScoreInputField>;

export const Default: Story = {
  args: {
    isFourMahjong: true,
    ruleOptionList: ["Mリーグルール"],
  },
};
