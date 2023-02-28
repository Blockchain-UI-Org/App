import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Inline } from "blockchain-ui/components/layout";
import { withTheme } from "blockchain-ui/theme";
import { Paragraph } from "blockchain-ui/components/typography";

export const AlertVariants = ["standard", "outlined", "filled"] as const;
export type IAlertVariants = (typeof AlertVariants)[number];
export const AlertTypes = ["info", "success", "warning", "error"] as const;
export type IAlertTypes = (typeof AlertTypes)[number];

export interface AlertProps {
  message: ReactNode;
  type?: IAlertTypes;
  variant?: IAlertVariants;
  actionLabel?: ReactNode;
  onAction?: (e: React.MouseEvent) => void;
  dismissLabel?: ReactNode;
  onDismiss?: (e: React.MouseEvent) => void;
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

export const Alert: FC<AlertProps> = ({
  message,
  type = "info",
  variant = "standard",
  actionLabel ,
  dismissLabel,
  onAction,
  onDismiss,
}) => {
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
