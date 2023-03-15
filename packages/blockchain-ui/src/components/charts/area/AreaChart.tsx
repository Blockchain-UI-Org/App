import merge from "lodash/merge";
import { FC, Suspense, useMemo } from "react";
import styled, { css } from "styled-components";
import { createBasicChartOptions, IChartLabelStyle } from "blockchain-ui/utils";
import { useTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";
import "./AreaChart.css";
import { GraphIcon } from "blockchain-ui/components/static/images";
import { Flex } from "blockchain-ui/components/flex";
import LoadingSpinner from "blockchain-ui/components/loadingSpinner/loadingSpinner";
import { LoadableChart } from "blockchain-ui/components/LoadableChart";
import { Heading, Paragraph } from "blockchain-ui/components/typography";
import { SmallSelect } from "blockchain-ui/components/select";

export interface AreaChartProps {
  series: { color: keyof IBuiColor; name: string; data: number[] }[];
  labels: string[];
  showVerticalGridLine?: boolean;
  showHorizontalGridLine?: boolean;
  gridLine?: "solid" | "dashed";
  hideXAxisBorder?: boolean;
  hideYAxisBorder?: boolean;
  hideYAxis?: boolean;
  hideXAxis?: boolean;
  gridColor?: string;
  formatXAxis?: (val: string | number, timestamp?: string, opts?: { i: number }) => string | number;
  formatYAxis?: (val: string | number) => string | number;
  disabled?: boolean;
  loading?: boolean;
  labelCount?: number;
  labelFontStyle?: IChartLabelStyle;
  
  marker?: { size?: number; borderWidth?: number };



  hideCurveStroke?: boolean;
  
  opacityFrom?: number;
  opacityTo?: number;
  formatTooltip?: (val: string | number) => string | number;
  



  title?: string;
  subtitle?: string;

  filterOptions?: string[];
  onSelect?: (val: string) => void;

  width?: string;
  height?: string;
}

const DefaultLabelStyles: IChartLabelStyle = { color: "#919EAB" };

const AreaChart: FC<AreaChartProps> = ({
  series,
  labels,
  showHorizontalGridLine = false,
  showVerticalGridLine = false,
  gridLine = "solid",
  title,
  subtitle,
  onSelect,
  filterOptions,
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

  hideCurveStroke = false,
  opacityFrom = 0.6,
  opacityTo = 0.16,
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
        hideCurveStroke,
        labelFontStyle: { color },
        formatTooltip,
        labelCount,
        formatXAxis,
        formatYAxis,
        opacityFrom,
        opacityTo,
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
    <Container width={width} height={height}>
      {(title || subtitle) && (
        <Flex
          style={{ paddingRight: 20 }}
          row
          justifyContent={!(title || subtitle) && filterOptions ? "flex-end" : "space-between"}
        >
          <Flex>
            <Flex direction="column" style={{ paddingLeft: 20 }}>
              {title && (
                <Heading data-testid="title" as="h6">
                  {title}
                </Heading>
              )}
              {subtitle && (
                <Paragraph data-testid="subtitle" variant="body2">
                  {subtitle}
                </Paragraph>
              )}
            </Flex>
          </Flex>
          {filterOptions && filterOptions.length > 0 && (
            <Flex>
              <Flex direction="column" style={{ paddingLeft: 20 }}>
                <SmallSelect data-testid="filter" onChange={onSelect} options={filterOptions} />
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
      {loading ? (
        <>
          <Flex
            data-testid={"loader"}
            style={{ width, height, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <LoadingSpinner color="primary500" />
          </Flex>
        </>
      ) : disabled ? (
        <GraphIcon data-testid={"disabled"} height={height} width={width} />
      ) : (
        chartOptions && (
          <>
            <Suspense >
              <LoadableChart
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
            </Suspense>
          </>
        )
      )}
    </Container>
  );
};

export default AreaChart;

const Container = styled.div`
  ${({ width, height }: { width: number | string; height: number | string }) => {
    return css({ width, height });
  }}
`;
