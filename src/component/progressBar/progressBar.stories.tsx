import React from "react";
import { Story, Meta } from "@storybook/react";
import GradientProgressBar, { ProgressBarProps } from ".";
import styled from "styled-components";

export default {
  component: GradientProgressBar,
  title: "Molecules/ProgressBar/Line",
  argTypes: {
    themeColor: {
      options: ["default", "green", "brown", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
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
  themeColor: "blue",
};

Basic.argTypes = {
  errorMessage: { control: { type: "text" } },
};

const Container = styled.div`
  width: 500px;
`;

export const Gradient = Template.bind({});
Gradient.args = {
  minValue: 0,
  maxValue: 100,
  value: 50,
  showValue: true,
  themeColor: "default",
};

export const ManualSlide = Template.bind({});
Gradient.args = {
  minValue: 0,
  maxValue: 100,
  showValue: true,
  themeColor: "default",
};

export const Error = Template.bind({});

Error.args = {
  minValue: 0,
  maxValue: 100,
  value: 50,
  showValue: true,
  errorMessage: "Mock Error Message",
};

export const Stacked = () => {
  return (
    <StackedWrapper>
      <Template
        minValue={0}
        maxValue={10}
        value={5}
        themeColor="default"
        title="gradientProgressBar"
      />
      <GreenBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="green"
          title="gradientProgressBar"
        />
      </GreenBar>
      <BrownBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="brown"
          title="gradientProgressBar"
        />
      </BrownBar>
      <RedBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="red"
          title="gradientProgressBar"
        />
      </RedBar>
      <BlueBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="blue"
          title="gradientProgressBar"
        />
      </BlueBar>
    </StackedWrapper>
  );
};

const StackedWrapper = styled.div`
  position: relative;
`;

const GreenBar = styled.div`
  margin-top: 40px;
`;

const RedBar = styled.div`
  margin-top: 40px;
`;

const BlueBar = styled.div`
  margin-top: 40px;
`;

const BrownBar = styled.div`
  margin-top: 40px;
`;
