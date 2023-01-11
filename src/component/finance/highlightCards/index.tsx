import React, { FC } from "react";
import styled from "styled-components";
import { withTheme, ThemeInterface } from "theme";
import { SparkLine } from "../../charts/sparkline";
import { CryptoSymbols } from "../../static/types";
import { CryptoIcon } from "../../icon/icon";
import { Icon as Iconify } from "@iconify/react";

export interface HighlightCardProps {
  width?: string;
  height?: string;
  color: keyof ThemeInterface["components"]["CreditCard"]["variants"];
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
    <Container $height={height} $width={width} $color={color}>
      <Details>
        <div className="title">{title}</div>
        <div className="amount">
          {currency && <CryptoIcon cryptoSymbol={currency} size="medium" />}
          <div style={{ marginLeft: "10px" }}>{amount}</div>
        </div>

        <div className="additionalDetails">
          {" "}
          <IconWrapperStyle
            $color={color}
            $positive={percent >= 0 ? "green" : "red"}
          >
            <Iconify
              width={14}
              height={14}
              icon={
                percent >= 0 ? "eva:trending-up-fill" : "eva:trending-down-fill"
              }
            />
          </IconWrapperStyle>
          <T1 $color={color}>
            {percent > 0 && "+"} {percent}%{""}
          </T1>
          <T2> in 24hrs</T2>
        </div>
      </Details>

      <SparkLine
        color={color === "default" ? "blue" : color}
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
  $color: keyof ThemeInterface["components"]["CreditCard"]["variants"];
}

const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${withTheme(({ $color, theme }) => theme.components.CreditCard.variants[$color].color)};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${withTheme(({ $color, theme }) => theme.components.CreditCard.variants[$color].background)};
  border-radius: 15px;
  padding: 25px;

  .title {
    font-size: 14px;
    color: ${withTheme(({ $color, theme }) => theme.components.CreditCard.variants[$color].color)};
  }
  .amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
  }

  .additionalDetails {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: ${withTheme(({ $color, theme }) => theme.components.CreditCard.variants[$color].midtone)};
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

interface WrapperStyleProps {
  $width?: string;
  $height?: string;
  $color: keyof ThemeInterface["components"]["CreditCard"]["variants"];
  $positive: "green" | "red";
}

const IconWrapperStyle = styled.div<WrapperStyleProps>`
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: ${withTheme(({ $color, $positive, theme }) =>
    $color === "default"
      ? theme.components.CreditCard.variants[$positive].highlightDark
      : theme.components.CreditCard.variants[$positive].background)};
  color: ${withTheme(({  $positive, theme }) => theme.components.CreditCard.variants[$positive].highlightLight)};
`;

interface T1Props {
  $color: string;
}
const T1 = styled.div<T1Props>`
  color: ${withTheme(({ $color, theme }) =>
    $color === "default" ? theme.colors.grey[100] : theme.colors.grey[700])};
`;

const T2 = styled.div`
  margin-left: 5px;
  color: ${withTheme(({ theme }) => theme.colors.grey[500])};
`;
