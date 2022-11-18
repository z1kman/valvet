// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { Logo } from "./index";

export default {
  title: "Logo",
  component: Logo,
  parameters: {
    docs: {
      page: documentation,
    },
  },
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = () => <Logo />;
