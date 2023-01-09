import styled, { AnyStyledComponent } from "styled-components";

export const FONT_FAMILY = "CircularStd, Public Sans";

export type FontWeightTypes = "regular" | "medium" | "bold";

export type FontTypes = "display" | "body" | "header";

export const FONT_WEIGHTS: Record<FontWeightTypes, number> = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const FONT_DISPLAY_STYLES: Record<string, Record<string, string>> = {
  Display1: {
    "font-size": "48px",
    "line-height": "62px",
  },
  Display2: {
    "font-size": "36px",
    "line-height": "48px",
  },
};

export const FONT_HEADER_STYLES = {
  H1: {
    "font-size": "32px",
    "line-height": "48px",
  },
  H2: {
    "font-size": "24px",
    "line-height": "36px",
  },
  H3: {
    "font-size": "20px",
    "line-height": "30px",
  },
  H4: {
    "font-size": "18px",
    lineHeight: "28px",
  },
  H5: {
    "font-size": "16px",
    "line-height": "24px",
  },
  H6: {
    "font-size": "14px",
    "line-height": "20px",
  },
};

export const FONT_BODY_STYLES = {
  Body1: {
    "font-size": "16px",
    "line-height": "24px",
  },
  Body2: {
    "font-size": "14px",
    "line-height": "20px",
  },
};
//@ts-ignore
const generateFontType = (fontType, fontWeight) => {
  const newObj: Record<string, string> = {};
  for (const [key] of Object.entries(fontType)) {
    newObj[key] = {
      ...fontType[key],
      "font-weight": fontWeight,
      "font-family": FONT_FAMILY,
    };
  }
  return newObj;
};
//@ts-ignore
const generateComponent = (fontType) => {
  const newObj: Record<string, AnyStyledComponent> = {};
  for (const [key] of Object.entries(fontType)) {
    const StyledParagraph = styled.p`
      margin: 0;
      ${fontType[key]}
    `;
    newObj[key] = StyledParagraph;
  }
  return newObj;
};

const tStyles = {
  display: {
    regular: generateFontType(FONT_DISPLAY_STYLES, FONT_WEIGHTS["regular"]),
    medium: generateFontType(FONT_DISPLAY_STYLES, FONT_WEIGHTS["medium"]),
    bold: generateFontType(FONT_DISPLAY_STYLES, FONT_WEIGHTS["bold"]),
  },
  header: {
    regular: generateFontType(FONT_HEADER_STYLES, FONT_WEIGHTS["regular"]),
    medium: generateFontType(FONT_HEADER_STYLES, FONT_WEIGHTS["medium"]),
    bold: generateFontType(FONT_HEADER_STYLES, FONT_WEIGHTS["bold"]),
  },
  body: {
    regular: generateFontType(FONT_BODY_STYLES, FONT_WEIGHTS["regular"]),
    medium: generateFontType(FONT_BODY_STYLES, FONT_WEIGHTS["medium"]),
    bold: generateFontType(FONT_BODY_STYLES, FONT_WEIGHTS["bold"]),
  },

  FONT_FAMILY,
  FONT_WEIGHTS,
};

const tComponents = {
  display: {
    regular: generateComponent(tStyles.display.regular),
    medium: generateComponent(tStyles.display.medium),
    bold: generateComponent(tStyles.display.bold),
  },
  header: {
    regular: generateComponent(tStyles.header.regular),
    medium: generateComponent(tStyles.header.medium),
    bold: generateComponent(tStyles.header.regular),
  },
  body: {
    regular: generateComponent(tStyles.body.regular),
    medium: generateComponent(tStyles.body.medium),
    bold: generateComponent(tStyles.body.bold),
  },
};
const typography = {
  components: tComponents,
  styles: tStyles,
  FONT_FAMILY: FONT_FAMILY,
  FONT_HEADER_STYLES: FONT_HEADER_STYLES,
  FONT_BODY_STYLES: FONT_BODY_STYLES,
  FONT_DISPLAY_STYLES: FONT_DISPLAY_STYLES,
};
export default typography;
