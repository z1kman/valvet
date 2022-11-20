import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { Header } from "./index";

export default {
  title: "Header",
  component: Header,
  parameters: {
    docs: {
      page: documentation,
    },
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => <Header />;
