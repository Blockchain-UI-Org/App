import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DoughnutChart } from "./dougnutchart";
import { Icon } from "blockchain-ui/components/icon/icon";
import { Typography } from "blockchain-ui/components/typography";
import { formatNumber } from "blockchain-ui/utils";

export default {
  title: "General/DoughnutChart",
  component: DoughnutChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DoughnutChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DoughnutChart> = (args) => <DoughnutChart {...args} />;

export const BasicDoughnut = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicDoughnut.args = {
  data: [
    {
      label: "DAI",
      value: 35,
      bgColor: "#008F72",
    },
    {
      bgColor: "#028069",
      label: "aCRV",
      value: 15,
    },
    {
      bgColor: "#5EAE9F",
      label: "cSUSHI",
      value: 50,
    },
  ],
};

export const DoughnutWithTitle = Template.bind({});

DoughnutWithTitle.args = {
  data: [
    {
      label: "DAI",
      value: 35,
      bgColor: "#008F72",
    },
    {
      bgColor: "#028069",
      label: "aCRV",
      value: 15,
    },
    {
      bgColor: "#5EAE9F",
      label: "cSUSHI",
      value: 50,
    },
  ],
  info: {
    title: "$0.46",
    subtitle: (
      <>
        <div style={{ marginRight: 6 }}>
          <Icon name="trendingUp" size="small" />
        </div>{" "}
        <Typography fontSize={"inherit"}>+{formatNumber(2.3133131)} % / Months</Typography>
      </>
    ),
  },
};
