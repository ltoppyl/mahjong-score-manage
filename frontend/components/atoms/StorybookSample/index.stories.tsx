import { StorybookSample } from "./index";

const storybookObj = {
  component: StorybookSample,
  title: "atoms/StorybookSample",
  parameters: {},
};

export default storybookObj;

const Template = () => <StorybookSample />;

export const Default = Template.bind({});
