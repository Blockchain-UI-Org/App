import React from "react";
import { Story, Meta } from "@storybook/react";
import { SparkLine, SparkLineProps } from "./SparkLine";

export default {
  component: SparkLine,
  title: "Charts/Sparkline/Bar",

} as Meta<typeof SparkLine>;

const Template: Story<SparkLineProps> = (args) => {
  return <SparkLine {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  chartData: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  width: 300,
  height: 200,
  color: "blue500",
  chartType: "bar"
}

export const BasicWithDisabledAnimation = Template.bind({});

BasicWithDisabledAnimation.args = {
  chartData: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  width: 300,
  height: 200,
  color: "blue500",
  chartType: "bar",
  disabledAnimation: true
}


export const BasicWithDisabledHoverEffects = Template.bind({});

BasicWithDisabledHoverEffects.args = {
  chartData: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  width: 300,
  height: 200,
  color: "blue500",
  chartType: "bar",
  disableHover: true
}

