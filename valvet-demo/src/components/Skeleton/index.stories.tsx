import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { Skeleton } from "./index";

export default {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      page: documentation,
    },
  },
} as ComponentMeta<typeof Skeleton>;

export const Default: ComponentStory<typeof Skeleton> = () => (
  <Skeleton loading={true}>
    <div style={{ width: "200px", height: "200px" }}></div>
  </Skeleton>
);
