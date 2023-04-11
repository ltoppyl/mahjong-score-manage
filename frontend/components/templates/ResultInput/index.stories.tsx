import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { ResultInput } from "./index";

const meta: Meta<typeof ResultInput> = {
  title: "templates/ResultInput",
  component: ResultInput,
};

export default meta;

export const Default: StoryObj = (args: any) => {
  return (
    <>
      <RecoilRoot>
        <ResultInput {...args} />
      </RecoilRoot>
    </>
  );
};

Default.args = {
  userName: "適当なユーザー名",
};
