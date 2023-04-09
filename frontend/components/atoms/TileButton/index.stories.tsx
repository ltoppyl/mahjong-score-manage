import type { Meta, StoryObj } from "@storybook/react";

import { TileButton } from "./index";

const meta: Meta<typeof TileButton> = {
  title: "atoms/TileButton",
  component: TileButton,
};

export default meta;
type Story = StoryObj<typeof TileButton>;

export const Text: Story = {
  args: {
    type: "text",
    text: "追加",
    isShadow: false,
    isDisabled: false,
  },
};

export const Rank: Story = {
  args: {
    type: "rank",
    text: "一着",
    isShadow: false,
  },
};

export const Icon: Story = {
  args: {
    type: "google-icon",
    text: "#####", // この値は無視される
    isShadow: false,
  },
};
