import { FC } from "react";
import styled, { css } from "styled-components";
import { withTheme } from "blockchain-ui/theme";

export const TagColors = ["default", "primary", "secondary", "info", "success", "error", "warning"] as const;
export const TagVariants = ["filled", "outline", "soft"] as const;

export type ITagColors = (typeof TagColors)[number];
export type ITagVariants = (typeof TagVariants)[number];



type TagSize = "small" | "large";

const Padding: { [key in TagSize]: string } = {
  small: "2px 8px",
  large: "4px 16px",
};

const FontSize: { [key in TagSize]: string } = {
  small: "12px",
  large: "16px",
};

const LineHeight: { [key in TagSize]: string } = {
  small: "20px",
  large: "24px",
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: ITagColors;
  variant?: ITagVariants;
  // Add in Next Release
  // size?: TagSize;
  icon?: React.ReactElement;
  iconDirection?: "start" | "end";
}

export const Tag: FC<TagProps> = ({
  color = "default",
  variant = "filled",
  // size = "small",
  icon,
  iconDirection = "start",
  children,
  ...props
}) => {
  return (
    <TagWrapper color={color} variant={variant}{...props}>
      {icon && iconDirection === "start" && <IconWrapper data-testid="start-icon" direction={iconDirection}>{icon}</IconWrapper>}
      <Span size={"small"}>{children}</Span>
      {icon && iconDirection === "end" && <IconWrapper data-testid="end-icon" direction={iconDirection}>{icon}</IconWrapper>}
    </TagWrapper>
  );
};

const TagWrapper = styled.span<TagProps>`
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  padding: ${Padding["small"]};

  ${withTheme(({ theme, variant, color }) => {
    const tagStyles = theme.components.BuiTag.variants[variant as "filled"].styles({ color: color as "default" });

    return css({
      backgroundColor: tagStyles.bg,
      color: tagStyles.foreground,
      border: tagStyles.border,
    });
  })}
`;

const IconWrapper = styled.span<{ direction: TagProps["iconDirection"] }>`
  width: 14px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ direction }) =>
    direction === "start"
      ? css`
          margin-right: 6px;
        `
      : css`
          margin-left: 6px;
        `}
`;

const Span = styled.span<{ size: TagSize }>`
  font-weight: 700;
  display: inline-block;
  font-style: normal;
  font-size: ${({ size }) => FontSize[size]};
  line-height: ${({ size }) => LineHeight[size]};
`;
