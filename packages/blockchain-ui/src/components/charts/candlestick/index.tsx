import merge from "lodash/merge";
import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { useTheme } from "blockchain-ui/theme";
import { createBasicChartOptions } from "blockchain-ui/utils";

import { CryptoIcon } from "../../icon/icon";
import { CryptoSymbols } from "../../static/types";
import LoadingSpinner from "blockchain-ui/components/loadingSpinner/loadingSpinner";
import { Flex } from "blockchain-ui/components/flex";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { ApexOptions } from "apexcharts";

export interface ChartProps {
  title?: string;
  subtitle?: string;
  chartData: any[];
  width?: string;
  height?: string;
  header?: React.ReactElement;
  loading?: boolean;
  headerRight?: React.ReactElement;
  upwardsColor: keyof IBuiColor;
  downwardsColor: keyof IBuiColor;
}

const CandleChart: FC<ChartProps> = ({
  width = "100%",
  height = "100%",
  chartData,
  header,
  loading,
  headerRight,
  upwardsColor,
  downwardsColor,
}) => {
  const theme = useTheme();


  const upColor = theme.palette.buiColors[upwardsColor];
  const downColor = theme.palette.buiColors[downwardsColor];

  const chartOptions = merge(createBasicChartOptions(theme.components.Chart.common), {
  
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: upColor,
          downward: downColor,
        },
      },
    },
  } as ApexOptions);

  return (
    <Container>
      {(header || headerRight) && (
        <Flex style={{ paddingRight: 20 }} row justifyContent={!header && headerRight ? "flex-end" : "space-between"}>
          {header && <Flex>{header}</Flex>}
          {headerRight && <Flex>{headerRight}</Flex>}
        </Flex>
      )}
      {loading ? (
        <>
          <Flex style={{ width, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LoadingSpinner color="primary500" />
          </Flex>
        </>
      ) : (
        <ReactApexChart type="candlestick" series={chartData} options={chartOptions} height={height} width={width} />
      )}
    </Container>
  );
};

export default CandleChart;

const Container = styled.div`
  color: white;
`;

