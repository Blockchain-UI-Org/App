export type TResponsiveSizes = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
};

export interface ITheme {
  primary: {
    background: string;
    text: string;
  };
  secondary: {
    background: string;
    text: string;
  };
  button: {
    text: string;
  };
  default: {
    divider: string;
    icon: string;
  };
}

export type ThemeTypes = "light" | "dark";

export type IAppThemes = Record<ThemeTypes, ITheme>;
