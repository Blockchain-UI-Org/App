import { Story, Meta } from "@storybook/react";
import { Tag, TagProps } from "./tag";

export default {
  component: Tag,
  title: "General/ Tag/ Soft",
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
  variant: "soft",
  children: "Default",
};

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  variant: "soft",
  children: "Primary",
};
export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
  variant: "soft",
  children: "Secondary",
};
export const Info = Template.bind({});

Info.args = {
  color: "info",
  variant: "soft",
  children: "Info",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
  variant: "soft",
  children: "Success",
};
export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
  variant: "soft",
  children: "Warning",
};
export const Error = Template.bind({});

Error.args = {
  color: "error",
  variant: "soft",
  children: "Error",
};
