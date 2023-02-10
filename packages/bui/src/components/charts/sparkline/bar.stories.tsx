import React from "react";
import { Story, Meta } from "@storybook/react";
import { SparkLine } from ".";

export default {
  component: SparkLine,
  title: "Charts/Sparkline/Bar",
  args: {
    chartData: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
    width: 300,
    height: 200,
  },

  argTypes: {
    chartType: { options: ["line", "bar"], control: { type: "select" } },
    color: {
      options: ["green", "yellow", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
} as Meta<typeof SparkLine>;

const Template: Story = (args) => {
  return <SparkLine chartData={[]} {...args} chartType="bar" />;
};

export const Basic = Template.bind({});
