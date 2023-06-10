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
  background: ${({ theme }) => theme.default.gradientAccent};
  height: 2px;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  @media ${device.tablet} {
    display: none;
  }
`;

export const GradientAccentText = styled.span`
  background: ${({ theme }) => theme.default.gradientAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const LayoutWrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.primary.background};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  min-height: 0px;
  min-width: 0px;
`;

export const ResponsiveGrid = styled.div<{marginTop?: boolean | string}>`
  display: grid;
  grid-gap: 3rem;
  margin-top: ${({marginTop}) => marginTop ? (marginTop === "string" ? marginTop : "3rem"): "0px"};
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  /* grid-template-columns: repeat(1, 1fr); */
  /* Screen larger than 600px? 2 column */
  /* @media (min-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  } */

  /* Screen larger than 900px? 3 columns */
  /* @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

