type IFontInterface = {
  fontWeight?: number | string;
  fontSize?: string | number;
  lineHeight?: number | string;
  fontFamily?: string;
};

export type ITypographyTheme = {
  common: IFontInterface;
  h1: IFontInterface;
  h2: IFontInterface;
  h3: IFontInterface;
  h4: IFontInterface;
  h5: IFontInterface;
  h6: IFontInterface;
  display1: IFontInterface;
  display2: IFontInterface;
  body1: IFontInterface;
  body2: IFontInterface;
};

export const createTypography = (): ITypographyTheme => {
  return {
    common: { fontFamily: "CircularStd, Public Sans" },
    h1: {
      fontSize: 32,
      lineHeight: "48px",
    },
    h2: {
      fontSize: 24,
      lineHeight: "36px",
    },
    h3: {
      fontSize: 20,
      lineHeight: "30px",
    },
    h4: {
      fontSize: 18,
      lineHeight: "28px",
    },
    h5: {
      fontSize: 16,
      lineHeight: "24px",
    },
    h6: {
      fontSize: 14,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
    },
    display1: {
      fontSize: 48,
      lineHeight: "62px",
    },
    display2: {
      fontSize: 36,
      lineHeight: "48px",
    },
  };
};
