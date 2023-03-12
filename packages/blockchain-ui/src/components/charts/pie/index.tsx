import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

import { fNumber } from "../../../utils/number";

export interface PieChartProps {
  // Unused Props
  // color?: keyof ThemeInterface["components"]["Chart"]["variants"];
  // title?: string;
  // subtitle?: string;
  // chartLabels: string[];
  chartData: {
    label: string;
    value: number;
  }[];
  chartColors: string[];
  diameter: string;
}

const PieChart: FC<PieChartProps> = ({ diameter, chartData, chartColors }) => {
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
  } as const;

  return (
    <Container>
      <ReactApexChart type="donut" series={chartSeries} options={options} height={diameter} />
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
