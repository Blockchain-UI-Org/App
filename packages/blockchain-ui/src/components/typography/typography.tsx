import { FC } from "react";
import styled, {  css } from "styled-components";
import { withTheme, useTheme  } from "blockchain-ui/theme";

export type FontWeightTypes = "regular" | "medium" | "bold";

export type FontTypes = "display" | "body" | "header";

export const FONT_WEIGHTS: Record<FontWeightTypes, number> = {
  regular: 400,
  medium: 500,
  bold: 700,
};


type IFontProps = {
  fontWeight?: number | string | FontWeightTypes;
  fontSize?: string | number;
  lineHeight?: number | string;
  color?: string;
  noMargin?: boolean; // Remove No Margin Prop
  fontFamily?: string;
};

export type ITypographyTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";


export type ITypographyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { as?: ITypographyTags } & IFontProps;

const genStyles = (props: IFontProps) =>
  css({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
    color: props.color,
    fontFamily: props.fontFamily,
    ...(props.noMargin && {margin: 0})
  });

export const Typography: FC<ITypographyProps> = styled("p")`
  font-family: ${withTheme(({theme}) => theme.typography.common.fontFamily)};
  ${genStyles}
`;



export type IHeadingProps = ITypographyProps & {as?: Exclude<ITypographyTags, "p" | "span">};

export const Heading: FC<IHeadingProps> = (props) => {
  const as = props.as || "h1";
  const theme = useTheme()
  const styles = theme.typography[as]

  return <Typography as={as} {...styles} {...props} />;
} 

export type ISubtitleVariant = "subtitle1" | "subtitle2";

export type ISubtitleProps = ITypographyProps & {variant?: ISubtitleVariant};



export const Subtitle: FC<ISubtitleProps> = (props) => {
  const variant = props.variant || "subtitle1";

  const theme = useTheme()
  const variantStyles = theme.typography[variant];

  return <Typography  as="h1" {...variantStyles} {...props} />;
};


export type IParagraphVariants = "body1" | "body2";
export type IParagraphProps = ITypographyProps & {variant?: IParagraphVariants };

export const Paragraph: FC<IParagraphProps> = (props) => {

  const variant = props.variant || "body1";

  const theme = useTheme()
  const variantStyles = theme.typography[variant];

  return <Typography as="p" {...variantStyles} {...props} />
} 

