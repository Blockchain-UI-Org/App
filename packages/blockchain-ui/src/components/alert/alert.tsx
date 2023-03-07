import React, { FC, ReactNode, SVGProps } from "react";
import styled, { css } from "styled-components";
import { withTheme } from "blockchain-ui/theme";
import { Paragraph } from "blockchain-ui/components/typography";

import { Flex } from "../flex";
import { Button } from "../button";
import { alpha } from "blockchain-ui/utils";
import { InfoIcon, SuccessIcon, WarningIcon } from "../static/images/icons/regular";

export const AlertVariants = ["standard", "outlined", "filled"] as const;
export type IAlertVariants = (typeof AlertVariants)[number];
export const AlertStatuses = ["info", "success", "warning", "error"] as const;
export type IAlertStatus = (typeof AlertStatuses)[number];

export interface AlertProps {
  message: ReactNode;
  status?: IAlertStatus;
  variant?: IAlertVariants;
  actionLabel?: string;
  onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dismissLabel?: string;
  onDismiss?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Container = styled(Flex)<{ variant: IAlertVariants; status: IAlertStatus }>`
  border-radius: 8px;
  padding: 10px 8px;
  min-height: 50px;

  ${withTheme(({ theme, variant, status }) => {
    const variantCss = theme.components.BuiAlert.variants[variant].styles({ status });

    const componentCss = css({
      backgroundColor: variantCss.bg,
      color: variantCss.foreground,
      border: variantCss.border,
    });

    const svgCss = css({
      color: variantCss.iconbg,
    });

    return css`
      ${componentCss}

      svg {
        ${svgCss}
      }
    `;
  })}
`;

const IconWrapper = styled(Flex)`
  padding: 5px 10px;
  padding-right: 15px;
`;
const ParagraphWrapper = styled(Paragraph)`
  padding: 4px 0;
  padding-right: 12px;
`;

const StatusIconMap: { [x in IAlertStatus]: React.FC<SVGProps<SVGSVGElement>> } = {
  error: InfoIcon,
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
};

export const Alert: FC<AlertProps> = ({
  message,
  status = "info",
  variant = "standard",
  actionLabel,
  dismissLabel,
  onAction = () => {},
  onDismiss = () => {},
}) => {
  const Icon = StatusIconMap[status];

  return (
    <Container variant={variant} status={status}>
      <IconWrapper alignItems={"flex-start"} justifyContent="center">
        <Icon />
      </IconWrapper>
      <Flex flex={1}>
        <ParagraphWrapper role={"message"} noMargin variant="body2">
          {message}
        </ParagraphWrapper>
      </Flex>
      {(actionLabel || dismissLabel) && (
        <Flex flexWrap="wrap" alignItems={"flex-start"}>
          {actionLabel && (
            <Button
              size="small"
              data-testid="action-button"
              variant={variant === "outlined" ? "soft" : "contained"}
              backgroundColor={variant === "filled" ? "#fff" : undefined}
              hoverBackgroundColor={variant === "filled" ? "#fff" : undefined}
              textColor={variant === "filled" ? "#333" : undefined}
              color={status}
              marginRight={10}
              label={actionLabel}
              onClick={onAction}
            />
          )}
          {dismissLabel && (
            <Button
              size="small"
              data-testid="dismiss-button"
              color={status}
              borderColor={variant === "filled" ? "currentColor" : undefined}
              textColor={variant === "filled" ? "currentColor" : undefined}
              hoverBorderColor={variant === "filled" ? "currentColor" : undefined}
              hoverBackgroundColor={variant === "filled" ? alpha("#fff", 0.3) : undefined}
              variant="outlined"
              label={dismissLabel}
              onClick={onDismiss}
            />
          )}
        </Flex>
      )}
    </Container>
  );
};
