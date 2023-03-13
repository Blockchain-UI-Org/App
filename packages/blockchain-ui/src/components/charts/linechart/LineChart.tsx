import merge from "lodash/merge";
import { FC, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import styled, { CSSProperties } from "styled-components";
import { createBasicChartOptions, IChartLabelStyle } from "blockchain-ui/utils";
import { useTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";
import "./LineChart.css";
import { GraphIcon, LineChartIcon } from "blockchain-ui/components/static/images";
import { Flex } from "blockchain-ui/components/flex";
import LoadingSpinner from "blockchain-ui/components/loadingSpinner/loadingSpinner";

export interface LineChartProps {

  series: { color: keyof IBuiColor; name: string; data: number[] }[];
  labels: string[];
  showVerticalGridLine?: boolean;
  showHorizontalGridLine?: boolean;
  gridLine?: "solid" | "dashed";
  gridColor?: string;
  hideYAxis?: boolean;
  hideXAxis?: boolean;
  marker?: { size?: number; borderWidth?: number };
  hideXAxisBorder?: boolean;
  hideYAxisBorder?: boolean;
  labelCount?: number;
  labelFontStyle?: IChartLabelStyle;
  formatTooltip?: (val: string | number) => string | number;
  formatXAxis?: (val: string | number, timestamp?: string, opts?: { i: number }) => string | number;
  formatYAxis?: (val: string | number) => string | number;
  loading?: boolean;
  disabled?: boolean;
  header?: React.ReactElement;
  headerRight?: React.ReactElement;
  width?: string;
  height?: string;
}

const DefaultLabelStyles: IChartLabelStyle = { color: "#919EAB" };

const LineChart: FC<LineChartProps> = ({
  series,
  labels,
  showHorizontalGridLine = false,
  showVerticalGridLine = false,
  gridLine = "solid",
  header,
  headerRight,
  gridColor = "#919EAB3D",
  hideXAxis = false,
  hideYAxis = false,
  marker = {},
  hideXAxisBorder = false,
  hideYAxisBorder = false,
  labelFontStyle = DefaultLabelStyles,
  formatTooltip,
  labelCount,
  formatXAxis,
  formatYAxis,
  loading = false,
  disabled = false,

  width = "100%",
  height = "400px",
}) => {
  const theme = useTheme();
  const { size = 6, borderWidth = 0 } = marker;
  const { color = DefaultLabelStyles.color } = labelFontStyle;
  const chartOptions = useMemo(() => {
    if (disabled || loading) {
      return null;
    }
    return merge(
      createBasicChartOptions(theme.components.Chart.common, {
        hideXAxisBorder,
        hideYAxisBorder,

        labelFontStyle: { color },
        formatTooltip,
        labelCount,
        formatXAxis,
        formatYAxis,

        marker: { size, borderWidth },
        fontFamily: theme.typography.common.fontFamily,
        gridColor,
        hideXAxis,
        hideYAxis,
        gridLine,
        showHorizontalGridLine,
        showVerticalGridLine,
      }),
      {
        xaxis: {
          categories: labels,
        },
      } as ApexOptions
    );
  }, [disabled, theme.components.Chart, theme.palette.info.midtone, showHorizontalGridLine, showVerticalGridLine]);

  return (
    <Flex style={{ height, width: width }}>
      {(header || headerRight) && (
        <Flex style={{ paddingRight: 20 }} row justifyContent={!header && headerRight ? "flex-end" : "space-between"}>
          {header && <Flex data-testid="header">{header}</Flex>}
          {headerRight && <Flex data-testid="headerright">{headerRight}</Flex>}
        </Flex>
      )}
      {loading ? (
        <>
          <Flex data-testid="loader" style={{ width, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LoadingSpinner color="primary500" />
          </Flex>
        </>
      ) : disabled ? (
        <LineChartIcon data-testid="disabled" height={height} width={width} />
      ) : (
        chartOptions && (
          <>
            <ReactApexChart
              data-testid="apex-chart"
              type="line"
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
          </>
        )
      )}
    </Flex>
  );
};

export default LineChart;




