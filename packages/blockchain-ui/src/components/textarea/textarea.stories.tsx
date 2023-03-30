import { Meta, Story } from "@storybook/react";
import { ITextAreaProps, TextArea } from "./textarea";
import styled from "styled-components";

export default {
  title: "Input/textArea",
  component: TextArea,
} as Meta<ITextAreaProps>;

const TextAreaWrapper = styled.div``;

const Template: Story<ITextAreaProps> = (args) => (
  <TextAreaWrapper>
    <TextArea {...args}> </TextArea>
  </TextAreaWrapper>
);

export const Basic = Template.bind({});

Basic.args = {
  label: "Label",
};

export const withBackground = Template.bind({});

withBackground.args = {
  isBackground: true,
  label: "Label",
};

export const withStandard = Template.bind({});

withStandard.args = {
  standard: true,
  block: true,
  label: "Label",
};
