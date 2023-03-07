import { FC, FunctionComponent, SVGProps } from "react";
import styled, { css } from "styled-components";
import { useTheme, withTheme } from "blockchain-ui/theme";
import { Close, InfoIcon, SuccessIcon, WarningIcon } from "../static/images/icons/regular";
import { alpha } from "blockchain-ui/utils";
import { Flex } from "../flex";
import { Button } from "../button";
import { ISubtitleProps, Subtitle } from "../typography";

const NotificationTypes = ["info", "warning", "success", "error"] as const;
export type INotificationType = (typeof NotificationTypes)[number];

export interface INotificationProps {
  message: string;
  opacity?: number;
  invert?: boolean;
  default?: boolean;
  position?: "top";
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
  return (
    <NotificationWrapper type={type} default={hideIcon} invert={invert} opacity={opacity}>
      {!hideIcon && (
        <IconWrapper type={type}>
          <Icon />
        </IconWrapper>
      )}
      <Subtitle as="p" role={"message"} variant="subtitle2" style={{ padding: "9px 12px", flex: 1 }}>
        {message}
      </Subtitle>
      {renderAction()}
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div<Pick<INotificationProps, "type" | "default" | "invert" | "opacity">>`
  display: flex;
  /* align-items: flex-start; */
  position: absolute;
  border-radius: 8px;
  width: 420px;

  ${withTheme(({ theme, type, default: defaultProp, invert, opacity }) => {
    const bgCss = css({
      backgroundColor: invert ? theme.palette.grey[900] : theme.palette.common.white,
      color: invert ? theme.palette.common.white : theme.palette.grey[800],
    });

    return css`
      padding: 12px;

      opacity: ${opacity};

      ${bgCss}

      box-shadow: ${theme.shadows.depth3};
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

const IconWrapper = styled.div<Pick<INotificationProps, "type">>`
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  ${withTheme(({ theme, type }) => {
    const mainColor = theme.palette[type].main;
    const bgColor = alpha(mainColor, 0.16);

    return css`
      color: ${mainColor};
      background-color: ${bgColor};
    `;
  })}
`;
