import { ApexOptions } from "apexcharts";
import { Flex } from "blockchain-ui/components/flex";
import { LoadableChart } from "blockchain-ui/components/LoadableChart";
import { useTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { formatNumber } from "blockchain-ui/utils";
import { FC, Suspense } from "react";
import styled from "styled-components";

export interface PieChartProps {
  chartData: {
    label: string;
    color: keyof IBuiColor;
    value: number;
  }[];
  type?: "donut" | "pie";

  donutwidth?: string;
  expandOnClick?: boolean;
  legendPosition?: "top" | "bottom";
  disableHover?: boolean;
  hideLegend?: boolean;
  diameter: string;
  centerElement?: React.ReactElement;
}

const PieChart: FC<PieChartProps> = ({
  diameter,
  chartData,
  disableHover,
  type = "pie",
  legendPosition = "top",
  expandOnClick = false,
  donutwidth = "90%",
  hideLegend = false,
  centerElement,
}) => {
  const theme = useTheme();
  const chartLabels = chartData.map((i) => i?.label);
  const chartSeries = chartData.map((i) => i?.value);
  const chartColors = chartData.map((item) => theme.palette.buiColors[item.color]);

  const options: ApexOptions = {
    labels: chartLabels,
    stroke: {
      colors: chartColors,
    },

    // Datalabels
    dataLabels: { enabled: false },
    ...(disableHover && {
      states: {
        hover: { filter: { type: type, value: 1 } },
      },
    }),
    legend: {
      show: !hideLegend,
      position: legendPosition,
      horizontalAlign: "center",
    },
    colors: chartColors,
    plotOptions: {
      pie: {
        expandOnClick: expandOnClick,
        ...{
          donut: {
            size: type === "donut" ? donutwidth : "0%",
            labels: {
              show: false,
              value: {
                formatter: (val: number | string) => formatNumber(val as number),
              },
              total: {
                formatter: (w: { globals: { seriesTotals: number[] } }) => {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return formatNumber(sum);
                },
              },
            },
          },
        },
      },
    },
  };

  return (
    <Container style={{ width: diameter }}>
      {type === "donut" && centerElement && (
        <Flex
          direction="column"
          alignItems={"center"}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          {centerElement}
        </Flex>
      )}
      <Suspense>
        <LoadableChart type={type} series={chartSeries} options={options} height={diameter} />
      </Suspense>
    </Container>
  );
};

export default PieChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
