import { CSSProperties, FC, FunctionComponent, SVGProps } from "react";
import styled, { css } from "styled-components";
import { useTheme, withTheme } from "blockchain-ui/theme";
import { Close, InfoIcon, SuccessIcon, WarningIcon } from "../static/images/icons/regular";
import { alpha } from "blockchain-ui/utils";
import { Flex } from "../flex";
import { Button } from "../button";
import { Subtitle } from "../typography";
import { createPortal } from "react-dom";
import { INotificationStyles } from "blockchain-ui/theme/components";

export const NotificationTypes = ["info", "warning", "success", "error"] as const;
export type INotificationType = (typeof NotificationTypes)[number];

export interface INotificationProps {
  message: string;
  opacity?: number;
  invert?: boolean;
  default?: boolean;

  rootStyle?: CSSProperties;
  usePortal?: boolean;
  // Optional Override
  icon?: React.ReactElement;
  type: INotificationType;
  actionLabel?: string;
  onClose?: () => void;
  onAction?: () => void;
  cancelLabel?: string;
  onCancel?: () => void;
}

const TypeIconMap: { [x in INotificationType]: React.FC<SVGProps<SVGSVGElement>> } = {
  error: InfoIcon,
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
};

export const Notification: FunctionComponent<INotificationProps> = ({
  type = "info",
  default: hideIcon,
  invert = false,
  opacity = 1,
  message,
  actionLabel,
  cancelLabel,
  rootStyle,

  usePortal = false,
  onAction,
  onClose,
  onCancel,
}) => {
  const Icon = TypeIconMap[type];
  const theme = useTheme();
  const renderAction = () => {
    if (actionLabel || cancelLabel) {
      let action = null;
      let cancel = null;
      if (actionLabel) {
        action = (
          <Button
            size="small"
            data-testid="action-button"
            variant={"soft"}
            backgroundColor={invert ? theme.palette.common.white : undefined}
            textColor={invert ? theme.palette.grey[900] : undefined}
            hoverBackgroundColor={invert ? alpha(theme.palette.common.white, 0.8) : undefined}
            activeBackgroundColor={invert ? alpha(theme.palette.common.white, 0.6) : undefined}
            color={type}
            marginRight={10}
            label={actionLabel}
            onClick={onAction}
          />
        );
      }
      if (cancelLabel) {
        cancel = (
          <Button
            size="small"
            data-testid="dismiss-button"
            variant={"outlined"}
            color="default"
            borderColor={invert ? alpha(theme.palette.grey[500], 0.32) : undefined}
            textColor={invert ? theme.palette.common.white : undefined}
            marginRight={10}
            label={cancelLabel}
            onClick={onCancel}
          />
        );
      }
      return (
        <Flex alignItems={"center"}>
          {action}
          {cancel}
        </Flex>
      );
    } else {
      return (
        <CloseWrapper
          data-testid="close-button"
          onClick={onClose}
          alignItems={"center"}
          justifyContent="center"
          style={{}}
        >
          <Close width={10} />
        </CloseWrapper>
      );
    }
  };
  const comp = (
    <NotificationWrapper type={type} rootStyle={rootStyle} invert={invert} opacity={opacity}>
      {!hideIcon && (
        <IconWrapper invert={invert} type={type}>
          <Icon />
        </IconWrapper>
      )}
      <Subtitle as="p" role={"message"} variant="subtitle2" style={{ padding: "9px 12px", flex: 1, margin: 0 }}>
        {message}
      </Subtitle>
      {renderAction()}
    </NotificationWrapper>
  );

  if (usePortal) {
    return createPortal(comp, document.body);
  } else {
    return comp;
  }
};

const NotificationWrapper = styled.div<Pick<INotificationProps, "rootStyle" | "invert" | "opacity" | "type">>`
  display: flex;
  /* align-items: flex-start; */
  top: 10%;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  border-radius: 8px;
  width: 420px;

  ${withTheme(({ theme, invert, opacity, rootStyle, type }) => {
    const compStyles: INotificationStyles = invert
      ? theme.components.BuiNotification.invertStyles({ type })
      : theme.components.BuiNotification.styles({ type });
    const bgCss = css({
      backgroundColor: compStyles.bg,
      color: compStyles.foreground,
    });

    const overrides = rootStyle ? css({ ...rootStyle }) : ``;

    return css`
      padding: 12px;

      z-index: 10000;
      ${bgCss}

      opacity: ${opacity};
      box-shadow: ${theme.shadows.depth3};
      ${overrides}
    `;
  })}
`;

const CloseWrapper = styled(Flex)`
  width: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${withTheme(({ theme }) => theme.palette.grey[600])};
`;

const IconWrapper = styled.div<Pick<INotificationProps, "type" | "invert">>`
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  ${withTheme(({ theme, type, invert }) => {
    const compStyles: INotificationStyles = invert
      ? theme.components.BuiNotification.invertStyles({ type })
      : theme.components.BuiNotification.styles({ type });
    return css({
      backgroundColor: compStyles.iconBg,
      color: compStyles.iconColor,
    });
  })}
`;
