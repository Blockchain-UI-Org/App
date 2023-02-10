import React from "react";
import { Meta, Story } from "@storybook/react";
import HighlightCard, { HighlightCardProps } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Finance/HighlightCard",
  component: HighlightCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    chartType: { options: ["line", "bar"], control: { type: "select" } },
    currency: {
      options: ["BTC", "ETH", "USDC", "USDT"],
      control: { type: "select" },
    },

    color: {
      options: ["green", "yellow", "red", "blue", "default"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
  args: {
    chartData: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HighlightCardProps> = (args) => (
  <HighlightCard {...args} />
);

export const Line = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Line.args = {
  title: "Title",
  amount: "20,000",
  percent: 10,
  currency: "BTC",
};

export const Bar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bar.args = {
  chartType: "bar",
  title: "Title",
  amount: "20,000",
  percent: -10,
  currency: "USDC",
};
