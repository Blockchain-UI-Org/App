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
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
  @media (min-width: 576px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
    font-size: 48px;
  }
  @media (min-width: 1200px) {
    font-size: 64px;
  }
`;

export const Heading2 = styled("h2")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
  @media (min-width: 576px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const Heading3 = styled("h3")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
  @media (min-width: 576px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 992px) {
    font-size: 28px;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const Heading4 = styled("h4")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
  @media (min-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Heading5 = styled("h5")<ITypographyProps>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: ${({ weight = "normal" }) => weightMapper[weight]};
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 0px;
  color: ${(props) => mapColor({ theme: props.theme, colorName: props.color || "primary-dark" })};
  @media (min-width: 576px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
