import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { Sidebar } from "./index";

export default {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...Sidebar.defaultProps },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true
};