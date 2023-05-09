import styled from "styled-components";

export type FlexVariant = "center" | "flex-end" | "flex-start" | "space-between" | "space-around";

export const FlexContainer = styled.div<{
  gap?: number;
  justifyContent?: FlexVariant;
  alignItems?: FlexVariant;
  flexDirection?: "row" | "column";
}>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  gap: ${({ gap = 20 }) => `${gap}px`};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  width: 100%;
  height: 100%;
`;

export const FieldsetHeadingWrapper = styled.div`
  margin-top: -40px;
  margin-left: 80px;
  background-color: ${({ theme }) => theme.primary.background};
  width: fit-content;
  padding: 0px 20px;
`;

export const GradientLine = styled.div`
  margin-top: 40px;
  background: linear-gradient(90deg, #8bd6ff 0%, #9effff 50.31%, #d3bfff 100%);
  height: 2px;
  width: 100%;
`;
