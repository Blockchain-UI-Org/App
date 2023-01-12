import merge from "lodash/merge";
import React, { FC, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { createBasicChartOptions } from "utils";
import { CryptoIcon } from "../../icon/icon";
import { CryptoSymbols } from "../../static/types";
import { ThemeInterface, useTheme } from "theme";

export interface ChartProps {
  color?: keyof ThemeInterface["components"]["Chart"]["variants"];
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
  const theme = useTheme();
  const chartOptions = useMemo(() => {
    return merge(createBasicChartOptions(theme.components.Chart.common), {
      colors: [
        theme.components.Chart.variants[color].midtone,
        theme.palette.info.midtone,
      ],
      fill: { type: "gradient" },
      xaxis: {
        categories: chartLabels,
      },
    });
  }, [theme.components.Chart, theme.palette.info.midtone]);

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
