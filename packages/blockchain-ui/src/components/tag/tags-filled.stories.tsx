import { Story, Meta } from "@storybook/react";
import { Tag, TagProps } from "./tag";

export default {
  component: Tag,
  title: "General/ Tag/ Filled",
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
  variant: "filled",
  children: "Default",
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  variant: "filled",
  children: "Primary",
};
export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
  variant: "filled",
  children: "Secondary",
};
export const Info = Template.bind({});

Info.args = {
  color: "info",
  variant: "filled",
  children: "Info",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
  variant: "filled",
  children: "Success",
};
export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
  variant: "filled",
  children: "Warning",
};
export const Error = Template.bind({});

Error.args = {
  color: "error",
  variant: "filled",
  children: "Error",
};
