import { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "theme";
import Image from "../image/image";
import { regularIcons } from "../static/images/icons/regular/index";

const { success500, error500, white, black } = colors;

type NotificationType = "loading" | "positive" | "negative";

const TypeToColor: { [key in NotificationType]: string } = {
  loading: white,
  positive: success500,
  negative: error500,
};

type Icon = keyof typeof regularIcons;

const TypeToIcon: { [key in NotificationType]: Icon } = {
  // TO-DO Update with final icons
  loading: "spinner",
  positive: "check",
  negative: "alertWarning",
};

export interface NotificationProps {
  message: string;
  type: NotificationType;
}

export const Notification: FunctionComponent<NotificationProps> = ({
  type,
  message,
}) => {
  const icon = TypeToIcon[type];
  return (
    <NotificationWrapper type={type}>
      <Image height="24px" width="24px" name={icon} />
      <span>{message}</span>
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div<{ type: NotificationType }>`
  color: ${white};
  font-size: 16px;
  width: 280px;
  margin: 0 auto;
  background-color: ${({ type }) => TypeToColor[type]};
  color: ${({ type }) => (type === "loading" ? black : white)};
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  gap: 12px;
  box-shadow: 0px 4px 16px rgba(58, 78, 88, 0.15);
`;
