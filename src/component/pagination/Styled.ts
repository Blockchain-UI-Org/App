import Flex from "../flex";
import styled from "styled-components";
import { t } from "theme";

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
      background-color: ${t(({ $disablePrev, theme }) =>
        $disablePrev ? "inherit" : theme.colors.info.midtone
      )};
    }

    color: ${t(({ $disablePrev, theme }) =>
      $disablePrev ? theme.colors.grey[700] : theme.colors.grey[200]
    )};

    border: ${t(({ $disablePrev, theme }) =>
      $disablePrev
        ? "2px solid inherit"
        : `2px solid ${theme.colors.info.midtone}`
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
      background-color: ${t(({ $disableNext, theme }) =>
        $disableNext ? "inherit" : theme.colors.info.midtone
      )};
    }

    color: ${t(({ $disableNext, theme }) =>
      $disableNext ? theme.colors.grey[700] : theme.colors.grey[200]
    )};

    border: ${t(({ $disableNext, theme }) =>
      $disableNext
        ? "2px solid inherit"
        : `2px solid ${theme.colors.info.midtone}`
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
  background-color: ${t(({ $highlight, theme }) => ($highlight ? theme.colors.info.midtone : "inherit"))};
  border-radius: 3px;
  margin: 0;
`;
