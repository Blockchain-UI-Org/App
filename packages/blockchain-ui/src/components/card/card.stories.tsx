import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./card";

export default {
  title: "General/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const BasicCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicCard.args = {
  style: {
    maxWidth: 300,
  },
  children: <p>Basic Card</p>,
};
