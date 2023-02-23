import { spacing } from "@mui/system";
import { withTheme } from "blockchain-ui/theme";
import { alpha } from "blockchain-ui/utils";
import React, { CSSProperties, DetailedHTMLProps } from "react";
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
}>

const genSpacingCss =  (props: ISpacingProps) => {
    return css(props)
}

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
  label: string;
  /**
   * Optional click handler
   */
  onClick?: HTMLButtonProps["onClick"];
}

const SizeMap: Record<IButtonSize, { padding: string }> = {
  large: { padding: "11px 22px" },
  medium: { padding: "8px 16px" },
  small: { padding: "4px 10px" },
};

const StyledButton = styled.button<Omit<IButtonProps, "label">>`
  ${withTheme(
    ({
      theme,
      variant = "contained",
      color = "primary",
      size = "small",
      backgroundColor,
      textColor,
      hoverTextColor,
      hoverBackgroundColor,
      activeBackgroundColor,
      borderColor,
      activeBorderColor,
      hoverBorderColor,
      ...rest
    }) => {
      const buttonStyles = theme.components.BuiButton.variants[variant as "soft"].styles({ color: color  });

      const buttonCss = css({
        backgroundColor: backgroundColor ? backgroundColor : buttonStyles.bg,
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "0.8rem",
        border: buttonStyles.border ? buttonStyles.border : "none",
        borderColor: borderColor,
        color: textColor ? textColor: buttonStyles.foreground,
        padding: SizeMap[size].padding,
        transition: `all 0.3s linear`,
      });

      const hoverCss = css({
        backgroundColor: hoverBackgroundColor ? hoverBackgroundColor: buttonStyles.hoverBg,
        borderColor: hoverBorderColor ? hoverBorderColor: buttonStyles.borderHoverColor,
        color: hoverTextColor
      });
      const activeCss = css({
        backgroundColor: activeBackgroundColor
          ? activeBackgroundColor
          : buttonStyles.hoverBg
          ? alpha(buttonStyles.hoverBg, 0.4)
          : undefined,
        borderColor: activeBorderColor
      });

      return css`
        ${buttonCss}

        &:hover {
          ${hoverCss}
        }
        &:active {
          ${activeCss}
        }
      `;
    }
  )}

  ${genSpacingCss}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({onClick,label, ...rest}: IButtonProps) => {
  return <StyledButton {...rest} onClick={onClick} >{label}</StyledButton>;
};
