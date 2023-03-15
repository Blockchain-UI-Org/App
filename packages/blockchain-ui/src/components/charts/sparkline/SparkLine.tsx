import { FC, Suspense } from "react";
import styled, { css } from "styled-components";
import { useTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";
import { LoadableChart } from "blockchain-ui/components/LoadableChart";


export interface SparkLineProps {
  chartData: number[];
  width?: number | string;
  height?: number | string;
  color?: keyof IBuiColor;
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

  color = "info500",
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
    <Container width={width} height={height}>
      <Suspense>
        <LoadableChart
          type={chartType}
          series={[{ data: chartData }]}
          options={chartOptions}
          width={width}
          height={height}
        />
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  ${({ width, height }: { width: number | string; height: number | string }) => {
    return css({ width, height });
  }}
`;
