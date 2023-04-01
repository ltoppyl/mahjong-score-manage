import { StorybookSample } from "./index";

const storybookObj = {
  component: StorybookSample,
  title: "StorybookSample",
  parameters: {},
};

export default storybookObj;

const Template = () => <StorybookSample />;

export const Default = Template.bind({});
