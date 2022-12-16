import React from "react";
import { Story, Meta } from "@storybook/react";
import { CircleProgressBar, CircleBarProps } from "./circleBar";
import styled from "styled-components";

export default {
  component: CircleProgressBar,
  title: "Molecules/ProgressBar/Circle",
  argTypes: {
    themeColor: {
      options: ["default", "green", "brown", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
} as Meta;

const Template: Story<CircleBarProps> = (args) => (
  <Container>
    {" "}
    <CircleProgressBar {...args} />
  </Container>
);

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

export const Gradient = Template.bind({});
Gradient.args = {
  percent: 50,
  showValue: true,
  themeColor: "green",
};
