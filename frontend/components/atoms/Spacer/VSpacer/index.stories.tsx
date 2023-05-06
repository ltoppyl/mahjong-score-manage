import type { Meta, StoryObj } from "@storybook/react";

import { VSpacer } from "../index";

const meta: Meta<typeof VSpacer> = {
  title: "atoms/VSpacer",
  component: VSpacer,
};

export default meta;
type Story = StoryObj<typeof VSpacer>;

export const Default: Story = {
  args: {},
};
