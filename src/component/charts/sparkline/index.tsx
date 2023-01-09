import React, { FC } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import { colors, ThemeColor } from "theme/colors";

interface SparkLineProps {
  chartData: number[];
  width?: string;
  height?: string;
  color?: ThemeColor;
  chartType?: "bar" | "line";
}

export const SparkLine: FC<SparkLineProps> = ({
  chartData,
  width = 120,
  height = 80,
  color = "blue",
  chartType = "line",
}) => {
  const chartOptions = {
    colors: [colors[color]?.midtone, "#1990FF"],
    chart: { animations: { enabled: true }, sparkline: { enabled: true } },
    stroke: { width: 2 },
    tooltip: {
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
