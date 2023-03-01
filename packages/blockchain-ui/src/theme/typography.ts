import { Subset } from "blockchain-ui/typeutils";
import merge from "lodash/merge";

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
  subtitle1: IFontInterface;
  subtitle2: IFontInterface;
  body1: IFontInterface;
  body2: IFontInterface;
};

const DefaultTypography: ITypographyTheme = {
  common: { fontFamily: "Public Sans" },
  h1: {
    fontSize: 64,
    fontWeight: 800,
    lineHeight: "80px",
  },
  h2: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: "64px",
  },
  h3: {
    fontSize: 32,
    fontWeight: 800,
    lineHeight: "48px",
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "36px",
  },
  h5: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: "30px",
  },
  h6: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "28px",
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "22px",
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "24px",
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "22px",
  },
};

export const createTypography = (args: Subset<ITypographyTheme>): ITypographyTheme => {
  return merge(DefaultTypography, args);
};
