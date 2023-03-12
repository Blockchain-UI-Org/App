import { Story, Meta } from "@storybook/react";
import { Deposit, TrendingUp } from "../static/images";
import { Tag, TagProps } from "./tag";

export default {
  component: Tag,
  title: "General/ Tag",
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#fff" },
        { name: "grey", value: "#F9FAFB" },
      ],
    },
  },
} as Meta;


const Template: Story<TagProps> = (args) => <Tag {...args}/>;

export const TagWithIcon = Template.bind({});

TagWithIcon.args = {
  color: "default",
  variant: "filled",
  children: "Default",
  icon: <TrendingUp />
};