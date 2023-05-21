import type { Meta, StoryObj } from "@storybook/react";

import { RecordCard } from "./index";

const meta: Meta<typeof RecordCard> = {
  title: "atoms/RecordCard",
  component: RecordCard,
};

export default meta;
type Story = StoryObj<typeof RecordCard>;

export const Default: Story = {
  args: {
    data: {
      rule: "Mリーグルール",
      rank: 2,
      score: 25000,
      point: 4.3,
      date: "2023/4/1 12:12",
      gameType: 4,
    },
  },
};
