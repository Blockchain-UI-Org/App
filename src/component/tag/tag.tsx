import { FC } from "react";
import styled from "styled-components";
import { t } from "theme";

type TagType = "neutral" | "positive" | "warning" | "error";

const BackgroundColor = {
  neutral: "info",
  positive: "success",
  warning: "warning",
  error: "error",
} as const;

const TextColor = {
  neutral: "info",
  positive: "success",
  warning: "warning",
  error: "error",
} as const;

type TagSize = "small" | "large";

const Padding: { [key in TagSize]: string } = {
  small: "2px 12px",
  large: "4px 16px",
};

const FontSize: { [key in TagSize]: string } = {
  small: "14px",
  large: "16px",
};

const LineHeight: { [key in TagSize]: string } = {
  small: "20px",
  large: "24px",
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: TagType;
  size: TagSize;
}

export const Tag: FC<TagProps> = ({ type, size, children, ...props }) => {
  return (
    <TagWrapper type={type} size={size} {...props}>
      <Span size={size}>{children}</Span>
    </TagWrapper>
  );
};

const TagWrapper = styled.span<{ type: TagType; size: TagSize }>`
  background: ${t(({ type, theme }) => theme.colors[BackgroundColor[type]].bg)};
  color: ${t(({ type, theme }) => theme.colors[TextColor[type]].color)};
  border-radius: 39px;
  padding: ${({ size }) => Padding[size]};
  height: 1.5rem;
`;

const Span = styled.span<{ size: TagSize }>`
  font-weight: 700;
  font-style: normal;
  font-size: ${({ size }) => FontSize[size]};
  line-height: ${({ size }) => LineHeight[size]};
`;
