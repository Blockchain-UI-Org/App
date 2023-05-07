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
