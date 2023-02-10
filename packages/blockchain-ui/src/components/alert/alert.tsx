import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Inline, Stack } from "components/layout";
import { withTheme } from "theme";
import { Paragraph } from "components/typography";

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
      <Stack gap="0.5rem">
        <Paragraph variant="body1">{message}</Paragraph>
      </Stack>
    </Container>
  );
};

export default Alert;
