import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { LinksMenu } from "./index";

export default {
  title: "LinksMenu",
  component: LinksMenu,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...LinksMenu.defaultProps },
} as ComponentMeta<typeof LinksMenu>;

const Template: ComponentStory<typeof LinksMenu> = (args) => (
  <LinksMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "Link 1",
      href: "#",
    },
    {
      label: "Link 2",
      href: "#",
    },
    {
      label: "Link 3",
      href: "#",
    },
  ],
};

export const DirectionRow = Template.bind({});
DirectionRow.args = {
  direction: "row",
  items: [
    {
      label: "Link 1",
      href: "#",
    },
    {
      label: "Link 2",
      href: "#",
    },
    {
      label: "Link 3",
      href: "#",
    },
  ],
};
