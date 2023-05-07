import type { Meta, StoryObj } from "@storybook/react";
import { Box, VStack } from "@chakra-ui/react";

import { VSpacer } from "./index";

const meta: Meta<typeof VSpacer> = {
  title: "atoms/Spacer/VSpacer",
  component: VSpacer,
};

export default meta;
type Story = StoryObj<typeof VSpacer>;

export const Default: Story = (args) => {
  return (
    <>
      <VStack>
        <Box w={14} h={5} bg="tomato" />
        <VSpacer {...args} />
        <Box w={14} h={5} bg="tomato" />
      </VStack>
    </>
  );
};

Default.args = {
  size: 10,
};
