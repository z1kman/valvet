import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { Link } from "./index";

export default {
  title: "Link",
  component: Link,
  parameters: {
    docs: {
      page: documentation,
    },
  },
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = () => <Link />;
