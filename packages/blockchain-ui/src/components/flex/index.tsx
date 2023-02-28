
import { CSSProperties } from "react";
import styled, { css } from "styled-components";


type IFlexProps = {
  display?: CSSProperties["display"];
  direction?: CSSProperties["flexDirection"];
}
const FlexBasicProperties = css<IFlexProps>(props => {
  return {
    display: props.display,
    flexDirection: props.direction
  }
})

const Flex = styled.div`
  display: flex;
  ${FlexBasicProperties}
`;

export default Flex;
