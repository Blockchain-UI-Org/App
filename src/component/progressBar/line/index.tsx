import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";
import { withTheme, ThemeInterface } from "theme";

import { formatNumber } from "../../../utils/format";

export interface ProgressBarProps {
  minValue: number;
  maxValue: number;
  value?: number;
  showValue?: boolean;
  errorMessage?: string | ReactElement;
  title: string;
  themeColor?:
    | keyof ThemeInterface["components"]["ProgressBar"]["variants"]
    | "gradient";
  $percent?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface SliderProps {
  $colorMode:
    | keyof ThemeInterface["components"]["ProgressBar"]["variants"]
    | "gradient";
}

const Wrapper = styled.div<SliderProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  align-content: center;

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 24px;
    ${withTheme(({ theme, $colorMode }) =>
      $colorMode === "gradient"
        ? css`
            background: linear-gradient(
              90deg,
              ${theme.colors.secondary.color} 0%,
              ${theme.colors.warning.color} 50%,
              ${theme.colors.success.color} 100%
            );
          `
        : css`
            background: ${theme.components.ProgressBar.variants[$colorMode]
              .midtone};
          `
    )};

    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${withTheme(({ theme }) => theme.colors.common.white)};
    cursor: pointer;
    border: 2px solid ${withTheme(({ theme }) => theme.colors.success.color)};
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${withTheme(({ theme }) => theme.colors.success.color)};
    cursor: pointer;
  }
`;
const StyledValue = styled.div`
  padding-right: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${withTheme(({ theme }) => theme.colors.common.black)};
`;

const ErrorMessage = styled.div`
  width: 416px;
  height: 80px;
  color: ${withTheme(({ theme }) => theme.colors.error.color)};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px;
  margin-top: 28px;
  /* Error/Error 100 */

  background: ${withTheme(({ theme }) => theme.colors.error.bg)};
  border-radius: 8px;

  a {
    color: ${withTheme(({ theme }) => theme.colors.info.midtone)};
  }
`;

const ProgressBar: FC<ProgressBarProps> = ({
  minValue,
  maxValue,
  value,
  showValue = false,
  errorMessage,
  title,
  themeColor = "gradient",
}) => (
  <Container>
    <Wrapper $colorMode={themeColor}>
      {showValue && value && (
        <StyledValue data-testid="gradient-progress-bar-value">
          {value > maxValue ? `${maxValue}+` : formatNumber(value, 2)}
        </StyledValue>
      )}

      <input
        step="1"
        type="range"
        min={minValue}
        max={maxValue}
        value={value && value}
        className="slider"
        id="myRange"
        title={title}
        data-testid="gradient-progress-bar"
      />
    </Wrapper>
    {errorMessage && (
      <ErrorMessage data-testid="gradient-progress-bar-error-msg">
        {errorMessage}
      </ErrorMessage>
    )}
  </Container>
);

export default ProgressBar;
