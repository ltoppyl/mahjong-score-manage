// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { DonutChart } from "./index";

const meta: Meta<typeof DonutChart> = {
  title: "atoms/DonutChart",
  component: DonutChart,
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: {
    dataList: [
      { name: "1", value: 10 },
      { name: "2", value: 20 },
      { name: "3", value: 30 },
      { name: "4", value: 40 },
    ],
  },
};
