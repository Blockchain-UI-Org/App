import merge from "lodash/merge";
import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { useTheme } from "blockchain-ui/theme";
import { createBasicChartOptions } from "blockchain-ui/utils";

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

const CandleStickChart: FC<ChartProps> = ({
  width = "100%",
  height = "100%",
  chartData,
  currency,
  upwardsColor = "#3C90EB",
  downwardsColor = "#DF7D46",
}) => {
  const theme = useTheme();
  const chartOptions = merge(createBasicChartOptions(theme.components.Chart.common), {
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
      <ReactApexChart type="candlestick" series={chartData} options={chartOptions} height={height} width={width} />
    </Container>
  );
};

export { CandleStickChart };

const Container = styled.div`
  color: white;
`;

const Title = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
