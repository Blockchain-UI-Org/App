import React, { FC } from "react";
import styled from "styled-components";
import { colors, ThemeColor } from "../../theme/colors";
import { SparkLine } from "../../charts/sparkline";
import { CryptoSymbols } from "../../static/types";
import { CryptoIcon } from "../../icon/icon";
import { Icon as Iconify } from "@iconify/react";

export interface HighlightCardProps {
  width?: string;
  height?: string;
  color: ThemeColor;
  chartData: number[];
  chartType: "bar" | "line";
  title?: string;
  amount?: string;
  currency?: CryptoSymbols;
  percent: number;
}

const HighlightCard: FC<HighlightCardProps> = ({
  width = "400px",
  height = "150px",
  color = "blue",
  chartType = "line",
  chartData = [],
  title,
  amount,
  currency,
  percent,
}) => {
  return (
    <Container $height={height} $width={width} $color={colors[color]}>
      <Details>
        <div className="title">{title}</div>
        <div className="amount">
          {currency && <CryptoIcon cryptoSymbol={currency} />}
          <div style={{ marginLeft: "10px" }}>{amount}</div>
        </div>

        <div className="additionalDetails">
          {" "}
          <IconWrapperStyle
            $color={percent >= 0 ? colors["green"] : colors["red"]}
          >
            <Iconify
              width={16}
              height={16}
              icon={
                percent >= 0 ? "eva:trending-up-fill" : "eva:trending-down-fill"
              }
            />
          </IconWrapperStyle>
          {percent > 0 && "+"} {percent}% in 24hrs
        </div>
      </Details>

      <SparkLine
        color={color}
        chartType={chartType}
        chartData={chartData}
        width="50%"
        height="50%"
      />
    </Container>
  );
};

export default HighlightCard;

interface CardProps {
  $width?: string;
  $height?: string;
  $color: Record<string, any>;
}

const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ $color }) => $color.color};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $color }) => $color.background};
  border-radius: 15px;
  padding: 25px;

  .title {
    font-size: 20px;
    color: ${({ $color }) => $color.color};
  }
  .amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
  }

  .additionalDetails {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: ${({ $color }) => $color.midtone};
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const IconWrapperStyle = styled.div<CardProps>`
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${({ $color }) => $color.background};
  color: ${({ $color }) => $color.color};
`;
