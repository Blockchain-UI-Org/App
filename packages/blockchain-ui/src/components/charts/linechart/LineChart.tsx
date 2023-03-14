import merge from "lodash/merge";
import { FC, Suspense, useMemo } from "react";
import { createBasicChartOptions, IChartLabelStyle } from "blockchain-ui/utils";
import { useTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";
import "./LineChart.css";
import { GraphIcon, LineChartIcon } from "blockchain-ui/components/static/images";
import { Flex } from "blockchain-ui/components/flex";
import LoadingSpinner from "blockchain-ui/components/loadingSpinner/loadingSpinner";
import { LoadableChart } from "blockchain-ui/components/LoadableChart";
import { Heading, Paragraph } from "blockchain-ui/components/typography";
import { SmallSelect } from "blockchain-ui/components/select";

export interface LineChartProps {
  // Y Axis Data
  series: { color: keyof IBuiColor; name: string; data: number[] }[];
  // X Axis
  labels: string[];
  //
  showVerticalGridLine?: boolean;
  showHorizontalGridLine?: boolean;

  gridLine?: "solid" | "dashed";
  // Grid Lines
  gridColor?: string;
  //
  hideYAxis?: boolean;
  //
  hideXAxis?: boolean;
  marker?: { size?: number; borderWidth?: number; color: string };
  hideXAxisBorder?: boolean;
  hideYAxisBorder?: boolean;

  labelCount?: number;

  labelFontStyle?: IChartLabelStyle;

  formatTooltip?: (val: string | number) => string | number;
  formatXAxis?: (val: string | number, timestamp?: string, opts?: { i: number }) => string | number;
  formatYAxis?: (val: string | number) => string | number;
  // Loading
  loading?: boolean;

  disabled?: boolean;
  title?: string;
  subtitle?: string;

  options?: string[];
  onSelect?: (val: string) => void;

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
  title,
  subtitle,
  onSelect,
  options,
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
    <Flex direction="column" style={{ height, width: width }}>
      {(title || subtitle) && (
        <Flex
          style={{ paddingRight: 20 }}
          row
          justifyContent={!(title || subtitle) && options ? "flex-end" : "space-between"}
        >
          <Flex data-testid="header">
            <Flex direction="column" style={{ paddingLeft: 20 }}>
              {title && <Heading as="h6">{title}</Heading>}
              {subtitle && <Paragraph variant="body2">{subtitle}</Paragraph>}
            </Flex>
          </Flex>
          {options && options.length > 0 && (
            <Flex data-testid="headerright">
              <Flex direction="column" style={{ paddingLeft: 20 }}>
                <SmallSelect onChange={onSelect} options={options} />
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
      {loading ? (
        <>
          <Flex
            data-testid="loader"
            style={{ width, height, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <LoadingSpinner color="primary500" />
          </Flex>
        </>
      ) : disabled ? (
        <LineChartIcon data-testid="disabled" height={height} width={width} />
      ) : (
        chartOptions && (
          <Suspense>
            <LoadableChart
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
          </Suspense>
        )
      )}
    </Flex>
  );
};

export default LineChart;
