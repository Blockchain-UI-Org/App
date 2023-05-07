import styled, { DefaultTheme } from "styled-components";

type TextColorsProps = "primary-dark" | "secondary-dark" | "button-dark";

const mapColor = ({ theme, colorName }: { theme: DefaultTheme; colorName: TextColorsProps }) => {
  switch (colorName) {
    case "primary-dark":
      return theme.primary.text;
    case "secondary-dark":
      return theme.secondary.text;
    case "button-dark":
      return theme.button.text;
  }
};

const weightMapper = {
  normal: 400,
  semibold: 700,
};

interface ITypographyProps {
  color?: TextColorsProps;
  weight?: "normal" | "semibold";
}

export const Heading1 = styled("h1")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
`;

export const Heading2 = styled("h2")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
`;

export const Heading3 = styled("h3")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
`;

export const Heading4 = styled("h4")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
`;

export const Heading5 = styled("h5")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: ${({ weight = "normal" }) => weightMapper[weight]};
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
`;
