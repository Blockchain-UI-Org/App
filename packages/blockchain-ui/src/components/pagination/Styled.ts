import Flex from "../flex";
import styled from "styled-components";
import { withTheme } from "theme";

interface PaginationProps {
  $disablePrev?: boolean;
  $disableNext?: boolean;
  $highlight?: boolean;
}

export const Pagination = styled(Flex)<PaginationProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  font-size: 15px;
  height: 10px;
  gap: 10px;

  .prevStep {
    display: flex;
    justify-content: center;
    border-radius: 3px;
    padding: 3px 10px;
    padding: 2px 8px;
    user-select: none;
    :hover {
      cursor: ${({ $disablePrev }: any) =>
        $disablePrev ? "not-allowed" : "pointer"};
      background-color: ${withTheme(({ $disablePrev, theme }) =>
        $disablePrev ? "inherit" : theme.palette.info.midtone
      )};
    }

    color: ${withTheme(({ $disablePrev, theme }) =>
      $disablePrev ? theme.palette.grey[700] : theme.palette.grey[200]
    )};

    border: ${withTheme(({ $disablePrev, theme }) =>
      $disablePrev
        ? "2px solid inherit"
        : `2px solid ${theme.palette.info.midtone}`
    )};
  }

  .nextStep {
    display: flex;
    justify-content: center;
    border-radius: 3px;
    padding: 2px 8px;
    user-select: none;
    :hover {
      cursor: ${({ $disableNext }: any) =>
        $disableNext ? "not-allowed" : "pointer"};
      background-color: ${withTheme(({ $disableNext, theme }) =>
        $disableNext ? "inherit" : theme.palette.info.midtone
      )};
    }

    color: ${withTheme(({ $disableNext, theme }) =>
      $disableNext ? theme.palette.grey[700] : theme.palette.grey[200]
    )};

    border: ${withTheme(({ $disableNext, theme }) =>
      $disableNext
        ? "2px solid inherit"
        : `2px solid ${theme.palette.info.midtone}`
    )};
  }
`;

interface PageButtonProps {
  $highlight?: boolean;
}

export const PageButton = styled(Flex)<PageButtonProps>`
  display: flex;
  justify-content: center;
  width: 30px;
  background-color: ${withTheme(({ $highlight, theme }) => ($highlight ? theme.palette.info.midtone : "inherit"))};
  border-radius: 3px;
  margin: 0;
`;
