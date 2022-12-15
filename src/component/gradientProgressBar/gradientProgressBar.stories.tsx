import React from "react";
import { Story, Meta } from "@storybook/react";
import GradientProgressBar, { ProgressBarProps } from ".";
import styled from "styled-components";

export default {
  component: GradientProgressBar,
  title: "Molecules/ProgressBar/GradientProgressBar",
} as Meta;

const Template: Story<ProgressBarProps> = (args) => (
  <Container>
    {" "}
    <GradientProgressBar {...args} />
  </Container>
);

export const Basic = Template.bind({});

Basic.args = {
  minValue: 0,
  maxValue: 100,
  value: 50,
  showValue: true,
  errorMessage: "Mock Error Message",
};

Basic.argTypes = {
  errorMessage: { control: { type: "text" } },
};

const Container = styled.div`
  width: 500px;
`;
