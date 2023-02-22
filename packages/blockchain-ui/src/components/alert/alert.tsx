import React, { FC, ReactNode, SVGProps } from "react";
import styled, { css } from "styled-components";
import { withTheme } from "blockchain-ui/theme";
import { Paragraph } from "blockchain-ui/components/typography";
import { InfoIcon, SuccessIcon, WarningIcon } from "./icons";
import Flex from "../flex";

export const AlertVariants = ["standard", "outlined", "filled"] as const;
export type IAlertVariants = (typeof AlertVariants)[number];
export const AlertStatuses = ["info", "success", "warning", "error"] as const;
export type IAlertStatus = (typeof AlertStatuses)[number];

export interface AlertProps {
  message: ReactNode;
  status?: IAlertStatus;
  variant?: IAlertVariants;
  actionLabel?: ReactNode;
  onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dismissLabel?: ReactNode;
  onDismiss?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton = styled.button`
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 700;
  &:not(:last-of-type){
    margin-right: 10px;
  }
  outline: 0;
  border-width: 0;
  cursor: pointer;
  line-height: 22px;
`;

const Container = styled(Flex)<{ variant: IAlertVariants; status: IAlertStatus }>`
  border-radius: 8px;
  padding: 10px 8px;
  min-height: 50px;

  ${withTheme(({ theme, variant, status }) => {
    const variantCss = theme.components.BuiAlert.variants[variant].styles({ status });

    const dissmissBtnCss = css({
      border: variantCss.dismissBorder,
      backgroundColor: variantCss.dismissBg,
      color: variantCss.dissmissForeground,
    });

    const actionButtonCss = css({
      backgroundColor: variantCss.actionButtonBg,
      color: variantCss.actionForeground,
    });
    const componentCss = css({
      backgroundColor: variantCss.bg,
      color: variantCss.foreground,
      border: variantCss.border,
    });

    const svgCss = css({
      marginRight: 12,
      marginLeft: 10,
      color: variantCss.iconbg,
    });

    return css`
      ${componentCss}
      .bui-dismiss {
        ${dissmissBtnCss}
      }
      .bui-action {
        ${actionButtonCss}
      }
      svg {
        ${svgCss}
      }
    `;
  })}
`;

const IconWrapper = styled(Flex)`
  padding: 4px 0;
`;
const ParagraphWrapper = styled(Paragraph)`
  padding: 3px 0;
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
        <ParagraphWrapper noMargin variant="body2">
          {message}
        </ParagraphWrapper>
      </Flex>
      {(actionLabel || dismissLabel) && (
        <Flex>
          {actionLabel && (
            <ActionButton className="bui-action" onClick={onAction}>
              {actionLabel}
            </ActionButton>
          )}
          {dismissLabel && (
            <ActionButton className="bui-dismiss" onClick={onDismiss}>
              {dismissLabel}
            </ActionButton>
          )}
        </Flex>
      )}
    </Container>
  );
};

export default Alert;
