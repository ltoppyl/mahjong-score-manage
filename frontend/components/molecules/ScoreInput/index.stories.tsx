import type { StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { ScoreInput } from "./index";

const storybookObj = {
  component: ScoreInput,
  title: "molecules/ScoreInput",
  parameters: {},
};

export default storybookObj;

// // const Template = () => <ScoreInput />;

// export const Default = Template.bind({});

export const Default: StoryObj = (args: any) => {
  const [text, setText] = useState("");
  return (
    <>
      <ScoreInput {...args} setState={setText} />

      <p>--------------------</p>
      <p>入力された数字: {text}</p>
    </>
  );
};

Default.args = {};
