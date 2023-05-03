import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./index";

const meta: Meta<typeof Footer> = {
  title: "organisms/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    type: "INPUT",
  },
};
