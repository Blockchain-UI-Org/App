import React, { FC } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ThemeInterface, useTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";

export interface SparkLineProps {
  chartData: number[];
  width?: number | string;
  height?: number | string;
  color: keyof IBuiColor;
  disabledAnimation?: boolean;
  chartType?: "bar" | "line";
  disableHover?: boolean;
}

export const SparkLine: FC<SparkLineProps> = ({
  chartData,
  disabledAnimation = false,
  width = 120,
  height = 80,
  disableHover,
  color,
  chartType = "line",
}) => {
  const theme = useTheme();
  const col = theme.palette.buiColors[color];
  const chartOptions: ApexOptions = {
    colors: [col, col],
    chart: { animations: { enabled: !disabledAnimation }, sparkline: { enabled: true } },
    ...(disableHover && {
      states: {
        hover: { filter: { type: chartType, value: 1 } },
      },
    }),
    stroke: { width: 2 },
    tooltip: {
      enabled: false,
      x: { show: false },
      marker: { show: false },
    },
  };

  return (
    <Container>
      {" "}
      <ReactApexChart
        type={chartType}
        series={[{ data: chartData }]}
        options={chartOptions}
        width={width}
        height={height}
      />
    </Container>
  );
};

const Container = styled.div`
  color: white;
`;
