import type { Meta, StoryObj } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { ScoreInputField } from "./index";

const meta: Meta<typeof ScoreInputField> = {
  title: "organisms/ScoreInputField",
  component: ScoreInputField,
};

export default meta;

export const Default: StoryObj = (args: any) => {
  return (
    <>
      <RecoilRoot>
        <ScoreInputField {...args} />
      </RecoilRoot>
    </>
  );
};

Default.args = {
  isFourMahjong: true,
  ruleOptionList: ["Mリーグルール"],
};
