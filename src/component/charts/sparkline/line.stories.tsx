import React from "react";
import { Story, Meta } from "@storybook/react";
import { SparkLine } from "./line";
import styled from "styled-components";

export default {
  component: SparkLine,
  title: "Charts/Sparkline/Line",
  args: {
    chartData: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
    width: 300,
    height: 200,
  },

  argTypes: {
    color: {
      options: ["green", "brown", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
} as Meta<typeof SparkLine>;

const Template: Story = (args) => {
  return (
    <Container>
      <SparkLine chartData={[]} {...args} />
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 1000px;
`;

export const Basic = Template.bind({});
