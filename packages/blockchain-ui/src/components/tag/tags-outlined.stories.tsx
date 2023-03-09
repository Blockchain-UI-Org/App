import { Story, Meta } from "@storybook/react";
import { Tag, TagProps } from "./tag";

export default {
  component: Tag,
  title: "General/ Tag/ Outlined",
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

export const Default = Template.bind({});

Default.args = {
  color: "default",
  variant: "outline",
  children: "Default",
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  variant: "outline",
  children: "Primary",
};
export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
  variant: "outline",
  children: "Secondary",
};
export const Info = Template.bind({});

Info.args = {
  color: "info",
  variant: "outline",
  children: "Info",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
  variant: "outline",
  children: "Success",
};
export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
  variant: "outline",
  children: "Warning",
};
export const Error = Template.bind({});

Error.args = {
  color: "error",
  variant: "outline",
  children: "Error",
};
