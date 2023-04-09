import type { Meta, StoryObj } from "@storybook/react";

import { LogoutButton } from "./index";

const meta: Meta<typeof LogoutButton> = {
  title: "atoms/LogoutButton",
  component: LogoutButton,
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  args: {},
};
