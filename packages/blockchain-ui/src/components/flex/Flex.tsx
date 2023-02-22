import { CSSProperties } from "react";
import styled, { css } from "styled-components";

type IFlexProps = {
  display?: CSSProperties["display"];
  direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  inline?: boolean;
  row ?: boolean;
  flex?: CSSProperties["flex"];
  flexWrap?: CSSProperties["flexWrap"]
};
const FlexBasicProperties = css<IFlexProps>((props) => {
  return {
    display: props.inline ? "inline-flex" : props.display,
    flexDirection: props.direction,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    flex: props.flex,
    flexWrap: props.flexWrap
  };
});

export const Flex = styled.div`
  display: flex;
  ${FlexBasicProperties}
`;