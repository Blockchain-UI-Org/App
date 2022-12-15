import { Flex, Text } from "theme-ui";
import styled from "styled-components";
import { theme } from "../theme";

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  padding: 12px;
`;

export const Header = styled(Flex)`
  align-items: center;
  flex-direction: row;
  min-height: 62px;
  width: 100%;
`;
interface ColumnTitleProps {
  $width: string;
}
export const ColumnTitle = styled(Flex)<ColumnTitleProps>`
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  width: ${({ $width }) => $width};
  color: ${theme.colors?.["grey500"]};
`;
export const Body = styled(Flex)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
`;

interface RowProps {
  $alternateColor: boolean;
}
export const Row = styled(Flex)<RowProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 62px;
  ${({ $alternateColor }) =>
    $alternateColor && `background-color: rgba(255, 255, 255, 0.05)`};

  .rowNumber {
    margin-right: 25px;
    margin-left: 5px;
    color: ${theme.colors?.["grey500"]};
  }
`;

interface CellProps {
  $width: string;
}
export const Cell = styled(Flex)<CellProps>`
  align-items: center;
  width: ${({ $width }) => $width};
  padding: 0px 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
