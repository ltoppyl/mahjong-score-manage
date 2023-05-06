import type { Meta, StoryObj } from "@storybook/react";

import { HSpacer } from "../index";

const meta: Meta<typeof HSpacer> = {
  title: "atoms/HSpacer",
  component: HSpacer,
};

export default meta;
type Story = StoryObj<typeof HSpacer>;

export const Default: Story = {
  args: {},
};
