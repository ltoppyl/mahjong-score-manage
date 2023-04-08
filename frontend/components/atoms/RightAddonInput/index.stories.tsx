import type { Meta, StoryObj } from "@storybook/react";

import { RightAddonInput } from "./index";

const meta: Meta<typeof RightAddonInput> = {
  title: "atoms/RightAddonInput",
  component: RightAddonInput,
};

export default meta;
type Story = StoryObj<typeof RightAddonInput>;

export const Default: Story = {
  args: {
    isMinus: false,
  },
};
