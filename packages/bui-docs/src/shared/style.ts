import styled from "styled-components";
import { device } from "../theme/AppThemes/Theme";

export type FlexVariant = "center" | "flex-end" | "flex-start" | "space-between" | "space-around";

export const FlexContainer = styled.div<{
  gap?: number;
  justifyContent?: FlexVariant;
  alignItems?: FlexVariant;
  flexDirection?: "row" | "column";
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  gap: ${({ gap = 20 }) => `${gap}px`};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  height: 100%;
  flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "nowrap")};
`;

export const FieldsetHeadingWrapper = styled.div`
  /* margin-top: -40px;
  margin-left: 80px; */
  background-color: ${({ theme }) => theme.primary.background};
  width: fit-content;
  padding: 0px 20px;
  white-space: nowrap;
  @media ${device.tablet} {
    white-space: normal;
    text-align: center;
  }
`;

export const GradientLine = styled.div<{ width?: number }>`
  /* margin-top: 40px; */
  background: linear-gradient(90deg, #8bd6ff 0%, #9effff 50.31%, #d3bfff 100%);
  height: 2px;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  @media ${device.tablet} {
    display: none;
  }
`;
