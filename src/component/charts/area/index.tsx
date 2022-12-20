import merge from "lodash/merge";
import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { colors, ThemeColor } from "../../theme/colors";
import BaseOptionChart from "../../theme/charts";
import { CryptoIcon } from "../../icon/icon";
import { CryptoSymbols } from "../../static/types";

export interface ChartProps {
  color?: ThemeColor;
  title?: string;
  subtitle?: string;
  chartLabels: string[];
  chartData: number[];
  width?: string;
  height?: string;
  name: string;
  currency?: CryptoSymbols;
}

const LineChart: FC<ChartProps> = ({
  color = "blue",
  width = "100%",
  height = "100%",
  chartLabels,
  chartData,
  name,
  currency,
}) => {
  const chartOptions = merge(BaseOptionChart(), {
    colors: [colors[color]?.midtone, "#1990FF"],
    fill: { type: "gradient" },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Container>
      <Title>{currency && <CryptoIcon cryptoSymbol={currency} />}</Title>{" "}
      <ReactApexChart
        type="area"
        series={[{ name: name, data: chartData }]}
        options={chartOptions}
        height={height}
        width={width}
      />
    </Container>
  );
};

export default LineChart;

const Container = styled.div`
  color: white;
`;

const Title = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
