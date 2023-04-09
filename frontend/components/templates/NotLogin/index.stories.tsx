import type { StoryObj } from "@storybook/react";

import { NotLogin } from "./index";

const storybookObj = {
  title: "templates/NotLogin",
  component: NotLogin,
};

export default storybookObj;

export const Default: StoryObj = (args: any) => {
  return (
    <>
      <NotLogin {...args} />
    </>
  );
};
Default.args = {};
