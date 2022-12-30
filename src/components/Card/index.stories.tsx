import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import { Card } from "./index";

export default {
  title: "Card",
  component: Card,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...Card.defaultProps },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'Rectangle18.jpg',
  firstName: 'Alina',
  lastName: 'Bevoch'
};
