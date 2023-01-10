import React, { FC } from "react";
import styled from "styled-components";
import { t, ThemeInterface } from "theme";
import { colors } from "theme/colors";

export interface CircleBarProps {
  showValue?: boolean;
  title: string;
  themeColor?: keyof ThemeInterface["components"]["ProgressBar"]["variants"];
  percent: number;
}

export const CircleProgressBar: FC<CircleBarProps> = ({
  themeColor = "default",
  percent = 0,
}) => {
  return (
    <CircleProgressBarBase $colorMode={themeColor} $percent={100 - percent}>
      <svg
        className="circleContainer"
        viewBox="2 -2 28 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circleContainerBackground"
          r="16"
          cx="16"
          cy="16"
        ></circle>
        <circle className="circleOffset" r="16" cx="16" cy="16"></circle>
      </svg>
      <Percent>{percent}%</Percent>
    </CircleProgressBarBase>
  );
};

export default colors;

interface CircleBarBaseProps {
  showValue?: boolean;
  $percent: number;
  $colorMode: keyof ThemeInterface["components"]["ProgressBar"]["variants"];
}

const Percent = styled.div`
  position: fixed;
  top: 15%;
  left: 5%;
  color: white;
  font-size: 20px;
  z-index: 1;
`;

export const CircleProgressBarBase = styled.div<CircleBarBaseProps>`
  position: relative;
  width: inherit;
  height: inherit;

  .circleContainer {
    --dot-diameter: 100%;
    --circle-border-width: 4px;
    --default-color: #545454;
    --completion-color: ${t(
      ({ $colorMode, theme }) =>
        theme.components.ProgressBar.variants[$colorMode].midtone
    )};
    width: var(--dot-diameter);
    height: var(--dot-diameter);
    transform: rotate(-90deg);
  }
  .circleContainerBackground {
    fill: none;
    stroke: var(--default-color);
    stroke-width: var(--circle-border-width);
  }
  .circleOffset {
    fill: none;
    stroke-linecap: round;
    stroke: var(--completion-color);
    stroke-dasharray: 100 100;
    stroke-linecap: round;
    stroke-width: var(--circle-border-width);
    stroke-dashoffset: ${({ $percent }) => $percent};
  }
`;
