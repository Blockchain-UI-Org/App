import merge from "lodash/merge";
import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { colors, legacyColors, ThemeColor } from "../../theme/colors";
import BaseOptionChart from "../../theme/charts";
import { fNumber } from "../../../utils/number";

export interface ChartProps {
  color?: ThemeColor;
  title?: string;
  subtitle?: string;
  chartLabels: string[];
  chartData: {
    label: string;
    value: number;
  }[];
  chartColors: string[];
  diameter: string;
}

const PieChart: FC<ChartProps> = ({ diameter, chartData, chartColors }) => {
  const chartLabels = chartData.map((i) => i?.label);
  const chartSeries = chartData.map((i) => i?.value);

  const options = {
    labels: chartLabels,
    stroke: {
      colors: chartColors,
    },
    // Datalabels
    dataLabels: { enabled: false },

    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    colors: chartColors,
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: false,
            value: {
              formatter: (val: number | string) => fNumber(val),
            },
            total: {
              formatter: (w: { globals: { seriesTotals: number[] } }) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return fNumber(sum);
              },
            },
          },
        },
      },
    },
  };

  return (
    <Container>
      <ReactApexChart
        type="donut"
        series={chartSeries}
        //@ts-ignore
        options={options}
        height={diameter}
      />
    </Container>
  );
};

export default PieChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;