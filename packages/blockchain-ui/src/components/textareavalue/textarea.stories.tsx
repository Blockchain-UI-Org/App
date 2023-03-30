import { Meta, Story } from "@storybook/react";
import styled from "styled-components";
import { TextAreaValue, ITextAreaValueProps } from "./textareavalue";

export default {
  title: "Input/textAreaValue",
  component: TextAreaValue,
} as Meta<ITextAreaValueProps>;

const TextAreaValueWrapper = styled.div``;

const Template: Story<ITextAreaValueProps> = (args) => (
  <TextAreaValueWrapper>
    <TextAreaValue {...args}> </TextAreaValue>
  </TextAreaValueWrapper>
);

export const Basic = Template.bind({});

Basic.args = {
  label: "Label",
  value: "Value",
  onHover: false,
  isFocus: false,
  isDisabled: false,
  isError: false,
  isHelpText: false,
};

export const HoverValue = Template.bind({});

HoverValue.args = {
  label: "Label",
  value: "Value(Hovered)",
  onHover: true,
  isFocus: false,
  isDisabled: false,
  isError: false,
  isHelpText: false,
};

export const FocusedValue = Template.bind({});

FocusedValue.args = {
  label: "Label",
  value: "Value(Focused)|",
  onHover: true,
  isFocus: true,
  isDisabled: false,
  isError: false,
  isHelpText: false,
};

export const DisabledValue = Template.bind({});

DisabledValue.args = {
  label: "Label",
  value: "",
  onHover: false,
  isFocus: false,
  isDisabled: true,
  isError: false,
  isHelpText: false,
};

export const ErrorValue = Template.bind({});

ErrorValue.args = {
  label: "Label",
  value: "Value (Incorrect)",
  onHover: false,
  isFocus: false,
  isDisabled: false,
  isError: true,
  isHelpText: false,
};

export const ScrollValue = Template.bind({});

ScrollValue.args = {
  label: "Label",
  value: "Lorem Ipsum is sds sdsdc asdc dasdasc sadadc  dasxac adxasdsdasdasdasdasdssd",
  onHover: false,
  isFocus: false,
  isDisabled: false,
  isError: false,
  isHelpText: false,
};

export const HelpTextValue = Template.bind({});

HelpTextValue.args = {
  label: "Label",
  value: "Value",
  onHover: false,
  isFocus: false,
  isDisabled: false,
  isError: false,
  isHelpText: true,
};

export const HelpTextErorValue = Template.bind({});

HelpTextErorValue.args = {
  label: "Label",
  value: "Value",
  onHover: false,
  isFocus: false,
  isDisabled: false,
  isError: true,
  isHelpText: true,
  validationColor: true,
};
