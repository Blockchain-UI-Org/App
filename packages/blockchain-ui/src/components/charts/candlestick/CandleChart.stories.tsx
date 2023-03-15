import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import CandleStickChart, { ChartProps } from "./CandlerChart";
import { CandleData } from "./CandleData";
import moment from "moment";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Charts/CandleStick",
  component: CandleStickChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof CandleStickChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChartProps> = (args) => <CandleStickChart {...args} />;

export const CandleStick = Template.bind({});

CandleStick.args = {
  width: "700px",
  height: "400px",
  series: CandleData,
};

export const CandleStickWithHorizontalGrid = Template.bind({});

CandleStickWithHorizontalGrid.args = {
  width: "700px",
  height: "400px",
  showHorizontalGridLine: true,
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",
};



export const CandleStickWithDashedHorizontalGrid = Template.bind({});

CandleStickWithDashedHorizontalGrid.args = {
  width: "700px",
  height: "400px",
  showHorizontalGridLine: true,
  gridLine: "dashed",
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",
};


export const CandleStickWithHiddenXAxis = Template.bind({});

CandleStickWithHiddenXAxis.args = {
  width: "700px",
  height: "400px",
  showHorizontalGridLine: true,
  gridLine: "dashed",
  hideXAxis: true,
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",
};

export const CandleStickWithHiddenYAxis = Template.bind({});

CandleStickWithHiddenYAxis.args = {
  width: "700px",
  height: "400px",
  showHorizontalGridLine: true,
  gridLine: "dashed",
  hideYAxis: true,
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",
};

export const CandleStickWithHiddenBorders = Template.bind({});

CandleStickWithHiddenBorders.args = {
  width: "700px",
  height: "400px",
  showHorizontalGridLine: true,
  gridLine: "dashed",
  hideXAxisBorder: true,
  hideYAxisBorder: true,
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",
};


export const CandleStickDisabled = Template.bind({});

CandleStickDisabled.args = {
  width: "700px",
  height: "400px",
  // title: "Trades",
  // filterOptions: ["2023", "2022", "2021", "2020", "2019", "2018"],
  // subtitle: "20% Increase in Earning",
  disabled: true,
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",

};

export const CandleStickLoading = Template.bind({});

CandleStickLoading.args = {
  width: "700px",
  height: "400px",
  // title: "Trades",
  // filterOptions: ["2023", "2022", "2021", "2020", "2019", "2018"],
  // subtitle: "20% Increase in Earning",
  loading: true,
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",

};


export const CandleStickWithHeader = Template.bind({});

CandleStickWithHeader.args = {
  width: "700px",
  height: "400px",
  
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",
};

export const CandleStickWithFilter = Template.bind({});

CandleStickWithFilter.args = {
  width: "700px",
  height: "400px",
  title: "Trades",
  filterOptions: ["2023", "2022", "2021", "2020", "2019", "2018"],
  subtitle: "20% Increase in Earning",
  series: CandleData,
  upwardsColor: "blue500",
  downwardsColor: "red500",

};
