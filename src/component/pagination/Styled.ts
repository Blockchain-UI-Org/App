import { Flex, Text } from "theme-ui";
import styled from "@emotion/styled";
import { theme } from "../theme";

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
      background-color: ${({ $disablePrev }: any) =>
        $disablePrev ? "inherit" : "#0091ff"};
    }

    color: ${({ $disablePrev }: any) =>
      $disablePrev ? theme?.colors?.["grey700"] : theme?.colors?.["grey200"]};

    border: ${({ $disablePrev }: any) =>
      $disablePrev ? "2px solid inherit" : "2px solid #0091ff"};
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
      background-color: ${({ $disableNext }: any) =>
        $disableNext ? "inherit" : "#0091ff"};
    }

    color: ${({ $disableNext }: any) =>
      $disableNext ? theme?.colors["grey700"] : theme?.colors["grey200"]};

    border: ${({ $disableNext }: any) =>
      $disableNext ? "2px solid inherit" : "2px solid #0091ff"};
  }
`;

interface PageButtonProps {
  $highlight?: boolean;
}

export const PageButton = styled(Flex)<PageButtonProps>`
  display: flex;
  justify-content: center;
  width: 30px;
  background-color: ${({ $highlight }: any) =>
    $highlight ? "#0091ff" : "inherit"};
  border-radius: 3px;
  margin: 0;
`;
