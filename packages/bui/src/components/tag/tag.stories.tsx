import { Story, Meta } from "@storybook/react";
import { Tag, TagProps } from "./tag";

export default {
  component: Tag,
  title: "General/ Tag",
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args}>Test</Tag>;

export const NeutralSmall = Template.bind({});

NeutralSmall.args = {
  type: "neutral",
  size: "small",
};

export const NeutralLarge = Template.bind({});

NeutralLarge.args = {
  type: "neutral",
  size: "large",
};

export const PositiveSmall = Template.bind({});

PositiveSmall.args = {
  type: "positive",
  size: "small",
};

export const PositiveLarge = Template.bind({});

PositiveLarge.args = {
  type: "positive",
  size: "large",
};

export const WarningSmall = Template.bind({});

WarningSmall.args = {
  type: "warning",
  size: "small",
};

export const WarningLarge = Template.bind({});

WarningLarge.args = {
  type: "warning",
  size: "large",
};

export const ErrorSmall = Template.bind({});

ErrorSmall.args = {
  type: "error",
  size: "small",
};

export const ErrorLarge = Template.bind({});

ErrorLarge.args = {
  type: "error",
  size: "large",
};
