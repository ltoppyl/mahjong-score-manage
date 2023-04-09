import type { Meta, StoryObj } from "@storybook/react";

import { NotLogin } from "./index";

const meta: Meta<typeof NotLogin> = {
  title: "templates/NotLogin",
  component: NotLogin,
};

export default meta;
type Story = StoryObj<typeof NotLogin>;

export const Default: Story = {
  args: {},
};
