import merge from "lodash/merge";
import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled, { css } from "styled-components";
import { useTheme } from "blockchain-ui/theme";
import { createBasicChartOptions, IChartLabelStyle } from "blockchain-ui/utils";

import LoadingSpinner from "blockchain-ui/components/loadingSpinner/loadingSpinner";
import { Flex } from "blockchain-ui/components/flex";
import { IBuiColor } from "blockchain-ui/theme/colors";
import type { ApexOptions } from "apexcharts";
import moment from "moment";
import { Heading, Paragraph } from "blockchain-ui/components/typography";
import { SmallSelect } from "blockchain-ui/components/select";
import { DisabledCandleChart } from "./DisabledCandleChart";

export interface ChartProps {
  title?: string;
  subtitle?: string;

  filterOptions?: string[];
  onSelect?: (val: string) => void;
  series: {x: Date, y: number[]}[];
  width?: string;
  height?: string;
  loading?: boolean;
  upwardsColor: keyof IBuiColor;
  downwardsColor: keyof IBuiColor;

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
  
  labelCount?: number;
  labelFontStyle?: IChartLabelStyle;
  


}

const CandleChart: FC<ChartProps> = ({
  width = "100%",
  height = "100%",
  series,
  title,
  subtitle,
  onSelect,
  filterOptions,
  loading,
  upwardsColor,
  downwardsColor,


  showHorizontalGridLine,
  showVerticalGridLine,
  gridLine,
  hideXAxis,
  disabled,
  formatXAxis,
  formatYAxis,
  gridColor,
  hideXAxisBorder,
  hideYAxis,
  hideYAxisBorder,
  labelCount,
  labelFontStyle
}) => {
  const theme = useTheme();

  const upColor = theme.palette.buiColors[upwardsColor];
  const downColor = theme.palette.buiColors[downwardsColor];

  const chartOptions = merge(
    createBasicChartOptions(theme.components.Chart.common, {
      fontFamily: theme.typography.common.fontFamily,
      showHorizontalGridLine,
      showVerticalGridLine,
      gridLine,
      hideXAxis,
      formatXAxis,
      formatYAxis,
      gridColor,
      hideXAxisBorder,
      hideYAxis,
      hideYAxisBorder,
      labelCount,
      labelFontStyle
    }),
    {
      xaxis: {
        type: "category",
        labels: {
          formatter: function (val) {
            return moment(val).format("MMM DD HH:mm");
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      plotOptions: {
        candlestick: {
          // wick: {useFillColor: true},
          colors: {
            upward: upColor,
            downward: downColor,
          },
        },
      },
    } as ApexOptions
  );

  return (
    <Container width={width} height={height}>
       {(title || subtitle) && (
        <Flex
          style={{ paddingRight: 20 }}
          row
          justifyContent={!(title || subtitle) && filterOptions ? "flex-end" : "space-between"}
        >
          <Flex >
            <Flex direction="column" style={{ paddingLeft: 20 }}>
              {title && <Heading data-testid="title" as="h6">{title}</Heading>}
              {subtitle && <Paragraph data-testid="subtitle" variant="body2">{subtitle}</Paragraph>}
            </Flex>
          </Flex>
          {filterOptions && filterOptions.length > 0 && (
            <Flex >
              <Flex direction="column" style={{ paddingLeft: 20 }}>
                <SmallSelect data-testid="filter" onChange={onSelect} options={filterOptions} />
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
      {loading ? (
        <>
          <Flex style={{ width, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LoadingSpinner data-testid="loader" color="primary500" />
          </Flex>
        </>
      ) : disabled ? <DisabledCandleChart data-testid="disabled" /> :(
        <ReactApexChart type="candlestick" series={[{data: series, name: "candle"}]} options={chartOptions} height={height} width={width} />
      )}
    </Container>
  );
};

export default CandleChart;

const Container = styled.div`
  ${({ width, height }: { width: number | string; height: number | string }) => {
    return css({ width, height });
  }}
`;
