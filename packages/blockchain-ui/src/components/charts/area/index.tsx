import merge from "lodash/merge";
import { FC, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import styled, { CSSProperties } from "styled-components";
import { createBasicChartOptions } from "blockchain-ui/utils";
import { useTheme } from "blockchain-ui/theme";
import { AreaData } from "./AreaData";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";

export interface AreaChartProps {
  title?: string;
  subtitle?: string;
  series: { color: keyof IBuiColor; name: string; data: number[] }[];
  labels: string[];
  tooltipStyle?: CSSProperties;
  hideTooltip?: boolean;
  showVerticalGridLine?: boolean;
  showHorizontalGridLine?: boolean;
  hideYAxisLabels?: boolean;
  hideXAxisLabels?: boolean;
  labelCount?: number;
  formatXAxis?: (val: string | number, timestamp?: string, opts?: {i: number}) => string | number;
  formatYAxis?: (val: string | number) => string | number;
  loading?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
}

const AreaChart: FC<AreaChartProps> = ({
  title,
  subtitle,
  series,
  labels,
  tooltipStyle = {},
  hideTooltip = false,
  showHorizontalGridLine = false,
  showVerticalGridLine = false,
  hideXAxisLabels = false,
  hideYAxisLabels = false,
  labelCount,
  formatXAxis,
  formatYAxis,
  loading = false,
  disabled = false,
  width = "100%",
  height = "400px",
}) => {
  const theme = useTheme();
  const chartOptions = useMemo(() => {
    return merge(createBasicChartOptions(theme.components.Chart.common), {
      chart: {
        fontFamily: theme.typography.common.fontFamily,
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        show: !hideXAxisLabels,
        categories: labels,
        tickPlacement: "between",
        tickAmount: labelCount,
        labels: {
          formatter: formatXAxis,

          // offsetX: ,
          rotate: 0,
          hideOverlappingLabels: true,

        },
        tooltip: {
          enabled: false,


        },

        // crosshairs: { show: true },
      },
      yaxis: {
        show: !hideYAxisLabels,
        labels: {
          formatter: formatYAxis,
        },
      },
      tooltip: {
        x: {show: true},
        

        

      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: showVerticalGridLine,
          },
          
        },
        yaxis: {
          lines: {
            show: showHorizontalGridLine,
          },
        },
      },
    } as ApexOptions);
  }, [theme.components.Chart, theme.palette.info.midtone, showHorizontalGridLine, showVerticalGridLine]);

  return (
    <Container>
      <ReactApexChart
        type="area"
        series={series.map((item) => {
          return {
            data: item.data,
            color: theme.palette.buiColors[item.color],
            name: item.name,
          };
        })}
        options={chartOptions}
        height={height}
        width={width}
      />
    </Container>
  );
};

export default AreaChart;

const Container = styled.div`
  color: #333;
`;

const Title = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
