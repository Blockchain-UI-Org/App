import merge from "lodash/merge";
import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { colors, ThemeColor } from "../../theme/colors";
import BaseOptionChart from "../../theme/charts";
import { CryptoIcon } from "../../icon/icon";
import { CryptoSymbols } from "../../static/types";

export interface ChartProps {
  title?: string;
  subtitle?: string;
  chartData: any[];
  width?: string;
  height?: string;
  currency?: CryptoSymbols;
  upwardsColor: string;
  downwardsColor: string;
}

const LineChart: FC<ChartProps> = ({
  width = "100%",
  height = "100%",
  chartData,
  currency,
  upwardsColor = "#3C90EB",
  downwardsColor = "#DF7D46",
}) => {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: {
      candlestick: {
        colors: {
          upward: upwardsColor,
          downward: downwardsColor,
        },
      },
    },
  });

  return (
    <Container>
      <Title>{currency && <CryptoIcon cryptoSymbol={currency} />}</Title>{" "}
      <ReactApexChart
        type="candlestick"
        series={chartData}
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
