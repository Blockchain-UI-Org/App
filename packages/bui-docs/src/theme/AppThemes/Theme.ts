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
    gradientAccent: "linear-gradient(90deg, #2587BC 0%, #27A0A0 52.4%, #8162C5 100%)",
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
    gradientAccent: "linear-gradient(90deg, #8BD6FF 0%, #9EFFFF 50.31%, #D3BFFF 100%)",
  },
};

export const appThemes: IAppThemes = {
  light: LightTheme,
  dark: DarkTheme,
};
