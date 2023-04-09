import type { Meta, StoryObj } from "@storybook/react";

import { ResultCard } from "./index";

const meta: Meta<typeof ResultCard> = {
  title: "atoms/ResultCard",
  component: ResultCard,
};

export default meta;
type Story = StoryObj<typeof ResultCard>;

export const Default: Story = {
  args: {
    rule: "Mリーグルール",
    rank: 2,
    score: 25000,
    point: 4.3,
    date: "2023/4/1 12:12",
    isFourMahjong: true,
  },
};
