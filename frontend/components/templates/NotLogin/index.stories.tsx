import type { StoryObj } from "@storybook/react";

import { NotLogin } from "./index";

const storybookObj = {
  title: "templates/NotLogin",
  component: NotLogin,
};

export default storybookObj;

// TODO: any 型の使用の回避
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: StoryObj = (args: any) => {
  return (
    <>
      <NotLogin {...args} />
    </>
  );
};
Default.args = {};
