import { withTheme } from "blockchain-ui/theme";
import styled, { css } from "styled-components";

export const Card = styled("div")`
  /* Adding background color of theme..  */
  ${withTheme(({ theme }) => {
    const backgroundColor = theme.palette.background.main;
    const color = theme.palette.text.primary;
    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `;
  })}
  border-radius: 8px;
  padding: 10px;
  min-height: 50px;
`;
