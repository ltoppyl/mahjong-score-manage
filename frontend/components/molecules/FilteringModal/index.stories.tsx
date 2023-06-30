import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Button, Text, useDisclosure } from "@chakra-ui/react";

import { FilteringModal } from "./index";

const meta: Meta = {
  title: "molecules/FilteringModal",
  component: FilteringModal,
};

export default meta;

type DateRange = {
  start: Date | null;
  end: Date | null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [date, setDate] = useState<DateRange>({
    start: null,
    end: null,
  });
  const [gameType, setGameType] = useState<3 | 4>(4);
  const clickFn = () => {
    // 適当な関数
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <FilteringModal
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        date={date}
        setDate={setDate}
        gameType={gameType}
        setGameType={setGameType}
        clickFn={clickFn}
      />
      <Text>---------</Text>
      <Text>GameType：{gameType}</Text>
      <Text>開始：{date.start ? date.start.toLocaleDateString() : "null"}</Text>
      <Text>開始：{date.end ? date.end.toLocaleDateString() : "null"}</Text>
    </>
  );
};

Default.args = {};
