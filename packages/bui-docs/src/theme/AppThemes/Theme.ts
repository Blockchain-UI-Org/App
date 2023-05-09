import { IAppThemes, ITheme, TResponsiveSizes } from "./type";

export const ResponsiveSizes: TResponsiveSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${ResponsiveSizes.mobileS})`,
  mobileM: `(max-width: ${ResponsiveSizes.mobileM})`,
  mobileL: `(max-width: ${ResponsiveSizes.mobileL})`,
  tablet: `(max-width: ${ResponsiveSizes.tablet})`,
  laptop: `(max-width: ${ResponsiveSizes.laptop})`,
  laptopL: `(max-width: ${ResponsiveSizes.laptopL})`,
  desktop: `(max-width: ${ResponsiveSizes.desktop})`,
  desktopL: `(max-width: ${ResponsiveSizes.desktop})`,
};

const LightTheme: ITheme = {
  primary: {
    background: "#F6F9FA",
    text: "#3F3F3F",
  },
  secondary: {
    background: "#FFFFFF",
    text: "#7D7D7D",
  },
  button: {
    text: "#FFFFFF",
  },
  default: {
    divider: "#DBDBDB",
    icon: "#525252",
  },
};

const DarkTheme: ITheme = {
  primary: {
    background: "#191919",
    text: "#F5F5F7",
  },
  secondary: {
    background: "#202020",
    text: "#C4C4C4",
  },
  button: {
    text: "#191919",
  },
  default: {
    divider: "#454545",
    icon: "#FFFFFF",
  },
};

export const appThemes: IAppThemes = {
  light: LightTheme,
  dark: DarkTheme,
};
