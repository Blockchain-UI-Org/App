import React from "react";
import { Story, Meta } from "@storybook/react";
import GradientProgressBar, { ProgressBarProps } from ".";
import styled from "styled-components";

export default {
  component: GradientProgressBar,
  title: "Indicators/ProgressBar/Line",
  argTypes: {
    themeColor: {
      options: ["green", "brown", "red", "blue"],
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
};

export const ManualSlide = Template.bind({});
Gradient.args = {
  minValue: 0,
  maxValue: 100,
  showValue: true,
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
        title="gradientProgressBar"
      />
      <GreenBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="green"
          title="greenProgressBar"
        />
      </GreenBar>
      <BrownBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="brown"
          title="brownProgressBar"
        />
      </BrownBar>
      <RedBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="red"
          title="redProgressBar"
        />
      </RedBar>
      <BlueBar>
        <Template
          minValue={0}
          maxValue={10}
          value={5}
          themeColor="blue"
          title="blueProgressBar"
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
