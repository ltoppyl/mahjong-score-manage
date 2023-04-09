import type { Meta, StoryObj } from "@storybook/react";

import { ResultInput } from "./index";

const meta: Meta<typeof ResultInput> = {
  title: "templates/ResultInput",
  component: ResultInput,
};

export default meta;
type Story = StoryObj<typeof ResultInput>;

export const Default: Story = {
  args: {
    userName: "適当なユーザー名",
  },
};
