import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Inline, Stack } from "blockchain-ui/components/layout";
import { withTheme } from "blockchain-ui/theme";
import { Paragraph } from "blockchain-ui/components/typography";

export interface AlertProps {
  message: ReactNode;
  type?: "info" | "error";
}

const Container = styled(Inline)`
  border-radius: 8px;
  &.info {
    background-color: ${withTheme(({ theme }) => theme.palette.info.bg)};
    color: ${withTheme(({ theme }) => theme.palette.info.color)};
  }
  &.error {
    background-color: ${withTheme(({ theme }) => theme.palette.error.bg)};
    color: ${withTheme(({ theme }) => theme.palette.error.color)};
  }
`;

export const Alert: FC<AlertProps> = ({ message, type = "info" }) => {
  return (
    <Container gap="1rem" inset="1rem" className={type}>
      {type === "info" ? <Icon name="alertWarningThinBlack" /> : <Icon name="alertWarningThinRed" />}
      <Paragraph noMargin variant="body1">
        {message}
      </Paragraph>
    </Container>
  );
};

export default Alert;
