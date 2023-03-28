import { withTheme } from "blockchain-ui/theme";
import { alpha } from "blockchain-ui/utils";
import React, { CSSProperties, DetailedHTMLProps, forwardRef } from "react";
import styled, { css } from "styled-components";

export const ButtonVariants = ["contained", "outlined", "text", "soft"] as const;
export const ButtonColors = ["default", "primary", "secondary", "info", "success", "error", "warning"] as const;
export const ButtonSizes = ["small", "medium", "large"] as const;

export type IButtonVariants = (typeof ButtonVariants)[number];
export type IButtonColors = (typeof ButtonColors)[number];
export type IButtonSize = (typeof ButtonSizes)[number];

type HTMLButtonProps = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ISpacingProps = Partial<{
  margin: CSSProperties["margin"];
  marginRight: CSSProperties["marginRight"];
  marginLeft: CSSProperties["marginLeft"];
  marginBottom: CSSProperties["marginBottom"];
  marginTop: CSSProperties["marginTop"];
  padding: CSSProperties["padding"];
  paddingRight: CSSProperties["paddingRight"];
  paddingLeft: CSSProperties["paddingLeft"];
  paddingBottom: CSSProperties["paddingBottom"];
  paddingTop: CSSProperties["paddingTop"];
}>;

const genSpacingCss = ({
  margin,
  marginBottom,
  padding,
  marginRight,
  marginLeft,
  marginTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}: ISpacingProps) => {
  return css({
    margin,
    marginBottom,
    padding,
    marginRight,
    marginLeft,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  });
};


export interface IButtonProps extends ISpacingProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: IButtonVariants;

  color?: IButtonColors;
  /**
   * What background color to use
   */
  textColor?: string;

  hoverTextColor?: string;

  backgroundColor?: string;

  activeBackgroundColor?: string;

  hoverBackgroundColor?: string;

  borderColor?: string;

  hoverBorderColor?: string;

  activeBorderColor?: string;
  
  lineHeight?: number | string;
  
  fontSize?: number | string;

  /**
   * How large should the button be?
   */
  size?: IButtonSize;

  disabled?: boolean;

  className?: string;

  type?: HTMLButtonProps["type"];
  /**
   * Button contents
   */
  label: string | React.ReactElement;

  href?: string;

  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const SizeMap: Record<IButtonSize, { padding: string }> = {
  large: { padding: "11px 22px" },
  medium: { padding: "8px 16px" },
  small: { padding: "4px 10px" },
};

const cssStylingCommon = css<Omit<IButtonProps, "label">>`

  ${withTheme(
    ({
      theme,
      variant = "contained",
      color = "primary",
      size = "medium",
      backgroundColor,
      textColor,
      hoverTextColor,
      fontSize,
      hoverBackgroundColor,
      activeBackgroundColor,
      borderColor,
      activeBorderColor,
      hoverBorderColor,
      lineHeight,
    }) => {
      const commonStyles = theme.components.BuiButton.common;
      const buttonStyles = theme.components.BuiButton.variants[variant as "soft"].styles({ color: color });
      const border = buttonStyles.border ? buttonStyles.border : "none";
      const padding = SizeMap[size].padding;
      const buttonCss = css({
        backgroundColor: backgroundColor ? backgroundColor : buttonStyles.bg,
        borderRadius: commonStyles.borderRadius,
        cursor: "pointer",
        fontWeight: commonStyles.fontWeight,
        fontSize: fontSize || commonStyles.fontSize,
        border,
        borderColor: borderColor,
        lineHeight: lineHeight || commonStyles.lineHeight,
        color: textColor ? textColor : buttonStyles.foreground,
        // Added extra 1px padding for buttons in case of no outline
        padding: border === "none" ? padding.split(" ").map(item => (parseInt(item) + 1) + "px").join(" "):padding ,
        transition: `all 0.3s linear`,
        transitionProperty: "box-shadow, background-color, border-color, color",
      });

      const hoverCss = css({
        backgroundColor: hoverBackgroundColor ? hoverBackgroundColor : buttonStyles.hoverBg,
        borderColor: hoverBorderColor ? hoverBorderColor : buttonStyles.borderHoverColor,
        color: hoverTextColor || (textColor ? textColor : buttonStyles.foreground),
        boxShadow: buttonStyles.boxShadowHover,
      });

      const disabledCss = css({
        cursor: "default",
        backgroundColor: buttonStyles.disabledBg,
        color: buttonStyles.disabledForeground,
        border: buttonStyles.disabledBorder,
      });

      const activeCss = css({
        backgroundColor: activeBackgroundColor
          ? activeBackgroundColor
          : buttonStyles.hoverBg
          ? alpha(buttonStyles.hoverBg, 0.4)
          : undefined,
        borderColor: activeBorderColor,
      });

      return css`
        ${buttonCss}

        &:hover {
          ${hoverCss}
        }
        &:active {
          ${activeCss}
        }
        &:disabled {
          ${disabledCss}
        }
      `;
    }
  )}

  ${genSpacingCss}
`;

const StyledButton = styled.button<Omit<IButtonProps, "label">>`
  ${cssStylingCommon}
`;

const StyledHyperLink = styled.a<Omit<IButtonProps, "label">>`

  &:hover {
    text-decoration: none;
  }
  ${cssStylingCommon}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
  ({ onClick, label, href, ...rest }, ref) => {
    if (href) {
      return (
        <StyledHyperLink
          {...rest}
          href={href}
          onClick={onClick}
          children={label}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        />
      );
    }
    return (
      <StyledButton {...rest} onClick={onClick} ref={ref as React.ForwardedRef<HTMLButtonElement>}>
        {label}
      </StyledButton>
    );
  }
);
